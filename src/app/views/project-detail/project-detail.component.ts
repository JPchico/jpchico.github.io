import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProjectsData } from '../../data_model/projects-data';
import { Subscription } from 'rxjs';
import { ProjectDataShareService } from '../../services/project-data-share.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { MatListModule } from '@angular/material/list';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [MatCardModule, RouterModule,FontAwesomeModule, MatListModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit, OnDestroy {

  projectData: ProjectsData = {} as ProjectsData;

  subscription!: Subscription;

  projectName: string | null = ''
  gitHubIcon: IconProp = faGithub
  terminalIcon: IconProp = faTerminal

  constructor(
    private projectDataService: ProjectDataShareService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.projectName = this.route.snapshot.paramMap.get('id')

    this.subscription = this.projectDataService.currentMessage.subscribe(message => {
      let _data = message.filter(item => item.title === this.projectName)[0]

      if (_data){
        this.projectData = _data
      }
    })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
