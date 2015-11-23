var app = angular.module('homeModule');

app.factory('portfolioSrv', function() {
  return { projects: [
      {
        name: "Contentment",
        content: "Some Content",
        langs: ["JavaScript", "jQuery"],
        link: 'https://github.com/aarondesanto/Contentment',
        thumb: 'images/thumb1.jpg',
        alt: 'TEXT'
      },
      {
        name: "Seats",
        content: "Some Content",
        langs: ["HTML", "CSS", "JavaScript", "jQuery"],
        link: 'https://github.com/aarondesanto/seats',
        thumb: 'images/thumb1.jpg',
        alt: 'TEXT'
      },
      {
        name: "ShoppStar",
        content: "Some More Content",
        langs: ["HTML", "CSS", "JavaScript", "Angular", "jQuery"],
        link: 'https://github.com/aarondesanto/ShopWithAngular',
        thumb: 'images/thumb1.jpg',
        alt: 'TEXT'
      },
      {
        name: "SHAPES THING",
        content: "Some Content",
        langs: ["HTML", "CSS"],
        link: 'https://github.com/aarondesanto/',
        thumb: 'images/thumb1.jpg',
        alt: 'TEXT'
      },
      {
        name: "ANIMATION",
        content: "Some Content",
        langs:  ["HTML", "CSS", "JavaScript", "jQuery"],
        link: 'https://github.com/aarondesanto/',
        thumb: 'images/thumb1.jpg',
        alt: 'TEXT'
      }
    ]
  };
});
