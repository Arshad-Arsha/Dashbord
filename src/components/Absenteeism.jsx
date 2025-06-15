import React from 'react'

const Absenteeism = () => {
  const days = ['M', 'T', 'W', 'T', 'F']
  const percentages = ['0%', '1%', '2%', '3%', '4%', '>5%']
  const colors = [
    ['bg-blue-100', 'bg-blue-300', 'bg-blue-400', 'bg-blue-500', 'bg-blue-600'],
    ['bg-blue-300', 'bg-blue-400', 'bg-blue-600', 'bg-blue-500', 'bg-blue-700'],
    ['bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-300', 'bg-blue-200'],
    ['bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-500', 'bg-green-400'],
    ['bg-blue-200', 'bg-blue-400', 'bg-blue-600', 'bg-blue-300', 'bg-blue-500'],
    ['bg-gray-200', 'bg-gray-200', 'bg-gray-200', 'bg-gray-200', 'bg-gray-200'],
  ]

  return (
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="grid grid-cols-2 gap-8 items-start">
          {/* Left Section */}
          <div>
            <div className="mb-4">
              <h3 className="text-sm text-gray-600">Identify employees with absences</h3>
              <h2 className="text-lg font-semibold text-gray-900">Absenteeism</h2>
            </div>

            <div className="flex justify-between text-center mb-4">
              <div>
                <div className="text-2xl font-bold text-gray-900">45</div>
                <div className="text-xs text-gray-500">Employees</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">165</div>
                <div className="text-xs text-gray-500">Employees</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">65</div>
                <div className="text-xs text-gray-500">Employees</div>
              </div>
            </div>

            {/* Color bars */}
            <div className="flex space-x-1 h-6 mb-4">
              {Array.from({ length: 8 }).map((_, i) => (
                  <div key={`blue-${i}`} className="w-2 bg-blue-600 rounded-sm" />
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                  <div key={`green-${i}`} className="w-2 bg-lime-500 rounded-sm" />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                  <div key={`black-${i}`} className="w-2 bg-black rounded-sm" />
              ))}
            </div>

            {/* Legend */}
            <div className="flex space-x-6 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <span className="text-gray-600">Annual</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-lime-500"></div>
                <span className="text-gray-600">Personal</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <span className="text-gray-600">Other</span>
              </div>
            </div>
          </div>

          {/* Right Section: Heatmap */}
          <div>
            <p className="text-xs text-gray-500 mb-3">
              Monitor the percentage, total, and trends of employee absences
            </p>
            <div className="grid grid-cols-6 gap-2">
              {/* Left: Percent Labels */}
              <div className="flex flex-col justify-between space-y-2 text-xs text-gray-500">
                {percentages.map((p, i) => (
                    <div key={i} className="h-6 flex items-center">
                      {p}
                    </div>
                ))}
              </div>

              {/* Right: Heatmap grid 6 rows x 5 days */}
              <div className="col-span-5 grid grid-cols-5 gap-2">
                {colors.map((row, rowIndex) =>
                    row.map((color, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`w-6 h-6 rounded ${color}`}
                        ></div>
                    ))
                )}
              </div>
            </div>

            {/* Bottom: Day Labels */}
            <div className="flex justify-end space-x-4 text-xs text-gray-500 mt-2 pr-2">
              {days.map((d, i) => (
                  <div key={i} className="w-6 text-center">
                    {d}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Absenteeism
