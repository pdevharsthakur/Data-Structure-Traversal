export interface TreeNode {
    value: string | number;
    children?: TreeNode[];  // For n-ary trees
    left?: TreeNode | null; // For binary trees
    right?: TreeNode | null; // For binary trees
    metadata?: {
      color?: 'red' | 'black';
      height?: number;
      [key: string]: unknown;
    };
  }
  
  export interface TreeData {
    root: TreeNode;
    metadata?: {
      name?: string;
      description?: string;
      type?: 'binary' | 'binary-search' | 'n-ary' | 'general';
      [key: string]: unknown;
    };
  }
  