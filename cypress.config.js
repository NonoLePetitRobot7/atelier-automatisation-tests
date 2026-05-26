const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Screenshots automatiques en cas d'échec (récupérés comme artifact en CI)
  screenshotOnRunFailure: true,

  // Enregistrement vidéo de chaque run (récupéré comme artifact en CI)
  video: true,

  // Retries : 1 tentative supplémentaire en CI si un test échoue
  retries: {
    runMode: 1,   // en CI (cypress run)
    openMode: 0,  // en local (cypress open)
  },

  e2e: {
    // Résolution de l'écran simulé
    viewportWidth: 1280,
    viewportHeight: 720,

    // Timeout par défaut pour trouver un élément (ms)
    defaultCommandTimeout: 5000,

    setupNodeEvents(on, config) {
      // Ici on peut ajouter des plugins Node.js si besoin
    },
  },
});
