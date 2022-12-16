import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root',
})
export class FormGuard implements CanDeactivate<RegisterComponent> {

  canDeactivate(
    component: RegisterComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    /* alert(component.isSubmit); */
    if (!component.isSubmit) {
      return window.confirm(
        'There are some unsaved changes, Are you sure you want to quit?'
      );
    } else {
      return true;
    }
  }

}
