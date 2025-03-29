interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: string;
}

export const posts:Post[] = [
    {
        id:1,
        title: "First Post",
        content:"The is the First Post created for enterntainment purpose",
        createdAt: new Date().toISOString(),
    },

    {
        id:2,
        title:"Artificial Intelligence",
        content:"Artificial Intelligence (AI) refers to the capability of machines to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making, often through the use of algorithms and large datasets.",
        createdAt: new Date().toString(),
    },
    {
        id:3,
        title:"Deep Learning",
        content:"Deep learning is a subfield of machine learning that uses artificial neural networks with multiple layers (hence 'deep') to learn from data and make predictions or decisions. These networks are inspired by the human brain and can be applied to various tasks like image recognition, natural language processing, and speech recognition",
        createdAt: new Date().toString(),
    }
];
