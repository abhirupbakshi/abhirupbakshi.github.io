import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSectionComponent } from './git-section.component';

describe('GitSectionComponent', () => {
  let component: GitSectionComponent;
  let fixture: ComponentFixture<GitSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitSectionComponent]
    });
    fixture = TestBed.createComponent(GitSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
