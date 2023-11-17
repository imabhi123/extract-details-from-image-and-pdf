import multer from "multer";
import extractDataFromPDF from "../utils/extract.js";
import { imageExtract } from "../utils/tesseract.js";
import { openaiExtract } from "../utils/openai.js";
const upload = multer({ dest: "uploads/" });
export const getFileDetails = async (req, res) => {
  try {
    const pdfFile = req.file; 
    const type = req.body.type;
    console.log(pdfFile, type);
 
    if (type === "image") {
      // Process the uploaded image
      const response = await imageExtract(pdfFile.path);
      console.log(response,'abhishek')
      const processedText = await openaiExtract(response);
      console.log(processedText)
      return res.status(200).send(processedText);
    } else if (type === "pdf") {
      // Process the uploaded PDF file
      const extractedData = await extractDataFromPDF(pdfFile.path);
      const processedText = await openaiExtract(extractedData);
      console.log(processedText)
      return res.status(200).send(processedText);
    } else {
      // Invalid type
      return res.status(400).send("Invalid type specified");
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export const getDetails=async(req,res)=>{
  try {
    
  } catch (error) {
    
  }
}
