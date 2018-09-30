import { Component, OnInit, Inject } from '@angular/core';
import { TaskService, ITaskService, ClientFn, connectorConfig } from 'camunda-sdk-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    @Inject('TaskService') private taskService: ITaskService,
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
