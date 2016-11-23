import { Routes, RouterModule } from '@angular/router';

import { IntelComponent } from './intel/intel.component';
import { MediaComponent } from './media/media.component';
import { HomeComponent } from './home/home.component';
import { CastComponent } from './cast/cast.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';

const APP_ROUTES: Routes = [
	{path: '', component: HomeComponent},
	{path: 'intel', component: IntelComponent},
	{path: 'media', component: MediaComponent},
	{path: 'cast', component: CastComponent},
	{path: 'info', component: InfoComponent},
	{path: 'contact', component: ContactComponent},
]; 

export const routing = RouterModule.forRoot(APP_ROUTES);