import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactInfoComponent } from './edit-contact-info.component';

describe('EditContactInfoComponent', () => {
  let component: EditContactInfoComponent;
  let fixture: ComponentFixture<EditContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditContactInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
