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

- `pnpm run build` - Build both the library and examples. Outputs to `dist` folder.
- `pnpm run dev` - Start the development server. Entry point is `examples/index.html`.
- `pnpm run dev --feature={some-feature}` - Start the development server. Entry point is `examples/{some-feature}.html`.
- `pnpm run pub` - Publish to npm. <https://www.npmjs.com/package/@tonyatpeking/graph-flow>


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

- CPU Data <-> Compute Shader -> Fragment Shader
