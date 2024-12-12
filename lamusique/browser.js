const BROWSER_JS_T = {
    nothingFoundForXxx: query => 'Nothing found for \'{query}\''.replace('{query}', query),
    showingFeaturedItems: 'Showing featured items',
    showingXxxResultsForXxx: (count, query) => 'Showing {count} results for \'{query}\''.replace('{count}', count).replace('{query}', query),
    xxxAndOthers: (xxx, othersLink) => '{xxx} and <a href="{others_link}">others</a>'.replace('{xxx}', xxx).replace('{others_link}', othersLink)
};

const LABEL_MODE = false;

const ARTISTS = [
    
];

const RELEASES = [
    {
    
    cover: 'cover_160.jpg?p2V7_7_OfsU',
    title: 'Fêtes foraines',
    tracks: [
        {
    
    number: '01',
    title: 'caf musique',
    url: 'fetes-foraines/1/'
}
,
{
    
    number: '02',
    title: 'fete foraine',
    url: 'fetes-foraines/2/'
}
,
{
    
    number: '03',
    title: 'paella musique',
    url: 'fetes-foraines/3/'
}
,
{
    
    number: '04',
    title: 'pate musique',
    url: 'fetes-foraines/4/'
}
,
{
    
    number: '05',
    title: 'sonerimusic',
    url: 'fetes-foraines/5/'
}

    ],
    url: 'fetes-foraines/'
}
,
{
    
    cover: 'cover_160.jpg?-4oX7ExzP-k',
    title: 'Mimzi',
    tracks: [
        {
    
    number: '01',
    title: 'afex pechin',
    url: 'mimzi/1/'
}
,
{
    
    number: '02',
    title: 'ayé ayé oyé',
    url: 'mimzi/2/'
}
,
{
    
    number: '03',
    title: 'bourgeons bourgeois',
    url: 'mimzi/3/'
}
,
{
    
    number: '04',
    title: 'cloches du matin',
    url: 'mimzi/4/'
}
,
{
    
    number: '05',
    title: 'des chaussettes de roue',
    url: 'mimzi/5/'
}
,
{
    
    number: '06',
    title: 'double door',
    url: 'mimzi/6/'
}
,
{
    
    number: '07',
    title: 'du chien au dauphin',
    url: 'mimzi/7/'
}
,
{
    
    number: '08',
    title: 'far v',
    url: 'mimzi/8/'
}
,
{
    
    number: '09',
    title: 'happy happy',
    url: 'mimzi/9/'
}
,
{
    
    number: '10',
    title: 'il fait chaud chez vous',
    url: 'mimzi/10/'
}
,
{
    
    number: '11',
    title: 'le seum encore',
    url: 'mimzi/11/'
}
,
{
    
    number: '12',
    title: 'mega controle',
    url: 'mimzi/12/'
}
,
{
    
    number: '13',
    title: 'meurs pour de bon stp',
    url: 'mimzi/13/'
}
,
{
    
    number: '14',
    title: 'point de rupture',
    url: 'mimzi/14/'
}
,
{
    
    number: '15',
    title: 'rituel dimanche',
    url: 'mimzi/15/'
}
,
{
    
    number: '16',
    title: 't\'aime le cochon',
    url: 'mimzi/16/'
}
,
{
    
    number: '17',
    title: 't\'as âs m\'jeire',
    url: 'mimzi/17/'
}
,
{
    
    number: '18',
    title: 'trouble angulaire',
    url: 'mimzi/18/'
}
,
{
    
    number: '19',
    title: 'welcome back sun',
    url: 'mimzi/19/'
}
,
{
    
    number: '20',
    title: 'william fanny',
    url: 'mimzi/20/'
}

    ],
    url: 'mimzi/'
}
,
{
    
    cover: 'cover_160.jpg?kzS3Tsjkyrg',
    title: 'Jour d\'anniv',
    tracks: [
        {
    
    number: '01',
    title: 'couper le gateau',
    url: 'jour-d-anniv/1/'
}
,
{
    
    number: '02',
    title: 'phallange religieuse',
    url: 'jour-d-anniv/2/'
}
,
{
    
    number: '03',
    title: 'ça recommence',
    url: 'jour-d-anniv/3/'
}
,
{
    
    number: '04',
    title: 'radar poisson',
    url: 'jour-d-anniv/4/'
}
,
{
    
    number: '05',
    title: 'miranda',
    url: 'jour-d-anniv/5/'
}
,
{
    
    number: '06',
    title: 'facile comme bonjour',
    url: 'jour-d-anniv/6/'
}
,
{
    
    number: '07',
    title: 'l&&a fête',
    url: 'jour-d-anniv/7/'
}
,
{
    
    number: '08',
    title: 'pas de place pour deux',
    url: 'jour-d-anniv/8/'
}
,
{
    
    number: '09',
    title: 'manoir vouté',
    url: 'jour-d-anniv/9/'
}
,
{
    
    number: '10',
    title: 'gargouillos',
    url: 'jour-d-anniv/10/'
}
,
{
    
    number: '11',
    title: 'fantominus',
    url: 'jour-d-anniv/11/'
}
,
{
    
    number: '12',
    title: 'requiem pour germain',
    url: 'jour-d-anniv/12/'
}
,
{
    
    number: '13',
    title: 'nain de trottoir',
    url: 'jour-d-anniv/13/'
}
,
{
    
    number: '14',
    title: 'loupogaro',
    url: 'jour-d-anniv/14/'
}
,
{
    
    number: '15',
    title: 'contre courant',
    url: 'jour-d-anniv/15/'
}

    ],
    url: 'jour-d-anniv/'
}
,
{
    
    cover: 'cover_160.jpg?uXNxF9otmrY',
    title: 'Au revoir loup',
    tracks: [
        {
    
    number: '01',
    title: 'Mister',
    url: 'au-revoir-loup/1/'
}
,
{
    
    number: '02',
    title: 'mister 2',
    url: 'au-revoir-loup/2/'
}
,
{
    
    number: '03',
    title: 'mister 3',
    url: 'au-revoir-loup/3/'
}
,
{
    
    number: '04',
    title: 'mister 4',
    url: 'au-revoir-loup/4/'
}
,
{
    
    number: '05',
    title: 'mister 5',
    url: 'au-revoir-loup/5/'
}
,
{
    
    number: '06',
    title: 'mister 8',
    url: 'au-revoir-loup/6/'
}

    ],
    url: 'au-revoir-loup/'
}
,
{
    
    cover: 'cover_160.jpg?J3Qwm7pPfEU',
    title: 'sauce castros',
    tracks: [
        {
    
    number: '01',
    title: 'héritage forcé',
    url: 'sauce-castros/1/'
}
,
{
    
    number: '02',
    title: 'les abeilles cools',
    url: 'sauce-castros/2/'
}
,
{
    
    number: '03',
    title: 'mentalo sirop C2 - active wear',
    url: 'sauce-castros/3/'
}
,
{
    
    number: '04',
    title: 'mentalo sirop C2 - piraterie occidentale',
    url: 'sauce-castros/4/'
}
,
{
    
    number: '05',
    title: 'merci à tous',
    url: 'sauce-castros/5/'
}
,
{
    
    number: '06',
    title: 'pauvres faiblesses',
    url: 'sauce-castros/6/'
}
,
{
    
    number: '07',
    title: 'tendre solitude',
    url: 'sauce-castros/7/'
}
,
{
    
    number: '08',
    title: 'tu veux manger',
    url: 'sauce-castros/8/'
}
,
{
    
    number: '09',
    title: 'un type imbuvable',
    url: 'sauce-castros/9/'
}
,
{
    
    number: '10',
    title: 'virage rapide',
    url: 'sauce-castros/10/'
}
,
{
    
    number: '11',
    title: 'vision trilobite',
    url: 'sauce-castros/11/'
}

    ],
    url: 'sauce-castros/'
}
,
{
    
    cover: 'cover_160.jpg?JGufRi6QR80',
    title: 'Marais montant OST',
    tracks: [
        {
    
    number: '01',
    title: 'balk',
    url: 'marais-montant-ost/1/'
}
,
{
    
    number: '02',
    title: 'chevalier',
    url: 'marais-montant-ost/2/'
}
,
{
    
    number: '03',
    title: 'dark sorciere',
    url: 'marais-montant-ost/3/'
}
,
{
    
    number: '04',
    title: 'starter',
    url: 'marais-montant-ost/4/'
}

    ],
    url: 'marais-montant-ost/'
}
,
{
    
    cover: 'cover_160.jpg?7RcbtxzMwtM',
    title: 'OST flipeur',
    tracks: [
        {
    
    number: '01',
    title: 'FLIP MASSIVE',
    url: 'ost-flipeur/1/'
}
,
{
    
    number: '02',
    title: 'nouse mix',
    url: 'ost-flipeur/2/'
}

    ],
    url: 'ost-flipeur/'
}
,
{
    
    cover: 'cover_160.jpg?-gTj_Qbte0c',
    title: 'Les dunes vraiment',
    tracks: [
        {
    
    number: '01',
    title: 'bouillir_l\'eau',
    url: 'les-dunes-vraiment/1/'
}
,
{
    
    number: '02',
    title: 'danger_la_police',
    url: 'les-dunes-vraiment/2/'
}
,
{
    
    number: '03',
    title: 'grenouille_pluie_V2',
    url: 'les-dunes-vraiment/3/'
}
,
{
    
    number: '04',
    title: 'le _bol_de_culture',
    url: 'les-dunes-vraiment/4/'
}
,
{
    
    number: '05',
    title: 'ouha_ouha_mono',
    url: 'les-dunes-vraiment/5/'
}
,
{
    
    number: '06',
    title: 'par_ou_par_ici_par_la_V2',
    url: 'les-dunes-vraiment/6/'
}
,
{
    
    number: '07',
    title: 'pepouze_transat',
    url: 'les-dunes-vraiment/7/'
}
,
{
    
    number: '08',
    title: 'sonne_sonne',
    url: 'les-dunes-vraiment/8/'
}
,
{
    
    number: '09',
    title: 'tadam_mono',
    url: 'les-dunes-vraiment/9/'
}

    ],
    url: 'les-dunes-vraiment/'
}

];
const browser = document.querySelector('#browser');
const browseButton = document.querySelector('button.browse');

const browseResults = browser.querySelector('#results');
const closeButton = browser.querySelector('button');
const searchField = browser.querySelector('input');
const statusField = browser.querySelector('[role="status"]');

const rootPrefix = browser.dataset.rootPrefix;

function truncateArtistList(artists, othersLink)  {
    const MAX_CHARS = 40;

    if (artists.length > 2) {
        const nameChars = artists.reduce((sum, artist) => sum + artist.name.length, 0);
        const separatorChars = (artists.length - 1) * 2; // All separating ", " between the artists

        if (nameChars + separatorChars > MAX_CHARS) {
            // Here we have more than two artists, we have a char limit,
            // and we cannot fit all artists within the limit, thus
            // we truncate the list.

            if (LABEL_MODE) {
                // In label mode we show at least one artist, then as many
                // additional ones as fit, e.g. "[artist],[artist] and
                // more"
                let charsUsed = 0;
                const truncatedArtists = artists
                    .filter(artist => {
                        if (charsUsed === 0) {
                            charsUsed += artist.name.length;
                            return true;
                        }

                        charsUsed += artist.name.length;
                        return charsUsed < MAX_CHARS;
                    });

                const rArtists = truncatedArtists
                    .map(artist => `<a href="${rootPrefix}${artist.url}">${artist.name}</a>`)
                    .join(", ");

                return BROWSER_JS_T.xxxAndOthers(rArtists, othersLink);
            }

            // In artist mode we show only "[catalog artist] and others".
            // Our sorting ensures the catalog artist is the first one,
            // so we can just take that.
            const rArtists = `<a href="${rootPrefix}${artists[0].url}">${artists[0].name}</a>`;

            return BROWSER_JS_T.xxxAndOthers(rArtists, othersLink);
        }
    }

    return rArtists = artists
        .map(artist => `<a href="${rootPrefix}${artist.url}">${artist.name}</a>`)
        .join(", ");
}

for (const release of RELEASES) {
    let img;
    if (release.cover) {
        img = document.createElement('img');
        img.src = rootPrefix + release.url + release.cover;
    } else {
        img = document.createElement('span');
        img.classList.add('placeholder');
    }

    const aText = document.createElement('a');
    aText.href = rootPrefix + release.url;

    const aImage = aText.cloneNode(true);
    aImage.tabIndex = -1;
    aImage.appendChild(img);

    aText.dataset.searchable = 'true';
    aText.textContent = release.title;

    const details = document.createElement('div');
    details.appendChild(aText);

    if (release.artists) {
        const artists = document.createElement('div');
        artists.classList.add('artists');
        artists.innerHTML = truncateArtistList(release.artists, `${rootPrefix}${release.url}`);
        details.appendChild(artists);
    }

    const row = document.createElement('div');
    row.appendChild(aImage);
    row.appendChild(details);
    browseResults.appendChild(row);

    for (const track of release.tracks) {
        const number = document.createElement('span');
        number.classList.add('number');
        number.textContent = track.number;

        const aTitle = document.createElement('a');
        aTitle.href = rootPrefix + track.url;

        const aImage = aTitle.cloneNode(true);
        aImage.tabIndex = -1;
        aImage.appendChild(img.cloneNode(true));

        aTitle.dataset.searchable = 'true';
        aTitle.textContent = track.title;

        const details = document.createElement('div');
        details.appendChild(number);
        details.appendChild(aTitle);

        if (track.artists) {
            const artists = document.createElement('div');
            artists.classList.add('artists');
            artists.innerHTML = truncateArtistList(track.artists, `${rootPrefix}${track.url}`);
            details.appendChild(artists);
        }

        const row = document.createElement('div');
        row.appendChild(aImage);
        row.appendChild(details);
        row.dataset.track = '';
        row.style.setProperty('display', 'none');
        browseResults.appendChild(row);
    }
}

for (const artist of ARTISTS) {
    const aText = document.createElement('a');
    aText.href = rootPrefix + artist.url;

    const imgPlaceholder = document.createElement('span');
    imgPlaceholder.classList.add('placeholder');

    const aImage = aText.cloneNode(true);
    aImage.tabIndex = -1;
    aImage.appendChild(imgPlaceholder);

    aText.dataset.searchable = 'true';
    aText.textContent = artist.name;

    const details = document.createElement('div');
    details.appendChild(aText);

    const row = document.createElement('div');
    row.appendChild(aImage);
    row.appendChild(details);
    browseResults.appendChild(row);
}

function hideBrowser() {
    browser.classList.remove('active');
    browseButton.setAttribute('aria-expanded', 'false');
    searchField.value = '';
    statusField.removeAttribute('aria-label');
    statusField.textContent = '';
    for (const result of browseResults.children) {
        const display = result.dataset.track === undefined;
        result.style.setProperty('display', display ? null : 'none');
    }
    browseButton.focus();
}

function showBrowser() {
    browser.classList.add('active');
    browseButton.setAttribute('aria-expanded', 'true');
    searchField.focus();
    statusField.setAttribute('aria-label', BROWSER_JS_T.showingFeaturedItems);
    statusField.textContent = '';
}

// When the browse/search modal is open and focus moves outside the page
// entirely (e.g. to the addressbar) but then re-enters the page, we need
// to make sure that it returns back to the browse/search modal (instead of
// to an obscured element in the main body)
document.body.addEventListener('focusin', event => {
    if (browser.classList.contains('active') && !browser.contains(event.target)) {
        searchField.focus();
    }
});

browser.addEventListener('focusout', event => {
    if (event.relatedTarget && !browser.contains(event.relatedTarget)) {
        hideBrowser();
    }
});

browser.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        event.preventDefault();
        hideBrowser();
    }
});

browseButton.addEventListener('click', () => {
    if (browser.classList.contains('active')) {
        hideBrowser();
    } else {
        showBrowser();
    }
});

closeButton.addEventListener('click', hideBrowser);

searchField.addEventListener('input', () => {
    const query = searchField.value.trim();

    if (query.length) {
        const regexp = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        let shown = 0;

        for (const element of browseResults.children) {
            const title = element.querySelector('[data-searchable]').textContent;
            const display = regexp.test(title);
            element.style.setProperty('display', display ? null : 'none');
            if (display) { shown += 1; }
        }

        if (shown === 0) {
            statusField.removeAttribute('aria-label');
            statusField.textContent = BROWSER_JS_T.nothingFoundForXxx(query);
        } else {
            statusField.setAttribute('aria-label', BROWSER_JS_T.showingXxxResultsForXxx(shown, query));
            statusField.textContent = '';
        }
    } else {
        for (const element of browseResults.children) {
            const display = element.dataset.track === undefined;
            element.style.setProperty('display', display ? null : 'none');
        }

        statusField.setAttribute('aria-label', BROWSER_JS_T.showingFeaturedItems);
        statusField.textContent = '';
    }
});
