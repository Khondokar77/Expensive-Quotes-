// List of expensive quotes
const quotes = [
    { text: "Price is what you pay. Value is what you get.", author: "Warren Buffett" },
    { text: "Time is more valuable than money. You can get more money, but you cannot get more time.", author: "Jim Rohn" },
    { text: "The greatest wealth is to live content with little.", author: "Plato" },
    { text: "A wise person should have money in their head, but not in their heart.", author: "Jonathan Swift" },
    { text: "It's not the money that makes you rich, it's the knowledge.", author: "Robert Kiyosaki" },
    { text: "If you buy things you do not need, soon you will have to sell things you need.", author: "Warren Buffett" },
    { text: "The rich invest in time, the poor invest in money.", author: "Warren Buffett" },
    { text: "Don't tell me what you value. Show me your budget, and I'll tell you what you value.", author: "Joe Biden" },
    { text: "He who loses money, loses much; He who loses a friend, loses much more; He who loses faith, loses all.", author: "Eleanor Roosevelt" },
    { text: "I don't want to make money. I just want to be wonderful.", author: "Marilyn Monroe" },
    { text: "Opulence is the ability to afford luxury without anxiety.", author: "Unknown" },
    { text: "Luxury must be comfortable, otherwise it is not luxury.", author: "Coco Chanel" },
    { text: "Wealth is not about having a lot of money; it's about having a lot of options.", author: "Chris Rock" },
    { text: "Money is a great servant but a bad master.", author: "Francis Bacon" },
    { text: "The best investment you can make is in yourself.", author: "Warren Buffett" },
    { text: "Success is not just about making money. It's about making a difference.", author: "Michelle Obama" },
    { text: "Wealth is the ability to fully experience life.", author: "Henry David Thoreau" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Fortune sides with him who dares.", author: "Virgil" },
    { text: "The rich think long-term, the poor think short-term.", author: "Robert Kiyosaki" },
    { text: "You must gain control over your money or the lack of it will forever control you.", author: "Dave Ramsey" },
    { text: "The real measure of your wealth is how much you'd be worth if you lost all your money.", author: "Unknown" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "Money is like love; it kills slowly and painfully the one who withholds it, and enlivens the other who turns it on his fellow man.", author: "Kahlil Gibran" },
    { text: "Too many people spend money they earned to buy things they don't want to impress people they don't like.", author: "Will Rogers" },
    { text: "Do not save what is left after spending, but spend what is left after saving.", author: "Warren Buffett" },
    { text: ".A luxury once enjoyed becomes a necessity.", author: "Andrew Tobias" },
    { text: "Wealth is not his that has it, but his that enjoys it.", author: "Benjamin Franklin" },
    { text: "No wealth can ever make a bad man at peace with himself.", author: "Plato" },
    { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
    { text: "If opportunity doesn't knock, build a door.", author: "Milton Berle" },
    { text: "Owning things is an illusion. The only thing you really own is your time.", author: "Naval Ravikant" },
    { text: "Don't go broke trying to look rich.", author: "Unknown" },
    { text: "It's not how much money you make, but how much money you keep.", author: "Robert Kiyosaki" },
    { text: "Luxury is not about buying expensive things; it's about living in a way where you appreciate the finer things in life.", author: "Unknown" },
    { text: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Rich people plan for three generations. Poor people plan for Saturday night.", author: "Gloria Steinem" },
    { text: "A fool and his money are soon parted.", author: "Thomas Tusser" },
    { text: "There are people who have money, and there are people who are rich.", author: "Coco Chanel" },
    { text: "A man who pays his bills on time is soon forgotten.", author: "Oscar Wilde" },
    { text: "The easiest way to double your money is to fold it over and put it back in your pocket.", author: "Will Rogers" },
    { text: "Time well spent results in more money to spend, more money to save, and more time to vacation.", author: "Zig Ziglar" },
    { text: "Wealth is not about having a lot of money. It's about having a lot of time.", author: "Unknown" },
    { text: "A good reputation is more valuable than money.", author: "Publilius Syrus" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "If you can count your money, work harder.", author: "Unknown" },
    { text: "The goal isn't more money. The goal is living life on your terms.", author: "Chris Brogan" },
    { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
    { text: "The most expensive thing in the world is trust. It can take years to earn and just a matter of seconds to lose.", author: "Unknown" },
    { text: "The cost of being wrong is less than the cost of doing nothing.", author: "Seth Godin" },
    { text: "The price of greatness is responsibility.", author: "Winston Churchill" },
    { text: "The rich invest in assets, the poor invest in liabilities.", author: "Robert Kiyosaki" },
    { text: "Fortune favors the bold.", author: "Virgil" },
    { text: "A man is rich in proportion to the number of things he can afford to let alone.", author: "Henry David Thoreau" },
    { text: "Luxury is the ease of a t-shirt in a very expensive dress.", author: "Karl Lagerfeld" },
    { text: "The way to become rich is to put all your eggs in one basket and then watch that basket.", author: "Andrew Carnegie" },
    { text: "True luxury is not about wealth but about having the freedom of choice.", author: "Unknown" },
    { text: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.", author: "Ayn Rand" },
    { text: "A truly rich man is one whose children run into his arms when his hands are empty.", author: "Unknown" },
    { text: "The most luxurious possession, the richest treasure anybody has, is their personal dignity.", author: "Jackie Kennedy" },
    { text: "The most expensive hobby a rich man could have is a poor man's mentality.", author: "Unknown" },
    { text: "The first rule of success is to never lose money. The second rule is to never forget the first rule.", author: "Warren Buffett" },
    { text: "When you understand that your time is the most valuable thing you have, you begin to make better decisions.", author: "Unknown" },
    { text: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus" },
    { text: "The greatest luxury is being free.", author: "Manolo Blahnik" },
    { text: "The best way to predict your future is to create it.", author: "Peter Drucker" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "Luxury is not a necessity to me, but beautiful and good things are.", author: "Anaïs Nin" },
    { text: "Rich people acquire assets. The poor and middle class acquire liabilities that they think are assets.", author: "Robert Kiyosaki" },
    { text: "The real cost of anything is the amount of life you are willing to exchange for it.", author: "Henry David Thoreau" },
    { text: "The most expensive thing in the world is experience. It takes years to earn.", author: "Unknown" },
    { text: "It's not the employer who pays the wages. Employers only handle the money. It's the customer who pays the wages.", author: "Henry Ford" },
    { text: "Do what you love and you'll never work another day in your life.", author: "Marc Anthony" },
    { text: "Luxury is in each detail.", author: "Hubert de Givenchy" },
    { text: "The key to success is to own nothing, but control everything.", author: "Nelson Rockefeller" },
    { text: "Money doesn't buy happiness, but it's better to cry in a Ferrari.", author: "Unknown" },
    { text: "Don't buy luxury before you buy your freedom.", author: "Naval Ravikant" },
    { text: "A bank is a place that will lend you money if you can prove that you don't need it.", author: "Bob Hope" },
    { text: "The only way to be truly rich is to do what you love and make it pay.", author: "Unknown" },
    { text: "Owning things is an illusion. The only thing you really own is your time.", author: "Naval Ravikant" },
    { text: "The more you learn, the more you earn.", author: "Warren Buffett" },
    { text: "An expensive watch is a cheap investment in making people take you seriously.", author: "Unknown" },
    { text: "If you don't find a way to make money while you sleep, you will work until you die.", author: "Warren Buffett" },
    { text: "Opulence is not about money. It's about the peace of mind that comes with financial independence.", author: "Unknown" },
    { text: "Time is the only luxury you can't buy.", author: "Virgil Abloh" },
    { text: "Wealth is like seawater; the more we drink, the thirstier we become.", author: "Arthur Schopenhauer" },
    { text: "He who sacrifices freedom for security deserves neither.", author: "Benjamin Franklin" },
    { text: "I'd rather live rich than die rich.", author: "Unknown" },
    { text: "A poor man with wealth in his heart is richer than a rich man with an empty one.", author: "Unknown" },
    { text: "Luxury is when you can afford not only the things that cost money, but also the things that cost time.", author: "Unknown" },
    { text: "A good investment is when you buy something that appreciates in value, not just in price.", author: "Unknown" },
    { text: "There's no way to happiness. Happiness is the way.", author: "Thich Nhat Hanh" },
    { text: "It is a luxury to be understood.", author: "Ralph Waldo Emerson" },
    { text: "The most expensive thing in the world is regret.", author: "Unknown" },
    { text: "Rich is not about how much you have, it's about how much you can give.", author: "Unknown" },
    { text: "True wealth is being able to afford anything you want, but choosing not to.", author: "Unknown" },
    { text: "Luxury is an attitude, not a price tag.", author: "Unknown" },
    { text: "If something is expensive, but it buys you back time, it's cheap.", author: "Naval Ravikant" }
];

// Load saved quotes from localStorage
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Function to show a random quote
function showRandomQuote() {
    if (quotes.length === 0) return;

    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex].text;
    document.getElementById("author").innerText = `-- ${quotes[randomIndex].author}`;

    // Play sound when clicking the button
    playSound();
}

// Scroll Animation Trigger
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.container, .favorites').forEach(el => {
        observer.observe(el);
    });
});

// Function to play sound
function playSound() {
    let sound = document.getElementById("sound");
    if (sound) {
        sound.currentTime = 0; // Reset sound
        sound.play().catch(error => console.log("Sound play error:", error));
    } else {
        console.log("Audio element not found");
    }
}

// Function to fix autoplay issues
function enableSound() {
    let sound = document.getElementById("sound");
    if (sound) {
        sound.play().then(() => {
            console.log("Audio unlocked");
        }).catch(error => console.log("Audio unlock error:", error));
    }
}

// Attach event listener to fix mobile audio issue
document.addEventListener("click", enableSound);

// Function to save a favorite quote
function saveFavorite() {
    const quoteText = document.getElementById("quote").innerText;
    const authorText = document.getElementById("author").innerText;

    if (!favorites.some(q => q.text === quoteText)) {
        favorites.push({ text: quoteText, author: authorText });
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Quote saved!");  // Confirmation message
    } else {
        alert("This quote is already saved.");
    }
}

// Function to display saved quotes (only runs on saved.html)
function displayFavorites() {
    const favList = document.getElementById("fav-list");
    if (!favList) return; // Only run if on saved.html

    favList.innerHTML = "";
    favorites.forEach(q => {
        const li = document.createElement("li");
        li.innerText = `${q.text} ${q.author}`;
        favList.appendChild(li);
    });
}

// Function to copy a quote to clipboard
function copyQuote() {
    const quoteText = document.getElementById("quote").innerText;
    const authorText = document.getElementById("author").innerText;
    const fullQuote = `${quoteText} ${authorText}`;

    navigator.clipboard.writeText(fullQuote).then(() => {
        alert("Quote copied!");
    });
}

// Run functions on page load
window.onload = function () {
    if (document.getElementById("quote")) {
        showRandomQuote();
    }
    displayFavorites();
};
