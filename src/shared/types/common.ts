export enum DataStructureType {
  Graph = 'Graph',
  Tree = 'Tree',
}

export enum TraversalType {
  DFS = 'Depth-First Search',
  BFS = 'Breadth-First Search',
}

export interface TraversalState {
  visited: string[];
  toBeVisited: string[];
  current: string;
  status: 'Initial' | 'Visiting' | 'Already visited' | 'Queued';
}

export interface TraversalResult {
  path: string[];
  states: TraversalState[];
}
