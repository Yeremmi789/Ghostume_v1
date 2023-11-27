import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as newrelic from 'newrelic';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// newrelic.setToken('NRJS-NRAK-7DWCKEVCA3CEA5LIMMNYIJ15N2S');
// newrelic.setApplicationId('2ED1DFDA1F9DF75F5F874978CCA375810FC10600E6D4D5234DCCAE68B9B00778');

// // Iniciar New Relic Browser
// newrelic.interaction();