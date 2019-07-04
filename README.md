## npm-login-promise

npm login programmatic API that returns a promise

[![Build Status](https://cloud.drone.io/api/badges/LumixximuL/npm-login-promise/status.svg)](https://cloud.drone.io/LumixximuL/npm-login-promise)

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
