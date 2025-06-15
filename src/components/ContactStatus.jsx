import React from 'react'
import { ChevronRight } from 'lucide-react'

const ContactStatus = () => {
    return (
        <div className="bg-[#f9fafb] rounded-xl p-5 shadow-sm border border-gray-200 w-full max-w-sm">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-xs text-gray-500">Employment Agreement Tracker</h3>
                    <h2 className="text-lg font-semibold text-gray-900">Contact status</h2>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 mt-1" />
            </div>

            {/* Semi Donut */}
            <div className="flex items-center justify-center mb-4">
                <div className="relative w-32 h-16">
                    <svg viewBox="0 0 36 18" className="w-full h-full">
                        {/* Background track */}
                        <path
                            d="M2 18 A16 16 0 0 1 34 18"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="4"
                        />
                        {/* Permanent - Blue 80% */}
                        <path
                            d="M2 18 A16 16 0 0 1 20 2"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="4"
                        />
                        {/* Contract - Lime 11.5% */}
                        <path
                            d="M20 2 A16 16 0 0 1 27 4"
                            fill="none"
                            stroke="#84cc16"
                            strokeWidth="4"
                        />
                        {/* Part-Time - Black 8.5% */}
                        <path
                            d="M27 4 A16 16 0 0 1 34 18"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="4"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">800</div>
                            <div className="text-xs text-gray-500">Total Employees</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full" />
                        <span className="text-gray-600">Permanent</span>
                    </div>
                    <span className="font-medium text-gray-900">80%</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-lime-500 rounded-full" />
                        <span className="text-gray-600">Contract</span>
                    </div>
                    <span className="font-medium text-gray-900">11.5%</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-black rounded-full" />
                        <span className="text-gray-600">Part-Time</span>
                    </div>
                    <span className="font-medium text-gray-900">8.5%</span>
                </div>
            </div>
        </div>
    )
}

export default ContactStatus
