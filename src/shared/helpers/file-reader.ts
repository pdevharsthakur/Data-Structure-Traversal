import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import type { GraphData } from '../types/graph.js';
import type { TreeData } from '../types/tree.js';
import { Logger } from './logger.js';

export class FileReader {
  private static getFullPath(relativePath: string): string {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.resolve(__dirname, '../../..', relativePath);
  }

  static async readGraphFromFile(filePath: string): Promise<GraphData> {
    try {
      Logger.logStep('📂 Reading', `graph from file: ${filePath}`);
      
      const fullPath = this.getFullPath(filePath);
      const fileContent = await fs.readFile(fullPath, 'utf-8');
      
      return await this.parseJsonGraph(fileContent);
    } catch (error) {
      Logger.error(`Error reading graph file: ${(error as Error).message}`);
      throw error;
    }
  }

  static async readTreeFromFile(filePath: string): Promise<TreeData> {
    try {
      Logger.logStep('📂 Reading', `tree from file: ${filePath}`);
      
      const fullPath = this.getFullPath(filePath);
      const fileContent = await fs.readFile(fullPath, 'utf-8');
      
      return await this.parseJsonTree(fileContent);
    } catch (error) {
      Logger.error(`Error reading tree file: ${(error as Error).message}`);
      throw error;
    }
  }

  private static async parseJsonGraph(content: string): Promise<GraphData> {
    Logger.logStep('🔍 Parsing', 'JSON graph data...');
    
    try {
      const jsonData = JSON.parse(content) as Partial<GraphData>;
      
      // Validate the JSON structure
      if (!Array.isArray(jsonData.vertices)) {
        throw new Error('Invalid JSON format: "vertices" must be an array');
      }
      
      if (!Array.isArray(jsonData.edges)) {
        throw new Error('Invalid JSON format: "edges" must be an array');
      }
      
      // Convert edges to the expected format if necessary
      const validatedEdges = jsonData.edges.map(edge => {
        if (typeof edge === 'object' && edge !== null) {
          if (typeof edge.source !== 'string' || typeof edge.target !== 'string') {
            throw new Error('Invalid edge format: each edge must have "source" and "target" properties');
          }
          return edge;
        } else {
          throw new Error('Invalid edge format: each edge must be an object');
        }
      });
      
      const graphData: GraphData = {
        vertices: jsonData.vertices,
        edges: validatedEdges,
        isDirected: jsonData.isDirected,
        metadata: jsonData.metadata
      };
      
      Logger.success(`Successfully parsed ${graphData.vertices.length} vertices and ${graphData.edges.length} edges`);
      return graphData;
    } catch (error) {
      throw new Error(`Error parsing graph JSON: ${(error as Error).message}`);
    }
  }

  private static async parseJsonTree(content: string): Promise<TreeData> {
    Logger.logStep('🔍 Parsing', 'JSON tree data...');
    
    try {
      const jsonData = JSON.parse(content) as Partial<TreeData>;
      
      // Validate the JSON structure
      if (!jsonData.root) {
        throw new Error('Invalid JSON format: "root" is required');
      }
      
      // Validate that the root has a value
      if (jsonData.root.value === undefined) {
        throw new Error('Invalid JSON format: root node must have a "value"');
      }
      
      const treeData: TreeData = {
        root: jsonData.root,
        metadata: jsonData.metadata
      };
      
      Logger.success('Successfully parsed tree data');
      return treeData;
    } catch (error) {
      throw new Error(`Error parsing tree JSON: ${(error as Error).message}`);
    }
  }
}
