import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroSearchComponent } from './membro-search.component';

describe('MembroSearchComponent', () => {
  let component: MembroSearchComponent;
  let fixture: ComponentFixture<MembroSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembroSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
