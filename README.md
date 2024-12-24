# CineYatra
Web application made with Node.js, React.js, Express.js, HTML and CSS to browse and inspect 1000s of regional and international films. 

# Tutorial of how to create and test the app
- Carefully follow the steps to create and launch this app go on a CINEYATRA on your device!
   ```diff
   MUST HAVE PREREQUISITES:
  - Node.js must be intsalled
  - React.js must be installed
  - Npm must be installed 
  ```

  ## Creating the React app (FRONTEND)
    - Open any folder of your choice in VSCode or any code editor.
    -  Type these commands in the terminal:
        ```
         npx create-react-app cineyatra  (cineyatra name can be modified to any name of your choice)
         cd cineyatra
         npm install react-router-dom
         npm install axios
         npm install web-vitals
        ```
   -  Replace the src folder in the React app with the src folder in  [My GitHub Repository.](https://github.com/Pallela1907/CineYatra).
   -  Run this command in the terminal (You can run this even after creating the whole backend app):
      ```
      npm start
      ```
    ```diff
    - At this point the server would run in localhost:3000
    - At this point, the frontend has no info to retrieve, hence you may face some errors.
    - But if the app compiles successfully, You can see a heading CineYatra with animation along with a serach bar.
    - Press Ctrl+C to stop the frontend app for now untill we create the backend app.
    ```

  ## Creating the API (Node app) (BACKEND)
   - Open the same folder which contains the react app, now create a new folder naming it movie-api. Make sure this isn't a folder inside the react app.
   - Open a new terminal apart from the frontend terminal and type these in this terminal:
     ```
     cd movie-api
     npm init -y
     npm install express
     npm install cors
     ```
   - Replace the index.js file in the movie-api in the app with the index.js file in [My GitHub Repository.](https://github.com/Pallela1907/CineYatra).
   - Run this command in the terminal to start the backend app in the server:
     ```
     node index.js
     ```
   - You can see that the terminal would give the prompt stating : 'Server is running on port 5000'


  ## Testing the application and its features:
   - Open the address [backend-localhost](http://localhost:5000) in your device and see if the prompt 'Hello,this is the API root!' can be seen on the page.
   - Open the address [backend-data-localhost](http://localhost:5000/movies) and see if you can see a list of movies in an array format.
   - Open the address [backend-movie-data-localhost](http://localhost:5000/movies/:1) and check if you can see the movie info separately change the number 1 to some other number and try for yourself.
   - YOUR API IS SUCCESSFULLY CREATED IN THE LOCAL HOST !!

     ### After You have verified with the backend , leave it running as it is necessary for data fetching.
  - Now, Open the seperate frontend terminal which you left off or create a new terminal and open the react app (MAKE SURE THE BACKEND TERMINAL DOESNT GET REMOVED OR DELETED).
  - Run this command in this terminal :
    ```
    npm start
    ```
  - This will start the frontend app in the [frontend-localhost](http://localhost:3000).
  - Now, you can see that the web page is populated with a list of movies which we mentioned in the backend file.
  - Try out some features like searching a movie name and clicking on a particular movie to see in-detail about any movie.

### YOUR CINEYATRA IS DEPLOYED, HAPPY GUNTING!!! 
     
