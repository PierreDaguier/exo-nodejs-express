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

app.get('/oddtest/:number', (req, res) => {
    let number = Number(req.params.number)
    //securite pour s'assurer que user rentre un nombre entier
    if (!isFinite(number) || Math.floor(number) != number) {
        res.send('Veuillez rentrer un nombre entier (ex. 18)')
    } else {
        let message =
            number % 2 === 0 ? `${number} est pair` : `${number} est impair`
        res.send(message)
    }
})

export let arrayOfPaths = app._router.stack // all registered routes
    .filter((r) => r.route) // take out all the middleware
    .map((r) => r.route.path) //map the paths

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})