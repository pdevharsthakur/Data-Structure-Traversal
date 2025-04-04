/**
 * Provides user interface components and interaction handlers.
 * Manages CLI-based user interactions with colorful prompts and informative displays.
 */
import inquirer from 'inquirer';
import figlet from 'figlet';
import chalk from 'chalk';
import { DataStructureType, TraversalType } from '../types/common.js';

export class UIHelper {
  static async showWelcomeMessage(): Promise<void> {
    console.clear();

    const title = figlet.textSync('Traversal Visualizer', {
      horizontalLayout: 'full',
      font: 'Big',
    });

    console.log('\n' + chalk.cyan(title));
    console.log('\n' + chalk.yellow('A visualization tool for graph and tree traversal algorithms'));
    console.log('\n' + chalk.gray('──────────────────────────────────────────────────────────────'));
  }

  static async selectDataStructure(): Promise<DataStructureType> {
    const { dataStructure } = await inquirer.prompt([
      {
        type: 'list',
        name: 'dataStructure',
        message: 'Select data structure to search:',
        choices: [
          { name: 'Graph', value: DataStructureType.Graph },
          { name: 'Tree', value: DataStructureType.Tree },
        ],
      },
    ]);

    return dataStructure;
  }

  static async selectTraversalType(): Promise<TraversalType> {
    const { traversalType } = await inquirer.prompt([
      {
        type: 'list',
        name: 'traversalType',
        message: 'Select traversal algorithm:',
        choices: [
          { name: 'Depth-First Search (DFS)', value: TraversalType.DFS },
          { name: 'Breadth-First Search (BFS)', value: TraversalType.BFS },
        ],
      },
    ]);

    return traversalType;
  }

  static async selectStartVertex(vertices: string[]): Promise<string> {
    const { startVertex } = await inquirer.prompt([
      {
        type: 'list',
        name: 'startVertex',
        message: 'Select starting vertex:',
        choices: vertices.sort(),
      },
    ]);

    return startVertex;
  }

  static async selectStartNode(values: Array<string | number>): Promise<string | number> {
    const stringValues = values.map(v => v.toString());

    const { startNode } = await inquirer.prompt([
      {
        type: 'list',
        name: 'startNode',
        message: 'Select starting node:',
        choices: stringValues.sort(),
      },
    ]);

    return startNode;
  }

  static async confirmStartFromRoot(): Promise<boolean> {
    const { fromRoot } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'fromRoot',
        message: 'Start traversal from the root?',
        default: true,
      },
    ]);

    return fromRoot;
  }

  static async promptForFilePath(dataStructure: DataStructureType): Promise<string> {
    const defaultPath =
      dataStructure === DataStructureType.Graph ? './input/inputGraph.json' : './input/inputTree.json';

    const { filePath } = await inquirer.prompt([
      {
        type: 'input',
        name: 'filePath',
        message: `Enter the path to the ${dataStructure.toLowerCase()} file (or press Enter for default):`,
        default: defaultPath,
      },
    ]);

    return filePath || defaultPath;
  }
}
