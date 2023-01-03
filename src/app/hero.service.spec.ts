import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { MessagesService } from './messages.service';


describe('HeroService', () => {
  let heroService: HeroService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [ HeroService, MessagesService ],
    });
    httpTestingController = TestBed.get(HttpTestingController);

    heroService = TestBed.inject(HeroService);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(heroService).toBeTruthy();
  });
});
