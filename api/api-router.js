const router = require('express').Router();
const bcrypt = require('bcryptjs');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', async (req, res) => {
  const { password } = req.body;
  const hash = bcrypt.hashSync(password, 14);
  res.status(201).json({ password: hash });
});

module.exports = router;
