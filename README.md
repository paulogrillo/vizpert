<div align="center">
   <h1>Vizpert</h1>
    
  <p align="center">
    Technical challenge Front-end
    <br />
    <a href="https://vizpert.vercel.app/">View Demo - Working on it</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project
The application basically consists of a bookcase where the user can organize books and sort them based on some characteristic of the books.

Necessary resources:
* 2 book listings (shelves)
* Allow changing book positions by dragging and dropping
* When selecting a sort type, and clicking on "Organize" the ordering must be applied to each shelf separately taking into account the books present
* Reverse the order when clicking the button again, if the same sort option is selected.
* Sort types are: Alphabetical, Size and Color (Red, Orange, Yellow, Green, Light Blue, Dark Blue, Violet, Pink)

Additional challenge:
* Create a new book
* Update book
* Delete book
* Sort by release date
* The clock working
### Built With

* [Typescript](typescriptlang.org)
* [React.js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [Styled Components](https://styled-components.com/)

### Prerequisites
* Npm or Yarn
* Node JS
<!-- GETTING STARTED -->
## Getting Started
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/paulogrillo/vizpert
   ```
2. Install packages
   ```sh
   yarn install
   ```
3. Start webpack serve
   ```js
   yarn dev
   ```
4. Build webpack
   ```js
   yarn build
   ```