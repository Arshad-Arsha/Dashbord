import React from 'react'
import { ChevronRight } from 'lucide-react'

const TeamChart = () => {
    const departments = [
        { name: 'Sales', count: 45, color: 'bg-gray-800' },
        { name: 'Support', count: 32, color: 'bg-gray-700' },
        { name: 'Designer', count: 28, color: 'bg-gray-600' },
        { name: 'Legal', count: 15, color: 'bg-gray-500' },
        { name: 'Finance', count: 12, color: 'bg-blue-600' }, // highlighted
        { name: 'Operations', count: 38, color: 'bg-gray-600' },
        { name: 'Dev', count: 42, color: 'bg-gray-700' }
    ]

    const maxCount = Math.max(...departments.map(d => d.count))
    const totalEmployees = departments.reduce((sum, dept) => sum + dept.count, 0)
    const chartHeight = 160 // pixels

    return (
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 w-full max-w-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-1">Employee Count by Department</h3>
                    <h2 className="text-lg font-semibold text-gray-900">Track your team</h2>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            {/* Total count badge */}
            <div className="mb-4">
        <span className="px-2 py-1 bg-gray-900 text-white text-xs rounded">
          {totalEmployees} Employees
        </span>
            </div>

            {/* Chart Bars */}
            <div className="flex items-end justify-between space-x-2 mb-4" style={{ height: `${chartHeight}px` }}>
                {departments.map((dept, index) => {
                    const heightPx = (dept.count / maxCount) * chartHeight
                    return (
                        <div key={index} className="flex flex-col items-center flex-1">
                            <div
                                className={`w-full ${dept.color} rounded-t`}
                                style={{ height: `${heightPx}px` }}
                            />
                        </div>
                    )
                })}
            </div>

            {/* Labels */}
            <div className="flex justify-between text-xs text-gray-500">
                {departments.map((dept, index) => (
                    <span key={index} className="w-full text-center truncate">{dept.name}</span>
                ))}
            </div>
        </div>
    )
}

export default TeamChart
