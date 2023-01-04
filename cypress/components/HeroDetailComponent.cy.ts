import { HeroDetailComponent } from '../../src/app/hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroService } from '../../src/app/hero.service';
import { Hero } from '../../src/app/hero';

import { MessagesComponent } from '../../src/app/messages/messages.component';
import { InMemoryDataService } from '../../src/app/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';

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

