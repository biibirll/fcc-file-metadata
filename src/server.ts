import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const upload = multer();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "upfile is required" });
    }

    res.json({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
