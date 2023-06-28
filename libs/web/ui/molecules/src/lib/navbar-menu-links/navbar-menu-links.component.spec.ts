import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMenuLinksComponent } from './navbar-menu-links.component';

describe('DesktopMenuLinksComponent', () => {
  let component: NavbarMenuLinksComponent;
  let fixture: ComponentFixture<NavbarMenuLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarMenuLinksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarMenuLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
