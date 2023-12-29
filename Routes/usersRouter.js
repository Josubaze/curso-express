const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

// router.get('/', (req, res) => {
//   const { limit, offset } = req.query
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset,
//     })
//   }else{
//     res.send('no hay parametros');
//   }

// })

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 5;
  for (let i = 0; i < limit; i++) {

    users.push({
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    });
  }
  res.json(users);
});

router.get('/:id',(req, res)=>{
  const { id } = req.params;
  res.json({
      userId: id,
      username: 'elFulano',
      email: '@example',
      avatar: faker.image.avatar(),
      password: '123456',
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
  });
})

router.post('/', (req, res) =>{
  const body = req.body;
  res.json({
    "message" : 'created',
    "data" : body
  })
})

router.put('/:userId', (req, res) =>{
  const body = req.body;
  const { userId } = req.params;
  res.json({
    "message" : 'update PUT',
    "data" : body,
    userId,
  })
})

router.patch('/:userId', (req, res) =>{
  const body = req.body;
  const { userId } = req.params;
  res.json({
    "message" : 'update PATH',
    "data" : body,
    userId,
  })
})

router.delete('/:userId', (req, res) =>{
  const { userId } = req.params;
  res.json({
    "message" : 'deleted',
    userId,
  })
})

module.exports = router;
