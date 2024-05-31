//create element
let unorderedList = document.querySelector('ul');
let Items = document.createElement('li');

//adding element
unorderedList.append(Items);

//modify text
Items.innerText = 'Grey Anatomy';

//modifying classes and sttributes
Items.classList.add('list-items');
Items.classList.remove('list-items');
Items.setAttribute('class', 'list-items');
Items.removeAttribute('class');

console.log(Items.classList.contains('list-items'));

//remove element
Items.remove();