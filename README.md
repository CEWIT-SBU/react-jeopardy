# React Jeopardy

Hosted version [http://sharynneazhar.com/react-jeopardy/](http://sharynneazhar.com/react-jeopardy/).

## Build the App

If you want modify the app and create you own build:

1. Clone this repo
    ```
    git clone https://github.com/sharynneazhar/react-jeopardy.git
    ```

1. Install the dependencies
    ```
    npm install
    ```
1. Locate and add fonts to the `/assets/fonts` folder:  
   1. `Korinna-Bold.otf`  
   1. `Swiss911BT-Compressed.otf`  
*Note: Jeopardy the gameshow used* ***ITC Korinna Bold*** *and* ***Swiss 911*** *for the categories and prize numbers.*   
These fonts can be purchased. Alternatively, there are very close substitutes to be found online.

1. Modify the `*jeopardy-round.js` files with your own questions and answers.  Remember that everything is in CAPITAL LETTERS.

1. Build the app
    ```
    npm run webpack
    ```

1. Install your fav server or run `index.html` locally.
    
## Credits
Forked from [ccoenraets](https://ccoenraets.github.io/react-trivia/)

## License

- App: MIT
- Music: [Orange Free Sounds](http://www.orangefreesounds.com/jeopardy-theme-song/)
