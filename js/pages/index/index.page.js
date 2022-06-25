import * as COMPONENT_FOOTER from '../../components/footer/footer.component.js'
import * as SERVICE_PWA from '../../pwa.service.js';

const pageTitle = 'ES6 pwa';

const renderView = () => {

    SERVICE_PWA.setHTMLTitle(pageTitle);
    
    const page = document.createElement('div');
    page.appendChild(document.createElement('h1')).innerHTML =
        'Welcome';
    page.appendChild(document.createElement('p')).innerHTML =
        'This is a template for a Vanilla JavaScript ES6 static PWA with modules, hosted on GitHub Pages.';

    page.appendChild(document.createElement('h2')).innerHTML =
        'How ?';
    page.appendChild(document.createElement('p')).innerHTML =
        'Everything is made in house.<br>' +
        'No library. No framework.<br>' +
        'Nothing.<br><br>' +
        'Not even Bootstrap. You don\'t need Bootstrap.<br>' +
        'Just learn CSS ♥</br>';

    page.appendChild(document.createElement('h2')).innerHTML =
        'Why ?';
    page.appendChild(document.createElement('p')).innerHTML =
        'Vanilla HTML, vanilla CSS, vanilla JS, the point here is no <b>compilation</b>, no <b>versioning problems</b>, no <b>framework specific synthax</b> to learn.<br>' +
        'Basically a POC, not gonna lie.';
    page.appendChild(document.createElement('h3')).innerHTML =
        'Also'
    page.appendChild(document.createElement('p')).innerHTML =
        'Everything is here and customizable.<br>You don\'t like the way I handle my CSS ? Just change it, it\'s right there.';
    
    document.getElementById('main').appendChild(page);
}

renderView();
COMPONENT_FOOTER.render();