import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControllerPage } from './controller.page';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { provideHttpClient } from '@angular/common/http';

describe('ControllerPage', () => {
  let component: ControllerPage;
  let fixture: ComponentFixture<ControllerPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControllerPage],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot()],
      providers: [provideHttpClient()]
    }).compileComponents();
    fixture = TestBed.createComponent(ControllerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
