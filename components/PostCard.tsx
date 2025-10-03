'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MessageSquare, User, Clock, ChevronDown, ChevronUp } from 'lucide-react'
import { CommentList } from './CommentList'
import { CreateComment } from './CreateComment'

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

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState<any[]>([])
  const [loadingComments, setLoadingComments] = useState(false)
  const router = useRouter()

  const handleViewPost = () => {
    router.push(`/post/${post.id}`)
  }

  const handleToggleComments = async () => {
    if (!showComments && comments.length === 0) {
      setLoadingComments(true)
      try {
        const response = await fetch(`/api/posts/${post.id}/comments`)
        const data = await response.json()
        setComments(data)
      } catch (error) {
        console.error('Error fetching comments:', error)
      } finally {
        setLoadingComments(false)
      }
    }
    setShowComments(!showComments)
  }

  const handleCommentAdded = (newComment: any) => {
    setComments([...comments, newComment])
  }

  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 
            className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-primary-600"
            onClick={handleViewPost}
          >
            {post.title}
          </h3>
          <p className="mt-2 text-gray-600 line-clamp-3">
            {post.content}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{post.author.name || post.author.email}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <button
          onClick={handleToggleComments}
          className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700"
        >
          <MessageSquare className="h-4 w-4" />
          <span>{post.comments.length}</span>
          {showComments ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>

      {showComments && (
        <div className="mt-4 border-t pt-4">
          {loadingComments ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600 mx-auto"></div>
            </div>
          ) : (
            <>
              <CommentList comments={comments} />
              <CreateComment postId={post.id} onCommentAdded={handleCommentAdded} />
            </>
          )}
        </div>
      )}
    </div>
  )
}
