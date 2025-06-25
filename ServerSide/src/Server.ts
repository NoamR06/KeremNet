import express, { Request, Response, NextFunction } from 'express';
import PostRoutes from './Routes/PostsRoutes'

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use('/posts', PostRoutes)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// couple of files