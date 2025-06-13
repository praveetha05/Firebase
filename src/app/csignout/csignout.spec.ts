import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csignout } from './csignout';

describe('Csignout', () => {
  let component: Csignout;
  let fixture: ComponentFixture<Csignout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Csignout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csignout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
