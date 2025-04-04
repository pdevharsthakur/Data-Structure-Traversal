/**
 * Implementation of the Depth-First Search algorithm for graph traversal.
 * Records traversal steps and visualizes the state at each step.
 */
import { GraphModel } from '../model.js';
import { GraphVisualizer } from '../visualizer.js';
import type { Traversable } from '../../../shared/interfaces/traversal.js';
import type { TraversalResult, TraversalState } from '../../../shared/types/common.js';
import { Logger } from '../../../shared/helpers/logger.js';

export class GraphDFS implements Traversable<string> {
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
    Logger.logStep('🔍 Starting', 'Depth-First Search...');

    if (!this.graph.getAllVertices().includes(startVertex)) {
      throw new Error(`Start vertex "${startVertex}" not found in graph`);
    }

    this.dfsRecursive(startVertex);

    return {
      path: this.path,
      states: this.states,
    };
  }

  private dfsRecursive(vertex: string): void {
    this.visited.add(vertex);
    this.isToBeVisited.delete(vertex);
    this.path.push(vertex);

    // Record and visualize the current state
    this.recordState('Visiting', vertex);

    const neighbors = this.graph.getNeighbors(vertex);
    for (const neighbor of neighbors) {
      if (!this.visited.has(neighbor)) {
        this.dfsRecursive(neighbor);
      } else {
        // Record the state when we encounter an already visited vertex
        this.recordState('Already visited', neighbor);
      }
    }
  }

  private recordState(status: 'Initial' | 'Visiting' | 'Already visited' | 'Queued', current: string): void {
    const state: TraversalState = {
      visited: Array.from(this.visited),
      toBeVisited: Array.from(this.isToBeVisited),
      current,
      status,
    };

    this.states.push(state);

    // Only visualize if not in initial state with empty current
    if (!(status === 'Initial' && current === '')) {
      GraphVisualizer.visualizeTraversalState(state);
    }
  }
}
