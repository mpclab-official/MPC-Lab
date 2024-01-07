const {
    router,
    path,
    config,
    languages_list,
    languages_translate,
    language_navigation,
    checkPageRedirect,
    getUserData,
} = require('./common.js');

// HOME
router.get('/:language', checkPageRedirect, (req, res) => {
    getUserData(req.session.userID, (err, data) => {
        if (data) userData = data;
        else userData = { colorTheme: "light" };
        const language_index = languages_list.indexOf(req.params.language);
        if (language_index == -1) res.redirect(`/${languages_list[0]}`);
        const languages_translate_pack = languages_translate[language_index];
        const navigation_translate_pack = language_navigation[language_index];
        res.render(path.join(config.path, 'page', 'home'), {
            title: config.name, language_code: req.params.language, favicon: config.favicon, logo: config.logo, logo_s: config.logo_s, background_image: config.background_image, navigation_translate_pack, ...languages_translate_pack, pageStyle: {
                colorTheme: userData.colorTheme,
            }, userData
        });
    });
});

module.exports = router;