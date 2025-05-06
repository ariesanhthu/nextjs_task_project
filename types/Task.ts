export interface Task {
    id: number;
    name: string;
    tags: string[];
    value: number;
    date: string;
    timestamp: number;
}

interface TaskState {
    tasks: Task[];
    currentDate: string;
}