/*
    Every image here is under a Pixabay License
        https://pixabay.com/service/license/
        https://pixabay.com/service/terms/#license

*/
const rawList = [
    {
        id: 0,
        name: 'Adult size bed',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis quis massa sit amet elementum. Praesent rutrum tristique tincidunt. Sed blandit eleifend purus. Etiam cursus dui quis erat suscipit, ac imperdiet neque commodo.Sed eget lectus at enim maximus maximus vel ac felis.<br><br>Aenean tristique, magna nec laoreet volutpat, diam massa dignissim dui, nec imperdiet arcu tellus eget est.<br><br>Proin tempor quam ac mi ornare iaculis. Nam congue eu orci molestie molestie. In eget nisi at quam volutpat euismod. Suspendisse cursus, justo ut viverra dapibus, elit erat aliquet justo, id consectetur justo neque elementum nisi. Maecenas molestie consectetur vehicula. Nunc nec lorem interdum, posuere est eu, consectetur urna. In turpis dui, lobortis quis nibh ut, ornare sodales purus.',
        image: 'https://cdn.pixabay.com/photo/2018/01/24/15/08/live-3104077_960_720.jpg',
        price: 379.99
    },
    {
        id: 0,
        name: 'Outdoor armchair',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis quis massa sit amet elementum. Praesent rutrum tristique tincidunt. Sed blandit eleifend purus. Etiam cursus dui quis erat suscipit, ac imperdiet neque commodo.Sed eget lectus at enim maximus maximus vel ac felis.<br><br>Aenean tristique, magna nec laoreet volutpat, diam massa dignissim dui, nec imperdiet arcu tellus eget est.<br><br>Proin tempor quam ac mi ornare iaculis. Nam congue eu orci molestie molestie. In eget nisi at quam volutpat euismod. Suspendisse cursus, justo ut viverra dapibus, elit erat aliquet justo, id consectetur justo neque elementum nisi. Maecenas molestie consectetur vehicula. Nunc nec lorem interdum, posuere est eu, consectetur urna. In turpis dui, lobortis quis nibh ut, ornare sodales purus.',
        image: 'https://cdn.pixabay.com/photo/2017/06/24/07/49/chair-2436892_960_720.jpg',
        price: 39.99
    },
    {
        id: 0,
        name: 'Night table',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis quis massa sit amet elementum. Praesent rutrum tristique tincidunt. Sed blandit eleifend purus. Etiam cursus dui quis erat suscipit, ac imperdiet neque commodo.Sed eget lectus at enim maximus maximus vel ac felis.<br><br>Aenean tristique, magna nec laoreet volutpat, diam massa dignissim dui, nec imperdiet arcu tellus eget est.<br><br>Proin tempor quam ac mi ornare iaculis. Nam congue eu orci molestie molestie. In eget nisi at quam volutpat euismod. Suspendisse cursus, justo ut viverra dapibus, elit erat aliquet justo, id consectetur justo neque elementum nisi. Maecenas molestie consectetur vehicula. Nunc nec lorem interdum, posuere est eu, consectetur urna. In turpis dui, lobortis quis nibh ut, ornare sodales purus.',
        image: 'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_960_720.jpg',
        price: 19.99
    },
    {
        id: 0,
        name: 'Angle desk',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis quis massa sit amet elementum. Praesent rutrum tristique tincidunt. Sed blandit eleifend purus. Etiam cursus dui quis erat suscipit, ac imperdiet neque commodo.Sed eget lectus at enim maximus maximus vel ac felis.<br><br>Aenean tristique, magna nec laoreet volutpat, diam massa dignissim dui, nec imperdiet arcu tellus eget est.<br><br>Proin tempor quam ac mi ornare iaculis. Nam congue eu orci molestie molestie. In eget nisi at quam volutpat euismod. Suspendisse cursus, justo ut viverra dapibus, elit erat aliquet justo, id consectetur justo neque elementum nisi. Maecenas molestie consectetur vehicula. Nunc nec lorem interdum, posuere est eu, consectetur urna. In turpis dui, lobortis quis nibh ut, ornare sodales purus.',
        image: 'https://cdn.pixabay.com/photo/2020/08/25/18/28/workplace-5517744_960_720.jpg',
        price: 89.87
    },
    {
        id: 0,
        name: 'Travel hamac',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis quis massa sit amet elementum. Praesent rutrum tristique tincidunt. Sed blandit eleifend purus. Etiam cursus dui quis erat suscipit, ac imperdiet neque commodo.Sed eget lectus at enim maximus maximus vel ac felis.<br><br>Aenean tristique, magna nec laoreet volutpat, diam massa dignissim dui, nec imperdiet arcu tellus eget est.<br><br>Proin tempor quam ac mi ornare iaculis. Nam congue eu orci molestie molestie. In eget nisi at quam volutpat euismod. Suspendisse cursus, justo ut viverra dapibus, elit erat aliquet justo, id consectetur justo neque elementum nisi. Maecenas molestie consectetur vehicula. Nunc nec lorem interdum, posuere est eu, consectetur urna. In turpis dui, lobortis quis nibh ut, ornare sodales purus.',
        image: 'https://cdn.pixabay.com/photo/2016/11/19/15/30/chill-1839867_960_720.jpg',
        price: 39.99
    },
    {
        id: 0,
        name: '3 seater couch',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis quis massa sit amet elementum. Praesent rutrum tristique tincidunt. Sed blandit eleifend purus. Etiam cursus dui quis erat suscipit, ac imperdiet neque commodo.Sed eget lectus at enim maximus maximus vel ac felis.<br><br>Aenean tristique, magna nec laoreet volutpat, diam massa dignissim dui, nec imperdiet arcu tellus eget est.<br><br>Proin tempor quam ac mi ornare iaculis. Nam congue eu orci molestie molestie. In eget nisi at quam volutpat euismod. Suspendisse cursus, justo ut viverra dapibus, elit erat aliquet justo, id consectetur justo neque elementum nisi. Maecenas molestie consectetur vehicula. Nunc nec lorem interdum, posuere est eu, consectetur urna. In turpis dui, lobortis quis nibh ut, ornare sodales purus.',
        image: 'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg',
        price: 299.49
    }
];

export const getItems = () => {
    let id = 1;
    rawList.forEach(element => {
        element.id = id;
        id += 1;
    });
    return rawList;
}

export const getItemById = (itemId) => {
    let itemReturn;
    getItems().forEach(item => {
        if (item.id == itemId) {
            itemReturn = item;
        }
    });
    return itemReturn;
}