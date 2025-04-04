import chalk from 'chalk';
import { TreeModel } from './model.js';
import type { TreeNode } from '../../shared/types/tree.js';
import type { Visualizable } from '../../shared/interfaces/visualization.js';
import { Logger } from '../../shared/helpers/logger.js';

export class TreeVisualizer implements Visualizable<TreeModel> {
  static visualizeTree(tree: TreeModel): void {
    console.log('\n' + chalk.bold.cyan('📊 Tree Visualization:'));
    console.log(chalk.cyan('══════════════════════'));
    
    const root = tree.getRoot();
    if (!root) {
      console.log(chalk.yellow('Empty tree'));
      return;
    }
    
    const isBinary = tree.isBinary();
    
    if (isBinary) {
      this.visualizeBinaryTree(root);
    } else {
      this.visualizeNaryTree(root);
    }
    
    // Show metadata if available
    const metadata = tree.getMetadata();
    if (Object.keys(metadata).length > 0) {
      console.log(chalk.cyan('\nMetadata:'));
      Object.entries(metadata).forEach(([key, value]) => {
        console.log(`  ${chalk.gray(key)}: ${chalk.white(String(value))}`);
      });
    }
    
    console.log(chalk.cyan('══════════════════════\n'));
  }

  private static visualizeBinaryTree(root: TreeNode): void {
    // This is a simple ASCII visualization
    const lines: string[] = [];
    this.printBinaryTree(root, 0, lines);
    lines.forEach(line => console.log(line));
  }

  private static printBinaryTree(node: TreeNode | null, level: number, lines: string[]): void {
    if (!node) return;
    
    // Print right subtree first (so it appears on top)
    this.printBinaryTree(node.right || null, level + 1, lines);
    
    // Print current node
    let line = '    '.repeat(level);
    if (level > 0) {
      line += chalk.gray('└── ');
    }
    line += chalk.yellow(node.value.toString());
    lines.push(line);
    
    // Print left subtree
    this.printBinaryTree(node.left || null, level + 1, lines);
  }

  private static visualizeNaryTree(root: TreeNode): void {
    this.printNaryTree(root, '', true);
  }

  private static printNaryTree(node: TreeNode, prefix: string, isLast: boolean): void {
    // Print current node
    console.log(
      prefix + 
      (isLast ? chalk.gray('└── ') : chalk.gray('├── ')) + 
      chalk.yellow(node.value.toString())
    );
    
    // Print children
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child) {
          const isLastChild = i === node.children.length - 1;
          this.printNaryTree(
            child,
            prefix + (isLast ? '    ' : chalk.gray('│   ')),
            isLastChild
          );
        }
      }
    }
  }

  static visualizeTraversalState(state: {
    current: string;
    status: string;
    visited: string[];
    toBeVisited: string[];
  }): void {
    Logger.logState(state);
  }

  visualize(data: TreeModel): void {
    TreeVisualizer.visualizeTree(data);
  }
}
