import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import {supabase} from '../Client';

const EditPost = (props) => {

    const [dataInput, setDataInput] = useState([{}]);
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
    const updateLikes = () => {
      console.log("Getting in the update like function!");
      setLikes(likes + 1);
      console.log(likes);
    }

    // Read data from table
    useEffect(() => {
        // READ all games from table
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('Posts')
            .select()
            .order('created_at', {ascending: true});

            // set state of posts
            setDataInput(data);
        
        }
        fetchPosts();
    }, [props]);

    // Filter data to include only specific id
    const {id} = useParams();
    console.log({id});
    const song = dataInput.filter(item => item.id == id)[0];

    const handleName = (event) => {
        setPostName(event.target.value);
    };
    const handleArtist = (event) => {
        setPostArtist(event.target.value);
    };
    const handleDescr = (event) => {
        setPostDescr(event.target.value);
    }
    const handleUpdatedSong = () => {
        console.log(postName);
        console.log(postArtist);
        console.log(postDescr);
        setPost({title: postName, artist: postArtist, description: postDescr, likeCount: likes});
    }

    // Update existing post
    // UPDATE post
    const updatePost = async (event) => {
        event.preventDefault();

        handleUpdatedSong();
        if (post.title != null) {
            await supabase
            .from('Posts')
            .update({ title: post.title, artist: post.artist,  description: post.description, likeCount: post.likeCount})
            .eq('id', id);

            window.location = "/";
        }
    }


    // DELETE existing post
    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
        .from('Posts')
        .delete()
        .eq('id', id); 

        window.location = "/";
    }

    return (
        <div>
            <h2> Song Details </h2>
            {song != null ? 
            <>
            <div style={{backgroundColor: "#93C572"}}>
                <h3> Title: {song.title} </h3>
                <h4> Artist: {song.artist}</h4>
                <h4> Description: {song.description} </h4>
                <h4> Likes: {song.likeCount}</h4>
            </div>
            <p> Proceed below to edit your song post! </p>
            <form>
                <label for="title">Name</label> <br />
                <input type="text" id="title" name="title" onChange={handleName} /><br />
                <br/>

                <label for="artist">Song Artist</label><br />
                <input type="text" id="artist" name="artist" onChange={handleArtist} /><br />
                <br/>
                
                <label for="descr">Description</label><br />
                <input type="text" id="descr" name="descr" onChange={handleDescr} /><br />
                <input style={{backgroundColor: "yellow"}} type="button" onClick={updateLikes} value="Give a like!👍" />
                <input style={{backgroundColor: "indigo"}} type="submit" value="Update Post!" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete Post</button>
            </form>
            </>
            : <h1></h1>}
        </div>
    )
}

export default EditPost