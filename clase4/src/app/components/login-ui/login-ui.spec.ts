import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUi } from './login-ui';

describe('LoginUi', () => {
  let component: LoginUi;
  let fixture: ComponentFixture<LoginUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
