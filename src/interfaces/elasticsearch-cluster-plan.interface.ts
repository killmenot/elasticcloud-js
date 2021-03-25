import { DeploymentTemplateReference } from './deployment-template-reference.interface'
import { ElasticsearchClusterTopologyElement } from './elasticsearch-cluster-topology-element.interface'
import { ElasticsearchConfiguration } from './elasticsearch-configuration.interface'
import { TransientElasticsearchPlanConfiguration } from './transient-elasticsearch-plan-configuration.interface'

export interface ElasticsearchClusterPlan {
  autoscaling_enabled?: boolean
  cluster_topology: ElasticsearchClusterTopologyElement[]
  deployment_template?: DeploymentTemplateReference
  elasticsearch: ElasticsearchConfiguration
  transient?: TransientElasticsearchPlanConfiguration
}