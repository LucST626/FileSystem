const fs = require("fs")

const micoche_json = fs.readFileSync("./coche.json", "utf-8"); // lee el archivo en formato utf-8 
const micoche = JSON.parse(micoche_json); // parsea a json del string que contiene la informacion de coches

micoche.ruedas = 10

//fs.writeFileSync("./coche.json",  JSON.stringify(micoche, null, 2)); 
//fs.appendFileSync("./coche.json",  JSON.stringify(micoche), "utf-8") esto añade el objeto en otra linea, sirve par seguir añadiendo