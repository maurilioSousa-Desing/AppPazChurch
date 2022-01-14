import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroDetailsComponent } from './membro-details.component';

describe('MembroDetailsComponent', () => {
  let component: MembroDetailsComponent;
  let fixture: ComponentFixture<MembroDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembroDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
