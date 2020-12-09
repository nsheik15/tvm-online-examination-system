import { FormSubmitService } from './form-submit.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private submitService: FormSubmitService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let formVal = this.submitService.getRegistrationFormValues();
      // console.log(`Form Value: ${formVal}`);
      if (formVal === null) {
        return this.router.parseUrl('/register');
      } else {
        return true;
      }
  }

}
