module.exports = ({ env }) => ({
  host: env('HOST', 'https://strapi-production-90d4.up.railway.app/'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
