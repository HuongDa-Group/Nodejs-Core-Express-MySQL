const i18next = require("i18next");
const middleware = require("i18next-express-middleware");
const Backend = require('i18next-node-fs-backend');

i18next
    .use(middleware.LanguageDetector)
    .use(Backend)
    .init({
        preload: [
            "vi",
            "en"
        ],
        saveMissing: true,
        backend: {
            loadPath: __dirname + '/resource/lang/{{lng}}/{{ns}}.json'
        },
        fallBackLng: ['vi']
    });

module.exports = middleware.handle(i18next, {
    removeLngFromUrl: true
})