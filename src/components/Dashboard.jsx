import React from 'react'
import { Filter, ChevronDown, ChevronRight } from 'lucide-react'
import StatCard from './StatCard'
import TeamChart from './TeamChart'
import ContactStatus from './ContactStatus'
import TopRating from './TopRating'
import Absenteeism from './Absenteeism'
import MetricsRating from './MetricsRating'

const Dashboard = () => {
  return (
    <div className="p-6">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Dashboard</span>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">PRO</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <span>All Department</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Employee Summary</h1>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Stats and Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Head Count"
              value="327"
              subtitle="New Hires"
              change="+4.7%"
              changeType="positive"
              icon="👥"
            />
            <StatCard
              title="HR to Employee"
              value="75"
              subtitle="Human resources"
              change="-1.2%"
              changeType="negative"
              icon="👤"
            />
            <StatCard
              title="Status Breakdown"
              value="1,350"
              subtitle="Employees"
              metrics={[
                { label: "Probation", value: "87" },
                { label: "Pending", value: "46" }
              ]}
              icon="📊"
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TeamChart />
            <ContactStatus />
          </div>

          {/* Absenteeism */}
          <Absenteeism />
        </div>

        {/* Right Column - Ratings and Metrics */}
        <div className="space-y-6">
          <TopRating />
          <MetricsRating />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
