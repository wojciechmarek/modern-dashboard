import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardTileComponent } from './dashboard-tile.component';

describe('DashboardTileComponent', () => {
  let component: DashboardTileComponent;
  let fixture: ComponentFixture<DashboardTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardTileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
