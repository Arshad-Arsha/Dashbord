import React from 'react'
import { Search, Settings, Bell, ChevronDown } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Navigation */}
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">←</span>
            </div>
            <nav className="flex items-center space-x-1 ml-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                Employee Summary
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
                Daily Attendance
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
                Performance
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
                Payroll
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
                Recruitment
              </button>
            </nav>
          </div>

          {/* Right side - Search and Profile */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            <div className="flex items-center space-x-2 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
