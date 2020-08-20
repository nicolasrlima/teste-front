# Teste UMC Tecnologia - Nicolas Lima

Hello UMC Tecnologia team, first of all I'd like to thank you for the opportunity, your company seems to be very nice, so just participating in the selection process is something I am very grateful for.

In this document I'll address on how to run the project and on some of my decisions I believe are worth pointing out.

I hope you enjoy my work and I'm looking forward to the code-review!

## Introduction

Developing this screen I focused on the points highlighted in the test document, so my focus followed the following guidelines:

- Show the development process trough frequent commits and clear commit texts
- Creating a readable and organized code, following as much as possible the official Vue style guide and good practices in general always focusing on making my code easy to understand
- Aiming to do the best responsive design possible I applied the Mobile First concept during the development
- Creating a scalable project that could handle changes in the back-end as much as possible without breaking

## Architecture

I used Vuex as a state managing solution to function as a centralized store for the App making the communication between components more fluid and Vue Router as the router manager. As for the folder structure I used the basic Vue.js structure separating the App in components and sub-components.

## About some design changes

You'll notice 2 main design changes being the Sidebar with Hamburguer Menu and the "Cards per page" select. I've decided to make the Sidebar toggleable because following the mobile first concept I came up with the toggleable Sidebar idea and when transposed to the desktop layout I believed it fit quite well and about the Cards per page select I did it to demonstrate the pagination functionality since in the API the activity with most cards had 9 of them and so the pagination would'nt be triggered

### Project setup

Navigate to umctest-nicolas-lima and run yarn install or npm install

```
cd umctest-nicolas-lima
```

then

```
npm install
```

or

```
yarn install
```

### Running the project on development mode

At the root folder (/teste-front)

run

```
npm run server
```

or

```
yarn server
```

Then navigate to umctest-nicolas-lima and npm run serve or yarn serve

```
cd umctest-nicolas-lima
```

then

```
npm run serve
```

or

```
yarn serve
```

### Compiles and minifies for production

at umctest-nicolas-lima

```
npm run build
```

or

```
yarn build
```

## About the end-to-end tests

The e2e tests were developed using Cypress and they aim to test basic yet crucial fucntionalities of the application. I've also used [cypress-testing-library](https://github.com/testing-library/cypress-testing-library) to use DOM testing library methods in the Cypress tests. The tests can be found at tests/e2e/specs.

### How to run the e2e tests in headless mode

At umctest-nicolas-lima run

```
yarn cy:test
```

### How to run the e2e tests with the Cypress interface

At umctest-nicolas-lima run

```
yarn cy:open
```

## About the hosting of the application

The API was hosted using Heroku and can be accessed through [this url](https://agile-peak-49760.herokuapp.com/)

To deploy and host the Vue app I used the Amazon S3 from AWS to store the static files I've chosen this service because of it's price and availability and Amazon Cloudfront to encrypt the https requests so the application could have at least some level of security. To access the hosted application use this link -> https://d1glgtevx79117.cloudfront.net/activities

## Conclusion

From the bonus requirements specified, the following were accomplished

- Layout responsiveness
- Select of activitiesFilter "Organizar por:"
- Use some state managing solution
- Unit tests or any other test you think is important
- Host the website on the service of your choice

I chose not to use any CSS pre-processor because I'm more familiar with vanilla CSS and believed that I could achieve better performance going with what I'm more used to despite knowing the advantages of using a pre-processor.

Once again I'd like to thank you for the opportunity!

Good coding!
