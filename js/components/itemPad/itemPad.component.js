export const render = (item, route) => {
    const itemPad = document.createElement('a');
    itemPad.setAttribute('class', 'item-pad');
    itemPad.setAttribute('href', route);
    itemPad.innerHTML = 
        '<div class="item-pad-image" style="background-image: url(' + item.image + ');" alt="item-depiction"></div>' +
        '<span class="item-pad-name">' + item.name + '</span>';

    return itemPad;
}