const fs = require("fs")

const db = "./db/user.json"

function readJSON(db){
    const miobjeto_json = fs.readFileSync(db, "utf-8"); 
    const miobjeto = JSON.parse(miobjeto_json); 
    return miobjeto;
    
}

function resetUsers(){

    const user0 = {
        "username": "admin",
        "password": "1234"
    }
    const user1 = {
        "username" : "usuario01", 
        "password" : "user0123"
    }
    const user2 = {
        "username" : "usuario2", 
        "password" : "user012"
    }
    const miobjeto = {
        users: [user0, user1, user2]
    }
    fs.writeFile(db, JSON.stringify(miobjeto, null, 2) , (error) => {
    
        if (error) {
          console.log(error)
          return
        }
        console.log("archivo creado")
        })
    
}

function addUser(){
    const miobjeto = readJSON(db);
    const { users } = miobjeto
    console.log(users)
}

addUser(db)

module.exports={
    db,
    readJSON
}