import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';

import { DashboardComponent } from '../../src/app/dashboard/dashboard.component';
import { HeroSearchComponent } from '../../src/app/hero-search/hero-search.component';
import { Hero } from '../../src/app/hero';
import { HeroService } from '../../src/app/hero.service';

const HEROES: Hero[] = [
  { id: 2, name: 'Peter' },
  { id: 10, name: 'Foo' },
  { id: 3, name: 'Tiga' },
  { id: 4, name: 'Bar' },
]

describe('DashboardComponent.cy.ts', () => {
  let heroService;

  it('mount', () => {
    cy.log('Test Start', cy.url());

    // Need to stub the service this is calling on init!
    TestBed.overrideProvider(HeroService, {
      useValue: {
        getHeroes(): Observable<Hero[]> {
          return of(HEROES);
        } 
      }
    });

    cy.mount(DashboardComponent, {
      declarations: [ 
        DashboardComponent,
        HeroSearchComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        FormsModule,
      ],
      providers: [ 
        HeroService,
      ]
    });

    cy.log('Test End');
  })
});

