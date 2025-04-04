import type { TreeData, TreeNode } from '../../shared/types/tree.js';

export class TreeModel {
  private root: TreeNode | null;
  private isBinaryTree: boolean;
  private metadata: Record<string, unknown>;

  constructor() {
    this.root = null;
    this.isBinaryTree = false;
    this.metadata = {};
  }

  getRoot(): TreeNode | null {
    return this.root;
  }

  isBinary(): boolean {
    return this.isBinaryTree;
  }

  getMetadata(): Record<string, unknown> {
    return { ...this.metadata };
  }

  // Get all values in the tree (for selection purposes)
  getAllValues(): Array<string | number> {
    const values: Array<string | number> = [];
    this.traversePreOrder(this.root, (node) => {
      values.push(node.value);
    });
    return values;
  }

  // Get a node by its value
  getNodeByValue(value: string | number): TreeNode | null {
    let foundNode: TreeNode | null = null;
    
    this.traversePreOrder(this.root, (node) => {
      if (node.value === value && !foundNode) {
        foundNode = node;
      }
    });
    
    return foundNode;
  }

  // Helper method for traversing the tree
  private traversePreOrder(node: TreeNode | null, callback: (node: TreeNode) => void): void {
    if (!node) return;
    
    callback(node);
    
    if (node.children) {
      // N-ary tree
      for (const child of node.children) {
        this.traversePreOrder(child, callback);
      }
    } else {
      // Binary tree
      if (node.left) this.traversePreOrder(node.left, callback);
      if (node.right) this.traversePreOrder(node.right, callback);
    }
  }

  static fromTreeData(treeData: TreeData): TreeModel {
    const tree = new TreeModel();
    tree.root = treeData.root;
    
    // Determine if it's a binary tree
    tree.isBinaryTree = TreeModel.checkIfBinaryTree(treeData.root);
    
    // Store metadata
    if (treeData.metadata) {
      tree.metadata = { ...treeData.metadata };
    }
    
    return tree;
  }

  // Helper to determine if the tree is binary
  private static checkIfBinaryTree(node: TreeNode): boolean {
    if (node.children && node.children.length > 0) {
      return false;
    }
    
    if (node.left !== undefined || node.right !== undefined) {
      const leftIsBinary = node.left ? this.checkIfBinaryTree(node.left) : true;
      const rightIsBinary = node.right ? this.checkIfBinaryTree(node.right) : true;
      return leftIsBinary && rightIsBinary;
    }
    
    return true;
  }
}
