import React from 'react';

interface DebugModeProps {
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const DebugMode: React.FC<DebugModeProps> = ({ state, setState }) => {
  const handleIncrement = (key: string) => {
    setState(prevState => ({
      ...prevState,
      [key]: prevState[key] + 1
    }));
  };

  const handleDecrement = (key: string) => {
    setState(prevState => ({
      ...prevState,
      [key]: prevState[key] - 1
    }));
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mt-4">
      <h2 className="text-2xl font-semibold mb-4">Debug Mode</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(state).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between p-2 bg-gray-700 rounded">
            <span>{key}: {JSON.stringify(value)}</span>
            <div>
              <button onClick={() => handleIncrement(key)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">+</button>
              <button onClick={() => handleDecrement(key)} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebugMode;
