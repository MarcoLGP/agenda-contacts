import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBackgroundRoundedComponent } from './icon-background-rounded.component';

describe('IconBackgroundRoundedComponent', () => {
  let component: IconBackgroundRoundedComponent;
  let fixture: ComponentFixture<IconBackgroundRoundedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconBackgroundRoundedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconBackgroundRoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
