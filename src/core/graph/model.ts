import type { GraphData } from '../../shared/types/graph.js';

export class GraphModel {
  private adjacencyList: Map<string, string[]>;
  private weights: Map<string, number>;
  private isDirectedGraph: boolean;
  private metadata: Record<string, unknown>;

  constructor() {
    this.adjacencyList = new Map<string, string[]>();
    this.weights = new Map<string, number>();
    this.isDirectedGraph = false;
    this.metadata = {};
  }

  addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(source: string, target: string, weight: number = 1, directed: boolean = false): void {
    if (this.adjacencyList.has(source) && this.adjacencyList.has(target)) {
      // Add edge from source to target
      const sourceNeighbors = this.adjacencyList.get(source) || [];
      if (!sourceNeighbors.includes(target)) {
        sourceNeighbors.push(target);
        this.adjacencyList.set(source, sourceNeighbors);
      }
      
      // Set weight
      this.weights.set(`${source}-${target}`, weight);
      
      // For undirected graphs, add the reverse edge
      if (!directed && !this.isDirectedGraph) {
        const targetNeighbors = this.adjacencyList.get(target) || [];
        if (!targetNeighbors.includes(source)) {
          targetNeighbors.push(source);
          this.adjacencyList.set(target, targetNeighbors);
        }
        this.weights.set(`${target}-${source}`, weight);
      }
    }
  }

  getNeighbors(vertex: string): string[] {
    return this.adjacencyList.get(vertex) || [];
  }

  getWeight(source: string, target: string): number {
    return this.weights.get(`${source}-${target}`) || 1;
  }

  getAllVertices(): string[] {
    return Array.from(this.adjacencyList.keys());
  }

  isDirected(): boolean {
    return this.isDirectedGraph;
  }

  getMetadata(): Record<string, unknown> {
    return { ...this.metadata };
  }

  static fromGraphData(graphData: GraphData): GraphModel {
    const graph = new GraphModel();
    
    // Set directed property
    graph.isDirectedGraph = graphData.isDirected || false;
    
    // Add metadata if available
    if (graphData.metadata) {
      graph.metadata = { ...graphData.metadata };
    }
    
    // Add all vertices
    graphData.vertices.forEach(vertex => {
      graph.addVertex(vertex);
    });
    
    // Add all edges
    graphData.edges.forEach(edge => {
      const { source, target, weight = 1, directed = graph.isDirectedGraph } = edge;
      graph.addEdge(source, target, weight, directed);
    });
    
    return graph;
  }
}
