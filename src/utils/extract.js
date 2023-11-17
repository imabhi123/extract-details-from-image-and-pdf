
import { PDFExtract } from "pdf.js-extract";
const pdfExtract=new PDFExtract()
async function extractDataFromPDF(pdfFilePath) {
  const data = await pdfExtract.extract(pdfFilePath);
  let str='';
  data.pages.map((item)=>{
    item.content.map((strs)=>{
      str+=strs.str;
      str+=' ';
    })
  })
  return str;
}

export default extractDataFromPDF

