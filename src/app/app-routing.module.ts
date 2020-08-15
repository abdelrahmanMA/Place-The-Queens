import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RulesComponent } from './rules/rules.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: 'rules', component: RulesComponent },
  { path: 'game-settings', component: GameSettingsComponent },
  { path: 'game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
