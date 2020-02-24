# Highspot Coding Exercise

### Live demo
http://highspotcodingexercise-env.jz2p6dkcxh.us-east-2.elasticbeanstalk.com 

### About
The application is built with Express and Handlebars on the back-end and [Riot.js](https://riot.js.org) plus [M-](http://m-docs.org) and [RETCHful](https://github.com/jfbrennan/retchful) (my two side projects)  on the front-end.

The Elder Scrolls API doesn't appear to support CORS, so Express is also being used as a proxy.

Riot, M-, and RETCHful are all very small and simple libraries that don't require an install or build step. Also, in the interest of time I didn't bother minifying the little JavaScript that makes up the app.

Note that the loading indicator is there, but responses come back so quickly you might miss it.

### Running locally
_Pre-reqs:_ [Node.js](https://nodejs.org/en/)

1. `git clone https://github.com/jfbrennan/hs-coding-exercise.git`
1. `npm install`
1. `npm start`
1. Go to http://localhost:3000