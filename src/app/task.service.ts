import {
  ClientFn,
  connectorConfig,
  createInstance,
  ITaskService,
  TaskService as TaskServiceNs,
} from 'camunda-sdk-ts';
import { InjectionToken } from '@angular/core';

export const TaskService = new InjectionToken<ITaskService>('TaskService');
export function taskServiceFactory(clientFn: ClientFn): ITaskService {
  connectorConfig.clientFn = clientFn;
  return createInstance(TaskServiceNs);
}
