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

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

router.get('/:id',(req, res)=>{
  const { id } = req.params;
  const user = service.findOne(id);
  if(user){
    res.status(200).json(user);
  }else{
    res.status(404).json(user);
  }
})

router.post('/', (req, res) =>{
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
})

router.put('/:userId', (req, res) =>{
  const body = req.body;
  const { userId } = req.params;
  const user = service.update( userId , body )
  res.json(user);
})

router.patch('/:userId', (req, res) =>{
  const body = req.body;
  const { userId } = req.params;
  const user = service.update( userId , body )
  res.json(user);
})

router.delete('/:userId', (req, res) =>{
  const { userId } = req.params;
  const rts = service.delete( userId );
  res.json(rts);
})

module.exports = router;
