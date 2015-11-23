var app = angular.module('homeModule');

app.factory('portfolioSrv', function() {
  return { projects: [
      {
        name: "Contentment",
        content: "Lightweight jQuery plugin for generating a specified amount of garbage characters or words.",
        langs: ["JavaScript", "jQuery"],
        link: 'https://github.com/aarondesanto/Contentment',
        thumb: 'images/thumb1.jpg',
        alt: 'TEXT'
      },
      {
        name: "Seats",
        content: "Movie theater seat reservation app.",
        langs: ["HTML", "CSS", "JavaScript", "jQuery"],
        link: 'https://github.com/aarondesanto/seats',
        thumb: 'images/thumb1.jpg',
        alt: 'TEXT'
      },
      {
        name: "ShoppStar",
        content: "Simple shopping list built with Angular.",
        langs: ["HTML", "CSS", "JavaScript", "Angular", "jQuery"],
        link: 'https://github.com/aarondesanto/ShopWithAngular',
        thumb: 'images/thumb1.jpg',
        alt: 'TEXT'
      },
      {
        name: "Shapes Thing",
        content: "Some Content",
        langs: ["HTML", "CSS"],
        link: 'https://github.com/aarondesanto/',
        thumb: 'images/thumb1.jpg',
        alt: 'TEXT'
      },
      {
        name: "Animation",
        content: "Some Content",
        langs:  ["HTML", "CSS", "JavaScript", "jQuery"],
        link: 'https://github.com/aarondesanto/',
        thumb: 'images/thumb1.jpg',
        alt: 'TEXT'
      }
    ]
  };
});
