import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { inject } from '@vercel/analytics';

import { AppModule } from './app/app.module';

inject();

declare namespace CSS {
  namespace paintWorklet {
    export function addModule(url: URL): void;
  }
}

if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule(
    new URL('assets/paint-worklet/smooth-corners.js', import.meta.url)
  );
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
