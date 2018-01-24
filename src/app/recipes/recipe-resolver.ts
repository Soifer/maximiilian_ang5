import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { RecipeService } from './recipe.service';

interface Server {
  id: number;
  name: string;
  status: string;
}

//@Injectable()
// export class RecipeResolver implements Resolve<Server> {
//   constructor(private recipesService: RecipeService) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
//     return this.recipesService.getRecipes();
//   }
// }
