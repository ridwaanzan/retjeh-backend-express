import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  res.status(200).json({
    isSuccess: true,
    message: `welcome ${req.body.name}`,
  });
});

export default router;
