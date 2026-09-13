const chunkText = (text , chunkSize =500 , overlap = 50)=>{
    const words = text.split(/\s+/).filter(Boolean);

    const chunks = [];

    let start = 0;
    while(start < words.length){

        const end = start + chunkSize;

        const chunk = words.slice(start,end).join(' ');

        chunks.push(chunk);

        start += chunkSize - overlap;

    }

    return chunks;
}


const createChunksFromPages = (pages) => {
    const allChunks = [];

    pages.forEach((page) => {
        const chunks = chunkText(page.text);

        chunks.forEach((chunk , index) => {
            allChunks.push({
                page : page.page,
                chunkIndex: index,
                text: chunk
            });
        });
    });
    return allChunks;
};

module.exports = {chunkText , createChunksFromPages};

//now we move to embeddings,  That vector represents the semantic meaning of the chunk.
//we compare the question vector with our stored chunk vectors. , That's the heart of semantic search.