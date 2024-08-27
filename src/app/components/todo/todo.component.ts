import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { ApiResponseModel, ITask, Task } from '../../Model/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  taskObj: Task = new Task();

  taskList: ITask[] = [];

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.loadAllTask();
  }

  loadAllTask() {
    this.masterService.getAllTaskList().subscribe((res: ApiResponseModel) => {
      this.taskList = res.data;
    });
  }
  addTask() {
    this.masterService.addNewTask(this.taskObj).subscribe(
      (res: ApiResponseModel) => {
        if (res.result) {
          alert('Task Created Successfully');
          this.loadAllTask();
          this.taskObj = new Task();
        }
      },
      (error) => {
        alert('Api call error');
      }
    );
  }

  onEdit(item: Task) {
    this.taskObj = item;
  }

  onDelete(id: number) {
    const isConfirm = confirm('Are you sure you want to delete this task');
    if (isConfirm) {
      this.masterService.deleteTask(id).subscribe(
        (res: ApiResponseModel) => {
          if (res.result) {
            alert('Task Deleted Successfully');
            // Directly call loadAllTask to refresh the task list
            this.loadAllTask();
          } else {
            alert('Failed to delete task');
          }
        },
        (error) => {
          alert('Api call error');
        }
      );
    }
  }
  
}