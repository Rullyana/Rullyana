const express = required ('express')

const app = express ()

const helloworld = (request, respond) => 
respond.send("Hello World")

const userFunction = (req, res) => {
    const {name, address} = req.params

    res
    .status(200)
    .json({
        name,
        address,
    })
}

app.get('/', helloWorld)

app.get('/:name/:address', userFunction)

app.listen(3000)

