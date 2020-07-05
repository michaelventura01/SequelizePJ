const {CRUD} = require('./helpers');
const database = require('./models');
const db = require('./models');

const params = process.argv;

if(params.length <= 2){
    process.exit(0);
}

const args = params.slice(2);
const command = args[0].split(':')[0].substring(2);
const entity = args[0].split(':')[1];


switch(command){
    case CRUD.CREATE:
        const data = {};
        args.slice(1).map(arg => {
            const temp = arg.split('=');
            data[temp[0].substring(2)] = temp[1];
        });
        db[entity].create(data).then(()=>{
            console.log('contact created succefully!!!');
        }).catch(console.log);
        break;
    case CRUD.DELETE:
        console.log('Deleted!!!');
        break;
    case CRUD.READ:
        db[entity].findAll().then(console.log).catch(console.log);
        break;
    case CRUD.UPDATE:
        console.log('Updated!!!');
        break;
    default:
        console.log('Operation Not Found!!!');
        break;
}