import { useState, useEffect } from 'react';
import { GameState } from '../types/game';

interface GrowthRateModifierProps {
  state: GameState;
  setState: React.Dispatch<React.SetStateAction<GameState>>;
}

export const useGrowthRateModifier = ({ state, setState }: GrowthRateModifierProps) => {
  const [growthRateModifier, setGrowthRateModifier] = useState(1);

  useEffect(() => {
    if (state.events.active) {
      switch (state.events.type) {
        case 'resistance':
          setGrowthRateModifier(0.5);
          break;
        case 'outcry':
          setGrowthRateModifier(0.75);
          break;
        case 'equipment':
          setGrowthRateModifier(1.5);
          break;
        case 'supply':
          setGrowthRateModifier(2);
          break;
        case 'civil war':
          setGrowthRateModifier(0.25);
          break;
        case 'pay raise':
          setGrowthRateModifier(1.25);
          break;
        default:
          setGrowthRateModifier(1);
      }
    } else {
      setGrowthRateModifier(1);
    }
  }, [state.events.active, state.events.type]);

  return growthRateModifier;
};
