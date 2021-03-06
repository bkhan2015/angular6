import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RemoteLearningMainModule } from './remote-learning/home/RemoteLearning.MainModule';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RemoteLearningMainModule)
  .catch(err => console.log(err));
