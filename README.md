# digitalOceanStatus (for the course: http://devopswithdocker.com/)

Example repo to display a web page showing Digital Ocean status (using DigitalOcean Status API)

# Running application without Docker

## Prerequisites
Node: https://nodejs.org/en/download/

Other packages: using `npm install` to install other packages specified in package.json file

## Start the application
After installing the application, execute `npm start` to start the application. The app's page can be viewed at http://localhost:3000.

# Running application with Docker

## Prerequisites
Docker installed and making sure you have Docker CLI (https://docs.docker.com/engine/reference/commandline/cli/) available in your terminal

Dockerized project is publised at: https://hub.docker.com/r/toanknguyendev/digital-ocean-status

Execute this command to start the application: docker run -it -p 3000:3000 toanknguyendev/digital-ocean-status
