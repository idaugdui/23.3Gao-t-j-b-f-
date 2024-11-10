import React from 'react';
import { X } from 'lucide-react';

interface SelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  names: string[];
  onSelect: (name: string) => void;
}

export function SelectionModal({ isOpen, onClose, names, onSelect }: SelectionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">固定选择</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="max-h-[60vh] overflow-y-auto">
          <div className="grid gap-2">
            {names.map((name, index) => (
              <button
                key={index}
                onClick={() => {
                  onSelect(name);
                  onClose();
                }}
                className="text-left px-4 py-3 bg-gray-50 hover:bg-purple-50 rounded-lg transition-colors"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}