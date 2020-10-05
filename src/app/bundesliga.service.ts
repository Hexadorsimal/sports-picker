import { Injectable } from '@angular/core';
import {Team} from './team.model';
import {Observable, of} from 'rxjs';

const TEAMS: Team[] = [
  {id: 'B04', name: 'Bayer 04 Leverkusen', colors: ['#e32221', '#f3e500', '#FFFFFF', '#000000']},
  {id: 'FCB', name: 'FC Bayern München', colors: ['#dc052d', '#0066b2', '#ffffff']},
  {id: 'BVB', name: 'Borussia Dortmund', colors: ['#fde100', '#000000']},
  {id: 'BMG', name: 'Borussia Mönchengladbach', colors: ['#000000', '#ffffff']},
  {id: 'SGE', name: 'Eintracht Frankfurt', colors: ['#e1000f', '#ffffff']},
  {id: 'FCA', name: 'FC Augsburg', colors: ['#ba3733', '#46714d', '#ffd42e', '#ffffff', '#000000']},
  {id: 'KOE', name: '1. FC Köln', colors: ['#ed1c24', '#ffffff', '#000000']},
  {id: 'M05', name: '1. FSV Mainz 05', colors: ['#c3141e', '#ffffff']},
  {id: 'BSC', name: 'Hertha Berlin', colors: ['#004d9e', '#ffffff', '#000000']},
  {id: 'RBL', name: 'RB Leipzig', colors: ['#dd0741', '#001f47', '#ffffff', '#dadada']},
  {id: 'SCF', name: 'Sport-Club Freiburg', colors: ['#ffffff', '#000000']},
  {id: 'S04', name: 'FC Schalke 04', colors: ['#004d9d', '#ffffff']},
  {id: 'TSG', name: 'TSG Hoffenheim', colors: ['#1961b5', '#ffffff']},
  {id: 'FCU', name: '1. FC Union Berlin', colors: ['#eb1923', '#fddc02', '#ffffff', '#000000']},
  {id: 'WOB', name: 'VfL Wolfsburg', colors: ['#65b32e', '#ffffff']},
  {id: 'SVW', name: 'SV Werder Bremen', colors: ['#1d9053', '#ffffff']},
  {id: 'VFB', name: 'VfB Stuttgart', colors: ['#D5011E', '#000000', '#FFDD00', '#ffffff']},
  {id: 'DSC', name: 'DSC Arminia Bielefeld', colors: ['#8b65bb', '#ffffff', '#000000']},
];

@Injectable({
  providedIn: 'root'
})
export class BundesligaService {

  constructor() { }

  getTeams(): Observable<Team[]> {
    return of(TEAMS);
  }
}
