import React from 'react'
import { Link } from 'react-router-dom'


const Feed = ({post}) => {
  return (
    <>
        {
            post.map((item)=>(
                <article key={item.id} className='post'>
                    <Link to={`post/${item.id}`}  >
                        <h1>{item.title}</h1>
                    </Link>
                    <p className='postBody'>{
                        (item.body).length <=30? item.body :`${item.body}...more`
                    }</p>
                </article>
            ))
        }
    </> 
  )
}

export default Feed
