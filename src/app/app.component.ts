import { Component, Inject, OnInit } from '@angular/core';
import { ITaskService } from 'camunda-sdk-ts';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    @Inject(TaskService) private taskService: ITaskService,
  ) {}
  ngOnInit(): void {
    console.log('Service', this.taskService);
    this.taskService.getTasksCountPost({
      request: {
        active: true,
      }
    }).subscribe(
      (count) => console.log('Tasks running: ' + count.count),
      (err) => console.log('Error!', err),
    );
  }
}
