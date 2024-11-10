import React from 'react';
import { Plus } from 'lucide-react';

interface NameInputProps {
  newName: string;
  setNewName: (name: string) => void;
  addName: () => void;
}

export function NameInput({ newName, setNewName, addName }: NameInputProps) {
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addName()}
        placeholder="输入新名字..."
        className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
      />
      <button
        onClick={addName}
        className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2"
      >
        <Plus className="w-5 h-5" />
        添加
      </button>
    </div>
  );
}