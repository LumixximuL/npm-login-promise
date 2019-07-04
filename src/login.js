import RegClient from 'npm-registry-client';

const client = new RegClient({});

const login = (args, callback) => {
  const addUserCallback = (err, data) => {
    if (err) {
      return callback(err);
    }
    return callback(null, data);
  };

  client.adduser(
    args.registry,
    {
      auth: {
        username: args.user,
        password: args.password,
        email: args.email
      }
    },
    addUserCallback
  );
};

export default login;
