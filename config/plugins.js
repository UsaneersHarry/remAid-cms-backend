module.exports = ({ env }) => ({
  "fuzzy-search": {
    enabled: false,
    /*
    config: {
      contentTypes: [
        {
          uid: "api::feature.feature",
          modelName: "feature",
          transliterate: true,
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: -600,
            limit: 10,
            keys: [
              {
                name: "name",
                weight: 100,
              },
              {
                name: "description",
                weight: -100,
              },
            ],
          },
        },
      ],
    },

     */
  },
});
