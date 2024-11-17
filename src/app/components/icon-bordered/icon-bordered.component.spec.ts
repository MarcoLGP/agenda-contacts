import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBorderedComponent } from './icon-bordered.component';

describe('IconBorderedComponent', () => {
  let component: IconBorderedComponent;
  let fixture: ComponentFixture<IconBorderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconBorderedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconBorderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
