const quotes = [
    {
    quote: "You only live once, but if you do it right, once is enough.",
    writer: "-Mae West"
    },
    {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    writer: "-Albert Einstein"
    },
    {
    quote: "Never let the fear of striking out keep you from playing the game.",
    writer: "-Babe Ruth"
    },
    {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    writer: "-Steve Jobs"
    },
    {
    quote: "In order to write about life first you must live it.",
    writer: "-Ernest Hemingway"
    },
    {
    quote: "Life is not a problem to be solved, but a reality to be experienced.",
    writer: "-Soren Kierkegaard"
    },
    {
    quote: "The unexamined life is not worth living.",
    writer: "-Socrates"
    },
    {
    quote: "Turn your wounds into wisdom.",
    writer: "-Oprah Winfrey"
    },
    {
    quote: "The purpose of our lives is to be happy.",
    writer: "-Dalai Lama"
    },
    {
    quote: "Live for each second without hesitation.",
    writer: "-Elton John"
    }
    ];
    const colors = [
    "#00796B",
    "#1976D2",
    "#8BC34A",
    "#303F9F",
    "#C2185B",
    "#616161",
    "#5D4037",
    "#5D4037",
    "#009688",
    "#FFCCBC"
    ];
    let btn = document.querySelector("#Qbtn");
    let quote = document.querySelector(".quote");
    let writer = document.querySelector(".writer");
    var greetingElement = document.getElementById("greeting");
    function generateGreeting() {
    var date = new Date();
    var hour = date.getHours();
    if (hour >= 5 && hour < 12) {
    greetingElement.textContent = "Let's start our morning with a new quote";
    } else if (hour >= 12 && hour < 18) {
    greetingElement.textContent = "Let's start our afternoon with a new quote";
    } else {
    greetingElement.textContent = "Let's start our evening/night with a new quote";
    }
    }
    function generateRandomQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
    }
    function changeColors() {
    var randomColorIndex = Math.floor(Math.random() * colors.length);
    var randomColor = colors[randomColorIndex];
    document.body.style.backgroundColor = randomColor;
    btn.style.backgroundColor = randomColor;
    quote.style.color = randomColor;
    writer.style.color = randomColor;
    }
    generateGreeting();
    generateRandomQuote();
    changeColors();
    btn.addEventListener("click", function() {
    generateRandomQuote();
    changeColors();
    });