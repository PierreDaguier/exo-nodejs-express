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

app.get('/vote/:age', (req, res) => {
    const vote = req.params.age
    if (vote >= 18) {
        res.send('Tu peux voter')
    } else {
        res.send('Tu ne peux pas voter')
    }
})

app.get('/palindrome/:mot', (req, res) => {
    const palindrome = req.params.mot
    if (palindrome === palindrome.split('').reverse().join()){
        res.send(`C'est un palindrome !`)
    } else {
        res.send(`Ce n'est pas un palindrome !`)
    }
})