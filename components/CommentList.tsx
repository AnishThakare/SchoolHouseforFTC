'use client'

import { User, Clock } from 'lucide-react'

interface Comment {
  id: string
  content: string
  author: {
    name: string | null
    email: string
  }
  createdAt: string
}

interface CommentListProps {
  comments: Comment[]
}

export function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">
        No comments yet. Be the first to answer!
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-primary-600" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                <span className="font-medium text-gray-900">
                  {comment.author.name || comment.author.email}
                </span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
