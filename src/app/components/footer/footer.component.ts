import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub, faResearchgate, faOrcid, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCopyright } from '@fortawesome/free-regular-svg-icons';
import { LinksData } from '../../data_model/links-data';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatListModule,MatIconModule,FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  contactList: LinksData[] = [];
  profileList: LinksData[] = [];
  copyrightSymbol: IconProp = faCopyright;
  date: Date = new Date()

  ngOnInit(): void {
    this.contactList = [
      {title: 'Email', link:'mailto:jonathanpchico@gmail.com', icon:faEnvelope},
      {title: 'LinkedIn', link: 'https://www.linkedin.com/in/jonathan-chico-phd-physics',icon:faLinkedin}
    ]

    this.profileList = [
      {title: 'Github', link: 'https://github.com/JPchico', icon:faGithub},
      {title: 'ResearchGate', link: 'https://www.researchgate.net/profile/Jonathan-Chico', icon:faResearchgate},
      {title: 'ORCID', link: 'https://orcid.org/0000-0001-5034-159X', icon:faOrcid},
      {title: 'Google Scholar', link: 'https://scholar.google.com/citations?user=NdGxl7UAAAAJ&hl=en', icon:faGoogleScholar}
    ]

  }



}
