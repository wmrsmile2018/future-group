ReactJs project / MacOs

## Clone Project

```
git clone https://github.com/wmrsmile2018/future-group.git
```

## Installation:

```
cd future-group/project/
npm install
```

## Run Json-server

Json server work at ```localhost:3000```

```
cd future-group/db/
npm install -g json-server
json-server --watch db.json -p 8080
```

## Run Project

Project work at ```localhost:3000```

via npm start
```
cd future-group/project/
npm start
```

Run project using ###Docker

I've put development build in Docker. There are some bugs in production environment. Unfortunately, I haven't found a solution yet. And there is no time left to debug the project

Project work at ```localhost:3000```
```
docker build -t jsonserver ./db

cd future-group/project
docker build -t future-group:0.0.1 .

cd future-group/db
docker run --rm -it --name jsonserver-container -p 8080:8080 jsonserver

cd future-group
docker-compose up -d --build

```
