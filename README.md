# product service

The product service provides a really simplified product query API that can be used to retrieve mock products for the live coding sample case.

## How to run
You can start the application in production mode using following command.

```
npm start
```

## How to develop
You can start the application in development mode using following command.

```
npm run dev:start
```
The service is then executed using _nodemon_ allowing it to be automatically restarted whenever source files are changed.
Nodemon starts the service with NODE_ENV='development' to enable development mode.
