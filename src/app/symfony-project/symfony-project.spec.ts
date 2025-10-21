import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymfonyProject } from './symfony-project';

describe('SymfonyProject', () => {
  let component: SymfonyProject;
  let fixture: ComponentFixture<SymfonyProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SymfonyProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymfonyProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
