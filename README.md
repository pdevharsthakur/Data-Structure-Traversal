# 🌳 Data Structure Traversal

<div align="center">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white" alt="Bun"/>
</div>

<p align="center">
  <b>A TypeScript CLI application for visualizing and traversing common data structures</b>
</p>

<hr />

<div align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-features">Features</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-input-files">Input Files</a> •
  <a href="#-technologies">Technologies</a>
</div>

<hr />

## 📋 Overview

<p align="center">
  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/algorithm/algorithm.png" width="100" />
</p>

Data Structure Traversal is an interactive command-line tool that allows you to visualize and traverse two fundamental data structures:

<table>
  <tr>
    <td align="center" width="50%">
      <img src="https://raw.githubusercontent.com/github/explore/d9e23561bedad3429c96aac9dd0fd4fd1840b3a0/topics/graph/graph.png" width="50" /><br />
      <b>📊 Graphs</b><br />
      <sub>(directed and undirected)</sub>
    </td>
    <td align="center" width="50%">
      <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tree/tree.png" width="50" /><br />
      <b>🌲 Trees</b><br />
      <sub>(binary trees)</sub>
    </td>
  </tr>
</table>

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

<div align="center">

| Feature | Description |
|---------|-------------|
| ✨ **Interactive CLI** | Intuitive user interface with guided prompts |
| 📊 **Visualization** | ASCII-based representations of graphs and trees in the terminal |
| 🔍 **Multiple Algorithms** | Both DFS and BFS for each data structure |
| 📄 **Custom Input** | Support for JSON formatted input files |
| 🎯 **Type Safety** | Fully TypeScript implementation with strict typing |
| 🎨 **Colorful Output** | Enhanced readability with color-coded visualizations |

</div>

## 🗂️ Project Structure

```
data-structure-traversal/
├── 📁 dist/              # Compiled JavaScript files
├── 📁 input/             # Example input files
│   ├── 📄 inputGraph.json
│   └── 📄 inputTree.json
├── 📁 src/               # Source TypeScript files
│   ├── 📁 core/          # Core data structure implementations
│   │   ├── 📁 graph/     # Graph implementation and algorithms
│   │   └── 📁 tree/      # Tree implementation and algorithms
│   ├── 📁 shared/        # Shared utilities and types
│   ├── 📁 schemas/       # JSON schemas for validation
│   └── 📄 main.ts        # Application entry point
├── 📄 tsconfig.json      # TypeScript configuration
└── 📄 package.json       # Project metadata and dependencies
```

## 📥 Installation

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

<div align="center">
  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" width="80" />
</div>

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
<ul>
  <li>✅ Select a data structure (Graph or Tree)</li>
  <li>✅ Provide the path to your input file</li>
  <li>✅ Choose a traversal algorithm (DFS or BFS)</li>
  <li>✅ Select a starting vertex/node</li>
</ul>
</details>

## 📝 Input Files

The application accepts JSON files as input with specific formats for each data structure.

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

## 📄 License

<div align="center">
  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/license/license.png" width="60" />
  <p>Feel free to fork and use this project however you want.</p>
</div>

## 🧰 Technologies

<div align="center">
  <table>
    <tr>
      <td align="center" width="20%">
        <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" width="60" /><br />
        <b><a href="https://www.typescriptlang.org/">TypeScript</a></b><br />
        <sub>Strongly typed programming language</sub>
      </td>
      <td align="center" width="20%">
        <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" width="60" /><br />
        <b><a href="https://nodejs.org/">Node.js</a></b><br />
        <sub>JavaScript runtime</sub>
      </td>
      <td align="center" width="20%">
        <img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" width="60" /><br />
        <b><a href="https://bun.sh/">Bun</a></b><br />
        <sub>JavaScript toolkit</sub>
      </td>
      <td align="center" width="20%">
        <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png" width="60" /><br />
        <b><a href="https://github.com/SBoudrias/Inquirer.js/">Inquirer.js</a></b><br />
        <sub>Interactive CLI</sub>
      </td>
      <td align="center" width="20%">
        <img src="https://raw.githubusercontent.com/chalk/chalk/HEAD/media/logo.svg" width="60" /><br />
        <b><a href="https://github.com/chalk/chalk">Chalk</a></b><br />
        <sub>Terminal styling</sub>
      </td>
    </tr>
  </table>
</div>

## 🛠️ Why Bun?

<div align="center">
  <img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" width="100" />
</div>

This project uses Bun primarily as a package manager, not as a runtime environment. Here's why:

<table>
  <tr>
    <td width="50%">
      <h3 align="center">💼 Simple Node.js Project</h3>
      <p align="center">Since this is not a fullstack application but rather a straightforward Node.js CLI tool, Bun serves as an excellent package manager with faster installation times compared to npm or yarn.</p>
    </td>
    <td width="50%">
      <h3 align="center">🛡️ Stability First</h3>
      <p align="center">While Bun's runtime capabilities are impressive, I opted to use Node.js runtime for execution to ensure maximum stability, as Bun is still maturing as a platform.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3 align="center">🔮 Future-Ready</h3>
      <p align="center">Using Bun as a package manager allows us to easily transition to Bun runtime in the future when it reaches greater maturity, without changing our workflow significantly.</p>
    </td>
    <td width="50%">
      <h3 align="center">⚡ Performance</h3>
      <p align="center">Bun's package management is significantly faster than npm, which improves the developer experience especially for quick iterations.</p>
    </td>
  </tr>
</table>

<p align="center">The approach provides a good balance between leveraging Bun's speed advantages while maintaining the stability and ecosystem compatibility of Node.js.</p>
