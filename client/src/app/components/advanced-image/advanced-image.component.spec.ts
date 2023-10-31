import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedImageComponent } from './advanced-image.component';

describe('AdvancedImageComponent', () => {
  let component: AdvancedImageComponent;
  let fixture: ComponentFixture<AdvancedImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
