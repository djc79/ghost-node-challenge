## Node.js coding challenge

### Prerequisites

- Node 14+
- Yarn

### Setup

Install packages:

```
$ yarn install
yarn install v1.22.17
warning package.json: No license field
warning app@0.1.0: No license field
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
✨  Done in 0.60s.
```

### Start the app

```
$ yarn start
yarn run v1.22.17
warning package.json: No license field
$ nodemon start
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node start main.js`
Example app listening on port 8000
```

### Verify functionality

`get /`

```
$ curl http://localhost:8000
{"Hello":"World"}
```

`get /items`

```
$ curl http://localhost:8000/items/12345
{"item_id":"12345"}
```

`post /items`

```
$ curl -sX POST http://localhost:8000/items \
    -H 'content-type: application/json' \
    -d '{"name":"foo","description":"bar","price":1.23}'

{"name":"foo","description":"bar","price":1.23}
```
