const quotes = [{
        quote: "The only source of knowledge is experience.",
        author: "Albert Einstein"
    },
    {
        quote: "",
        author: ""
    },
    {
        quote: "",
        author: ""
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote["quote"]
author.innerText = todaysQuote["author"]