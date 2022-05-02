import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionAddComponent } from './description-add.component';

describe('DescriptionAddComponent', () => {
  let component: DescriptionAddComponent;
  let fixture: ComponentFixture<DescriptionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
