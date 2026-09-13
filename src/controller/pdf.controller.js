const {extractPdfText} = require('../services/pdf.services');
const {createChunksFromPages} = require('../services/chunk.services');



//file will be in  req.file and actual pdf binary data will be in req.file.buffer
const pdfUpload = async (req,res) =>{     // Key: pdf , Type: File , Value: your-file.pdf

    try{
        if(!req.file){
        return res.status(400).json({
            message: "Please upload pdf"
        })
    }

    const result = await extractPdfText(req.file.buffer);

    const chunks = createChunksFromPages(result.pages);
    console.log(chunks);

    res.json({
        message: "Pdf uploaded succesfully",
        fileName: req.file.originalname,
        size: req.file.size,
        pages: result.pages.length,
        chunks: chunks

    });
    }catch(error){
        console.log(error);

        res.status(500).json({
            message: error.message
        })

    }
    
}

module.exports = {pdfUpload};