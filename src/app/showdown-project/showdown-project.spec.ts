import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdownProject } from './showdown-project';

describe('ShowdownProject', () => {
  let component: ShowdownProject;
  let fixture: ComponentFixture<ShowdownProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowdownProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowdownProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
