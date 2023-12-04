# User Management

## Overview

- This document is for plain training for Javascript

## Demo

- This is the demo of the site : [link](https://webix.com/demos/user-manager/)

## Team Size 

- 1 Dev

***Start date:*** 13/11/2023


***Timeline:*** 10 days (13/11/2023 - 26/11/2023)

***Actual:*** 14 days

***Target:***

- Get familiar with JavaScript ES6 syntax, know the basic differences between asynchronous and synchronous, briefly introduction basic DOM manipulation
    
## Documents
- [Plan Training HTML/CSS](https://docs.google.com/document/d/16Wv5Snmz77B7VQh16i1PqQSkB-bY8KmtAXYW4GTYvP4/edit?usp=sharing)
- [Estimate](https://docs.google.com/document/d/13MyW6R9-Obczd3Wn46hjCHVOqPfv1ic6sj33fF_vwJw/edit?usp=sharing)
​
## Diagrams
![Diagram](https://github.com/LinhNguyen2606/javascript-training/assets/91473355/14139d2f-6fd5-4199-8289-f4830f8f6d20)

![MVC_Diagram](https://github.com/LinhNguyen2606/javascript-training/assets/91473355/1cffef6f-e52b-4cea-83f1-55693add8f2e)

## Deploy:
[Here](https://javascript-training-psi.vercel.app/)

## Folder structure ##
javascript-practice


~~~
|-- src
    |-- assets
        |-- fonts
            |-- ...
        |-- images
            |-- ...
        |-- logo
            |-- ...
     |-- js
        |-- constants
            |-- config.js
        |-- controllers
            |-- index.js
            |-- userController.js
        |-- helpers
            |-- index.js
            |-- modal.js
            |-- selectors.js
            |-- spinner.js
            |-- validation.js
        |-- models
            |-- index.js
            |-- userModel.js
        |-- services
            |-- userService.js
        |-- template
            |-- index.js
        |-- views
            |-- index.js
            |-- modalView.js
            |-- userView.js
        |-- app.js
        |-- main.js
    |-- json-server
        |-- db.json.js
    |-- styles
        |-- base
            |-- global.scss
            |-- index.scss
            |-- reset.scss
            |-- typography.scss
        |-- components
            |-- button.scss
            |-- form.scss
            |-- index.scss
            |-- modal.scss
            |-- overlay.scss
            |-- side-bar.scss
            |-- table.scss
            |-- typography.scss
            |-- validation.scss
        |-- layout
            |-- container.scss
            |-- header.scss
            |-- index.scss
        |-- pages
            |-- home
                |--edit-user.scss
                |--header.scss
                |--user-details.scss
            |-- index.scss
        |-- utilities
            |-- index.scss
            |-- mixin.scss
            |-- variables.scss
        |-- index.scss
    |-- index.html
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- README.md
~~~

## Getting started:
- Step 01: Clone repository with HTTPS:
~~~
git clone https://github.com/LinhNguyen2606/javascript-training.git
~~~

- Step 02: Move to the folder that just cloned in your computer:
~~~
cd javascript-training
~~~

- Step 03: Move to the folder that just cloned in your computer:
~~~
git checkout feature/practice
~~~

- Step 04: Next open the folder javascript-practice
~~~
cd javascript-practice
~~~

- Step 05: Open the terminal and type:
~~~
npm install
~~~

- Step 06: Finally run with:
~~~
npm start
~~~

## Run the server in local
- Step 01:  Open the folder javascript-practice
~~~
cd javascript-practice
~~~

- Step 02: Change the config.js file in constants folder -
           Change API_BASE_URL to http://localhost:3000

- Step 03:  Run the server
~~~
npm run server
~~~
