import generateJoke from './generateJoke';
import '../styles/main.scss'
import holberton from './assets/holberton.jpg'

const holbertonImg = document.getElementById('holbertonimg')
holbertonImg.src = holberton



console.log(generateJoke())
console.log('welcome to the good life');