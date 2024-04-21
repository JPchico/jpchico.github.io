import { Component, OnInit } from '@angular/core';
import { NavbarData } from '../../data_model/navbar-data';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  menuData: NavbarData[] = []

  ngOnInit(): void{
    this.menuData = [
      {
        title: 'Projects',
        route: 'projects'
      },
      {
        title: 'Publications',
        route: 'publications'
      }
    ]
  }

}
