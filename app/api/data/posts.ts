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
        content:"The is the First Post created for sample data",
        createdAt: new Date().toISOString(),
    },
];
