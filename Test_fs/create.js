const fs = require("fs")

//fs.writeFileSync("./test.txt", "Hola Mundo")
//^ Crea un file .txt en la raiz del archivo

const coche = {
    "ruedas": 4,
    "puertas": 5,
    "tipo_motor": "electrico",
    "marca": "ford",
    "modelo": "fiesta",
}
coche_json = JSON.stringify(coche, null, 2) //Convierte el objeto a formato json y lo guarda en una cadena de texto con formato json


fs.writeFile("./coches/coche.json", coche_json , (error) => {
    
    if (error) {
      console.log(error)
      return
    }
    console.log("archivo creado")
    })
    
//^ 
