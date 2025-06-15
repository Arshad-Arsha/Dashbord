import React from 'react';
import { ChevronRight, Star } from 'lucide-react';

const MetricsRating = () => {
  return (
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">Performance Evaluation Results</h3>
            <h2 className="text-lg font-semibold text-gray-900">Metrics Rating</h2>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Overall Rating */}
        <div className="flex items-center space-x-3 mb-6">
          <Star className="w-6 h-6 text-yellow-400 fill-current" />
          <div>
            <span className="text-3xl font-bold text-gray-900">7.8</span>
            <div className="text-sm text-gray-500">
              <span>Average</span>
              <br />
              <span>rating</span>
            </div>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">38%</span>
            <div className="flex-1 mx-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '38%' }}></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">25%</span>
            <div className="flex-1 mx-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">18%</span>
            <div className="flex-1 mx-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gray-800 h-2 rounded-full" style={{ width: '18%' }}></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">8%</span>
            <div className="flex-1 mx-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gray-400 h-2 rounded-full" style={{ width: '8%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-gray-600">Excellent</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Good</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
            <span className="text-gray-600">Fair</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <span className="text-gray-600">Improved</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600">
            Highlight employees needing improvement with suggestions for training or mentoring
          </p>
        </div>
      </div>
  );
};

export default MetricsRating;
