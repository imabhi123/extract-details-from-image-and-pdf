
import OpenAI from "openai";

const openai=new OpenAI({
  apiKey:process.env.OPENAI_API_KEY
})

export const openaiExtract=async (prompt)=>{
  const response=await openai.chat.completions.create({
    model:'gpt-3.5-turbo',
    messages:[{"role":'user','content':`extract the name and the pan number and list it '${prompt}'`}],
    max_tokens:100
  })
  return response.choices[0].message.content
}