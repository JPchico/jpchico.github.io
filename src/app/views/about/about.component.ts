import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatProgressBarModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  skillList: any = []

  ngOnInit(): void {

    this.skillList = [
      {
        title: 'Programing',
        level: 75,
      },
      {
        title: 'Materials Science',
        level: 80
      },
      {
        title: 'Data analysis',
        level: 75
      },
      {
        title: 'Communication',
        level: 85
      }
    ]

  }

}
