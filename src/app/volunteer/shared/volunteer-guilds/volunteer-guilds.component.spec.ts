import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerGuildsComponent } from './volunteer-guilds.component';

describe('VolunteerGuildsComponent', () => {
  let component: VolunteerGuildsComponent;
  let fixture: ComponentFixture<VolunteerGuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerGuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerGuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
