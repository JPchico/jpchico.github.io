import { Component, OnInit } from '@angular/core';
import { BookChapter, Publication } from '../../data_model/publications';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { AuthorsLineComponent } from '../../components/authors-line/authors-line.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [MatListModule, MatIconModule, AuthorsLineComponent, MatExpansionModule, MatCardModule],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss'
})
export class PublicationsComponent implements OnInit {
  
  publicationListBooks: BookChapter[] = [];
  publicationListArticles: Publication[] = [];
  publicationListProceedings: Publication[] = [];

  ngOnInit() : void{

    this.publicationListArticles = [
      {
        title: "Electronic structure of L10 binary alloys",
        journal: "Physical Review B",
        publicationYear: 2014,
        volume: 90,
        pages: '014402',
        link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.90.014402',
        authors: [
          {firstName: 'Alexander', lastName: 'Edström'},
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'Adam', lastName: 'Jakobsson'},
          {firstName: 'Anders', lastName: 'Bergman'},
          {firstName: 'Jan', lastName: 'Rusz'},
        ]
      },
      {
        title: "Thermally driven domain-wall motion in Fe on W (110)",
        journal: "Physical Review B",
        publicationYear: 2014,
        volume: 90,
        pages: '014434',
        link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.90.014434',
        authors: [
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'Corina', lastName: 'Etz'},
          {firstName: 'Lars', lastName: 'Bergqvist'},
          {firstName: 'Olle', lastName: 'Eriksson'},
          {firstName: 'Jonas', lastName: 'Fransson'},
          {firstName: 'Anna', lastName: 'Delin'},
          {firstName: 'Anders', lastName: 'Bergman'},
        ]
      },
      {
        title: "Topological excitations in a kagome magnet",
        journal: "Nature Communications",
        publicationYear: 2014,
        volume: 5,
        pages: '4815',
        link: 'https://www.nature.com/articles/ncomms5815',
        authors: [
          {firstName: 'Manuel', lastName: 'Pereiro'},
          {firstName: 'Dmitry', lastName: 'Yudin'},
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'Corina', lastName: 'Etz'},
          {firstName: 'Olle', lastName: 'Eriksson'},
          {firstName: 'Anders', lastName: 'Bergman'},
        ]
      },
      {
        title: "Energy and magnetization transport in nonequilibrium macrospin systems",
        journal: "Physical Review E",
        publicationYear: 2015,
        volume: 92,
        pages: '012116',
        link: 'https://journals.aps.org/pre/abstract/10.1103/PhysRevE.92.012116',
        authors: [
          {firstName: 'Simone', lastName: 'Borlenghi'},
          {firstName: 'Stefano', lastName: 'Iubini'},
          {firstName: 'Stefano', lastName: 'Lepri'},
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'Lars', lastName: 'Bergqvist'},
          {firstName: 'Anna', lastName: 'Delin'},
          {firstName: 'Jonas', lastName: 'Fransson'},                    
        ]
      },
      {
        title: "Tunable damping, saturation magnetization, and exchange stiffness of half-Heusler NiMnSb thin films",
        journal: "Physical Review B",
        publicationYear: 2015,
        volume: 92,
        pages: '214424',
        link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.92.214424',
        authors: [
          {firstName: 'Philipp', lastName: 'Dürrenfeld'},
          {firstName: 'Felicitas', lastName: 'Gerhard'},
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'Randy K.', lastName: 'Dumas'},
          {firstName: 'Mojtaba', lastName: 'Ranjbar'},
          {firstName: 'Anders', lastName: 'Bergman'},
          {firstName: 'Lars', lastName: 'Bergqvist'},
          {firstName: 'Anna', lastName: 'Delin'},
          {firstName: 'Charles', lastName: 'Gould'},           
          {firstName: 'Laurens W.', lastName: 'Molenkamp'},
          {firstName: 'Johan', lastName: 'Åkerman'},
        ]
      },
      {
        title: "A new look on the two-dimensional Ising model: thermal artificial spins",
        journal: "New Journal of Physics",
        publicationYear: 2016,
        volume: 18,
        pages: '023008',
        link: 'https://iopscience.iop.org/article/10.1088/1367-2630/18/2/023008/meta',
        authors: [
          {firstName: 'Unnar B.', lastName: 'Arnalds'},
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'Henry', lastName: 'Stopfel'},
          {firstName: 'Vassilios', lastName: 'Kapaklis'},
          {firstName: 'Oliver', lastName: 'Bärenbold'},
          {firstName: 'Marc A.', lastName: 'Verschuuren'},
          {firstName: 'Ulrike', lastName: 'Wolff'},
          {firstName: 'Volker', lastName: 'Neu'},
          {firstName: 'Anders', lastName: 'Bergman'},
          {firstName: 'Björgvin', lastName: 'Hjörvarsson'},
        ]
      },
      {
        title: "First-principles studies of the Gilbert damping and exchange interactions for half-metallic Heuslers alloys",
        journal: "Physical Review B",
        publicationYear: 2016,
        volume: 93,
        pages: '214439',
        link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.214439',
        authors: [
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'Samara', lastName: 'Keshavarz'},
          {firstName: 'Yaroslav', lastName: 'Kvashin'},
          {firstName: 'Manuel', lastName: 'Pereiro'},
          {firstName: 'Igor', lastName: 'Di Marco'},
          {firstName: 'Corina', lastName: 'Etz'},
          {firstName: 'Olle', lastName: 'Eriksson'},
          {firstName: 'Anders', lastName: 'Bergman'},
          {firstName: 'Lars', lastName: 'Bergqvist'},
        ]
      },
      {
        title: "Local dynamics of topological magnetic defects in the itinerant helimagnet FeGe",
        journal: "Nature Communications",
        publicationYear: 2016,
        volume: 7,
        pages: '12430',
        link: 'https://www.nature.com/articles/ncomms12430',
        authors: [
          {firstName: 'A.', lastName: 'Dussaux'},
          {firstName: 'Peggy', lastName: 'Schoenherr'},
          {firstName: 'Konstantinos', lastName: 'Koumpouras'},
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'K.', lastName: 'Chang'},
          {firstName: 'Luca', lastName: 'Lorenzelli'},
          {firstName: 'N.', lastName: 'Kanazawa'},
          {firstName: 'Y.', lastName: 'Tokura'},
          {firstName: 'Markus', lastName: 'Garst'},
          {firstName: 'Anders', lastName: 'Bergman'},
          {firstName: 'Christian', lastName: 'Degen'},
          {firstName: 'D.', lastName: 'Meier'},
        ]
      },
      {
        title: "Systematic study of magnetodynamic properties at finite temperatures in doped permalloy from first-principles calculations",
        journal: "Physical Review B",
        publicationYear: 2016,
        volume: 94,
        pages: '214410',
        link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.94.214410',
        authors: [
          {firstName: 'Fan', lastName: 'Pan'},
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'Johan', lastName: 'Hellsvik'},
          {firstName: 'Anna', lastName: 'Delin'},
          {firstName: 'Anders', lastName: 'Bergman'},
          {firstName: 'Lars', lastName: 'Bergqvist'},
        ]
      },
      {
        title: "Extended spin model in atomistic simulations of alloys",
        journal: "Physical Review B",
        publicationYear: 2017,
        volume: 95,
        pages: '184432',
        link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.95.184432',
        authors: [
          {firstName: 'Fan', lastName: 'Pan'},
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'Anna', lastName: 'Delin'},
          {firstName: 'Anders', lastName: 'Bergman'},
          {firstName: 'Lars', lastName: 'Bergqvist'},
        ]
      },
      {
        title: "Spin-polaron formation and magnetic state diagram in La-doped CaMnO3",
        journal: "Physical Review B",
        publicationYear: 2017,
        volume: 95,
        pages: '220401(R)',
        link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.95.220401',
        authors: [
          {firstName: 'Nina', lastName: 'Bondarenko'},
          {firstName: 'Yaroslav', lastName: 'Kvashin'},
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'Anders', lastName: 'Bergman'},
          {firstName: 'Olle', lastName: 'Eriksson'},
          {firstName: 'Natalia V.', lastName: 'Skorodumova'},
        ]
      },
      {
        title: "Comparative study of methodologies to compute the intrinsic Gilbert damping: interrelations, validity and physical consequences",
        journal: "Jounral of Physics: Condensed Matter",
        publicationYear: 2019,
        volume: 31,
        pages: '255802',
        link: 'https://iopscience.iop.org/article/10.1088/1361-648X/ab1239/meta',
        authors: [
          {firstName: 'Filipe S. M.', lastName: 'Guimarães'},
          {firstName: 'Jens René', lastName: 'Suckert'},
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'Juba', lastName: 'Bouaziz'},
          {firstName: 'Manuel', lastName: 'dos Santos Dias'},
          {firstName: 'Samir', lastName: 'Lounis'},
        ]
      },
      {
        title: "Magnetic properties of Mn-doped Bi2Se3 topological insulators: Ab initio calculations",
        journal: "Physical Review B",
        publicationYear: 2020,
        volume: 101,
        pages: '054428',
        link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.101.054428',
        authors: [
          {firstName: 'Karel', lastName: 'Carva'},
          {firstName: 'P.', lastName: 'Baláž'},
          {firstName: 'I.', lastName: 'Turek'},
          {firstName: 'J.', lastName: 'Kudrnovský'},
          {firstName: 'F.', lastName: 'Máca'},
          {firstName: 'V', lastName: 'Drchal'},
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'V.', lastName: 'Sechovský'},
          {firstName: 'J.', lastName: 'Honolka'},
        ]
      },
      {
        title: "Probing the pinning strength of magnetic vortex cores with sub-nanometer resolution",
        journal: "Nature Communications",
        publicationYear: 2020,
        volume: 11,
        pages: '2833',
        link: 'https://www.nature.com/articles/s41467-020-16701-y',
        authors: [
          {firstName: 'Christian', lastName: 'Holl'},
          {firstName: 'Marvin', lastName: 'Knol'},
          {firstName: 'Marco', lastName: 'Pratzer'},
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'Imnara', lastName:'Lima Ferandes'},
          {firstName: 'Samnir', lastName: 'Lounis'},
          {firstName: 'Markus', lastName: 'Morgenstern'}
        ]
      },
      {
        title: "Impurity-dependent gyrotropic motion, deflection and pinning of current-driven ultrasmall skyrmions in PdFe/Ir (111) surface",
        journal: "Journal of Physics: Condensed Matter",
        publicationYear: 2020,
        volume: 32,
        pages: '425802',
        link: 'https://iopscience.iop.org/article/10.1088/1361-648X/ab9cf0/meta',
        authors: [
          {firstName: 'Imnara', lastName:'Lima Ferandes'},
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'Samnir', lastName: 'Lounis'},
        ]
      },
      {
        title: "Sub-nanoscale atom-by-atom crafting of skyrmion-defect interaction profiles",
        journal: "Scientific reports",
        publicationYear: 2020,
        volume: 10,
        pages: '14655',
        link: 'https://www.nature.com/articles/s41598-020-71232-2',
        authors: [
          {firstName: 'I Gede', lastName: 'Arjana'},
          {firstName: 'Imnara', lastName:'Lima Ferandes'},
          {firstName: 'Jonathan', lastName: 'Chico'},
          {firstName: 'Samnir', lastName: 'Lounis'},
        ]
      },
    ]

    this.publicationListBooks = [
      {
        title:'Atomistic and micromagnetic models of magnetism',
        bookTitle: 'Topological Matter - Topological Insulators, Skyrmions and Majorana (Lecture Notes from the 48th IFF Spring school)',
        publicationYear: 2017,
        pages: 'C1.1-C1.20',
        link:'https://juser.fz-juelich.de/record/828764/files/Schluesseltech_139.pdf',
        authors:[
          {
            firstName: 'Nikolai S.',
            lastName: 'Kiselev'
          },
          {
            firstName: 'Bernd',
            lastName: 'Zimmermann'
          },
          {
            firstName: 'Jonathan',
            lastName: 'Chico'
          }
        ]
      },
      {
        title: 'Skyrmion dynamics',
        bookTitle: 'Topological Matter - Topological Insulators, Skyrmions and Majorana (Lecture Notes from the 48th IFF Spring school)',
        publicationYear: 2017,
        pages: 'C9.1-C9.20',
        link:'https://juser.fz-juelich.de/record/828764/files/Schluesseltech_139.pdf',
        authors:[
          {
            firstName: 'Jonathan',
            lastName: 'Chico'
          },
          {
            firstName: 'Nikolai S.',
            lastName: 'Kiselev'
          },
          {
            firstName: 'Bernd',
            lastName: 'Zimmermann'
          }
        ]
      }
    ]

    this.publicationListProceedings = [
      {
        title: 'Skyrmion Dynamics under the Influence of Defects from DFT to ASD',
        publicationYear: 2019,
        volume: 2019,
        journal: 'APS March Meeting Abstracts',
        pages: 'V41.009',
        link: 'https://ui.adsabs.harvard.edu/abs/2019APS..MARV41009C/abstract',
        authors: [
          {
            firstName: 'Jonathan',
            lastName: 'Chico',
          },
          {
            firstName: 'Imara',
            lastName: 'Lima Fernandes'
          },
          {
            firstName: 'Stefan',
            lastName: 'Bluegel'
          },
          {
            firstName: 'Samir',
            lastName: 'Lounis'
          }
        ]
      },
      {
        title: 'Coarse-Graining Approach to Atomistic Spin Dynamics',
        journal: 'Ultrafast Magnetism I',
        publicationYear: 2015,
        pages: '162-165',
        volume: 159,
        link: 'https://link.springer.com/chapter/10.1007/978-3-319-07743-7_52',
        authors:[
          {
            firstName: 'Thomas',
            lastName: 'Nystrand'
          },
          {
            firstName: 'Jonatan',
            lastName: 'Vennermalm'
          },
          {
            firstName: 'Jonatan',
            lastName: 'Werpers',
          },
          {
            firstName: 'Olle',
            lastName: 'Eriksson'
          },
          {
            firstName: 'Jonathan',
            lastName: 'Chico'
          },
          {
            firstName: 'Anders',
            lastName: 'Bergman'
          }
        ]
      }

    ]

  }

}
