import React, { useEffect } from 'react'

import Sidebar from '../components/Sidebar'
import PostItem from '../components/PostItem'
import AddPost from '../components/AddPost'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as UUID } from 'uuid'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseClient from '../firebase/firebaseClient'
import { useRouter } from "next/router";
import { useCollection } from 'react-firebase-hooks/firestore'
import { Router } from 'next/router';


toast.configure();

export type Post = {
  id: string
  title: string
  author: string
  content: string
  userId: string
  createdAt: {
    seconds: number
    nanoseconds: number
  }
  likes: {
    userIds: Array<string>
    likesCount: number
  }
}

export interface HandlePostProps {
  title: string
  author: string
  content: string
}

export interface PostItemProps {
  id: string
  title: string
  author: string
  content: string
  userId: string
  likes: number
  createdAt: {
    seconds: number
    nanoseconds: number
  }
}

export default function ExperienceBank({ }) {
  firebaseClient()
  const firestore = firebase.firestore()
  const auth = firebase.auth()

  const router = useRouter();
  
  useEffect(() => {
    const checkAuth = () => {
      if (!auth.currentUser) {
        return router.push('/')
      }
    }
    checkAuth()
  }, [])

  const ref = firestore.collection('posts')

  const query = ref.orderBy('createdAt', 'desc').limit(30)
  const [querySnapshot] = useCollection(query)
  const postsArray = querySnapshot?.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  })) as Post[] | undefined


  const getPosts = (postsArray: Post[]): PostItemProps[] => {
    return postsArray.map((postItem) => {
      return {
        id: postItem.id,
        title: postItem.title,
        author: postItem.author,
        content: postItem.content,
        likes: postItem.likes.likesCount,
        userId: postItem.userId,
        createdAt: postItem.createdAt
      }
    })
  }

  const handlePost = async (post: HandlePostProps) => {
    const newPost = {
      ...post,
      userId: auth.currentUser?.uid,
      likes: {
        userIds: [],
        likesCount: 0
      },
      createdAt: new Date(),
      id: UUID()
    }

    const ref = firestore.collection('posts')
    await ref.add(newPost)
    toast('Your experience was added successfully', { type: 'success' })
  }

  const handleLike = async (postId: string, likeCount: number) => {

    const likesQuerySnapshot = await firestore.collection('posts').doc(postId).get()

    const { likesCount, userIds } = likesQuerySnapshot.data()?.likes
    if (userIds.includes(auth.currentUser?.uid)) {
      userIds.splice(userIds.indexOf(auth.currentUser?.uid), 1)
      return firestore.collection('posts').doc(postId).update({
        likes: {
          likesCount: likesCount - 1,
          userIds
        }
      })
    }

    return firestore.collection('posts').doc(postId).update({
      likes: {
        likesCount: likesCount + 1,
        userIds: [...userIds, auth.currentUser?.uid]
      }
    })
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="layout">
          <div className="experience">
            <h3>Experience Bank</h3>
            <p>The experience bank provides you with the opportunity to share experiences of social engineering attacks and learn from the experiences of others in other to stay aware and ahead of trending ploys of social engineers. </p>
            <br /><br />
            <AddPost handlePost={handlePost} />
            <br /><hr style={{ background: '#3db6eb' }} /><br />
            {
              !postsArray ? (<p>Loading...</p>) : getPosts(postsArray).map((post: PostItemProps, index) => <PostItem key={index} post={post} handleLike={handleLike} />)}
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  )
}
