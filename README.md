# React-Photolabs
PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts.

## List of Features
- Users can access a collection of photos on the homepage, which are retrieved from an external API.

- Users have the ability to explore various photo categories, referred to as "topics," to find specific types of images.

- Users can click on any photo to view an enlarged version of the image and discover related or similar pictures.

- Users can express their appreciation for a photo by "liking" it from any part of the application where the photo is displayed.

- Users are provided with a heart-shaped icon in the navigation bar, which serves as a notification indicator when there are liked photos.

- The navigation bar includes links to different photo topics and the heart icon for easy access to these features.

## Final Product
!["Home page with modal and image hearted"](/frontend/src/assets/Screenshot%202023-09-22%20191534.png)

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Dependencies

- React
- body-parser
- cors
- express
- pg
