import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonProject } from './simon-project';

describe('SimonProject', () => {
  let component: SimonProject;
  let fixture: ComponentFixture<SimonProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimonProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimonProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
