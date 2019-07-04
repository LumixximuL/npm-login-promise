import fs from 'fs';

export const readFile = (args, callback) => {
  fs.readFile(args.configPath, 'utf-8', (err, contents) => {
    if (err) {
      return callback(err, '');
    }

    return callback(null, contents);
  });
};

export const writeFile = (configPath, lines, callback) => {
  fs.writeFile(configPath, lines.join('\n') + '\n', callback);
};
