# Jobly

Jobly is a full-stack application where users can search for companies and jobs which they can apply to. The frontend was built with React and the backend, which can be viewed [here](https://github.com/lpagac/jobly-backend), was built with Node.js and Express.js.

Jobly site includes sign-up/login via JSON Web Tokens stored in LocalStorage and profile edit forms, login required for all views, company list page, company detail page which includes all jobs for the company, job list page, and ability for users to apply to jobs. 

## Installation and Setup Instructions

### Backend
1. Clone [backend repo](https://github.com/lpagac/jobly-backend) and this repo
2. `cd jobly-backend`
3. `npm install`
4. `createdb jobly`
5. `createdb jobly-test`
6. `psql jobly < seed.py`
7. `npm start`

#### Backend Tests:
1. `npm test`

### Frontend
1. `cd jobly-frontend`
2. `npm install`
3. `npm start`

#### Frontend Tests:
1. `npm test`

## Technologies Used
  * React via create-react-app
  * React Router for Client-Side Routing
  * Node.js as backend runtime environment
  * Express.js to create RESTful API
  * PostgreSQL for the database
  * Node-Postgres as SQL driver
  * Tailwind as CSS framework

## Contributors

My partner for the frontend was [Sterling Bishop](https://github.com/sterlingfire). 
