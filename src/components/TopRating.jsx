import React from 'react'
import { ChevronRight, Star } from 'lucide-react'

const TopRating = () => {
  const employees = [
    {
      name: "Alice Johnson",
      role: "Software Engineer",
      rating: 8.5,
      status: "Excellent",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Elisabeth Kim Tjow",
      role: "HR Generalist",
      rating: 7.8,
      status: "Good",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Mark Lee",
      role: "DevOps Specialist",
      rating: 7.8,
      status: "Good",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Theodorus Ronald",
      role: "Software Engineer",
      rating: 7.2,
      status: "Good",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Bessie Cooper",
      role: "Software Engineer",
      rating: 7.2,
      status: "Good",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Sarah Lim",
      role: "Content Specialist",
      rating: 7.2,
      status: "Good",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face"
    }
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Top Satisfaction Score</h3>
          <h2 className="text-lg font-semibold text-gray-900">Top 5 Rating</h2>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {employees.map((employee, index) => (
          <div key={index} className="flex items-center space-x-3">
            <img
              src={employee.avatar}
              alt={employee.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{employee.name}</p>
              <p className="text-xs text-gray-500 truncate">{employee.role}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-900">{employee.rating}</span>
              <span className="text-xs text-gray-500">{employee.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopRating
