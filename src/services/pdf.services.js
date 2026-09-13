const {PDFParse} = require('pdf-parse');

const extractPdfText = async(buffer) =>{
    const parser = new PDFParse({data : buffer});
    const result = await parser.getText();


    const pages = [];
    //i=pagenumber
    for(let i=1 ; i<=result.total ; i++){
        const pageText = result.getPageText(i);

        pages.push({
            page: i,
            text: pageText
        })
    }

    await parser.destroy();

    return {
        pages
    };
};

module.exports = {extractPdfText};