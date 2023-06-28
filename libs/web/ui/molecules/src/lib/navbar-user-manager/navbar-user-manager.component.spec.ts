import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NavbarUserManagerComponent } from './navbar-user-manager.component'

describe('NavbarUserManagerComponent', () => {
  let component: NavbarUserManagerComponent
  let fixture: ComponentFixture<NavbarUserManagerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarUserManagerComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(NavbarUserManagerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
