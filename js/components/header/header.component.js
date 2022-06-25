export const render = () => {
    const header = document.createElement('header');
    header.innerHTML =
        '<span class="header-logo" alt="app logo">ES6 pwa</span>' +
        '<nav class="header-nav">' +
            '<ul class="header-nav-ul">' +
                '<li class="header-nav-item">' +
                    '<a href="./index.html">Home</a>' +
                '</li>' +
                '<li class="header-nav-item">' +
                    '<a href="./items.html">Items</a>' +
                '</li>' +
            '</ul>' +
        '</nav>';

    document.getElementById('body').insertBefore(header, document.getElementById('main'));
}