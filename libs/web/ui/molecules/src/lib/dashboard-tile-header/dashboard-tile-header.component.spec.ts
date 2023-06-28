import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DashboardTileHeaderComponent } from './dashboard-tile-header.component'

describe('DashboardTileHeaderComponent', () => {
  let component: DashboardTileHeaderComponent
  let fixture: ComponentFixture<DashboardTileHeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardTileHeaderComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DashboardTileHeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
