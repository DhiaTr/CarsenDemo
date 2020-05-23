import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBaseFormComponent } from './new-base-form.component';

describe('NewBaseFormComponent', () => {
  let component: NewBaseFormComponent;
  let fixture: ComponentFixture<NewBaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
