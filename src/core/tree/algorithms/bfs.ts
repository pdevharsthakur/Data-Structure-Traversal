/**
 * Implementation of the Breadth-First Search algorithm for tree traversal.
 * Supports both binary and n-ary trees, with visualization of each traversal step.
 */
import { TreeModel } from '../model.js';
import type { TreeNode } from '../../../shared/types/tree.js';
import { TreeVisualizer } from '../visualizer.js';
import type { Traversable } from '../../../shared/interfaces/traversal.js';
import type { TraversalResult, TraversalState } from '../../../shared/types/common.js';
import { Logger } from '../../../shared/helpers/logger.js';

export class TreeBFS implements Traversable<string | number | undefined> {
  private tree: TreeModel;
  private visited: Set<string | number>;
  private isToBeVisited: Set<string | number>;
  private states: TraversalState[];
  private path: string[];

  constructor(tree: TreeModel) {
    this.tree = tree;
    this.visited = new Set<string | number>();
    this.isToBeVisited = new Set<string | number>(this.tree.getAllValues());
    this.states = [];
    this.path = [];

    // Record initial state
    this.recordState('Initial', '');
  }

  traverse(startValue?: string | number): TraversalResult {
    Logger.logStep('🔍 Starting', 'Tree Breadth-First Search...');

    const root = this.tree.getRoot();
    if (!root) {
      throw new Error('Tree is empty');
    }

    // If no start value is provided, use the root value
    const actualStartValue = startValue !== undefined ? startValue : root.value;

    // Find the node with the start value
    const startNode = this.tree.getNodeByValue(actualStartValue);

    if (!startNode) {
      throw new Error(`Start value "${actualStartValue}" not found in tree`);
    }

    // Create a queue for BFS
    const queue: TreeNode[] = [];

    // Mark the start node as visited and enqueue it
    this.visited.add(startNode.value);
    this.isToBeVisited.delete(startNode.value);
    queue.push(startNode);
    this.path.push(startNode.value.toString());

    // Record and visualize the current state
    this.recordState('Visiting', startNode.value.toString());

    while (queue.length > 0) {
      // Dequeue a node from queue
      const currentNode = queue.shift()!;

      if (this.tree.isBinary()) {
        // Process left child
        if (currentNode.left) {
          if (!this.visited.has(currentNode.left.value)) {
            this.visited.add(currentNode.left.value);
            this.isToBeVisited.delete(currentNode.left.value);
            queue.push(currentNode.left);
            this.path.push(currentNode.left.value.toString());
            this.recordState('Visiting', currentNode.left.value.toString());
          } else {
            this.recordState('Already visited', currentNode.left.value.toString());
          }
        }

        // Process right child
        if (currentNode.right) {
          if (!this.visited.has(currentNode.right.value)) {
            this.visited.add(currentNode.right.value);
            this.isToBeVisited.delete(currentNode.right.value);
            queue.push(currentNode.right);
            this.path.push(currentNode.right.value.toString());
            this.recordState('Visiting', currentNode.right.value.toString());
          } else {
            this.recordState('Already visited', currentNode.right.value.toString());
          }
        }
      } else {
        // Process children of n-ary tree
        if (currentNode.children) {
          for (const child of currentNode.children) {
            if (!this.visited.has(child.value)) {
              this.visited.add(child.value);
              this.isToBeVisited.delete(child.value);
              queue.push(child);
              this.path.push(child.value.toString());
              this.recordState('Visiting', child.value.toString());
            } else {
              this.recordState('Already visited', child.value.toString());
            }
          }
        }
      }
    }

    return {
      path: this.path,
      states: this.states,
    };
  }

  private recordState(status: 'Initial' | 'Visiting' | 'Already visited' | 'Queued', current: string): void {
    const state: TraversalState = {
      visited: Array.from(this.visited).map(v => v.toString()),
      toBeVisited: Array.from(this.isToBeVisited).map(v => v.toString()),
      current,
      status,
    };

    this.states.push(state);

    // Only visualize if not in initial state with empty current
    if (!(status === 'Initial' && current === '')) {
      TreeVisualizer.visualizeTraversalState(state);
    }
  }
}
