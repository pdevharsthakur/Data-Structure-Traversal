import { GraphModel } from '../model.js';
import { GraphVisualizer } from '../visualizer.js';
import type { Traversable } from '../../../shared/interfaces/traversal.js';
import type { TraversalResult, TraversalState } from '../../../shared/types/common.js';
import { Logger } from '../../../shared/helpers/logger.js';

export class GraphBFS implements Traversable<string> {
  private graph: GraphModel;
  private visited: Set<string>;
  private isToBeVisited: Set<string>;
  private states: TraversalState[];
  private path: string[];

  constructor(graph: GraphModel) {
    this.graph = graph;
    this.visited = new Set<string>();
    this.isToBeVisited = new Set<string>(this.graph.getAllVertices());
    this.states = [];
    this.path = [];
    
    // Record initial state
    this.recordState('Initial', '');
  }

  traverse(startVertex: string): TraversalResult {
    Logger.logStep('🔍 Starting', 'Breadth-First Search...');
    
    if (!this.graph.getAllVertices().includes(startVertex)) {
      throw new Error(`Start vertex "${startVertex}" not found in graph`);
    }
    
    // Create a queue for BFS
    const queue: string[] = [];
    
    // Mark the start vertex as visited and enqueue it
    this.visited.add(startVertex);
    this.isToBeVisited.delete(startVertex);
    queue.push(startVertex);
    this.path.push(startVertex);
    
    // Record and visualize the current state
    this.recordState('Visiting', startVertex);
    
    while (queue.length > 0) {
      // Dequeue a vertex from queue
      const currentVertex = queue.shift()!;
      
      // Get all adjacent vertices of the dequeued vertex
      const neighbors = this.graph.getNeighbors(currentVertex);
      
      for (const neighbor of neighbors) {
        if (!this.visited.has(neighbor)) {
          // Mark it as visited and enqueue it
          this.visited.add(neighbor);
          this.isToBeVisited.delete(neighbor);
          queue.push(neighbor);
          this.path.push(neighbor);
          
          // Record and visualize the current state
          this.recordState('Visiting', neighbor);
        } else {
          // Record the state when we encounter an already visited vertex
          this.recordState('Already visited', neighbor);
        }
      }
    }
    
    return {
      path: this.path,
      states: this.states
    };
  }

  private recordState(status: "Initial" | "Visiting" | "Already visited" | "Queued", current: string): void {
    const state: TraversalState = {
      visited: Array.from(this.visited),
      toBeVisited: Array.from(this.isToBeVisited),
      current,
      status
    };
    
    this.states.push(state);
    
    // Only visualize if not in initial state with empty current
    if (!(status === 'Initial' && current === '')) {
      GraphVisualizer.visualizeTraversalState(state);
    }
  }
}
