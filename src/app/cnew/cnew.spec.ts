import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cnew } from './cnew';

describe('Cnew', () => {
  let component: Cnew;
  let fixture: ComponentFixture<Cnew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cnew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cnew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
