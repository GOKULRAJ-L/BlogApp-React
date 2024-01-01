import React from 'react'

const NewPost = ({handleSubmit,title,body,settitle ,setbody}) => {
  return (
   <main className='NewPost'>
    <h2>NewPost</h2>
    <form onSubmit={handleSubmit} className='newPostForm'>
      <label htmlFor="postTitle">Enter the title:</label>
      <input type="text"
      required
      placeholder='Title'
      id='postTitle'
      value={title}
      onChange={(e)=>settitle(e.target.value)}/>
      <label htmlFor="postBody">Enter the content:</label>
      <textarea  id="postBody"
      required
      placeholder='Write your Content'
      value={body}
      onChange={e=>setbody(e.target.value)} />
      <button type='submit' >Submit</button>

    </form>

   </main>
  )
}

export default NewPost
