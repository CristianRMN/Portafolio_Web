import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicProject } from './music-project';

describe('MusicProject', () => {
  let component: MusicProject;
  let fixture: ComponentFixture<MusicProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
