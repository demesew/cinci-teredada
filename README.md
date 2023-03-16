# Cinci Teredada

Cinci Teredada is a dynamic web application for local communities, allowing registered members to post pictures of free items with descriptions. Other members can claim items, send email messages to posters to arrange pickups, and mark items as taken once picked up.

## Features

- User registration and authentication
- Posting and claiming items
- Email notifications for item claims
- Marking items as taken after pickup

## Technologies

- Vue.js (frontend)
- Express.js (backend)
- Firebase (authentication and database)
- Google Cloud Platform (hosting)

## Prerequisites

- Node.js
- Vue CLI
- Firebase CLI (optional, for deploying to Firebase Hosting)

## Installation

1. Clone the repository:

```
git clone https://github.com/demesew/cinci-teredada.git
```

2. Install server dependencies:

```
cd cinci-teredada/server
```
```
npm install
```

3. Install client dependencies:

```
cd cinci-teredada/client
```
```
npm install
```


## Running the project

1. Start the server:

```
cd cinci-teredada/server
```
```
npm start
```



2. Start the client:

```
cd cinci-teredada/client
```
```
npm run serve
```

3. Open your browser and visit [ttp://localhost:8080](http://localhost:8080).

## Deployment

Follow the Firebase Hosting documentation to deploy the application to Google Cloud Platform:

1. [Firebase Hosting Quickstart](https://firebase.google.com/docs/hosting/quickstart)
2. [Connect a custom domain](https://firebase.google.com/docs/hosting/custom-domain)

## Contributing

If you'd like to contribute to the project, please submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Vue.js](https://vuejs.org/)
- [Express.js](https://expressjs.com/)
- [Firebase](https://firebase.google.com/)