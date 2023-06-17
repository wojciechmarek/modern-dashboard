import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JiraTicketsComponent } from './jira-tickets.component';

describe('JiraTicketsComponent', () => {
  let component: JiraTicketsComponent;
  let fixture: ComponentFixture<JiraTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JiraTicketsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JiraTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
