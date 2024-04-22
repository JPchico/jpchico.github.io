import { Component, OnInit } from '@angular/core';
import { NavbarData } from '../../data_model/navbar-data';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule, RouterModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  menuData: NavbarData[] = [
    {
      title: 'Projects',
      route: 'projects'
    },
    {
      title: 'Publications',
      route: 'publications'
    }
  ]

  isPortable: boolean = false;

  constructor(private responsive: BreakpointObserver){}


  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe(result => {

      this.isPortable = false;

      if (result.matches) {
        this.isPortable = true;
      }

    });
  }

}
