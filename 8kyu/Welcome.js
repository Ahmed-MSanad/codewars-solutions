function greet(language){
    const allLanguages = 
                        [ "english", "Welcome"
                        , "czech", "Vitejte"
                        , "danish", "Velkomst"
                        , "dutch", "Welkom"
                        , "estonian", "Tere tulemast"
                        , "finnish", "Tervetuloa"
                        , "flemish", "Welgekomen"
                        , "french", "Bienvenue"
                        , "german", "Willkommen"
                        , "irish", "Failte"
                        , "italian", "Benvenuto"
                        , "latvian", "Gaidits"
                        , "lithuanian", "Laukiamas"
                        , "polish", "Witamy"
                        , "spanish", "Bienvenido"
                        , "swedish", "Valkommen"
                        , "welsh", "Croeso"
                        ];

    const searchLanguage = 
    allLanguages.findIndex(val => val === language);

    return searchLanguage === -1 ? "Welcome" : allLanguages[searchLanguage + 1];
}

// ---------------- -------------- ----------------- -------------


function greet2(lang) {
    var langs = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    };
	return langs[lang]||langs['english'];
}




function greet3(language) {
    var langs = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    };
	return language in langs ? langs[language] : langs['english'];
};




function greet4(language) {
    var langs = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    };
	return langs.hasOwnProperty(language) ? langs[language] : langs['english'];
};


console.log(greet4("lithuanian"));

console.log(greet4("Arabic"));
