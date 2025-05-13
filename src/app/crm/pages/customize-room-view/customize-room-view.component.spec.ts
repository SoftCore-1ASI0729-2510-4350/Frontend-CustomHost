import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeRoomViewComponent } from './customize-room-view.component';

describe('CustomizeRoomViewComponent', () => {
  let component: CustomizeRoomViewComponent;
  let fixture: ComponentFixture<CustomizeRoomViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizeRoomViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizeRoomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
