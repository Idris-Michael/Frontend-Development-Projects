export enum ViewMode {
  DEFAULT = 'DEFAULT',
  HEATMAP = 'HEATMAP',
  PEOPLE = 'PEOPLE'
}

export enum ZoneType {
  OFFICE = 'Office',
  MEETING = 'Meeting Room',
  PANTRY = 'Pantry',
  CORE = 'Core (Elevator/Stairs)',
  LOBBY = 'Lobby',
  PARKING = 'Parking'
}

export interface SimulationState {
  time: number; // 0-24
  temperature: number;
  humidity: number;
  sunPosition: [number, number, number];
  windowEmissive: number;
  viewMode: ViewMode;
  selectedFloor: number | null;
  selectedRoom: string | null;
  showParking: boolean;
  floorExpanded: boolean;
}

export interface EnergyData {
  name: string;
  value: number;
  fill: string;
}
