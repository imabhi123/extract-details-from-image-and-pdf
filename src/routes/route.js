import express from "express";
import multer from "multer";
import { getFileDetails } from "../controllers/fileController.js";
const router = express.Router();
const upload = multer({ dest: "uploads/" });
router.post("/upload-pdf", upload.single("file"), getFileDetails);

export default router;
