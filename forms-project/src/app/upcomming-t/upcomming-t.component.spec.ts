import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingTComponent } from './upcomming-t.component';

describe('UpcommingTComponent', () => {
  let component: UpcommingTComponent;
  let fixture: ComponentFixture<UpcommingTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcommingTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcommingTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
