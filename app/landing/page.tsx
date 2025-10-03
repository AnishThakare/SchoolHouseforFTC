'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { Users, Wrench, Monitor, Code, ArrowRight } from 'lucide-react'

const departments = [
  { name: 'Outreach', icon: Users, color: 'bg-ftc-red', description: 'Community engagement and team promotion' },
  { name: 'Building', icon: Wrench, color: 'bg-ftc-blue', description: 'Robot construction and mechanical design' },
  { name: 'Cadding', icon: Monitor, color: 'bg-ftc-yellow', description: '3D modeling and CAD design' },
  { name: 'Coding', icon: Code, color: 'bg-ftc-red', description: 'Programming and software development' },
]

export default function LandingPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('/')
    }
  }, [session, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">
              SchoolHouse for FTC
            </h1>
            <div className="flex space-x-4">
              <Link
                href="/auth/signin"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="btn-primary"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect with the
            <span className="text-primary-600"> FTC Community</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Share knowledge, ask questions, and collaborate with FTC participants and coaches 
            across all departments. Your one-stop platform for FTC season success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="btn-primary text-lg px-8 py-3 inline-flex items-center"
            >
              Join the Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/auth/signin"
              className="btn-secondary text-lg px-8 py-3"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Departments Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Explore by Department
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => {
              const Icon = dept.icon
              return (
                <div key={dept.name} className="card hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 ${dept.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600">
                    {dept.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose SchoolHouse for FTC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Driven
              </h3>
              <p className="text-gray-600">
                Connect with FTC teams worldwide and learn from their experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Department Focused
              </h3>
              <p className="text-gray-600">
                Organized forums for each department to find relevant help quickly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Real-time Help
              </h3>
              <p className="text-gray-600">
                Get answers to your questions from experienced FTC participants.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">SchoolHouse for FTC</h3>
          <p className="text-gray-400 mb-6">
            Empowering the FTC community through knowledge sharing and collaboration.
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 SchoolHouse for FTC. Built for the FTC community.
          </p>
        </div>
      </footer>
    </div>
  )
}
