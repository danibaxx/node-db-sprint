const express = require('express');
const router = express.Router({
  mergeParams: true,
});

router.get('/', async (req, res, next) => {
  try {
    const { id } = req.params;
    const tasks = await taskModel.find(id)

    res.json(tasks)
  } catch(err) {
    next(err)
  }
});

module.exports = router;