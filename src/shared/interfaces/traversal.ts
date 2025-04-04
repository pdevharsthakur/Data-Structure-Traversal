import type { TraversalResult } from '../types/common.js';

export interface Traversable<T> {
  traverse(start: T): TraversalResult;
}