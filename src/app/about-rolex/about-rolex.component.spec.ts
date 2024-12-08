import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRolexComponent } from './about-rolex.component';

describe('AboutRolexComponent', () => {
  let component: AboutRolexComponent;
  let fixture: ComponentFixture<AboutRolexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutRolexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutRolexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
