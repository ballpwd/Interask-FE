const express = require('express');
const router = express.Router();
const Ask = require('../../models/Ask')

// @route  POST /api/ask
// @desc   Create a ask
router.post('/', async (req, res) => {
    const payload = req.body
    const ask = new Ask({
        text: req.body.text,
      });
    await ask.save()
})

// @route  GET /api/ask
// @desc   Get all ask
router.get('/', async (req, res) => {
    try {
        const ask = await Ask.find()
        res.json(ask)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
});

// @route  GET /api/ask:id
// @desc   Get ask by id

// router.get('/ask/:id', async (req, res) => {
//     try{
//         const {id} = req.params
//         const ask = await Ask.findById(id)

//         if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !ask) {
//             return res.status(404).json({ msg: 'Ask not found' });
//         }

//         res.json(ask) 
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//       }
// })



module.exports = router;