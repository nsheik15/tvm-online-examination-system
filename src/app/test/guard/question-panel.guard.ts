import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PanelComponent } from '../panel/panel.component';

@Injectable({
  providedIn: 'root',
})
export class QuestionPanelGuard implements CanDeactivate<PanelComponent> {
  canDeactivate(
    component: PanelComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!component.isSubmit) {
      return window.confirm(
        'The Test is not over yet! Are you sure you want to quit?'
      );
    } else {
      return true;
    }
  }
}
