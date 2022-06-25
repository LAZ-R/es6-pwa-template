import * as DATA_ITEMS from '../../data/items.data.js';
import * as SERVICE_PWA from '../../pwa.service.js';

const ID = new URLSearchParams(window.location.search).get('id');
const item = DATA_ITEMS.getItemById(ID);
const pageTitle = item.name;

const renderView = () => {

    SERVICE_PWA.setHTMLTitle(pageTitle);

    const page = document.createElement('div');
    page.appendChild(document.createElement('h1')).innerHTML =
        pageTitle;
    page.appendChild(document.createElement('p')).innerHTML =
        'This is a page to display an item details.';

    const itemContainer = document.createElement('div');
    itemContainer.setAttribute('class', 'item-container');

    itemContainer.innerHTML = 
        '<div class="item-details-image" style="background-image: url(' + item.image + ');"></div>' +
        '<div class="item-details">' +
            '<span class="item-price">$' + item.price + '</span>' +
            '<div class="detail">Description : ' +
                '<p class="detail-text">' + item.desc + '</p>' +
            '</div>' +
            '<button class="primary-button">Add to cart</button>' +
        '</div>';

    page.appendChild(itemContainer);
    
    document.getElementById('main').appendChild(page);
}

renderView();
