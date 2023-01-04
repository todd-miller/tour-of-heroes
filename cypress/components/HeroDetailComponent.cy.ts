import { HeroDetailComponent } from '../../src/app/hero-detail/hero-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeroDetailComponent.cy.ts', () => {
  it('mount', () => {
    cy.log('Test Start', cy.url());
    
    
    cy.mount(HeroDetailComponent, {
      declarations: [ HeroDetailComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    });
    cy.log('Test End');
  })
});

