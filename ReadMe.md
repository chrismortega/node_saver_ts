# Test project based on an Auth0 Blog Post

[Original Post](https://auth0.com/blog/use-typescript-to-create-a-secure-api-with-nodejs-and-express-getting-started/)

## To use: 
* The very first time after cloning, nav to the root and run `npm install`
* Also the first time after cloning, create the file `.env` at the root, and add `PORT` setting e.g. `PORT=7000`
* Open a terminal, nav to the root and run `npm run webpack`
    * this will cause a process to monitor the source for changes and repack to `dist/index.js` when they are detected
* Open a terminal, nav to the root and run `npm start` to run what is in `dist/index.js`
    * alternately from vscode just hit `F5` to do the same thing

---

## Boilerplate Files and Folders

Name | Description
-----|------------
.vscode/ | folder for vscode-specific files
launch.json | file that helps determine what happens when the user runs the code from vscode
dist/ | output folder for packed .js files including index.js and index.js.map
index.js | the output of webpack - the resultant javascript after the typescript has been combined and compiled
index.map.js | used by the debugger - maps the locations of code in index.js back to the .ts files for debugging
node_modules/ | imported javascript libraries - dependancies
package.json | defines both release and dev dependancies, as well as project information and npm scripts
.env | file to set project settings which can be read from within the application
.gitignore | file used by git to indicate what should be ignored by source control
package-lock.json | helps manage the node_modules dependancies
tsconfig.json | typscript compilation options
webpack.config.ts | tells webpack where the code is. Includes the hot module replacement plugin to monitor the code for changes and recompile when required