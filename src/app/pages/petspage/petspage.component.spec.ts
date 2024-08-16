import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetspageComponent } from './petspage.component';

describe('PetspageComponent', () => {
  let component: PetspageComponent;
  let fixture: ComponentFixture<PetspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetspageComponent]
    });
    fixture = TestBed.createComponent(PetspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
