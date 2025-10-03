'use client'

<<<<<<< HEAD
import { useState, useEffect, useCallback } from 'react'
=======
import { useState, useEffect } from 'react'
>>>>>>> master
import { MessageSquare, User, Clock } from 'lucide-react'
import { PostCard } from './PostCard'

interface Post {
  id: string
  title: string
  content: string
  author: {
    name: string | null
    email: string
  }
  createdAt: string
  comments: {
    id: string
  }[]
}

interface PostListProps {
  department: string
}

export function PostList({ department }: PostListProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

<<<<<<< HEAD
  const fetchPosts = useCallback(async () => {
=======
  useEffect(() => {
    fetchPosts()
  }, [department])

  const fetchPosts = async () => {
>>>>>>> master
    try {
      setLoading(true)
      const response = await fetch(`/api/posts?department=${department}`)
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
<<<<<<< HEAD
  }, [department])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])
=======
  }
>>>>>>> master

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="card animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No posts yet</h3>
        <p className="mt-1 text-sm text-gray-500">
          Be the first to ask a question in the {department} department!
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
<<<<<<< HEAD


=======
>>>>>>> master
