import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedImageLoopComponent } from './advanced-image-loop.component';

describe('AdvancedImageLoopComponent', () => {
  let component: AdvancedImageLoopComponent;
  let fixture: ComponentFixture<AdvancedImageLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedImageLoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedImageLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
