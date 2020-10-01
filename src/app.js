import express from 'express'

const app = express()

const PORT = 7777

app.get('/', (req, res) => {
    res.send('Exercices express partie 1')
  })

app.listen(PORT, () => {
    //exécution d'un affichage au lacement du serveur.
    console.log(`Example app listening at http://localhost:${PORT}`)
  })

app.get('/aboutme', (req,res) => {
    res.send('Infos persos')
})

app.get('/aboutyou', (req, res) => {
    let myNav = req.headers['user agent']
    let myIp = req.ip
    res.send(`Welcome ${myIp} ton navigateur est ${myNav}`)
})