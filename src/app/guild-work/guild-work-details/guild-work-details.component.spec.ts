import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildWorkDetailsComponent } from './guild-work-details.component';

describe('GuildWorkDetailsComponent', () => {
  let component: GuildWorkDetailsComponent;
  let fixture: ComponentFixture<GuildWorkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildWorkDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildWorkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
