import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cdash } from './cdash';

describe('Cdash', () => {
  let component: Cdash;
  let fixture: ComponentFixture<Cdash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cdash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cdash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
