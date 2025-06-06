# 🌳 Data Structure Traversal

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Bun](https://img.shields.io/badge/bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)

A TypeScript CLI application for visualizing and traversing common data structures. Contributions are welcome!


## 📖 Table of Contents

*   [📋 Overview](#-overview)
*   [🚀 Features](#-features)
*   [🗂️ Project Structure](#%F0%97%97%82%EF%B8%8F-project-structure)
*   [📥 Installation](#-installation)
*   [🚀 Usage](#-usage)
*   [📝 Input Files](#-input-files)
*   [🤝 Contributing](#-contributing)
*   [🧰 Technologies](#%F0%97%A7%B0%EF%B8%8F-technologies)
*   [🛠️ Why Bun?](#%F0%97%9B%A0%EF%B8%8F-why-bun)
*   [📄 License](#-license)


## 📋 Overview

Data Structure Traversal is an interactive command-line tool that allows you to visualize and traverse two fundamental data structures:

*   📊 **Graphs:** (directed and undirected)
    ![Graph Example](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/6n-graf.svg/320px-6n-graf.svg.png)
*   🌲 **Trees:** (binary trees)
    ![Binary Tree Example](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/300px-Binary_search_tree.png)

The application demonstrates popular traversal algorithms including:

<details open>
<summary><b>🔍 Depth-First Search (DFS)</b></summary>
<p>
Explores as far as possible along each branch before backtracking.
</p>
</details>

<details open>
<summary><b>🔍 Breadth-First Search (BFS)</b></summary>
<p>
Explores all neighbors at the present depth before moving to nodes at the next depth level.
</p>
</details>

## 🚀 Features

| Feature                    | Description                                                     |
| :------------------------- | :-------------------------------------------------------------- |
| ✨ **Interactive CLI**     | Intuitive user interface with guided prompts                    |
| 📊 **Visualization**       | ASCII-based representations of graphs and trees in the terminal |
| 🔍 **Multiple Algorithms** | Both DFS and BFS for each data structure                        |
| 📄 **Custom Input**        | Support for JSON formatted input files                          |
| 🎯 **Type Safety**         | Fully TypeScript implementation with strict typing              |
| 🎨 **Colorful Output**     | Enhanced readability with color-coded visualizations            |

## 🗂️ Project Structure

To help you navigate the codebase, here's an overview of the project directory:

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

Follow these steps to set up the project locally:

<details open>
<summary><b>Step 1: Clone the repository</b></summary>

```bash
git clone https://github.com/pdevharsthakur/Data-Structure-Traversal.git
cd data-structure-traversal
```

</details>

<details open>
<summary><b>Step 2: Install dependencies</b></summary>

```bash
bun install
```

</details>

## 🚀 Usage

Once installed, you can run the application with these commands:

<details open>
<summary><b>Step 1: Build the project</b></summary>

```bash
bun run build
```

</details>

<details open>
<summary><b>Step 2: Run the application</b></summary>

```bash
bun start
```

</details>

<details open>
<summary><b>Step 3: Follow the interactive prompts</b></summary>
The CLI will guide you through the process:
<ul>
  <li>✅ Select a data structure (Graph or Tree)</li>
  <li>✅ Provide the path to your input file</li>
  <li>✅ Choose a traversal algorithm (DFS or BFS)</li>
  <li>✅ Select a starting vertex/node</li>
</ul>
</details>

## 📝 Input Files

The application accepts JSON files as input with specific formats for each data structure. Example input files are located in the `input/` directory.

<details open>
<summary><b>🔗 Graph Input Format</b></summary>

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

</details>

<details open>
<summary><b>🌲 Tree Input Format</b></summary>

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

</details>

## 🧰 Technologies

This project leverages the following key technologies:

| Technology         | Description                                        |
| :----------------- | :------------------------------------------------- |
| **[TypeScript](https://www.typescriptlang.org/)** | A strongly typed programming language.           |
| **[Node.js](https://nodejs.org/)**         | A JavaScript runtime environment.                |
| **[Bun](https://bun.sh/)**           | A fast JavaScript toolkit, used here as a package manager. |
| **[Inquirer.js](https://github.com/SBoudrias/Inquirer.js/)** | Provides an interactive command-line interface.  |
| **[Chalk](https://github.com/chalk/chalk)**         | Enables expressive terminal styling with colors. |


## 🛠️ Why Bun?

![Bun logo large](https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png#gh-light-mode-only)
![Bun logo large](https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png#gh-dark-mode-only)

This project primarily leverages Bun as a package manager rather than a full runtime environment. This strategic choice offers a good balance between harnessing Bun's performance benefits and maintaining the stability and broad compatibility of Node.js.

### ✨ Key Reasons for Choosing Bun:

*   **⚡ Performance:** Bun's package management capabilities are significantly faster than npm or yarn. This greatly enhances the developer experience, particularly during dependency installation and iterative development cycles.
*   **💼 Simplicity for CLI:** For a straightforward Node.js command-line interface tool like this, Bun serves as an excellent, high-performance package manager that simplifies the development workflow without the complexities often associated with full-stack environments.
*   **🛡️ Stability First:** To ensure maximum stability and wide ecosystem compatibility for execution, we've opted to use the Node.js runtime, as Bun is still actively maturing as a platform.
*   **🔮 Future-Ready:** Adopting Bun as a package manager positions the project for an easy and seamless transition to the Bun runtime in the future, once it achieves greater maturity and widespread adoption, without requiring significant changes to our existing workflow.

## 📄 License
This project is licensed under the MIT License. Feel free to fork and use it as you wish.
