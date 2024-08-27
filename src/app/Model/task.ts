export interface ITask {
    itemId: number;
    taskName: string;
    taskDescription: string;
    dueDate: Date;
    createdOn: Date;
    isCompleted: boolean;
    tags: string;
    completedOn?: Date; // Make completedOn optional
}

export class Task {
    itemId: number;
    taskName: string;
    taskDescription: string;
    dueDate: Date;
    createdOn: Date;
    isCompleted: boolean;
    tags: string;
    completedOn?: Date; // Make completedOn optional

    constructor() {
        this.itemId = 0;
        this.taskName = '';
        this.taskDescription = '';
        this.dueDate = new Date();
        this.createdOn = new Date();
        this.isCompleted = false;
        this.tags = '';
        this.completedOn = new Date(); // Or you could set it to a default value if needed
    }
}

export interface ApiResponseModel {
    message: string;
    result: string;
    data: any;
}
