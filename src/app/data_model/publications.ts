export interface Publication {
    title: string;
    authors: Author[];
    journal: string;
    publicationYear: number;
    volume: number;
    pages: string;
    link: string;
}

export interface Author {
    firstName: string;
    lastName: string;
}


export interface BookChapter {
    title: string;
    authors: Author[];
    publicationYear: number;
    bookTitle: string;
    pages: string;
    link?: string
}