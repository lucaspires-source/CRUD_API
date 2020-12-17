import express from 'express'

const router = express.Router()


const users = [
    {
        firstName:"Lucas",
        lastName:"Ribeiro",
        age:25
    },
    {
        firstName:"Lauro",
        lastName:"Bobo",
        age:35
    }
]
router.get('/', (req,res) => {
    res.send(users)
});


router.post('/', (req,res) => {
    const user = req.body
    users.push(user)
    res.send(`User with name ${user.firstName} was added to the database`)
});
export default router