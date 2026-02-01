import React, { useState } from 'react';
import { Scene3D } from './components/Scene3D';
import { Dashboard } from './components/Dashboard';
import { SimulationState, ViewMode } from './types';
import { getSunPosition } from './utils/simulation';

const App: React.FC = () => {
  const [simState, setSimState] = useState<SimulationState>({
    time: 10, // 10:00 AM start
    temperature: 22,
    humidity: 45,
    sunPosition: getSunPosition(10),
    windowEmissive: 0,
    viewMode: ViewMode.DEFAULT,
    selectedFloor: null,
    selectedRoom: null,
    showParking: false,
    floorExpanded: false,
  });

  return (
    <div className="relative w-full h-screen bg-slate-900 overflow-hidden">
      <Dashboard simState={simState} setSimState={setSimState} />
      
      <div className="absolute top-0 right-0 w-full h-full">
        <Scene3D simState={simState} setSimState={setSimState} />
      </div>

      {/* Interaction Overlay Hint */}
      {simState.selectedFloor !== null && (
        <div className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10 pointer-events-none animate-pulse">
          Reviewing Floor {simState.selectedFloor + 1}
        </div>
      )}
    </div>
  );
};

export default App;