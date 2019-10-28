const express = require("express");
const router = express.Router();
const pageController = require("../controllers/user");


router.get("/",pageController.Index);
router.post("/",pageController.GenerateCode);
router.get("/code/:codenumber",pageController.showCode);
router.get("/reset",pageController.reset);
router.get("/use",pageController.use);
router.post("/use",pageController.usePost);






module.exports = router;