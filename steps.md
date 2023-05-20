npm install -g nodemon ts-node prettier typescript

npm init

npm install dotenv express joi mongoose

npm i -D ts-node typescript

npm i --save-dev typescript @types/express

tsc --init
edit package.json 👇

 "scripts": {
    "build": "rm -rf build/ && tsc",
    "start": "node build/server.js"
  },




mkdir middleware controllers library models routes





library/Loggin
export default class Logging { public static info = (args: any) => console.log( '\x1b[36m%s\x1b[0m', `${new Date().toLocaleString()} [INFO]`, typeof args === 'string' ? args : args )

public static warn = (args: any) => console.log( '\x1b[33m%s\x1b[0m', `${new Date().toLocaleString()} [INFO]`, typeof args === 'string' ? args : args )

public static error = (args: any) => console.log( '\x1b[31m', `${new Date().toLocaleString()} [INFO]`, typeof args === 'string' ? args : args ) }
