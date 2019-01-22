# Net Results Developer Take Home Coding Challenge

## Requirements
- Docker
- Docker Compose

## Running the App
Due to time restraints, I could not get the api to wait for a valid MYSQL instance to be started. So, please start the mysql instance first `docker-compose up -d mysql`

Once the mysql engine is up and running, start the application with `docker-compose up api`

The api will run the migration engine first to insert the table in the database, then it will start up the api.

## Scale, Performance and Persistence
A challenge to myself was to write this using docker and node. Node was not installed on my gaming machine for this. Most of the time was spent just getting a working dev environment spun up. I was able to get nodemon working through the docker share, as well as a debug connection. (this was pretty slow, I would have to tweak it to really make it usable in day to day programming).

I decided to spin up a base express boilerplate from the express documentation to show how few packages are needed to make a database connection and save the urls. If I were to convert this into a full production ready application, I would convert the saving of urls to a transaction based system to lock the tables for race conditions, or to a queuing system for processing the urls sequentially. (not ideal if this is happening with thousands of requests per second)

I would incorporate unit testing and linting as part of the development cycle so that the application could scale effectively. 
