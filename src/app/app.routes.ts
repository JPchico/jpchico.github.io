import { Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { PublicationsComponent } from './views/publications/publications.component';
import { ProjectsComponent } from './views/projects/projects.component';

export const routes: Routes = [
    {
        path: '',
        data: {breadcrumb: {alias: 'Home'}},
        children:[
            {
                path: '',
                component: AboutComponent
            },
            {
                path: 'publications',
                component: PublicationsComponent
            },
            {
                path: 'projects',
                component: ProjectsComponent
            }
        ]
    }
];
