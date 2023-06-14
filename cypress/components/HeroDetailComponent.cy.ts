import { FormsModule } from '@angular/forms'; import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';

import { HeroDetailComponent } from '../../src/app/hero-detail/hero-detail.component';
import { Hero } from '../../src/app/hero';
import { HeroService } from '../../src/app/hero.service';

describe('HeroDetailComponent.cy.ts', () => {
  let heroService;

  it('mount', () => {
    cy.log('Test Start', cy.url());
    
    TestBed.overrideProvider(HeroService, {
      useValue: {
        getHero(id: number): Observable<Hero> {
          const hero: Hero = { name: "Capt. Obvious", id: 10 };
          return of(hero);
        } 
      }
    }); 
    cy.mount(HeroDetailComponent, {
      declarations: [ 
        HeroDetailComponent,
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

