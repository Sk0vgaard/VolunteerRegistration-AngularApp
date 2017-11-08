import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildWorkComponent } from './guild-work.component';

describe('GuildWorkComponent', () => {
  let component: GuildWorkComponent;
  let fixture: ComponentFixture<GuildWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
