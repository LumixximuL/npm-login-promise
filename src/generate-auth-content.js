const generateAuthContent = (args, contents, response) => {
  const lines = contents ? contents.split('\n') : [];

  if (args.scope !== undefined) {
    const scopeWrite = lines.findIndex(element => {
      if (element.indexOf(args.scope + ':registry=' + args.registry) !== -1) {
        element = args.scope + ':registry=' + args.registry;

        return true;
      }

      return false;
    });

    if (scopeWrite === -1) {
      lines.push(args.scope + ':registry=' + args.registry);
    }
  }

  const authWrite = lines.findIndex((element, index, array) => {
    if (
      element.indexOf(
        args.registry.slice(args.registry.search(/\:\/\//, '') + 1) +
          '/:_authToken='
      ) !== -1
    ) {
      array[index] = element.replace(
        /authToken\=.*/,
        'authToken=' +
          (args.quotes ? '"' : '') +
          response.token +
          (args.quotes ? '"' : '')
      );

      return true;
    }

    return false;
  });

  if (authWrite === -1) {
    lines.push(
      args.registry.slice(args.registry.search(/\:\/\//, '') + 1) +
        '/:_authToken=' +
        (args.quotes ? '"' : '') +
        response.token +
        (args.quotes ? '"' : '')
    );
  }

  return lines.filter(element => {
    if (element === '') {
      return false;
    }
    return true;
  });
};

export default generateAuthContent;
