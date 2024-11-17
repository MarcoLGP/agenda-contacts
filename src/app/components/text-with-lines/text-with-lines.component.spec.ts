import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWithLinesComponent } from './text-with-lines.component';

describe('TextWithLinesComponent', () => {
  let component: TextWithLinesComponent;
  let fixture: ComponentFixture<TextWithLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextWithLinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextWithLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
