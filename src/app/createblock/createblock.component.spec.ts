import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateblockComponent } from './createblock.component';

describe('CreateblockComponent', () => {
  let component: CreateblockComponent;
  let fixture: ComponentFixture<CreateblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateblockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
