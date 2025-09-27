'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { 
  Users, 
  Wrench, 
  Monitor, 
  Code, 
  Plus,
  LogOut,
  User
} from 'lucide-react'
import { DepartmentTabs } from '@/components/DepartmentTabs'
import { PostList } from '@/components/PostList'
import { CreatePostModal } from '@/components/CreatePostModal'

const departments = [
  { id: 'outreach', name: 'Outreach', icon: Users, color: 'bg-ftc-red' },
  { id: 'building', name: 'Building', icon: Wrench, color: 'bg-ftc-blue' },
  { id: 'cadding', name: 'Cadding', icon: Monitor, color: 'bg-ftc-yellow' },
  { id: 'coding', name: 'Coding', icon: Code, color: 'bg-ftc-red' },
]

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [activeDepartment, setActiveDepartment] = useState('outreach')
  const [showCreatePost, setShowCreatePost] = useState(false)

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!session) {
    router.push('/landing')
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                SchoolHouse for FTC
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowCreatePost(true)}
                className="btn-primary flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>New Post</span>
              </button>
              <div className="flex items-center space-x-2 text-gray-700">
                <User className="h-5 w-5" />
                <span>{session.user?.name || session.user?.email}</span>
              </div>
              <button
                onClick={() => router.push('/api/auth/signout')}
                className="text-gray-500 hover:text-gray-700"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DepartmentTabs
          departments={departments}
          activeDepartment={activeDepartment}
          onDepartmentChange={setActiveDepartment}
        />
        
        <div className="mt-8">
          <PostList department={activeDepartment} />
        </div>
      </main>

      {/* Create Post Modal */}
      {showCreatePost && (
        <CreatePostModal
          department={activeDepartment}
          onClose={() => setShowCreatePost(false)}
        />
      )}
    </div>
  )
}
