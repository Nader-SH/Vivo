# Copy Project From Gaza Goes Global
<br />
<div align="center" id="top">
  <a href="https://pharmacies-mangement-system.herokuapp.com/" target="_blank">
    <img src="https://user-images.githubusercontent.com/64221231/214852034-c8f183e8-0dc7-41cc-b867-f520b6704226.png" width="350" height="70" alt="Logo" >
  </a>

  <h3 align="center">
    VVERSE
  </h3>
<!--     <a href="https://pharmacies-mangement-system.onrender.com/"> Live link</a> -->
</div>
<br />
<br />
<br />

## Description:
Creating a mini version of the verse project that Gaza Goes Global is working on.

## [**Database Schema**:](https://drawsql.app/teams/nader-shak/diagrams/copy-project-vverse)

![copy project vverse _ DrawSQL - Google Chrome 1_26_2023 2_40_02 PM (2)](https://user-images.githubusercontent.com/64221231/214848934-6ed016f4-90bb-4dd0-b66e-09ebb86785ad.png)

## **Getting Started**  

## :pushpin: **How to launch app locally** :- 

*  clone this repo by typing this command in your terminal:  
`git clone https://github.com/Nader-SH/copy-project-vverse.git`

*  Run `npm i` to install packages for the app as general.

*  Run `cd client` and `npm i` to install the packages for the client side React Js.


### Database Setup  :clipboard: 

make sure you have installed PostgreSQL and pgcli 

```sql=
CREATE DATABASE {database name};
CREATE USER {user name} WITH superuser password {password}
ALTER DATABASE {database name} OWNER TO {user name};
```

* Run the following command in the database pgcli terminal  
`npm run buildDB` to build database with its tables 
and the command `npm run buildSeeds` to add fake Data.


### **Environment variables:**
Environment variables are one of the ways we keep our product secure. If you want to access our app locally you will need to add your own.
- create .env file at the root of your project
- add your Environment variables
```sh
DEV_DB_URL= # Your development PostgreSQL connect
DATABASE_URL= # Your production PostgreSQL connect
SECRET_KEY= # Your token Secret key
```

* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Sequelize](https://sequelize.org/)
* [PostgreSQL](https://www.postgresql.org/download/windows/)
* [Java Script](https://www.javascript.com/)
* [Ant Design 5.0](https://ant.design/)
* [React Chart JS](https://react-chartjs-2.js.org/)
* [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
* [Sweetalert](https://sweetalert.js.org/docs/)

## **Programmer**
- [Nader Shakshak](https://github.com/Nader-SH)
