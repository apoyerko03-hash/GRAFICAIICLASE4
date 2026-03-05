import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeScene } from './three-scene';

describe('ThreeScene', () => {
  let component: ThreeScene;
  let fixture: ComponentFixture<ThreeScene>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeScene]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeScene);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
