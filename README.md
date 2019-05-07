# My Comps

This app uses the Zillow API to allow users to search an address and get details of comparable properties, including last sold date and price, square footage, etc. The Google Maps API is used to map all properties.

This app also uses a Rails API (my-comps-api) to allow logged-in users to save searches.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

To use this app, first clone my-comps-api. Then run 'bundle install' and 'rails s -p 3001'.

Then clone this repo, run 'bundle install', and run 'yarn start.'

## Contributing

When contributing to this repository, please first discuss the change you wish
to make via issue, email, or any other method with the owner of this repository.

## Author

[Beth Urban](https://github.com/bethurban) - initial work.




Refactor getSearch and getComps - possible to iterate over XML array and pull nodeNames and innerHTMLs?
New app name?
Where to put API keys?
