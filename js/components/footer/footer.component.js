export const render = () => {
    const footer = document.createElement('footer');
    footer.innerHTML =
        '<div>' +
            '&copy; 2022 - v 1.0 - laz_R - <a href="./about.html">About</a>' +
        '</div>';

    document.getElementById('body').appendChild(footer);
}