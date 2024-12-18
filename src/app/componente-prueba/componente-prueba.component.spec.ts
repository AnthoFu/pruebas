import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentePruebaComponent } from './componente-prueba.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ComponentePruebaComponent', () => {
  let component: ComponentePruebaComponent;
  let fixture: ComponentFixture<ComponentePruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentePruebaComponent, HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentePruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
