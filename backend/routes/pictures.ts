import * as express from 'express';
import * as pictureServices from "../services/pictures";

const router = express.Router()

router.post("/getPictures", async (req, res) => {
  try {
    const pics = await pictureServices.getPictures(req.body.tags);

    return res.json(pics);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
