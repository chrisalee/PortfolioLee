const data = {
    projects: [
        {
            _id: '1',
            name: 'Amazon Clone',
            images: ['/images/AmazonClone.png', '/images/AmazonClone2.png', '/images/AmazonClone3.png', '/images/AmazonClone4.png'],
            subtitle: 'ReactJS, Stripe, Firebase',
            description: "ReactJS clone of the homepage of Amazon's web app. Deployed with Firebase, and used the Stripe API.",
            description2: "Created a database for the items being sold within the site, and worked with Stripe to allow credit card payments.  Orders are stored in Firebase, and there is a screen that can view all past orders.",
            url: "https://challenge-20d6d.web.app/",
            category: "View Website"
        },
        {
            _id: '2',
            name: 'Covid-19 Tracker',
            images: ['/images/CovidTracker.png', '/images/CovidTracker2.png'],
            subtitle: 'ReactJS, Leaflet, ChartJS, disease.sh API, Firebase',
            description: "A webapp to see the COVID-19 cases in the world.",
            description2: "Added a global map to the website to show locations on the map.  The chart is linked to the countries and shows a line graph up to four months.  The data comes from the disease.sh API, and that data generates the statistics for the number of cases, deaths, and recovered.",
            url: "https://covid-tracker-45a19.web.app/",
            category: "View Website"
        },
        {
            _id: '3',
            name: 'YouTube Clone',
            images: ['/images/YouTubeClone.png', '/images/YouTubeClone2.png'],
            subtitle: 'ReactJS, Firebase',
            description: "ReactJs clone of the homepage of YouTube's homepage.",
            description2: "Deployed with Firebase, and worked with the search bar, learning how the process works.",
            url: "https://challenge-20d6d.web.app/",
            category: "View Website"
        },
        {
            _id: '4',
            name: 'e-Commerce',
            images: ['/images/e-Commerce.png', '/images/e-Commerce2.png', '/images/e-Commerce3.png', '/images/e-Commerce4.png', '/images/e-Commerce5.png', '/images/e-Commerce6.png'],
            subtitle: 'ReactJS, React Redux, Paypal Developer API',
            description: "A shopping e-Commerce site built with React and Redux.  MERN full-stack web-app.",
            description2: "A more in-depth e-commerce site that includes user registration and login to store user information, and user information can be updated and edited.  Screens to view all products, a single product, user info, shopping cart, order history (with orders updating about shipments and payments), and all past orders.  Redux was used to create constants, reducers, and actions.  Paypal developer API to secure payments and allowing customers to also use credit cards.",
            url: "https://github.com/chrisalee/reactECommerce",
            category: "View code on GitHub"
        },
        {
            _id: '5',
            name: 'Wildfire Tracker',
            images: ['/images/WildfireTracker.png', '/images/WildfireTracker3.png', '/images/WildfireTracker2.png'],
            subtitle: 'ReactJS, Google Maps API, NASA EONET API',
            description: "ReactJs project to track natural events using EONET (The Earth Observatory Natural Event Tracker).",
            description2: "Google maps was used to create the map in the background, and Nasa's EONET API was used to populate the map with natural disasters that are currently happening around the globe.  All natural fires, icebergs, and snow storms; and they are placed on the map using the events latitude and longitude.  By clicking on one of the natural disasters on the map it displays the event's information.",
            url: "https://github.com/chrisalee/reactWildfireTracker",
            category: "View code on GitHub"
        },
        {
            _id: '6',
            name: 'Weather App',
            images: ['/images/WeatherApp.png', '/images/WeatherApp2.png'],
            subtitle: 'ReactJS, openWeather API',
            description: "A weather app created with ReactJS",
            description2: "Use the search bar to search cities around the world to find the temperature in Fahrenheit.  By using the openweather API, data from the city includes the temperature, the forecast, and cloudy conditions.",
            url: "https://github.com/chrisalee/reactWeatherApp",
            category: "View code on GitHub"
        },
        {
            _id: '7',
            name: 'Expense Tracker',
            images: ['/images/ExpenseTracker.png', '/images/ExpenseTracker2.png'],
            subtitle: 'ReactJS',
            description: "A simple way to track your expenses.",
            description2: "Used Reducer.js and GlobalState to create context.  Used the reducer to specify application state changes in response to certain actions to the store, in context.",
            url: "https://github.com/chrisalee/reactExpenseTracker",
            category: "View code on GitHub"
        },
        {
            _id: '8',
            name: 'Hangman',
            images: ['/images/Hangman.png', '/images/Hangman2.png'],
            subtitle: 'ReactJS',
            description: "A fun game created with ReactJS",
            description2: "Hangman is a game where you guess a letter of the mystery word.  If incorrect, the letter appears in a wrong box, and part of the man starts to show.  If you get it correct, it fills in the mystery word where that letter is within the word. 6 wrong guesses and you lose.",
            url: "https://github.com/chrisalee/reactHangman",
            category: "View code on GitHub"
        },
        {
            _id: '9',
            name: '2048',
            images: ['/images/2048.png', '/images/2048-2.png'],
            subtitle: 'JavaScript',
            description: "A fun game created with Vanilla JavaScript",
            description2: "2048 is a puzzle game where you use the arrow keys to move all the tiles.  When two tiles with the same number touch, they merge into a new tile.",
            url: "https://github.com/chrisalee/reactHangman",
            category: "View code on GitHub"
        },
        {
            _id: '10',
            name: 'React JavaScript Quiz',
            images: ['/images/ReactQuiz.png', '/images/ReactQuiz-2.png'],
            subtitle: 'ReactJS',
            description: "A quiz to test your knowledge about JavaScript String References",
            description2: "Built own database of questions and answers, and brought them to the page using ReactJS useState().",
            url: "https://github.com/chrisalee/react_quizApp",
            category: "View code on GitHub"
        },
        {
            _id: '11',
            name: 'Blog Site',
            images: ['/images/BlogSite.png', '/images/BlogSite-2.png'],
            subtitle: 'ReactJS',
            description: "A template for a blog site using ReactJS",
            description2: "Focus on creating and using React components.  React Router is used to travers between the different pages.",
            url: "https://chrisalee.github.io/reactBlogSite/",
            category: "View website"
        },
        {
            _id: '12',
            name: 'Crypto Currency',
            images: ['/images/CryptoSearch.png', '/images/CryptoSearch-2.png'],
            subtitle: 'ReactJS',
            description: "An app to track the prices of available crypto currencies.",
            description2: "Used Axios and React Hooks.  You can search currencies and have it displayed on the browser.  The prices live update after the page is refreshed, and the data comes from a public API, (https://www.coingecko.com/)",
            url: "https://github.com/chrisalee/reactCrypto",
            category: "View code on GitHub"
        },
        {
            _id: '13',
            name: 'Dashboard',
            images: ['/images/adminDashboard.png', '/images/adminDashboard-2.png'],
            subtitle: 'ReactJS, Redux, Apex Charts',
            description: "Admin Dashboard with multiple themes and color choices.",
            description2: "Used Apex Charts (https://apexcharts.com/) to display data in a line graph chart.  Took larger amounts of data and split into smaller viewing sections and then used pagination.  User selected light and dark modes along with a color selector for more user control.",
            url: "https://github.com/chrisalee/react_adminDashboard",
            category: "View code on GitHub"
        },
        {
            _id: '14',
            name: 'Game Landing Page',
            images: ['/images/GameLandingPage.png', '/images/GameLandingPage3.png', '/images/GameLandingPage2.png', '/images/GameLandingPage4.png', '/images/GameLandingPage5.png'],
            subtitle: 'ReactJS, Vite, Swiper.js, SASS, yarn hover-effect ',
            description: "A Game Landing Page built using React.js, Vite.js and SASS.",
            description2: "This game landing page uses swiper.js to allow mouse scrolling to another feature of the homepage.  Mapping through all the characters and using swiper to grab hold of the screen and rotate through more available characters.  To another section previewing videos of each character to another section with gameplay trailers.",
            url: "https://github.com/chrisalee/react_gameLandingPage",
            category: "View code on GitHub"
        },
        {
            _id: '15',
            name: 'Exercise Tracker',
            images: ['/images/ExerciseClass.png', '/images/ExerciseClass-2.png', '/images/ExerciseClass-3.png'],
            subtitle: 'ReactJS, Express, Node.js, MongoDB',
            description: "An exercise tracker that allows users to add usernames to a database, and create exercises",
            description2: "This exercise tracker was built with react class components.",
            url: "https://github.com/chrisalee/react_exerciseClass",
            category: "View code on GitHub"
        },
        {
            _id: '16',
            name: 'Jeopardy',
            images: ['/images/jeopardy.png', '/images/jeopardy2.png', '/images/jeopardy3.png'],
            subtitle: 'A vanilla JS project deployed to github pages',
            description: "A basic prototype of a Jeopardy clone.  The app pulls questions from jService, an open API of Jeopardy questions.",
            description2: "ThisJeopardy style trivia game was built with HTML, CSS, and JS.",
            url: "https://chrisalee.github.io/js_jeopardy/",
            category: "View website"
        },
        {
            _id: '17',
            name: 'Fitness Gym Homepage',
            images: ['/images/gymHomepage.png', '/images/gymHomepage-2.png', '/images/gymHomepage-3.png'],
            subtitle: 'HTML, CSS',
            description: "A complete animated responsive GYM/FITNESS website that is mobile first.",
            description2: "This app features a navbar toggle menu using hamburger icons, a responsive home page with vector image, box and image hover effects, fontawesome icons, button hover effects and much more.",
            url: "https://chrisalee.github.io/gymFitness/",
            category: "View website"
        },
        {
            _id: '18',
            name: 'Christmas Special',
            images: ['/images/christmas.png', '/images/christmas-2.png', '/images/christmas-3.png', '/images/christmas-4.png'],
            subtitle: 'HTML, CSS, JS',
            description: "A Christmas event organizer / manager website deisn template using html, css, and vanilla javascript.",
            description2: "This Christmas Special is a single page front-end website design template that is responsive.",
            url: "https://github.com/chrisalee/js_ChristmasCard",
            category: "View code on GitHub"
        },
        {
            _id: '19',
            name: 'Fitness Gym Homepage 2',
            images: ['/images/gym.png', '/images/gym-2.png', '/images/gym-3.png', '/images/gym-4.png'],
            subtitle: 'HTML, CSS, jQuery',
            description: "A complete responsive FITNESS website using html css and javascript / jquery. A mobile first, fitness / gym website design.",
            description2: "This app features a sticky header/navbar with toggle menu bar effects, responsive home/hero section with clip path effect, responsive about section using flexbox, card hover effects, custom buttons, and a register form section.",
            url: "https://chrisalee.github.io/fitnessHomepage/",
            category: "View website"
        },
        {
            _id: '20',
            name: 'Tic Tac Toe',
            images: ['/images/ticTacToe.png', '/images/ticTacToe2.png'],
            subtitle: 'A vanilla JS project deployed to github pages',
            description: "A fun game of Tic-Tac-Toe where circles play crosses, and the first to connet three in a row wins the game.",
            description2: "Using JavaScript, a gameboard was created to make squares.  Inside each square a circle or a square can be placced into it, depending on the players turn.  Try to get three in a row to win the game.  This game was built in vanilla JavaScript.",
            url: "https://chrisalee.github.io/JS_tic-tac-toe/",
            category: "View website"
        },
        {
            _id: '21',
            name: 'Real Estate Website',
            images: ['/images/RealEstate-1.png', '/images/RealEstate-2.png', '/images/RealEstate-3.png', '/images/RealEstate-4.png', '/images/RealEstate-5.png', '/images/RealEstate-6.png', '/images/RealEstate-7.png', '/images/RealEstate-8.png', '/images/RealEstate-9.png', '/images/RealEstate-10.png',],
            subtitle: 'A vanilla JS project deployed to github pages',
            description: "A frontend Real Estate website that is responsive with mutliple pages created using HTML, CSS, and JavaScript.",
            description2: "This responsive website includes pages to all listings page, a single listing page, login and registration pages, an about page, contact page, a search page, and a homepage.",
            url: "https://chrisalee.github.io/js_RealEstateSite/",
            category: "View website"
        },
        // {
        //     _id: '22',
        //     name: 'Hacky News',
        //     images: ['/images/HackyNews.png', '/images/HackyNews-2.png'],
        //     subtitle: 'React.js',
        //     description: "",
        //     description2: "",
        //     url: "",
        //     category: "View code on GitHub"
        // },
        {
            _id: '23',
            name: 'Cocktail DB',
            images: ['/images/CocktailDB-1.png', '/images/CocktailDB-2.png'],
            subtitle: 'A React.JS project deployed to github pages',
            description: "A website made with React.JS that uses www.thecocktaildb.com api.",
            description2: "This responsive website includes pages to a homepage that has a search form to look for specific cocktails, and a page of a single cocktail that gives more information about the cocktail.  This app uses context to pass states of information.",
            url: "https://chrisalee.github.io/react_cocktailDB/",
            category: "View website"
        },
        {
            _id: '24',
            name: 'Trivia',
            images: ['/images/Trivia-1.png', '/images/Trivia-2.png', '/images/Trivia-3.png'],
            subtitle: 'A React.JS project deployed to github pages',
            description: "A website made with React.JS that uses an api from opentdb.com.",
            description2: "This responsive website includes pages to a homepage that has a dropdon menu for different subjects to be quizzed on.  The user can also select a difficulty level and once finished with the trivia questions, a modal will pop up displaying the results.",
            url: "https://chrisalee.github.io/trivia/",
            category: "View website"
        },
        {
            _id: '25',
            name: 'Putting Odds',
            images: ['/images/putting.png', '/images/putting-2.png', '/images/putting-3.png', '/images/putting-4.png'],
            subtitle: 'A React.JS project deployed to github pages',
            description: "An app made with React.JS using my own JSON data",
            description2: "This app was made because I enjoy playing golf, and in the winter I use a simulator.  Sometimes the putting is hard to get accurate reads, so I looked up the percentage chance of pros making a one putt, two putt, or three putt from a certain distance.  I created a wheel with those odds, and randomized the location of each.  Spin the wheel to find how many putts it takes you to make it in the hole.  Users can adjust the colors for each (1, 2, 3) to what they think would be most useful, and the spin is randomized clockwise or counterclockwise.",
            url: "https://chrisalee.github.io/react_puttCalc/",
            category: "View website"
        },
    ],
}

export default data;