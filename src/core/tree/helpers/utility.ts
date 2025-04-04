import { TreeModel } from '../model.js';
import type { TreeNode } from '../../../shared/types/tree.js';

export class TreeUtility {
  /**
   * Calculate the height of a tree
   */
  static getHeight(tree: TreeModel): number {
    const root = tree.getRoot();
    if (!root) return 0;

    return this.calculateHeight(root);
  }

  private static calculateHeight(node: TreeNode): number {
    if (!node) return 0;

    if (node.children) {
      // N-ary tree
      let maxHeight = 0;
      for (const child of node.children) {
        const height = this.calculateHeight(child);
        maxHeight = Math.max(maxHeight, height);
      }
      return maxHeight + 1;
    } else {
      // Binary tree
      const leftHeight = node.left ? this.calculateHeight(node.left) : 0;
      const rightHeight = node.right ? this.calculateHeight(node.right) : 0;
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

  /**
   * Check if a binary tree is balanced
   */
  static isBalanced(tree: TreeModel): boolean {
    if (!tree.isBinary()) {
      return false; // Only applicable to binary trees
    }

    const root = tree.getRoot();
    if (!root) return true;

    return this.checkBalanced(root) !== -1;
  }

  private static checkBalanced(node: TreeNode | null): number {
    if (!node) return 0;

    // Check left subtree
    const leftHeight = node.left ? this.checkBalanced(node.left) : 0;
    if (leftHeight === -1) return -1;

    // Check right subtree
    const rightHeight = node.right ? this.checkBalanced(node.right) : 0;
    if (rightHeight === -1) return -1;

    // Check if current node is balanced
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    // Return height of current subtree
    return Math.max(leftHeight, rightHeight) + 1;
  }

  /**
   * Check if a binary tree is a BST (Binary Search Tree)
   */
  static isBST(tree: TreeModel): boolean {
    if (!tree.isBinary()) {
      return false; // Only applicable to binary trees
    }

    const root = tree.getRoot();
    if (!root) return true;

    return this.checkBST(root, -Infinity, Infinity);
  }

  private static checkBST(node: TreeNode | null, min: number, max: number): boolean {
    if (!node) return true;

    // Check if current node's value is in range
    const value = typeof node.value === 'string' ? parseInt(node.value, 10) : node.value;

    if (isNaN(value)) return false; // Non-numeric values can't form a BST

    if (value <= min || value >= max) return false;

    // Check left and right subtrees
    return this.checkBST(node.left ?? null, min, value) && this.checkBST(node.right ?? null, value, max);
  }
}
