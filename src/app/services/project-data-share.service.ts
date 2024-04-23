import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectsData } from '../data_model/projects-data';


@Injectable({
  providedIn: 'root'
})
export class ProjectDataShareService {

  projectsData: ProjectsData[] =[
    {
      title: 'UppASD',
      link: 'https://github.com/UppASD/UppASD',
      image: 'assets/uppasd_rot.png',
      description: 'Magnetism is an inherently quantum mechanical phenomena, and the study of magnetic materials and its dynamics has been at the forefront of technological innovation with examples such as magnetic hard drives being one of the most well known examples. <br> UppASD is a software package that allows one to study how the magnetic moments in a metrial move under a stimuli, such as eletrical current in a hard drive. <br> This kind of phenomena was what I studied during my PhD, and during this time I added features, fixed bugs and performed many simulations with this code. Of great importance was also how to visualize these dynamics, for these we developed a python/VTK based toolkit with a Qt interface so that one could easily analyze results, render movies and more easily understand complex phenomena.',
      short: 'Software package for the simulation of atomistics spin dynamics.',
      technologies: 'Fortran, simulations, OpenMP, MPI, Python, VtK.'
    },
    {
      title: 'aiida-vasp',
      link: 'https://github.com/aiida-vasp/aiida-vasp',
      image: 'assets/aiida_plugin_symbol.png',
      description: 'VASP is one of the most used codes in materials science, allowing for the determination of materials properties from first principles. <br> When I started in Sandvik one thing became clear, if we wanted to be able to make better predictions we needed a better system to submit, manage and store our calculations. <br> During my PostDoc in Julich I got to hear about AiiDA and it became natural to integrate it into our way of working. <br> My journey with aiida-vasp started with asking questions and reporting issues, until I became a member of the development team, helping with bug fixes, code reviewing and introducign new features to improve the capabilities of this tool.<br> Being part of the development team not only allowed me to be able to focus on the coding aspects that were critical for us, it also put me in contact with the rest of the aiida-vasp developers, greta people that have taught me much on materials science and software development.',
      short: 'AiiDA plugin for the VASP code, for the automation of the calculation of materials properties from first principles.',
      technologies: 'Python, VAPS, AiiDA.'
    },
    {
      title: 'aiida-lammps',
      link: 'https://github.com/aiidaplugins/aiida-lammps',
      image: 'assets/aiida_plugin_symbol.png',
      description: 'LAMMPS is one of the most used molecular dynamics software packages in materials science. Its flexibility and wide set of features allows the user to simulate almost anything. <br> This flexibility and scope is what makes building an AiiDA plugin for LAMMPS a daunting task, since one needs to account for a wide range of possibilities. <br>When we started to try to use the plugin in 2019 it was severely limited, with only a small set of options possible, this is why we embarked in a complete refactoring of the code base, making it more flexible, but while keeping the AiiDA design phisolophies of provenance tracking and repoducibility.<br> Since that refactoring we are able to create our own workflows to study materials properties using LAMMPS and store them in the same footing than the rest of our calculations, allowing us to more efficiently study material properties for product development.',
      short: 'AiiDA plugin for the LAMMPS code, for the automation of the calculation of materials properties using molecular dynamics.',
      technologies: 'Python, LAMMPS, AiiDA.'
    }
  ]

  private messageSource = new BehaviorSubject(this.projectsData);
  currentMessage = this.messageSource.asObservable();  

  constructor() { }
}
