import React from 'react';
import { UserPlus, X, CheckCircle } from 'lucide-react';

interface NameListProps {
  names: string[];
  removeName: (index: number) => void;
  onManualSelect: (name: string) => void;
}

export function NameList({ names, removeName, onManualSelect }: NameListProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <UserPlus className="w-5 h-5" />
        名单 ({names.length})
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {names.map((name, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200 group hover:border-purple-500 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                {index + 1}
              </span>
              <span className="font-medium">{name}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onManualSelect(name)}
                className="text-gray-400 hover:text-green-500 transition-colors"
                title="指定选择"
              >
                <CheckCircle className="w-4 h-4" />
              </button>
              <button
                onClick={() => removeName(index)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                title="删除"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}