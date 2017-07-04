import {Injectable} from '@angular/core';
import {Entity} from '../models/entity';

@Injectable()
export class ProjectServiceService {

  private projects: Entity[] = [
    {name: 'cms', value: 'cms'},
    {name: 'vms', value: 'vms'},
    {name: 'ims', value: 'ims'}
  ];

  getProjects(): Promise<Entity[]> {
    const self = this;

    return new Promise(resolve => {
      setTimeout(() => resolve(self.projects), 1000);
    });
  }

}
