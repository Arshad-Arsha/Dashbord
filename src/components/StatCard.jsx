import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

const StatCard = ({ title, value, subtitle, change, changeType, icon, metrics }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">{icon === '👥' ? '👥' : icon === '👤' ? '👤' : '📊'}</span>
        </div>
      </div>
      
      <div className="mb-2">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{subtitle}</span>
        {change && (
          <div className={`flex items-center space-x-1 ${
            changeType === 'positive' ? 'text-green-600' : 'text-red-600'
          }`}>
            {changeType === 'positive' ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">{change}</span>
          </div>
        )}
      </div>

      {metrics && (
        <div className="mt-4 flex space-x-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-semibold text-gray-900">{metric.value}</div>
              <div className="text-xs text-gray-500">{metric.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default StatCard
