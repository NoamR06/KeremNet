// src/components/PostDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from "../../Post/Post"
import { PostComponent } from '../../Post/PostComponent/PostComponent';
import Navbar from '../../ApplicationLayout/NavigationBar/navigationBar';
import Footer from '../../ApplicationLayout/Footer/Footer';
import "./SinglePost.css"
import ErrorComponent from '../../ApplicationLayout/ErrorMessage/Error';
import Loader from '../../ApplicationLayout/Loader/Loader';


export const SinglePost: React.FC = () => {
    const { post_id } = useParams<{ post_id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    const fetchPost = async () => {
        try {
        const response = await fetch(`http://localhost:3002/posts/${post_id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Post = await response.json();
        setPost(data);
        } catch (err: any) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };

    if (post_id) {
        fetchPost();
    }
    }, [post_id]);
    if (error) return <p> <ErrorComponent received_errors={error} /> </p>;
    if (loading) return <p> <Loader/> </p>;
    if (!post) return <p> <ErrorComponent received_errors={"Post Not Found"} /> </p>;
    const {id, author, content, date, likes, comments} = post;
    return (
        <div className="grid-container">
            <div className="top-section "><Navbar /></div>
            <div className="middle-section">
                <PostComponent id={id} author={author} content={content} 
                date={new Date(date)} post_likes={likes} post_comments={comments}></PostComponent>
            </div>
            <div className="bottom-section"><Footer /></div>
        </div>
    );
};
