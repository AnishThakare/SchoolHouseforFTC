'use client'

import { LucideIcon } from 'lucide-react'

interface Department {
  id: string
  name: string
  icon: LucideIcon
  color: string
}

interface DepartmentTabsProps {
  departments: Department[]
  activeDepartment: string
  onDepartmentChange: (department: string) => void
}

export function DepartmentTabs({ 
  departments, 
  activeDepartment, 
  onDepartmentChange 
}: DepartmentTabsProps) {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {departments.map((department) => {
          const Icon = department.icon
          const isActive = activeDepartment === department.id
          
          return (
            <button
              key={department.id}
              onClick={() => onDepartmentChange(department.id)}
              className={`
                flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm
                ${isActive
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              <div className={`p-1 rounded ${department.color} ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                <Icon className="h-4 w-4 text-white" />
              </div>
              <span>{department.name}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
