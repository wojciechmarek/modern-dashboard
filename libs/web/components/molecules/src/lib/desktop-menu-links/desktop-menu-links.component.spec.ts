import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DesktopMenuLinksComponent } from './desktop-menu-links.component'

describe('DesktopMenuLinksComponent', () => {
  let component: DesktopMenuLinksComponent
  let fixture: ComponentFixture<DesktopMenuLinksComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopMenuLinksComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DesktopMenuLinksComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
