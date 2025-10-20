import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodotProject } from './godot-project';

describe('GodotProject', () => {
  let component: GodotProject;
  let fixture: ComponentFixture<GodotProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GodotProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GodotProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
