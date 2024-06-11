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

- `pnpm run build` - Build the project in lib mode, code in `lib`. Outputs to `dist` folder. After this library will be ready to be published to npm.
- `pnpm run dev` - Start the development server. Entry point is `index.html`. Code is in `src` folder. These files will not be published to npm.
- `pnpm run pub` publish to npm. <https://www.npmjs.com/package/@tonyatpeking/graph-flow>
