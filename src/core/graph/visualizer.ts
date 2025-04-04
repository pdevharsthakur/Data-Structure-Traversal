/**
 * Provides visualization functionality for graph data structures and their traversal states.
 * Renders graphs as ASCII adjacency lists with colored output using chalk.
 */
import chalk from 'chalk';
import { GraphModel } from './model.js';
import type { Visualizable } from '../../shared/interfaces/visualization.js';
import { Logger } from '../../shared/helpers/logger.js';

export class GraphVisualizer implements Visualizable<GraphModel> {
  static visualizeGraph(graph: GraphModel): void {
    console.log('\n' + chalk.bold.cyan('📊 Graph Visualization:'));
    console.log(chalk.cyan('══════════════════════'));

    const vertices = graph.getAllVertices().sort();
    const maxVertexLength = Math.max(...vertices.map(v => v.length));

    vertices.forEach(vertex => {
      const neighbors = graph.getNeighbors(vertex);
      const paddedVertex = vertex.padEnd(maxVertexLength, ' ');

      if (neighbors.length === 0) {
        console.log(`${chalk.yellow(paddedVertex)} ${chalk.gray('───')} ${chalk.gray('(no connections)')}`);
      } else {
        const neighborStr = neighbors
          .map(n => {
            const weight = graph.getWeight(vertex, n);
            return weight !== 1 ? `${chalk.green(n)}${chalk.gray(`(${weight})`)}` : chalk.green(n);
          })
          .join(', ');

        console.log(`${chalk.yellow(paddedVertex)} ${chalk.gray('───')} ${neighborStr}`);
      }
    });

    const metadata = graph.getMetadata();
    if (Object.keys(metadata).length > 0) {
      console.log(chalk.cyan('\nMetadata:'));
      Object.entries(metadata).forEach(([key, value]) => {
        console.log(`  ${chalk.gray(key)}: ${chalk.white(String(value))}`);
      });
    }

    console.log(chalk.cyan('══════════════════════\n'));
  }

  static visualizeTraversalState(state: {
    current: string;
    status: string;
    visited: string[];
    toBeVisited: string[];
  }): void {
    Logger.logState(state);
  }

  visualize(data: GraphModel): void {
    GraphVisualizer.visualizeGraph(data);
  }
}
