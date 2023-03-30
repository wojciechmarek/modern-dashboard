import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DesktopMenuButtonComponent } from './desktop-menu-button.component'

describe('DesktopMenuButtonComponent', () => {
  let component: DesktopMenuButtonComponent
  let fixture: ComponentFixture<DesktopMenuButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopMenuButtonComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DesktopMenuButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
