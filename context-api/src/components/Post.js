import React from 'react';
import posts from './../data/posts';
import { useParams, Redirect } from 'react-router-dom';

const Post = () => {
  // console.log(props.match.params.id);
  // const params = useParams();
  //console.log(params) // es un obj con el id
  const { id } = useParams();
  console.log(posts[id - 1]);

  return (
    <>
      {posts[id-1] ?
        <div>
        <h1>{posts[id - 1].titulo}</h1>
        <p>{posts[id - 1].texto}</p>
      </div>
      :
        <Redirect to='/' />
      }
   
    </>
  );
};

export default Post;
