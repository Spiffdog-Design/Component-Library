# @spiffdog/component-library (TypeScript)
Spiffdog Design boilerplate for a React component library using TypeScript.

## Install for development
```
git clone https://github.com/Spiffdog-Design/component-library.git
yarn install
yarn link
```
The console should output the command to link to this module (i.e. `yarn link @spiffdog/component-library`).  Go to your React app's folder in the terminal and execute that command.  You can then use that library as usual.
```
import { Card } from '@spiffdog/component-library';
```

## Install for Production Use
Install the library from the NPM repo.
```
yarn add @spiffdog/component-library
```

## Development
* `yarn start`

## Production Build
* `yarn build`

## Linting
* `yarn lint`

## Testing
* Single run w/ lint: `yarn test`
* Generate snapshots: `yarn test:snapshot`
* Test watch mode: `yarn test:watch`

## Publish to NPM
* `yarn dist`
