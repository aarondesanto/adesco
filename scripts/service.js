var app = angular.module('homeModule');

app.factory('portfolioSrv', function() {
  return { projects: [
      {
        name: "Contentment",
        description: "jQuery plugin for generating a specified amount of garbage characters or words.",
        reqs: "Requirements: Create a chainable jQuery plugin.",
        langs: ["JavaScript", "jQuery"],
        fullview: 'partials/contentment.html',
        gitlink: 'https://github.com/aarondesanto/Contentment',
        thumb: 'images/contentment.jpg',
        alt: 'TEXT'
      },
      {
        name: "Seats",
        description: "Simple, dynamically updated theater seat reservation app.",
        reqs: "Requirements: Create a responsive interface for reserving seats at a theater.",
        langs: ["HTML", "CSS", "JavaScript", "jQuery"],
        fullview: 'partials/seats.html',
        gitlink: 'https://github.com/aarondesanto/seats',
        thumb: 'images/seats.jpg',
        alt: 'TEXT'
      },
      {
        name: "ShoppStar",
        description: "Simple shopping list built including search and remove item functions.",
        reqs: "Requirements: Create a list which includes item names and prices, a total, and can be searched by name or price.",
        langs: ["HTML", "CSS", "JavaScript", "Angular", "jQuery"],
        fullview: 'partials/shoppinglist.html',
        gitlink: 'https://github.com/aarondesanto/ShopWithAngular',
        thumb: 'images/shoppinglist.jpg',
        alt: 'TEXT'
      },
      {
        name: "Shapes Thing",
        description: "Some Content",
        reqs: "The requirements for this project were ",
        langs: ["HTML", "CSS"],
        fullview: 'partials/SHAPESTHING.html',
        gitlink: 'https://github.com/aarondesanto/',
        thumb: 'images/SHAPESTHING.jpg',
        alt: 'TEXT'
      },
      {
        name: "Animation",
        description: "Some Content",
        reqs: "The requirements for this project were ",
        langs:  ["HTML", "CSS", "JavaScript", "jQuery"],
        fullview: 'partials/ANIMATIONTHING.html',
        gitlink: 'https://github.com/aarondesanto/',
        thumb: 'images/ANIMATIONTHING.jpg',
        alt: 'TEXT'
      }
    ]
  };
});
