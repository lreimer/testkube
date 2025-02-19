package context

import (
	"github.com/kubeshop/testkube/cmd/kubectl-testkube/config"
	"github.com/kubeshop/testkube/pkg/ui"
	"github.com/kubeshop/testkube/pkg/utils/text"
)

func uiPrintCloudContext(cloudContext config.CloudContext) {
	ui.InfoGrid(map[string]string{
		"Organization ID": cloudContext.Organization,
		"Environment ID ": cloudContext.Environment,
		"API Key        ": text.Obfuscate(cloudContext.ApiKey),
	})
}
