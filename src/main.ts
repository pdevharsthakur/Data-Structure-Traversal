import { UIHelper } from './shared/helpers/ui.js';
import { Logger } from './shared/helpers/logger.js';
import { FileReader } from './shared/helpers/file-reader.js';
import { GraphModel } from './core/graph/model.js';
import { TreeModel } from './core/tree/model.js';
import { GraphVisualizer } from './core/graph/visualizer.js';
import { TreeVisualizer } from './core/tree/visualizer.js';
import { GraphDFS } from './core/graph/algorithms/dfs.js';
import { GraphBFS } from './core/graph/algorithms/bfs.js';
import { TreeDFS } from './core/tree/algorithms/dfs.js';
import { TreeBFS } from './core/tree/algorithms/bfs.js';
import { DataStructureType, TraversalType } from './shared/types/common.js';

async function main(): Promise<void> {
  try {
    // Show welcome message
    await UIHelper.showWelcomeMessage();
    
    // Select data structure
    const dataStructure = await UIHelper.selectDataStructure();
    
    // Get file path from user
    const filePath = await UIHelper.promptForFilePath(dataStructure);
    
    if (dataStructure === DataStructureType.Graph) {
      await processGraph(filePath);
    } else {
      await processTree(filePath);
    }
    
  } catch (error) {
    Logger.error(error);
    process.exit(1);
  }
}

async function processGraph(filePath: string): Promise<void> {
  // Read and parse graph data from file
  const graphData = await FileReader.readGraphFromFile(filePath);
  
  // Create graph from the parsed data
  const graph = GraphModel.fromGraphData(graphData);
  
  // Visualize the graph
  GraphVisualizer.visualizeGraph(graph);
  
  // Select traversal algorithm
  const traversalType = await UIHelper.selectTraversalType();
  
  // Select start vertex
  const startVertex = await UIHelper.selectStartVertex(graph.getAllVertices());
  
  // Perform the selected traversal
  if (traversalType === TraversalType.DFS) {
    const dfs = new GraphDFS(graph);
    const result = dfs.traverse(startVertex);
    
    Logger.success('\nDFS Traversal Complete!');
    Logger.info('Path:', `[${result.path.join(' → ')}]`);
  } else {
    const bfs = new GraphBFS(graph);
    const result = bfs.traverse(startVertex);
    
    Logger.success('\nBFS Traversal Complete!');
    Logger.info('Path:', `[${result.path.join(' → ')}]`);
  }
}

async function processTree(filePath: string): Promise<void> {
  // Read and parse tree data from file
  const treeData = await FileReader.readTreeFromFile(filePath);
  
  // Create tree from the parsed data
  const tree = TreeModel.fromTreeData(treeData);
  
  // Visualize the tree
  TreeVisualizer.visualizeTree(tree);
  
  // Select traversal algorithm
  const traversalType = await UIHelper.selectTraversalType();
  
  // Select start node (optional, can start from root)
  const startFromRoot = await UIHelper.confirmStartFromRoot();
  
  let startValue: string | number | undefined;
  if (!startFromRoot) {
    startValue = await UIHelper.selectStartNode(tree.getAllValues());
  }
  
  // Perform the selected traversal
  if (traversalType === TraversalType.DFS) {
    const treeDfs = new TreeDFS(tree);
    const result = treeDfs.traverse(startValue);
    
    Logger.success('\nTree DFS Traversal Complete!');
    Logger.info('Path:', `[${result.path.join(' → ')}]`);
  } else {
    const treeBfs = new TreeBFS(tree);
    const result = treeBfs.traverse(startValue);
    
    Logger.success('\nTree BFS Traversal Complete!');
    Logger.info('Path:', `[${result.path.join(' → ')}]`);
  }
}

main();
