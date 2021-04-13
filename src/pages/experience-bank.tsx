import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

import Sidebar from '../components/Sidebar'
import AuthRoute from '../components/AuthRoutes'
import PostItem from '../components/PostItem'
import AddPost from '../components/AddPost'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as UUID } from 'uuid'
import { useRouter } from "next/router";
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseClient from '../firebase/firebaseClient'

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

export default function ExperienceBank() {
  firebaseClient()
  const firestore = firebase.firestore()
  const auth = firebase.auth()

  const router = useRouter();
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
    <AuthRoute>
      <ToastContainer />
      <div className="container">
        <div className="layout">
          <div className="experience">
            <h3>About Experience Bank</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque numquam eveniet minus, perferendis laboriosam earum itaque obcaecati expedita nulla fuga eligendi sint dolore ut optio non porro vero mollitia dolor aspernatur voluptatem modi hic eius </p>
            <br /><br />
            <AddPost handlePost={handlePost} />
            <br /><hr style={{ background: '#3db6eb' }} /><br />
            {!postsArray ? (<p>Loading...</p>) : getPosts(postsArray).map((post: PostItemProps, index) => <PostItem key={index} post={post} handleLike={handleLike} />)}
          </div>
          <Sidebar />
        </div>
      </div>
    </AuthRoute>
  )
}
