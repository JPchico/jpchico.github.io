import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectsData } from '../../data_model/projects-data';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProjectDataShareService } from '../../services/project-data-share.service';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule, MatGridListModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projectsData: ProjectsData[] =[]

  subscription!: Subscription;

  constructor(private projectDataService: ProjectDataShareService) { }

  ngOnInit(): void {

    this.subscription = this.projectDataService.currentMessage.subscribe(message => this.projectsData = message)

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
