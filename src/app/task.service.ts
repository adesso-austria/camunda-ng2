import { ClientFn, connectedFn, connectorConfig, TaskService as TaskServiceNs } from 'camunda-sdk-ts';

export function taskServiceFactory(clientFn: ClientFn) {
  connectorConfig.clientFn = clientFn;
  return {
    getTasksCountPost: connectedFn(TaskServiceNs.getTasksCountPost),
  };
}
