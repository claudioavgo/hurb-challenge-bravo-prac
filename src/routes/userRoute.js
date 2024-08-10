import express from 'express';
import { conn } from '../db/index.js';

const router = express.Router();

// Response model

// {
//     "id": "xxx",                  // user ID 
//     "name": "test",               // user name
//     "dob": "",                    // date of birth
//     "address": "",                // user address
//     "description": "",            // user description
//     "createdAt": ""               // user created date
// }

router.get('/', async (req, res) => {
    const data = await conn.user.findMany();
    res.send(data);
});

router.post('/', async (req, res) => {
    const data = await conn.user.create({
        data: req.body
    })
    res.send(data);
});

router.delete('/:id', async (req, res) => {
    const user = await conn.user.findFirst({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if (!user) {
        res.sendStatus(404)
        return;
    }

    await conn.user.delete({
        where: {
            id: user.id
        }
    })

    res.sendStatus(200);
})

export default router;