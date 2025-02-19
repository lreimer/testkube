package testtriggers

import (
	testsv1 "github.com/kubeshop/testkube-operator/apis/testtriggers/v1"
	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// MapTestTriggerListKubeToAPI maps TestTriggerList CRD to list of OpenAPI spec TestTrigger
func MapTestTriggerListKubeToAPI(crd *testsv1.TestTriggerList) (testTriggers []testkube.TestTrigger) {
	testTriggers = make([]testkube.TestTrigger, len(crd.Items))
	for i := range crd.Items {
		testTriggers[i] = MapCRDToAPI(&crd.Items[i])
	}

	return
}

// MapCRDToAPI maps TestTrigger CRD to OpenAPI spec TestTrigger
func MapCRDToAPI(crd *testsv1.TestTrigger) testkube.TestTrigger {
	resource := testkube.TestTriggerResources(crd.Spec.Resource)
	action := testkube.TestTriggerActions(crd.Spec.Action)
	execution := testkube.TestTriggerExecutions(crd.Spec.Execution)

	return testkube.TestTrigger{
		Name:             crd.Name,
		Namespace:        crd.Namespace,
		Labels:           crd.Labels,
		Resource:         &resource,
		ResourceSelector: mapSelectorFromCRD(crd.Spec.ResourceSelector),
		Event:            crd.Spec.Event,
		Action:           &action,
		Execution:        &execution,
		TestSelector:     mapSelectorFromCRD(crd.Spec.TestSelector),
	}
}

func mapSelectorFromCRD(selector testsv1.TestTriggerSelector) *testkube.TestTriggerSelector {
	var labelSelector *testkube.IoK8sApimachineryPkgApisMetaV1LabelSelector
	if selector.LabelSelector != nil {
		labelSelector = mapLabelSelectorFromCRD(selector.LabelSelector)
	}
	return &testkube.TestTriggerSelector{
		Name:          selector.Name,
		Namespace:     selector.Namespace,
		LabelSelector: labelSelector,
	}
}

func mapLabelSelectorFromCRD(labelSelector *v1.LabelSelector) *testkube.IoK8sApimachineryPkgApisMetaV1LabelSelector {
	var matchExpressions []testkube.IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement
	for _, e := range labelSelector.MatchExpressions {
		expression := testkube.IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement{
			Key:      e.Key,
			Operator: string(e.Operator),
			Values:   e.Values,
		}
		matchExpressions = append(matchExpressions, expression)
	}

	return &testkube.IoK8sApimachineryPkgApisMetaV1LabelSelector{
		MatchExpressions: matchExpressions,
		MatchLabels:      labelSelector.MatchLabels,
	}
}
