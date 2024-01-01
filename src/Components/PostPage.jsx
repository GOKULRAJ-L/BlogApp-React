import React from 'react'
import {useParams,Link} from 'react-router-dom'

const PostPage = ({post,handledelete}) => {
  const {id} = useParams()
  const item = post.find((items)=>(items.id).toString()===id)

  return (
    <main className='PostPage'>
      {
        item?(
          <>
          <h2>{item.title}</h2>
          <p className='postBody' >{item.body}</p>
          <button onClick={()=>handledelete(item.id)}>Delete</button>
          </>
        ):(
          <>
          <h2>Post not found</h2>
          <p><Link to ='/' >To explore More vist our Home Page</Link></p>
          </>
        )
      }


    </main>
  )
}

export default PostPage
