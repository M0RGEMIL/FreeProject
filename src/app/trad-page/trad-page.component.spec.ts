import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradPageComponent } from './trad-page.component';

describe('TradPageComponent', () => {
  let component: TradPageComponent;
  let fixture: ComponentFixture<TradPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
