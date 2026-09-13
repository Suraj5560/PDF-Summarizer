const openAI = require('openai');

const openai = new openAI({
    apikey: process.env.OPENAI_API_KEY
});

const generateEmbeddings = async (text) =>{
    const response = await openai.embeddings.create({
        model: 'text-embeddings-3-small',
        input: text
    });

    return response.data[0].embedding;
}


const generateEmbeddingsForChunks = async (chunks) => {
    const embeddedchunks = [];

    for(const chunk of chunks){
        const embedding = await generateEmbeddings(chunk.text);

        embeddedchunks.push({
            ...chunk,
            embedding: embedding
        });
    }

    return embeddedchunks;
}

module.exports = {
    generateEmbeddings,
    generateEmbeddingsForChunks
};