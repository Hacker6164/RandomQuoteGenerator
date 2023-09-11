const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '10c8616152msh047b316535aee79p129f12jsnec53395f2a09',
        'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
    }
};

const getQuote = () => {
    LoadingBar.innerHTML = "Loading"; // Set LoadingBar to "Loading" initially

    const loadingInterval = setInterval(() => {
        LoadingBar.innerHTML += "."; // Create a loading..... animation
    }, 500);

    fetch('https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes', options)
        .then(response => response.json())
        .then((response) => {
            clearInterval(loadingInterval); // Stop the dot animation effect

            quote.innerHTML = response[0].quote;
            author.innerHTML = "- " + response[0].author;
            category.innerHTML = response[0].category;

            // Stop the LoadingBar as the data is received
            LoadingBar.innerHTML = "";
            footer.innerHTML = "--Thankyou for visiting--";

            // Call the function to change the card's background color
            changeCardBackgroundColor();

            changeBodyBackgroundColor();
        })
        .catch(err => console.error(err));
}

// A function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// A function to change the card's background color
function changeCardBackgroundColor() {
    const card = document.getElementById('customCard');
    const randomColor = getRandomColor();
    card.style.backgroundColor = randomColor;
}
//A function to change the body's background color
function changeBodyBackgroundColor() {
    const body = document.body;
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
}


btn.addEventListener("click", () => {
    getQuote();
});
