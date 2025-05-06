export interface Tag {
  xp: number;
  level: number;
  color: string;
  taskCount: number;
  streakDays: number;
  lastTaskDate: string;
}
  
interface TagState {
  tags: Record<string, Tag>;
}