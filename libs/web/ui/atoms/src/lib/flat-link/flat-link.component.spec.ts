import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FlatLinkComponent } from './flat-link.component'

describe('FlatLinkComponent', () => {
  let component: FlatLinkComponent
  let fixture: ComponentFixture<FlatLinkComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlatLinkComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FlatLinkComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
