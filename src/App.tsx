import React, { useState, useEffect } from 'react';
import { NameInput } from './components/NameInput';
import { NameList } from './components/NameList';
import { NameDisplay } from './components/NameDisplay';

function App() {
  const [names, setNames] = useState<string[]>(() => {
    const saved = localStorage.getItem('namePicker');
    return saved ? JSON.parse(saved) : ['1', '2', '3', '4', '5'];
  });
  const [newName, setNewName] = useState('');
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    localStorage.setItem('namePicker', JSON.stringify(names));
  }, [names]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = parseInt(event.key);
      if (!isNaN(key) && key > 0 && key <= names.length) {
        handleManualSelect(names[key - 1]);
      } else if (event.key === ' ') {
        pickRandom();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [names]);

  const addName = () => {
    if (newName.trim()) {
      setNames([...names, newName.trim()]);
      setNewName('');
    }
  };

  const removeName = (index: number) => {
    setNames(names.filter((_, i) => i !== index));
  };

  const pickRandom = () => {
    if (names.length === 0) return;
    
    setIsSpinning(true);
    let duration = 2000;
    let startTime = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      
      if (elapsed < duration) {
        setSelectedName(names[Math.floor(Math.random() * names.length)]);
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
      }
    };
    
    requestAnimationFrame(animate);
  };

  const handleManualSelect = (name: string) => {
    setSelectedName(name);
    setIsSpinning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          随机点名器
        </h1>

        <div className="text-center mb-4 text-sm text-gray-600">
          按空格键随机选择 | 按数字键 1-{names.length} 指定选择
        </div>

        <NameDisplay
          selectedName={selectedName}
          isSpinning={isSpinning}
          pickRandom={pickRandom}
          namesLength={names.length}
        />

        <NameInput
          newName={newName}
          setNewName={setNewName}
          addName={addName}
        />

        <NameList
          names={names}
          removeName={removeName}
          onManualSelect={handleManualSelect}
        />
      </div>
    </div>
  );
}

export default App;