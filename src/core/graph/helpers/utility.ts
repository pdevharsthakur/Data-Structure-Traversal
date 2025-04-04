import { GraphModel } from '../model.js';

export class GraphUtility {
  /**
   * Checks if a graph is connected (all vertices are reachable from any starting vertex)
   */
  static isConnected(graph: GraphModel): boolean {
    const vertices = graph.getAllVertices();
    if (vertices.length === 0) return true;
    const startVertex = vertices[0];
    if (!startVertex) return true;
    const visited = new Set<string>();
    // Perform DFS to check connectivity
    this.dfsForConnectivity(graph, startVertex, visited);
    // If all vertices were visited, the graph is connected
    return visited.size === vertices.length;
  }

  private static dfsForConnectivity(graph: GraphModel, vertex: string, visited: Set<string>): void {
    visited.add(vertex);

    const neighbors = graph.getNeighbors(vertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.dfsForConnectivity(graph, neighbor, visited);
      }
    }
  }

  /**
   * Checks if the graph has cycles
   */
  static hasCycle(graph: GraphModel): boolean {
    const vertices = graph.getAllVertices();
    const visited = new Set<string>();
    const recStack = new Set<string>();

    for (const vertex of vertices) {
      if (!visited.has(vertex)) {
        if (this.isCyclicUtil(graph, vertex, visited, recStack)) {
          return true;
        }
      }
    }

    return false;
  }

  private static isCyclicUtil(graph: GraphModel, vertex: string, visited: Set<string>, recStack: Set<string>): boolean {
    visited.add(vertex);
    recStack.add(vertex);

    const neighbors = graph.getNeighbors(vertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        if (this.isCyclicUtil(graph, neighbor, visited, recStack)) {
          return true;
        }
      } else if (recStack.has(neighbor)) {
        return true;
      }
    }

    recStack.delete(vertex);
    return false;
  }
}
