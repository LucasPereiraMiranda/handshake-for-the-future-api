<h1 align="center">
  <br/>
  handshake for the future api
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/LucasPereiraMiranda/handshake-for-the-future-api">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/LucasPereiraMiranda/handshake-for-the-future-api">
  
  <a href="https://github.com/LucasPereiraMiranda/handshake-for-the-future-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/LucasPereiraMiranda/handshake-for-the-future-api">
  </a>

  <a href="https://github.com/LucasPereiraMiranda/handshake-for-the-future-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/LucasPereiraMiranda/handshake-for-the-future-api">
  </a>

  <a href="https://github.com/LucasPereiraMiranda/handshake-for-the-future-api/issues">
    <img alt="GitHub license" src="https://img.shields.io/github/license/LucasPereiraMiranda/handshake-for-the-future-api">
  </a>
</p>

<br>

## 🚀 Techs

handshake for the future api was developed with these technologies

- [Nest](https://nestjs.com/)
- [Node](https://nodejs.org/en)
- [Typeorm](https://typeorm.io/)
- [Postgres](https://www.postgresql.org/)
- [JSON Web Token](https://jwt.io/)
- [Passport](https://www.passportjs.org/)

## 💻 Project

The handshake-for-the-future-api project aims to connect startups in need of ideas and investments with investors interested in providing assistance.

## Business Rules

As an API, we can:

- Register startups
- Register investors

Main flows:

- Data for the startup can be registered, such as the founders' names, year of inception, annual revenue, contact phone number, and headquarters location. The startup can also provide a description of its activities and expectations.

- Data for the investor can be registered, including name, date of birth, areas of interest, and experiences.

- Registered investors who are interested in assisting or investing in a startup can contact the startup using the provided contact phone number to request more information and offer their help.

- The startup will have operational categories associated with it, aiming to facilitate investors in understanding if they can help in that area.

- Startups can be listed by operational categories.

- Both the investor and the startup will need to have a login and password to access the system's features, such as viewing the startup's contact number.

- An unauthenticated user can view the registered startups and investors but will not be able to see the startup's phone number unless they have an account and are authenticated as an investor.

## :boom: Installation

```bash
# clone this repo
$ git git@github.com:LucasPereiraMiranda/handshake-for-the-future-api.git

# duplicate.env.example & fill env variables

# run migrations
$ yarn typeorm migration:run


# run app in development mode
$ yarn start:dev

```
