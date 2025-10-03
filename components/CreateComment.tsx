'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

interface CreateCommentProps {
  postId: string
  onCommentAdded: (comment: any) => void
}

export function CreateComment({ postId, onCommentAdded }: CreateCommentProps) {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    setLoading(true)
    try {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: content.trim(),
        }),
      })

      if (response.ok) {
        const newComment = await response.json()
        onCommentAdded(newComment)
        setContent('')
      } else {
        console.error('Failed to create comment')
      }
    } catch (error) {
      console.error('Error creating comment:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex space-x-3">
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
            className="input resize-none"
            placeholder="Write your answer..."
            required
          />
        </div>
        <button
          type="submit"
          className="btn-primary flex items-center space-x-2 self-end"
          disabled={loading || !content.trim()}
        >
          <Send className="h-4 w-4" />
          <span>{loading ? 'Posting...' : 'Post'}</span>
        </button>
      </div>
    </form>
  )
}
