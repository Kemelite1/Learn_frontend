import generateJoke from './generateJoke';
import '../styles/main.scss'
import holberton from './assets/holberton.jpg'

const holbertonImg = document.getElementById('holbertonimg')
holbertonImg.src = holberton

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()