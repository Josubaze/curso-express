const express = require('express');
const userService = require('./../Services/userService')
const router = express.Router();

const service = new userService()
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

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
});

router.get('/:id', async (req, res)=>{
  const { id } = req.params;
  const user = await service.findOne(id);
  if(user){
    res.status(200).json(user);
  }else{
    res.status(404).json(user);
  }
})

router.post('/', async (req, res) =>{
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json(newUser);
})

router.put('/:userId', async (req, res) =>{
  try {
    const body = req.body;
    const { userId } = req.params;
    const user = await service.update( userId , body )
    res.json(user);

  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
})

router.patch('/:userId', async (req, res) =>{
  try {
    const body = req.body;
    const { userId } = req.params;
    const user = await service.update( userId , body )
    res.json(user);

  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
})

router.delete('/:userId', async (req, res) =>{
  const { userId } = req.params;
  const rts = await service.delete( userId );
  res.json(rts);
})

module.exports = router;
