# project tracker

A walk through on how to organize a large JS project into smaller modules using Preact and StealJS

## dependencies and setup process

```cmd
//first install -g of http-server
npm install http-server -g

//start a local server
http-server
//then go to http://localhost:8080

//install stealjs and preact
npm install steal preact --save

//create a header folder, cd to it, and create five empty files
//this is the linux version
mkdir header && cd header && touch demo.html demo.js header.js test.html test.js && cd ..
//for windows, hmmm...this one: The con keyword means copy contents from the console, you will have to enter something in the console tho, so just do it manually
copy con demo.html demo.js header.js test.html test.js && cd ..

//update header.js
//update demo.html
//update demo.js
//setup Babel and Preact by loading 'transform-react-jsx' Babel plugin
npm i babel-plugin-transform-react-jsx
//then 'package.json'
"steal": {
    "babelOptions": {
      "plugins": [
        ["transform-react-jsx", {"pragma": "h"}]
      ]
    }
  },

//create a test page
npm install qunitjs --save-dev
//update test.html

//update test.js

//To load QUnit's css file, need a plugin
npm install steal-css --save-dev
//load test.html

//Complete!
```

## more information can be found at stealJS web site