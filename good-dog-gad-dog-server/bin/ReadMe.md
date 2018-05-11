This project is running React and Express. 

### start the dev environment 
1. Navigate to the root of the app
2. Run the following command:
    - PORT=3001 npm start 
3. Open a new terminal tab
4. In this tab navigate to the root of the react app (client directory)
5. Run the following command: 
    - npm start
Note: In the dev environment there is a potential port conflict, here we are 
      running the Epress server on port 3001 and the react app is using a 
      proxy. To view the react app in the browser you can use localhost:3000 

For the Data Base we are using MySQL. To Access the DB in terminal use the following 
- mysql -u root -p
- then enter the password stored in my 1password account 
- There are two databases app_prod_database & app_test_database
- Both have one table Dogs with two columns Id (Unique image url), Vote (Int)