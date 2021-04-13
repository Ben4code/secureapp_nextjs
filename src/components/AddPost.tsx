import React, { useState, SyntheticEvent, FormEvent } from 'react'
import { HandlePostProps } from '../pages/experience-bank'


export default function AddPost({ handlePost }: { handlePost: (post: HandlePostProps)=> void }): JSX.Element {
  const [post, setPost] = useState({title: '', content: '', author: ''})
  const [error, setError] = useState('')

  const submitPost = (e: SyntheticEvent) => {
    e.preventDefault()
    if(post.author.trim() === '' || post.content.trim() === '' || post.title.trim() === ''){
      setError('All fields are required.')
      return
    }
    handlePost(post)
    setPost({title: '', content: '', author: ''})
  }

  const onChangeHandler = (e: FormEvent<EventTarget>) =>{
    let target = e.target as HTMLInputElement;
    const { name, value } = target;
    setPost({ ...post, [name]: value })
  }

  return (
    <div className="">
      <div className="">
        <form className="form" onSubmit={submitPost} style={{width: '100%', padding: '2rem 2.25rem'}}>
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input name="title" id="title"  value={post.title} onChange={onChangeHandler}/>
          </div>
          <div className="input-group">
            <label htmlFor="author">Author</label>
            <input name="author" id="author" value={post.author} onChange={onChangeHandler}/>
          </div>
          <div className="input-group">
            <label htmlFor="content">Describe your experience</label>
            <textarea name="content" id="content" rows={5} value={post.content} onChange={onChangeHandler}></textarea>
          </div>
          <div className="input-group">
            <button type='submit' className='btn'>Share Experience</button>
          </div>
          <small style={{color: 'red', textAlign: 'center'}}><span>{error}</span></small>
        </form>
      </div>
    </div>
  )
}
