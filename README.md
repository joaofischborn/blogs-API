<h1 align="center" height="700">
  Blogs-api
</h1>

<p align="center">
  A project developed at Trybe's Back-End Module
</p>

## 📋 About
The application is an API and a database with the content of a blog. It must allow creating, reading, updating and removing blog information from the database. It also performs authentication to grant permissions to users.

## ✨ Functionalities 
- Login with email and password
- User CRUD
- Register and list categories
- Post CRUD
- Get post by a query

## 💻 Technologies
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-black?style=for-the-badge&logo=express)
![Sequelize](https://img.shields.io/badge/Sequelize-0C3E6F?style=for-the-badge&logo=sequelize)
![JWT](https://img.shields.io/badge/JWT-fb015b?style=for-the-badge&logo=JSONWebTokens)
![MySQL](https://img.shields.io/badge/MySQL-1C1C1C?style=for-the-badge&logo=mysql)
![Docker](https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white)

## 🧠 What I learned
In this project I learned how to use an ORM and how to use JWT to do user validation 

## 📦 Running
Start docker-compose
```bash
docker-compose up -d
```
Join docker container
```bash
docker exec -it blogs_api bash
```
Install dependences
```bash
npm i
```
Start server
```bash
npm start
