let buttonElement = document.querySelector('#new-quote');
let quoteElement = document.querySelector('.quote');
let personElement = document.querySelector('.person');

const quotes = [
    {
        quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
        person: `Nelson Mandela`
    },
    {
        quote: `"The way to get started is to quit talking and begin doing."`,
        person: `Walt Disney`
    },
    {
        quote: `"If life were predictable it would cease to be life, and be without flavor."`,
        person: `Eleanor Roosevelt`
    },
    {
        quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
        person: `Oprah Winfrey`
    },
    {
        quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
        person: `James Cameron`
    },
    {
        quote: `"Life is what happens when you're busy making other plans."`,
        person: `John Lennon`
    },
    {
        quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
        person: `Mother Teresa`
    },
    {
        quote: `"When you reach the end of your rope, tie a knot in it and hang on."`,
        person: `Franklin D. Roosevelt`
    },
    {
        quote: `"Always remember that you are absolutely unique. Just like everyone else."`,
        person: `Margaret Mead`
    },
    {
        quote: `"Don't judge each day by the harvest you reap but by the seeds that you plant."`,
        person: `Robert Louis Stevenson`
    }
];


buttonElement.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[random].quote;
    personElement.innerText = quotes[random].person;
})