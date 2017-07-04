import {Component, OnInit} from '@angular/core';
import {MdList, MdListItem} from '@angular/material';
import {Entity} from '../models/entity';
import {ProjectServiceService} from '../service/project-service.service'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectServiceService]
})
export class ProjectComponent implements OnInit {
  private projects: Entity[];

  constructor(private projectServiceService: ProjectServiceService) {
  }

  ngOnInit() {
    const self = this;
    self.projectServiceService.getProjects().then(res => {
      self.projects = res;
    });
  }

}
