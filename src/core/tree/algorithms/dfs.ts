import { TreeModel } from '../model.js';
import type { TreeNode } from '../../../shared/types/tree.js';
import { TreeVisualizer } from '../visualizer.js';
import type { Traversable } from '../../../shared/interfaces/traversal.js';
import type { TraversalResult, TraversalState } from '../../../shared/types/common.js';
import { Logger } from '../../../shared/helpers/logger.js';

export class TreeDFS implements Traversable<string | number | undefined> {
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
    Logger.logStep('🔍 Starting', 'Tree Depth-First Search...');
    
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
    
    this.dfsRecursive(startNode);
    
    return {
      path: this.path,
      states: this.states
    };
  }

  private dfsRecursive(node: TreeNode): void {
    this.visited.add(node.value);
    this.isToBeVisited.delete(node.value);
    this.path.push(node.value.toString());
    
    // Record and visualize the current state
    this.recordState('Visiting', node.value.toString());
    
    if (this.tree.isBinary()) {
      // Binary tree traversal
      if (node.left) {
        if (!this.visited.has(node.left.value)) {
          this.dfsRecursive(node.left);
        } else {
          this.recordState('Already visited', node.left.value.toString());
        }
      }
      
      if (node.right) {
        if (!this.visited.has(node.right.value)) {
          this.dfsRecursive(node.right);
        } else {
          this.recordState('Already visited', node.right.value.toString());
        }
      }
    } else {
      // N-ary tree traversal
      if (node.children) {
        for (const child of node.children) {
          if (!this.visited.has(child.value)) {
            this.dfsRecursive(child);
          } else {
            this.recordState('Already visited', child.value.toString());
          }
        }
      }
    }
  }

  private recordState(status: "Initial" | "Visiting" | "Already visited" | "Queued", current: string): void {
    const state: TraversalState = {
      visited: Array.from(this.visited).map(v => v.toString()),
      toBeVisited: Array.from(this.isToBeVisited).map(v => v.toString()),
      current,
      status
    };
    
    this.states.push(state);
    
    // Only visualize if not in initial state with empty current
    if (!(status === 'Initial' && current === '')) {
      TreeVisualizer.visualizeTraversalState(state);
    }
  }
}
