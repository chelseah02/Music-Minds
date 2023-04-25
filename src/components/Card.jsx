import React from 'react'
import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'


const Card = (props) =>  {


  const timestamp = props.created_at;
  return (
      <div className="Card">
          <h2 className="title">{props.title}</h2>
          <h4 className="color">{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)}</h4>
          <h4 className='color'>Likes: {props.likeCount}</h4>
          <Link to={'edit/'+ props.id}>See Song Post</Link>
      </div>
  );
};

export default Card;