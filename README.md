# Angular 6 Dynamic Form POC

## Running the app

This app runs in Angular 6 and uses a copy of ClinCardAngular's package.json.  I used npm version 6.14.17 to build it

Install the package.json file outside of the `angular6app` folder and make sure `json-server` is installed (install it globally if you run into issues)

Then from `angular6app` directory, build and serve the app

## Runnning the "backend"  API

in the ouermost directory run `json-server --watch eur-eur.json` in a seperate terminal to start up the mock json server.  Switching to a different file `json-server --watch usd.usd.json` reflects WISE's api response for different currencies, confirm that the Angular dynamic form responds to these changes. 

