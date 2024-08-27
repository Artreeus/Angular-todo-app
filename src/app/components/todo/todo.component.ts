import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { ApiResponseModel, ITask } from '../../Model/task';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  taskList : ITask[] = [];

  masterService = inject(MasterService);


  ngOnInit(): void {
      this.loadAllTask();
  }

  loadAllTask(){
    this.masterService.getAllTaskList().subscribe((res:ApiResponseModel)=>{
      this.taskList=res.data;
    })
  }
}
