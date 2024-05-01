# Pokedex 1.0.0

The github repository for my internship application at KreiosLabs

## Table of contents

- [How to run](#how-to-run)
- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued Development](#continued-development)
- [Author](#author)

## How to run

1. Clone the repository
2. Use `npm i` to install the node modules
3. Use `npm run dev` to run the webapp
4. Access on browser through http://localhost:5173/

### Requirements

- [git](https://git-scm.com/downloads)
- [node.js](https://nodejs.org/en)

## Overview

This is a Pokedex website that displays all 1025 pokemon from the PokemonAPI.

Features include:

- Paginated results via infinite scroll (20cards per page)
- Live search based on id and name
- Sorting based on id and name.
- Modal Popup when a card is clicked

### Screenshots

![Screenshot](/screenshots/0.4.2.jpeg)

![Screenshot](/screenshots/1.0.0-modal.jpeg)

### Links

- Design: [Canva](https://www.canva.com/design/DAGDMfJWAl8/9-FnAhwFjJvwG5uis2lIXA/edit)
- Live Site URL: [GithubPages](https://fg-abc.github.io/Pokedex/)
- Pokemon data source: [PokeAPI](https://pokeapi.co/?ref=apilist.fun)

## My process

I'm built this project with React and Tailwind. I started with a function before form approach then used a mobile-first approach when styling the website because tailwinds breakpoints use min-width.

### Built with

- HTML
- CSS
- Tailwind CSS
- React
- Vite

### Continued Development

- Implement descending order for both sort types
- Implement filtering based on pokemon type
- More details in detailed view like evolutions and strengths
- Who's that pokemon mini game: button that shows random pokemon silhouette

## Author

Francis Glenn Hernandez
- fghernandez108@gmail.com
- [LinkedIn](https://www.linkedin.com/in/fgdhernandez/)
