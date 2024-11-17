import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSignComponent } from './social-sign.component';

describe('SocialSignComponent', () => {
  let component: SocialSignComponent;
  let fixture: ComponentFixture<SocialSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialSignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
