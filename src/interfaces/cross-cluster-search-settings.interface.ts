import { RemoteClusterRef } from './remote-cluster-ref.interface'

export interface CrossClusterSearchSettings {
  remote_clusters?: Record<string, RemoteClusterRef>
}
