export interface Hour {
  value: number;
  selected: boolean;
}

export interface Day {
  name: string;
  hours: Hour[];
}
  
export interface Schedule {
days: Day[];
}