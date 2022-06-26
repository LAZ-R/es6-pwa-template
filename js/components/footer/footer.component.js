export const render = () => {
    const footer = document.createElement('footer');
    footer.innerHTML =
        '<div>' +
            '&copy; 2022 - v 1.13 - <a href="https://laz-r.github.io/">laz_R</a> - <a href="./about.html">About</a>' +
        '</div>';

    document.getElementById('body').appendChild(footer);
}