import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomListComponent } from './minuatureClasseroom';

describe('ClassroomListComponent', () => {
  let component: ClassroomListComponent;
  let fixture: ComponentFixture<ClassroomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
