import * as SERVICE_PWA from '../../pwa.service.js';

const pageTitle = 'About';

const renderView = () => {

    SERVICE_PWA.setHTMLTitle(pageTitle);
    
    const page = document.createElement('div');
    page.appendChild(document.createElement('h1')).innerHTML =
        pageTitle;
    page.appendChild(document.createElement('p')).innerHTML =
        'Made by laz-R with ♥';
    
    document.getElementById('main').appendChild(page);
}

renderView();
