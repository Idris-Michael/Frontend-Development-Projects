import { ZoneType } from './types';

export const BUILDING_CONFIG = {
  floors: 5,
  width: 40,
  depth: 20,
  floorHeight: 4,
};

export const COLORS = {
  primary: '#3b82f6',
  highlight: '#f59e0b',
  highlightRoom: '#22d3ee',
  furniture: '#888888',
  people: '#ef4444',
  glass: '#a5f3fc',
  glassNight: '#1e3a8a',
  wall: '#e2e8f0',
  floor: '#cbd5e1',
};

export const ZONES = [
  { id: 'core', type: ZoneType.CORE, x: 0, z: 0, w: 10, d: 8, color: '#64748b' },
  { id: 'off_left', type: ZoneType.OFFICE, x: -12, z: 0, w: 14, d: 18, color: '#94a3b8' },
  { id: 'off_right', type: ZoneType.OFFICE, x: 12, z: 0, w: 14, d: 18, color: '#94a3b8' },
  { id: 'meet_1', type: ZoneType.MEETING, x: 0, z: -7, w: 8, d: 4, color: '#cbd5e1' },
  { id: 'pantry', type: ZoneType.PANTRY, x: 0, z: 7, w: 8, d: 4, color: '#e2e8f0' },
];
