## npm-login-promise

npm login programmatic API that returns a promise

[![Build Status](https://cloud.drone.io/api/badges/LumixximuL/npm-login-promise/status.svg)](https://cloud.drone.io/LumixximuL/npm-login-promise)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Install

```
npm i --save npm-login-promise
```

## Example Usage

### Logging in to the NPM registry:

```
import npmLoginPromise from 'npm-login-promise';

const username = 'testUser';
const password = 'testPass';
const email = 'test@example.com';

npmLoginPromise(username, password, email);
```

### Logging in to private NPM registries:

```
import npmLoginPromise from 'npm-login-promise';

const username = 'testUser';
const password = 'testPass';
const email = 'test@example.com';
const registry = 'https://npm.example.com';
const scope = '@myScope';
const configPath: './custom/path';

npmLoginPromise(username, password, email, registry, scope, configPath);
```

## Development

This module uses [semantic-release](https://github.com/semantic-release/semantic-release) to auto-magically release and update the version in `package.json` based on [semver](https://semver.org/) as well as update release notes. Unknown commit types will not trigger a release. Semantic tags and their corresponding release types are below.

Tag | Release Type
---|---|
breaking | Major
feat | Minor
chore, fix, refactor, revert | Patch
doc, test | No release

