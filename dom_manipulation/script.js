let title = document.querySelector('#heading');
let listItems = document.querySelectorAll('.list-items');


title.style.backgroundColor = 'orange';

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = 'red';
// }

listItems.forEach(item => {
    item.style.color = 'red';
});