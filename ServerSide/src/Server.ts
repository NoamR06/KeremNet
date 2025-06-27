import express from 'express';
import PostRoutes from './Routes/PostsRoutes'
import ApplicationRoutes from './Routes/ApplicationRoutes'
import cors from 'cors'
const app = express();
app.use(express.json());
const port = process.env.PORT || 3002;
const allowedOrigin = 'http://localhost:3000'; 
app.use(cors({
    origin: allowedOrigin
}))

app.use('/posts', PostRoutes)
app.use('/application', ApplicationRoutes)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});