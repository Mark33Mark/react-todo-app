![Mark Watson](./assets/banner.jpg)

# Watsonised's ToDo

## A React ToDo application

### Table of Contents  
  
   1. [Project Description](#1-description)
   2. [Application Features](#2-features)
   3. [Installation](#3-installation)
   4. [Usage](#4-usage)
   5. [Credits](#5-credits)
   6. [License](#6-license)
   7. [Repository Status](#7-github-repo-status)
   8. [Contribute](#8-how-to-contribute)
   9. [Tests](#9-tests)
   10. [Checklist](#10-checklist)

---

### 1. Description  

**What is this project?**  

* A simple React application to help users manage all of their to-do's.  

* Other technologies used are IndexedDB, Express, Node-js and CodeMirror.  The application is deployed on [ https://todo.watsonised.com ](https://todo.watsonised.com).  

**Why this project?**  

* I'm learning React and this was a good app to do for a 1st timer.

**What problem does this project solve?**  

* We're all busy these days with so many actions floating around in our heads.  This app seeks to help those that need somewhere to record the different actions they need to attend to.

**Lessons learnt?**  

* Biggest lesson was understanding when node packages change significantly, evolutionary change, and how to implement the new changes when you are accustomed to the earlier generation of the package.  This was the case with treact-router-dom, fortunately the developer's have provided a great walkthrough on their changes, [https://reactrouter.com/docs](https://reactrouter.com/docs/en/v6/upgrading/v5#relative-routes-and-links)

---

### 2. Features  

This is a really simple application - minimalism is always the best.  

You can add, delete, submit and edit items.  

To edit items, simply double click on it. Once you are done, press the enter key to resubmit.  

This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.

---

### 3. Installation

You are welcome to download the source code from [my Github repository](https://github.com/Mark33Mark/react-todo-app)  

Once downloaded, you will need to install the dependencies with the following command in your terminal: 

```npm install```  

Once downloaded, you will need to run in the command line:  

```npm run build```  

This will install the required dependencies for the application to run.  Now to run the application type in the command line:

```npm start```  

Enjoy.  

---

### 4. Usage  

The code can be downloaded from [my Github repository](https://github.com/Mark33Mark/react-todo-app) for all assets created for the project.  
You can modify the code as you need.  

---

### 5. Credits  

Huge gratitude to [ibaslogic](https://ibaslogic.com/react-tutorial-for-beginners/) for providing a great, well set out and easy to follow tutorial.  This application has followed closely the tutorial.  The main caveat is the walkthrough currently refers to an earlier generation (version 5) of react-router-dom package.  This application uses version 6 so it deviates from the tutorial as required to get the application to work.

---

### 6. License  

 The works in this repository are subject to:  

[MIT license](doc/LICENSE.md)

---

### 7. Github repo status  

![GitHub top language](https://img.shields.io/github/languages/top/Mark33Mark/react-todo-app)
![GitHub language count](https://img.shields.io/github/languages/count/Mark33Mark/react-todo-app)
![GitHub last commit](https://img.shields.io/github/last-commit/Mark33Mark/react-todo-app)
![GitHub commits in last month](https://img.shields.io/github/commit-activity/m/Mark33Mark/react-todo-app)

---

### 8. How to Contribute  

 If you would like to contribute, please comply with the Contributor Covenant Code of Conduct:  

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](doc/code_of_conduct.md)

---

### 9. Tests  

* No unit tests have been written for this application, I plan to come back and to do it.  

---

### 10. Checklist  

 All actions not checked are still to be completed:  

[x]  Functional app, hosted on GitHub pages with CNAME to my personal DNS name.  
[x]  Uses React entirely to function.  
[ ]  Unit testing completed.  

---

[Back to the top](#watsoniseds-todo)  
