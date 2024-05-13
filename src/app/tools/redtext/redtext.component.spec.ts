import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedtextComponent } from './redtext.component';

describe('RedtextComponent', () => {
  let component: RedtextComponent;
  let fixture: ComponentFixture<RedtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedtextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
