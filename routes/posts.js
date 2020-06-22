const router = require('express').Router();
const verify = require('./verifyToken')

router.get('/', verify, (req, res) => {
  res.json({posts: {
    title: "vuong post",
    description: "This is very interesting post."
  }})
})

module.exports = router