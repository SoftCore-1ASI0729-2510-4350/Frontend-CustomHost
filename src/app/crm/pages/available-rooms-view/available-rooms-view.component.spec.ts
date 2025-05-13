import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableRoomsViewComponent } from './available-rooms-view.component';

describe('AvailableRoomsViewComponent', () => {
  let component: AvailableRoomsViewComponent;
  let fixture: ComponentFixture<AvailableRoomsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableRoomsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableRoomsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
