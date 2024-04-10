import env from '@main/app.env';
module.exports = {
  client: 'pg',
  connection: {
    host: env.host,
    user: env.user,
    password: env.password,
    database: env.database,
  },
};
