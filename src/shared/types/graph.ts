export interface GraphData {
  vertices: string[];
  edges: Array<{
    source: string;
    target: string;
    weight?: number;
    directed?: boolean;
  }>;
  isDirected?: boolean;
  metadata?: {
    name?: string;
    description?: string;
    [key: string]: unknown;
  };
}
