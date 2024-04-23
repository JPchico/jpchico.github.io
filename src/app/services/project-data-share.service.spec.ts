import { TestBed } from '@angular/core/testing';

import { ProjectDataShareService } from './project-data-share.service';

describe('ProjectDataShareService', () => {
  let service: ProjectDataShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectDataShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
