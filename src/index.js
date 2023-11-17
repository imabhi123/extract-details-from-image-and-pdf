import dotenv from "dotenv";
import express from "express";
import connectToDB from "./db/index.js";
import multer from "multer";
import extractDataFromPDF from "./utils/extract.js";
import { imageExtract } from "./utils/tesseract.js";
import { openaiExtract } from "./utils/openai.js";
import router from "./routes/route.js";
dotenv.config({ path: "./env" });
const app = express();
const port = process.env.PORT || 8000;

// Middleware for parsing JSON
app.use(express.json());

// Multer middleware for handling file uploads
// const upload = multer({ dest: "uploads/" });

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.post("/upload-pdf", upload.single("file"), async (req, res) => {
//   try {
//     const pdfFile = req.file; 
//     const type = req.body.type;
//     console.log(pdfFile, type);

//     if (type === "image") {
//       // Process the uploaded image
//       const response = await imageExtract(pdfFile.path);
//       console.log(response,'abhishek')
//       const processedText = await openaiExtract(response);
//       console.log(processedText)
//       return res.status(200).send(processedText);
//     } else if (type === "pdf") {
//       // Process the uploaded PDF file
//       const extractedData = await extractDataFromPDF(pdfFile.path);
//       const processedText = await openaiExtract(extractedData);
//       console.log(processedText)
//       return res.status(200).send(processedText);
//     } else {
//       // Invalid type
//       return res.status(400).send("Invalid type specified");
//     }
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     return res.status(500).send("Internal Server Error");
//   }
// });


connectToDB()
  .then(() => {
    app.listen(port, () => {
      console.log("App is listening on port", port);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed ", err);
  });
 