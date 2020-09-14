import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategoryDialogComponent } from './update-category-dialog.component';

describe('UpdateCategoryDialogComponent', () => {
  let component: UpdateCategoryDialogComponent;
  let fixture: ComponentFixture<UpdateCategoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCategoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
