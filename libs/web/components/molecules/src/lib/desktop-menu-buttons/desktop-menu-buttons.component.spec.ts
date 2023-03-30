import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DesktopMenuButtonsComponent } from './desktop-menu-buttons.component'

describe('DesktopMenuButtonsComponent', () => {
  let component: DesktopMenuButtonsComponent
  let fixture: ComponentFixture<DesktopMenuButtonsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopMenuButtonsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DesktopMenuButtonsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
