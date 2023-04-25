import React, { useState } from 'react';
import './CreatePost.css'
import { supabase } from '../Client';

const CreatePost = () => {
    const [post, setPost] = useState([{
        title: "",
        artist: "",
        description: "",
        likeCount: 0,
    }]);
    const [postName, setPostName] = useState("");
    const [postArtist, setPostArtist] = useState("");
    const [postDescr, setPostDescr] = useState("");
    const [likes, setLikes] = useState(0);

    const handleName = (event) => {
        setPostName(event.target.value);
    };
    const handleArtist = (event) => {
        setPostArtist(event.target.value);
    };
    const handleDescr = (event) => {
        setPostDescr(event.target.value);
    };
    const handleLikes = (likes) => {
        setLikes(likes + 1);
    }
    const handleNewPost = () => {
        console.log(postName);
        console.log(postArtist);
        console.log(postDescr);
        setPost({title: postName, artist: postArtist, description: postDescr, likeCount: likes});
    }
    console.log(post);
    const createPost = async (event) => {
        event.preventDefault();
        
        handleNewPost();
        if (post.title != null) {
        await supabase
         .from('Posts')
         .insert({title: post.title, artist: post.artist, description: post.description, likeCount: post.likeCount})
         .select();
     
         window.location = "/";
        }
    }
    return (
        <div>
            <form onSubmit={createPost}>
                <label for="title">Song Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleName} /><br />
                <br/>

                <label for="artist">Song Artist</label><br />
                <input type="text" id="artist" name="artist" onChange={handleArtist} /><br />
                <br/>

                <label for="description">Description</label><br />
                <input type="text" id="description" name="description" onChange={handleDescr} /><br />
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost