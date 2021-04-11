import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatareadComponent } from './dataread.component';

describe('DatareadComponent', () => {
  let component: DatareadComponent;
  let fixture: ComponentFixture<DatareadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatareadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatareadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
