module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // HIN: added block admin
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'bea672755ee114c92076d01a2cf099a0'),
    },
    url: "/dashboard"
  },
});
