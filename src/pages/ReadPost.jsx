import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './ReadPost.css';
import {supabase} from '../Client';

const ReadPost = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // READ all posts from table
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('Posts')
            .select()
            .order('created_at', {ascending: true});

            // set state of posts
            setPosts(data)
        
        }
        fetchPosts();
    }, [props]);
    console.log(posts);
    console.log("In Read Posts!");
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((song,index) => 
                   <Card id={song.id} title={song.title} likeCount = {song.likeCount} created={song.created_at}/>
                ) : <h2>{'No Songs Yet! Click New Post to Add One!'}</h2>
            }
        </div>  
    )
}

export default ReadPost;