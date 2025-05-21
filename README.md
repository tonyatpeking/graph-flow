# graph-flow
JavaScript client-side library for graph (data structure) rendering and animation


## Installation

- `pnpm i @tonyatpeking/graph-flow`
- `pnpm rebuild` Rebuild if node-modules is corrupt
- `pnpm up -L` Update dependencies to latest


## Usage

```js
import {App} from '@tonyatpeking/graph-flow';
```

## Commands

- `npm run build` - Build both the library and examples. Outputs to `dist-examples` and `dist-lib` folders.
    - `npm run build:lib` - Build only the library. Outputs to `dist-lib` folder.
    - `npm run build:examples` - Build only the examples. Outputs to `dist-examples` folder.
- `npm run dev` - Start the development server. Entry point is `examples/index.html`.
- `npm run pub` - Publish to npm. <https://www.npmjs.com/package/@tonyatpeking/graph-flow>


## Examples

You can view the examples at: https://[your-github-username].github.io/graph-flow/


## Tech stack

- Vite
- three.js


## Dev Dependencies

- `sudo apt-get install nodejs npm`
- `sudo npm install -g pnpm`
- `pnpm install`



## Dataflow

- Default
- CPU Data <-> Compute Shader -> Fragment Shade

- Configurable via graphs
- bootstrapping
    - dataflow should be configurable via graphs
    - should not need to touch js after initial setup

## Data Format
- Eventaully can support all, and conversion should be relatively straightforward, but what should be the default / starting format?
- JSON
    - Too many brackets
    - Harder to read / write for humans
- JSON Lines
    - https://jsonlines.org/
- YAML
- TOML
    - Array of Tables synax is a bit weird
    - [[nodes]]
    - Nesting syntax is also a bit weird as you need to specify the full path
- D2
- Dot
- Mermaid
- CSV
- Neo4j
  - Index-free adjacency
- Custom format

## Goals

- Ease of use
- Large scale graph rendering
- Fast
- Animation and effects
- Customizable
    - Custom dataflow pipeline (the order and interaction between different shaders and CPU / GPU memory)
    - Custom rendering (fragment shader)
    - Custom logic (compute shader)
- Text
    - Copy / paste via html element
- Images
- Juice
- Interactive
    - Clickable nodes
- 2 way communication between GPU and CPU
    - Saving entire simulation state from GPU to disk
    - Get edge / node id from x, y position
    - Get edge / node ids from bbox
- HTML for rendering and editing rich text
- Incremental bi-directional updates

## Ideas

- Can we have optimizations by liminting the nubmer of edges a node can have? E.g. only allow 6 edges per node, nodes that have more than 6 edges are split into multiple nodes?

## MVP TODO

- [ ] Initial data format selection
- [ ] Initial data format reading / writing to disk
- [ ] Pass data to GPU
- [ ] Render inital nodes and edges
- [ ] Camera controls
- [ ] First pass node force directed layout
- [ ] Pass data GPU -> CPU -> disk
- [ ] Refactor and clean up code
- [ ] Update docs
- [ ] Write test cases
- [ ] Unit and integration tests: Disk -> CPU -> GPU -> Snapshot -> Force Layout -> Snapshot -> CPU -> Disk

## Resources

- https://github.com/harp-lab/GraphWaGu
- https://gpupuzzles.answer.ai/puzzles
- https://siboehm.com/articles/22/CUDA-MMM
- https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation
