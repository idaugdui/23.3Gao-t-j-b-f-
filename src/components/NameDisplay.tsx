import React from 'react';
import { Shuffle, Keyboard } from 'lucide-react';

interface NameDisplayProps {
  selectedName: string | null;
  isSpinning: boolean;
  pickRandom: () => void;
  namesLength: number;
}

export function NameDisplay({ selectedName, isSpinning, pickRandom, namesLength }: NameDisplayProps) {
  return (
    <div className="mb-8 text-center">
      <div
        className={`text-5xl font-bold p-8 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 transition-all duration-300 ${
          isSpinning ? 'scale-110' : ''
        }`}
      >
        {selectedName || '等待选择...'}
      </div>
      <button
        onClick={pickRandom}
        disabled={namesLength === 0}
        className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center mx-auto gap-2"
      >
        <Shuffle className="w-5 h-5" />
        随机选择
        <span className="ml-2 text-sm bg-white bg-opacity-20 px-2 py-1 rounded">
          空格键
        </span>
      </button>
    </div>
  );
}