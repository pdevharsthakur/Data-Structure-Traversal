# 🌳 Data Structure Traversal

<div align="center">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white" alt="Bun"/>
</div>

<p align="center">
  A TypeScript CLI application for visualizing and traversing common data structures
</p>

## 📋 Overview

Data Structure Traversal is an interactive command-line tool that allows you to visualize and traverse two fundamental data structures:

- 📊 **Graphs** (directed and undirected)
- 🌲 **Trees** (binary trees)

The application demonstrates popular traversal algorithms including:

- **Depth-First Search (DFS)** - Explores as far as possible along each branch before backtracking
- **Breadth-First Search (BFS)** - Explores all neighbors at the present depth before moving to nodes at the next depth level

## 🚀 Features

- ✨ **Interactive CLI** with intuitive user interface
- 📊 **Visualization** of graphs and trees in the terminal
- 🔍 **Two traversal algorithms** (DFS and BFS) for each data structure
- 📄 **Custom input files** in JSON format
- 🎯 **TypeScript** for type safety and better developer experience
- 🎨 **Colorful output** to improve readability

## 🗂️ Project Structure

```
data-structure-traversal/
├── dist/              # Compiled JavaScript files
├── input/             # Example input files
│   ├── inputGraph.json
│   └── inputTree.json
├── src/               # Source TypeScript files
│   ├── core/          # Core data structure implementations
│   │   ├── graph/     # Graph implementation and algorithms
│   │   └── tree/      # Tree implementation and algorithms
│   ├── shared/        # Shared utilities and types
│   ├── schemas/       # JSON schemas for validation
│   └── main.ts        # Application entry point
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project metadata and dependencies
```

## 📥 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/data-structure-traversal.git
cd data-structure-traversal
```

2. Install dependencies:

```bash
bun install
```

## 🚀 Usage

1. Build the project:

```bash
bun run build
```

2. Run the application:

```bash
bun start
```

3. Follow the interactive prompts to:
   - Select a data structure (Graph or Tree)
   - Provide the path to your input file
   - Choose a traversal algorithm (DFS or BFS)
   - Select a starting vertex/node

## 📝 Input Files

The application accepts JSON files as input with specific formats for each data structure.

### Graph Input Format

```json
{
  "vertices": ["A", "B", "C", "D", "E", "F"],
  "edges": [
    {
      "source": "A",
      "target": "B",
      "weight": 2
    },
    {
      "source": "A",
      "target": "C",
      "weight": 1
    }
    // More edges...
  ],
  "isDirected": false,
  "metadata": {
    "name": "Sample Graph",
    "description": "A simple undirected graph for traversal visualization"
  }
}
```

### Tree Input Format

```json
{
  "root": {
    "value": "A",
    "left": {
      "value": "B",
      "left": {
        "value": "D",
        "left": null,
        "right": null
      },
      "right": {
        "value": "E",
        "left": null,
        "right": null
      }
    },
    "right": {
      // More nodes...
    }
  },
  "metadata": {
    "name": "Sample Binary Tree",
    "type": "binary",
    "description": "A simple binary tree for traversal visualization"
  }
}
```

## 📄 License

Feel free to fork and use this project however you want.

## 🧰 Technologies

- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language
- [Bun](https://bun.sh/) - JavaScript runtime and toolkit
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/) - Interactive CLI
- [Chalk](https://github.com/chalk/chalk) - Terminal string styling
- [Figlet](https://github.com/patorjk/figlet.js) - ASCII art from text
