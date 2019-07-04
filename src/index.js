import { readFile, writeFile } from './file-utilities';
import generateAuthContent from './generate-auth-content';
import login from './login.js';
import path from 'path';

module.exports = function(
  npmUser,
  npmPassword,
  npmEmail,
  npmRegistry,
  npmScope,
  quotes,
  configPath
) {
  return new Promise((resolve, reject) => {
    const homePath = process.env.HOME
      ? process.env.HOME
      : process.env.USERPROFILE;
    const args = {
      user: npmUser,
      password: npmPassword,
      email: npmEmail,
      registry: npmRegistry || 'https://registry.npmjs.org',
      scope: npmScope,
      quotes: quotes ? quotes : false,
      configPath: configPath ? configPath : path.join(homePath, '.npmrc')
    };

    login(args, (err, loginData) => {
      if (err) {
        reject(err);
      }

      readFile(args, (err, fileContents) => {
        if (err) {
          reject(err);
        }

        const newContents = generateAuthContent(args, fileContents, loginData);

        writeFile(args.configPath, newContents, err => {
          if (err) {
            reject(err);
          }

          resolve();
        });
      });
    });
  });
};
