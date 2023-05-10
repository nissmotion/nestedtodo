Prerequisites for the development environment.

* Composer
* NPM
* PHP 8.2.1
* MySQL



Steps to run dev environment locally.

* Clone repo.
* Copy or rename .env.example to a .env file

  * This environment file is unique to each developer/server.  It holds all the sensitive information such as database user/password, application security key for encrypted stuff, and 3rd party api tokens if we have to connect to 3rd party services.
* Enter the database settings in the env for your locally running mysql database in the new .env file.
* run this command in the project directory

  ```
  composer install

  ```
* run this command in the project directory

  ```
  npm install && npm run build
  ```
* run this command in the project directory to create all the database tables

  ```
  php artisan migrate
  ```
* then this command to seed the database with test data.  Your username to login is caylin@caylin, and the password is the same.

  ```
  php artisan db:seed
  ```


Side notes:  When developing you can have a built in npm process monitor changes and auto refresh your browser pages that you are currently styling.  When you're starting to design, just run 

```
npm run dev
```

This will run a development server in the background that when you load the page in the browser will auto refresh the browser when changes are detected.  Just remember that once you're done, you'll need to cancel that running process, then run

```
npm run build
```

to compile all the assets before pushing the changes to the repo.
