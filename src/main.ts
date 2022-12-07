import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '412b3ad9-b242-4acb-8ebd-d6a4eb2371b4',
    clientToken: 'pub35813ca48d63308d770cb030e9570d94',
    site: 'datadoghq.com',
    service:'logro-a',
    env:'Ejercicio1',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    sessionReplaySampleRate: 20,
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();
