const config = {
  // Set UI Languages
  locales: ['de', 'fr'],
  translations: {
    en: {
      'app.components.LeftMenu.navbrand.title': 'remAid - CMS',
      'Auth.form.welcome.title': 'remAid - CMS',
      'Auth.form.welcome.subtitle': 'Please login with your user credentials.'
    },
    fr: {
      'app.components.LeftMenu.navbrand.title': 'remAid - CMS',
      'Auth.form.welcome.title': 'remAid - CMS',
      'Auth.form.welcome.subtitle': 'Veuillez vous connecter avec vos données d\'utilisateur.'
    },
    de: {
      'app.components.LeftMenu.navbrand.title': 'remAid - CMS',
      'Auth.form.welcome.title': 'remAid - CMS',
      'Auth.form.welcome.subtitle': 'Bitte melden Sie sich mit Ihren Benutzerdaten an.'
    }
  },
};

const bootstrap = (app) => {
  console.log(app)
};

export default {
  config,
  bootstrap,
};
