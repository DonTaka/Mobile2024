import { TestBed } from '@angular/core/testing';

import { APIControllerService } from './apicontroller.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';

describe('APIControllerService', () => {
  let service: APIControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicStorageModule.forRoot()],
      providers: [provideHttpClient()]
    }).compileComponents;
    service = TestBed.inject(APIControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
