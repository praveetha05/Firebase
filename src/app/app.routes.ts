import { Routes } from '@angular/router';
import { Clogin } from './clogin/clogin';
import { Cnew } from './cnew/cnew';
import { Cdash } from './cdash/cdash';
import { Csignout } from './csignout/csignout';

import { gateGuard } from './gate-guard';


export const routes: Routes =
    [

        {path:'login',component:Clogin},
        {path:'Account',component:Cnew},
        {path:'Dashboard',component:Cdash,canActivate:[gateGuard]},
        {path:'signout',component:Csignout},
       
      
    ]