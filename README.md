# NodeJS (with Express, Sequelize and Swagger)
NodeJS Backend with Rick and Morty data.

## Requirements



## Usage

### NPM

```
npm install
```

### Docker

```
docker build -t node-rm .  
```

```
docker run --name backend-node-rm -p 3000:3000 -it node-rm
```


### Swagger

```
http://localhost:3000/swagger-ui/
```

### PgAdmin

```
docker ps 
```

```
docker inspect **CONTAINER_ID_POSTGRES** 
```

Get IPAddress in `NetworkSettings.NetWorks.IPAddress` and this is the connection;host/name

#### Tutorial:

https://www.postgresqltutorial.com/postgresql-getting-started/connect-to-postgresql-database/

### Docker compose

```
export DATASOURCE_URL=db
export DATASOURCE_USERNAME=root
export S_DATASOURCE_PASSWORD=root
```

```
docker-compose up
```
