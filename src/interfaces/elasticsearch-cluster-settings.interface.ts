import { ClusterCurationSettings } from './cluster-curation-settings.interface'
import { ClusterMetadataSettings } from './cluster-metadata-settings.interface'
import { ClusterSnapshotSettings } from './cluster-snapshot-settings.interface'
import { CrossClusterSearchSettings } from './cross-cluster-search-settings.interface'
import { ElasticsearchClusterTrustSettings } from './elasticsearch-cluster-trust-settings.interface'
import { IpFilteringSettings } from './ip-filtering-settings.interface'
import { ManagedMonitoringSettings } from './managed-monitoring-settings.interface'
import { TrafficFilterSettings } from './traffic-filter-settings.interface'

export interface ElasticsearchClusterSettings {
  ccs?: CrossClusterSearchSettings
  curation?: ClusterCurationSettings
  dedicated_masters_threshold?: number //int32
  ip_filtering?: IpFilteringSettings
  metadata?: ClusterMetadataSettings
  monitoring?: ManagedMonitoringSettings
  snapshot?: ClusterSnapshotSettings
  traffic_filter?: TrafficFilterSettings
  trust?: ElasticsearchClusterTrustSettings
}
