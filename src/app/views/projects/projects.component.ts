import { Component } from '@angular/core';
import { ProjectsData } from '../../data_model/projects-data';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule, MatGridListModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectsData: ProjectsData[] =[
    {
      title: 'UppASD',
      link: 'https://github.com/UppASD/UppASD',
      image: 'assets/uppasd_rot.png',
      description: ' ',
      short: 'Software package for the simulation of atomistics spin dynamics.',
      technologies: 'Fortran, simulations, OpenMP, MPI, Python, VtK.'
    },
    {
      title: 'aiida-vasp',
      link: 'https://github.com/aiida-vasp/aiida-vasp',
      image: 'assets/aiida_plugin_symbol.png',
      description: ' ',
      short: 'AiiDA plugin for the VASP code, for the automation of the calculation of materials properties from first principles.',
      technologies: 'Python, VAPS, AiiDA.'
    },
    {
      title: 'aiida-lammps',
      link: 'https://github.com/aiidaplugins/aiida-lammps',
      image: 'assets/aiida_plugin_symbol.png',
      description: ' ',
      short: 'AiiDA plugin for the LAMMPS code, for the automation of the calculation of materials properties using molecular dynamics.',
      technologies: 'Python, LAMMPS, AiiDA.'
    }
  ]

}
