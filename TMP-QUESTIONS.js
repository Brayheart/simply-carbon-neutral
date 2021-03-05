/* 

Questions:

- In server.js, I'm confused by " res.sendFile(path.join(__dirname, "./client/build/index.html"));"  There is no client/build directory.

- Also in server.js, there is the line "app.use(express.static("client/build"));"  Same question as above.

- Given the two above, how does it know to use index.html in public

- The README says "To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest."  
  My process is usually:
    - Create a repo on GitHub
    - Clone it to my machine
    - Go to heroku.com and create a new app.
    - Next, back on my terminal, I add the heroku remote with "heroku git:remote -a simply-carbon-neutral"
    - Then I do the normal git add, git commit, git push heroku master
  Are the instructions saying just to do this process and the scripts will run, or are we supposed to run one of the package.json scripts somewhere in the steps above? 

- src/index.css: Given that this file is loaded from src/index.js, which loads the App component, does the CSS in this file apply to App and all children below?

*/
