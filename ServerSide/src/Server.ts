import express, { Request, Response } from 'express';
const Posts: { id:number, author: string, content: string, date: string, likes: number, comments: [] }[] = require('../db.json');

const app = express();
const port = process.env.PORT || 3000;

app.get('/posts', (req: Request, res: Response) => {
    res.json(Posts);
});

app.get('/posts/:id', (req: Request, res: Response) => {
    const objectId = parseInt(req.params.id);
    const post = Posts.find((post) => post.id === objectId);
    if (post) {
        res.json(post);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});