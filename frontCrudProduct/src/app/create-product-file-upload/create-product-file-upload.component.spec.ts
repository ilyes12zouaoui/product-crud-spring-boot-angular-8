import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductFileUploadComponent } from './create-product-file-upload.component';

describe('CreateProductFileUploadComponent', () => {
  let component: CreateProductFileUploadComponent;
  let fixture: ComponentFixture<CreateProductFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
