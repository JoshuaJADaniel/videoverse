<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://joshuajadaniel.com/videoverse">
    <img src="https://joshuajadaniel.com/videoverse/showcase/logo.png" alt="VideoVerse Logo" width="auto" height="80">
  </a>
  <h3>VideoVerse</h3>
  <p> 
    A real-time web app to browse your favorite movies, TV shows, and actors built on ES6, React, and SASS.
    <br />
    <br />
    <a href="https://joshuajadaniel.com/videoverse">View Live Demo</a>
    ·
    <a href="https://github.com/joshuajadaniel/videoverse/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/joshuajadaniel/videoverse/issues/new">Request Feature</a>
  </p>

  <!-- PROJECT SHIELDS -->
  <a href="https://linkedin.com/in/joshuajadaniel">
    <img alt="License" src="https://img.shields.io/badge/-LinkedIn-gray.svg?logo=linkedin" />
  </a>
  <a href="https://github.com/joshuajadaniel/videoverse/graphs/contributors">
    <img alt="Contributors" src="https://img.shields.io/github/contributors/joshuajadaniel/videoverse?color=green" />
  </a>
  <a href="https://github.com/joshuajadaniel/videoverse/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/joshuajadaniel/videoverse" />
  </a>
  <br />
  <br />
</div>



[![VideoVerse Screenshot](https://joshuajadaniel.com/videoverse/showcase/videoverse.jpg)](https://joshuajadaniel.com/videoverse)

This responsive, multi-page React application allows you to browse and search over a million movies, TV shows, and actors. It sources its data from the [TMDB API](https://www.themoviedb.org/documentation/api) to display/sort media that is popular, trending, upcoming, and much more.

### Built With

* [React](https://reactjs.org)
* [SASS](https://sass-lang.com)
* [Axios](https://github.com/axios/axios)
* [Babel](https://babeljs.io)
* [Webpack](https://webpack.js.org)



<!-- GETTING STARTED -->
## Getting Started

To get a copy running on your local machine, follow these simple steps.

### Prerequisites

Get a free API Key at [TMDB](https://www.themoviedb.org/documentation/api)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/joshuajadaniel/videoverse.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API key in `src/data/config.js`
   ```JS
   const TMDB_KEY = "ENTER YOUR API";
   ```
4. Start the application
   ```sh
   npm start
   # Live development server
   
   npm run build
   # Optimized production build
   ```



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Joshua J. A. Daniel

Email: joshuajadaniel@gmail.com

LinkedIn: [https://linkedin.com/in/joshuajadaniel](https://linkedin.com/in/joshuajadaniel)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Swiper](https://swiperjs.com)
* [TMDB API](https://www.themoviedb.org/documentation/api)
* [normalize.css](https://necolas.github.io/normalize.css)
