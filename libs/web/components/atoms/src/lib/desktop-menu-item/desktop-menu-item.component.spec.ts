import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DesktopMenuItemComponent } from './desktop-menu-item.component'

describe('DesktopMenuItemComponent', () => {
  let component: DesktopMenuItemComponent
  let fixture: ComponentFixture<DesktopMenuItemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopMenuItemComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DesktopMenuItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
