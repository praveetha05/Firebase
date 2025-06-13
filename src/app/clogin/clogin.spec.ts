import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clogin } from './clogin';

describe('Clogin', () => {
  let component: Clogin;
  let fixture: ComponentFixture<Clogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
