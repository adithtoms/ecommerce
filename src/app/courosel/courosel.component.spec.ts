import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouroselComponent } from './courosel.component';

describe('CouroselComponent', () => {
  let component: CouroselComponent;
  let fixture: ComponentFixture<CouroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouroselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
