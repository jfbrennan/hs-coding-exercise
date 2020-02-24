# Highspot Coding Exercise

### Live demo
http://highspotcodingexercise-env.jz2p6dkcxh.us-east-2.elasticbeanstalk.com 

### Tech stack
The application is built with Express and Handlebars on the back-end and [Riot.js](https://riot.js.org) plus [M-](http://m-docs.org) and [RETCHful](https://github.com/jfbrennan/retchful) (my two side projects)  on the front-end.

The Elder Scrolls API doesn't appear to support CORS, so Express is also being used as a proxy.

Riot, M-, and RETCHful are all very small and simple libraries that don't require an install or build step. Also, in the interest of time I didn't bother minifying the little JavaScript that makes up the app.

### Notes on requirements
All requirements were completed:
- [x] Show results in a card grid format with the image prominently displayed.
- [x] Each card displays: Image, Name, Text, Set Name, and Type. Additional fields are optional.
- [x] Display a loading indicator when communicating with the API.
- [x] Use a responsive design that accommodates, at minimum, desktop and mobile.
- [x] Initially, fetch and display the first 20 results returned by the API.
- [x] As the user scrolls down the page, load and append additional cards using "infinite scroll."
- [x] Retrieve additional pages of results as-needed but do not load more than 20 cards with each request.
- [x] Allow the user to search for cards by Name.
- [x] Use modern open-source web technologies to implement your solution (React, Backbone, Angular, Vue, Underscore, etc.).
- [x] Provide instructions for prerequisites, installation, and application setup and build in a README file.

### Running locally
_Pre-reqs:_ [Node.js](https://nodejs.org/en/)

1. `git clone https://github.com/jfbrennan/hs-coding-exercise.git`
1. `npm install`
1. `npm start`
1. Go to http://localhost:3000