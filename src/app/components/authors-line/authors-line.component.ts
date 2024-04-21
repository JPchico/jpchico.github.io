import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../../data_model/publications';
import { BoldGivenStringPipe } from '../../pipes/bold-given-string.pipe';

@Component({
  selector: 'app-authors-line',
  standalone: true,
  imports: [BoldGivenStringPipe],
  templateUrl: './authors-line.component.html',
  styleUrl: './authors-line.component.scss'
})
export class AuthorsLineComponent implements OnInit {

  @Input() authors: Author[] = [];

  authorsString: string = '';

  ngOnInit(): void{

    this.authorsString = this.authors.map(_author => `${_author.firstName} ${_author.lastName}`).join(', ').replace(/,([^,]*)$/, ' and' + '$1')

  }

}
