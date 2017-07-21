# Geocacher

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

### Specs

| Behavior | Example Input | Example Output |
| :-------------     | :------------- | :------------- |
| **Homepage with form for user to input Lng/Lat** | Homepage | Form |
| **User can input lng/lat of known Geocache and receive full address** | User inputs Lng/Lat into form | Full address is returned |
| **User can input full address of known geocache** | User inputs full address into form | Lat/Lng is returned |
| **Locations appear on a map** | User inputs Lng/Lat OR full address | Pin appears on map |
| **User can view a list of saved geocache data** | User submissions can be saved to firebase | Users can save their known geocaches to firebase |
| **User can delete known geocache listing from saved items** | User clicks a delete button | Listing is deleted from firebase |

## Set Up and Installation

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Typescript](https://www.typescriptlang.org/)
* [Angular 4](https://angularjs.org/)
* In the terminal, run the command `$ git clone <this-repository-url>`.
* Navigate into the newly created folder and run:
  * `$ npm install`
* For this project you'll need API keys for both [Google Maps] (https://developers.google.com/maps/documentation/javascript/) and [Firebase] (https://firebase.google.com/).
  * You will need to create a file in the 'src/app' folder of this directory to store your API keys. The file must be called api-keys.ts, and must use the configuration below. Your Firebase API key can be found through 'Go To Console' --> 'Add Project' --> 'Add Firebase to your web app'.

  ```
  export const geoKey = "YOUR_GOOGLE_MAPS_KEY_HERE"
  export var masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      projectId: "xxxx",
      storageBucket: "",
      messagingSenderId: "xxxx"
    };
  ```
  * If you would like to load hard-coded data to your Firebase, you can upload the file named `sample-firebase.json` following the directions [here] (https://www.learnhowtoprogram.com/javascript/angular-extended/firebase-retrieving-data).

* Now that everything you need should be installed and setup, we can run the project with angular.
* In the terminal, run `$ ng serve`.
* View the project at [http://localhost:4200](http://localhost:4200).

## Built With

* Angular4
* AngularCLI
* Firebase
* Typescript
* HTML
* Google Maps Geocoding API
* Sass
* ES6
* Node

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
