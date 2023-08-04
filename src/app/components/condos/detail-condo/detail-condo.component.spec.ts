import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCondoComponent } from './detail-condo.component';

describe('DetailCondoComponent', () => {
  let component: DetailCondoComponent;
  let fixture: ComponentFixture<DetailCondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCondoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
