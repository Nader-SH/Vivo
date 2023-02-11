# Training
<br />
<div align="center" id="top">
  <a href="https://pharmacies-mangement-system.herokuapp.com/" target="_blank">
    <img src="https://user-images.githubusercontent.com/64221231/218256136-f0152dd8-50d2-4f4a-b02d-fdb5f61ea964.png" width="350" height="99" alt="Logo" >
  </a>

  <h3 align="center">
    ViVo
  </h3>
<!--     <a href="https://pharmacies-mangement-system.onrender.com/"> Live link</a> -->
</div>
<br />
<br />
<br />

## Description:
Creating Training Porject.

## [**Database Schema**:](https://drawsql.app/teams/nader-shak/diagrams/copy-project-vivo)


![copy project vivo _ DrawSQL - Google Chrome 1_26_2023 2_40_02 PM (2)](https://user-images.githubusercontent.com/64221231/214848934-6ed016f4-90bb-4dd0-b66e-09ebb86785ad.png)

## **Getting Started**  

## :pushpin: **How to launch app locally** :- 

*  clone this repo by typing this command in your terminal:  
`https://github.com/Nader-SH/Vivo.git`

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
