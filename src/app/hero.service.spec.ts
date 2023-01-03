import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { MessagesService } from './messages.service';
import { Hero } from './hero';

const MOCK_DATA = [
  { id: 1, name: 'Hulk'},
  { id: 2, name: 'Thor'},
  { id: 3, name: 'Iron Man'},
] as Hero[];

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
