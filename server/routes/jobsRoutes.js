const express = require("express");
const router = express.Router();
const { getJobs, createJob } = require("../controller/jobController");

router.get("/", getJobs);
router.post("/", createJob);

module.exports = router;

module.exports = router;
