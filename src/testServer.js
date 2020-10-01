/*
Ecrivez un script testServer.js qui se connectera aux différentes url de votre
serveur et qui affichera dans la console les messages récupérés. testServer.js
utilisera le package axios pour éffectuer les requêtes HTTP sur votre serveur
express
*/
import axios from 'axios'
import { PORT, arrayOfPaths } from './app.js'

let rootUrl = `http://localhost:${PORT}`

for (let path of arrayOfPaths) {
    axios
        .get(rootUrl + path)
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => console.error(error))
}