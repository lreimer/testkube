package tests

import (
	"fmt"
	"io/ioutil"
	"os"
	"time"

	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/common"
	"github.com/kubeshop/testkube/cmd/kubectl-testkube/commands/common/validator"
	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
	"github.com/kubeshop/testkube/pkg/ui"
	"github.com/spf13/cobra"
)

const WatchInterval = 2 * time.Second

func NewRunTestCmd() *cobra.Command {
	var (
		name                     string
		watchEnabled             bool
		binaryArgs               []string
		params                   map[string]string
		paramsFile               string
		downloadArtifactsEnabled bool
		downloadDir              string
	)

	cmd := &cobra.Command{
		Use:     "run <testName>",
		Aliases: []string{"start", "r"},
		Short:   "Starts new test",
		Long:    `Starts new test based on Test Custom Resource name, returns results to console`,
		Args:    validator.TestName,
		Run: func(cmd *cobra.Command, args []string) {
			ui.Logo()

			testName := args[0]

			client, namespace := common.GetClient(cmd)
			namespacedName := fmt.Sprintf("%s/%s", namespace, testName)

			paramsFileContent := ""
			if paramsFile != "" {
				b, err := ioutil.ReadFile(paramsFile)
				ui.ExitOnError("reading params file", err)
				paramsFileContent = string(b)
			}

			execution, err := client.ExecuteTest(testName, namespace, name, params, paramsFileContent, binaryArgs)
			ui.ExitOnError("starting test execution "+namespacedName, err)

			printExecutionDetails(execution)

			if watchEnabled {
				watchLogs(execution.Id, client)
			}

			execution, err = client.GetExecution(execution.Id)
			ui.ExitOnError("getting recent execution data id:"+execution.Id, err)

			uiPrintStatus(execution)

			if downloadArtifactsEnabled {
				DownloadArtifacts(execution.Id, downloadDir, client)
			}

			uiShellGetExecution(execution.Id)
			uiShellWatchExecution(execution.Id)
		},
	}

	cmd.Flags().StringVarP(&name, "name", "n", "", "execution name, if empty will be autogenerated")
	cmd.Flags().StringVarP(&paramsFile, "params-file", "", "", "params file path, e.g. postman env file - will be passed to executor if supported")
	cmd.Flags().StringToStringVarP(&params, "param", "p", map[string]string{}, "execution envs passed to executor")
	cmd.Flags().StringArrayVarP(&binaryArgs, "args", "", []string{}, "executor binary additional arguments")
	cmd.Flags().BoolVarP(&watchEnabled, "watch", "f", false, "watch for changes after start")
	cmd.Flags().StringVar(&downloadDir, "download-dir", "artifacts", "download dir")
	cmd.Flags().BoolVarP(&downloadArtifactsEnabled, "download-artifacts", "a", false, "downlaod artifacts automatically")

	return cmd
}

func uiPrintStatus(execution testkube.Execution) {
	result := execution.ExecutionResult

	ui.NL()

	switch true {
	case result.IsQueued():
		ui.Warn("Test queued for execution")

	case result.IsPending():
		ui.Warn("Test execution started")

	case result.IsSuccesful():
		ui.Info(result.Output)
		duration := execution.EndTime.Sub(execution.StartTime)
		ui.Success("Test execution completed with sucess in " + duration.String())

	case result.IsFailed():
		ui.Warn("Test test execution failed:\n")
		ui.Errf(result.ErrorMessage)
		os.Exit(1)
	}

	ui.NL()
}

func uiShellGetExecution(id string) {
	ui.ShellCommand(
		"Use following command to get test execution details",
		"kubectl testkube tests execution "+id,
	)

	ui.NL()
}

func uiShellWatchExecution(id string) {
	ui.ShellCommand(
		"Watch test execution until complete",
		"kubectl testkube tests watch "+id,
	)

	ui.NL()
}
