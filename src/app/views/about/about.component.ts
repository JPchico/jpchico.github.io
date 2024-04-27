import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsData } from '../../data_model/skills-data';
import { faAtom, faMagnifyingGlassChart, faPersonChalkboard, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatListModule,FontAwesomeModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  skillList: SkillsData[] =[
    {
      title: 'Software Development',
      icon: faTerminal,
      description: 'Extensive experience in software development, full stack development in Python, using tools like fastAPI, sqlalchemy and Dash by plotly. Developed several applications using Angular/Typescript to handle both theoretical data as well as data from SCADA systems. Wide experience in Fortran programming with OpenMP/MPI frameworks, as well as experience in C/C++, bash and frameworks such as Terraform and Ansible. Deployed, maintained and configured numerous Linux based clusters in Azure to perform numerical simulations at HPC level.'
    },
    {
      title: 'Data analysis',
      icon: faMagnifyingGlassChart,
      description: 'Proficient in data analysis of complex systems from both simulation data as well as sensor data. Experienced with python packages such as numpy, scipy and pandas for data analysis as well as bash scripting tools such as awk, sed and grep for data handling and extraction. Wide experience in SQL (PostgreSQL, MySQL) and Databricks (spark). Proficient with data visualization tools like matplotlib, plotly and VTK.'
    },
    {
      title: 'Communication',
      icon: faPersonChalkboard,
      description: 'Given talks in scientific conferences as well university level lectures on diverse topics, with audiences varying from just a couple of people to more than a hundred in attendance.'
    },
    {
      title: 'Scientific knowledge',
      icon: faAtom,
      description: 'Extensive experience in the modeling of physical processes form first-principles, multi-scale modeling, statistical analysis and  simulations. Experience working in interdisciplinary and diverse groups and in collaborating to solve complex problems. Specialization in materials science using and developing methods and simulation tools to determine material properties.'
    },
  ]


}
