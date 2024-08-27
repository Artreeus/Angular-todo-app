import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../Model/task';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl : string ='https://freeapi.gerasim.in/api/JWT/'

  constructor(private http: HttpClient) { }

  getAllTaskList(): Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(this.apiUrl + 'GetAllTaskList');
  }
}
