const express = require("express");
const { allPost, myPost } = require("../../controller/post/post-read");
const { imageUpload } = require("../../middleware/multer/index");
const { postUpdate } = require("../../controller/post/post-update");
const { postDelete } = require("../../controller/post/post-delete");
const { postCreate } = require("../../controller/post/post-create/index");
const router = express.Router();

router.get("/allpost", allPost);
router.get("/mypost", myPost);

router.post("/create", imageUpload.single("image"), postCreate);

// TODO: check that the user is owner of posts (update and delete)
router.put("/update", imageUpload.single("image"), postUpdate);
router.post("/delete", postDelete);

module.exports = router;
