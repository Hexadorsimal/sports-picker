import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {Team} from './team.model';

const TEAMS: Team[] = [
  {id: 'NYY', name: 'New York Yankees', colors: ['#003087', '#E4002C', '#0C2340']},
  {id: 'TOR', name: 'Toronto Blue Jays', colors: ['#134A8E', '#1D2D5C', '#E8291C']},
  {id: 'BOS', name: 'Boston Red Sox', colors: ['#BD3039', '#0C2340']},
  {id: 'TB', name: 'Tamba Bay Rays', colors: ['#092C5C', '#8FBCE6', '#F5D130', '#FFFFFF']},
  {id: 'BAL', name: 'Baltimore Orioles', colors: ['#DF4601', '#000000']},
  {id: 'MIN', name: 'Minnesota Twins', colors: ['#002B5C', '#D31145', '#B9975B']},
  {id: 'DET', name: 'Detroit Tigers', colors: ['#0C2340', '#FA4616']},
  {id: 'CWS', name: 'Chicago White Sox', colors: ['#27251F', '#C4CED4']},
  {id: 'CLE', name: 'Cleveland Indians', colors: ['#0C2340', '#E31937']},
  {id: 'KC', name: 'Kansas City Royals', colors: ['#004687', '#BD9B60']},
  {id: 'LAA', name: 'Los Angeles Angels', colors: ['#003263', '#BA0021', '#862633', '#C4CED4', '#FFFFFF']},
  {id: 'OAK', name: 'Oakland Athletics', colors: ['#003831', '#EFB21E', '#A2AAAD']},
  {id: 'SEA', name: 'Seattle Mariners', colors: ['#0C2C56', '#005C5C', '#C4CED4', '#D50032']},
  {id: 'TEX', name: 'Texas Rangers', colors: ['#003278', '#C0111F']},
  {id: 'HOU', name: 'Houston Astros', colors: ['#002D62', '#EB6E1F', '#F4911E']},
  {id: 'NYM', name: 'New York Mets', colors: ['#002D72', '#FF5910']},
  {id: 'PHI', name: 'Philadelphia Phillies', colors: ['#E81828', '#002D72']},
  {id: 'WSH', name: 'Washington Nationals', colors: ['#AB0003', '#14225A', '#FFFFFF']},
  {id: 'MIA', name: 'Miami Marlins', colors: ['#00A3E0', '#EF3340', '#000000', '#41748D']},
  {id: 'ATL', name: 'Atlanta Braves', colors: ['#CE1141', '#13274F', '#EAAA00']},
  {id: 'CIN', name: 'Cincinnati Reds', colors: ['#C6011F', '#000000']},
  {id: 'PIT', name: 'Pittsburgh Pirates', colors: ['#27251F', '#FDB827']},
  {id: 'CHC', name: 'Chicago Cubs', colors: ['#0E3386', '#CC3433']},
  {id: 'MIL', name: 'Milwaukee Brewers', colors: ['#FFC52F', '#12284B', '#FFFFFF']},
  {id: 'STL', name: 'St. Louis Cardinals', colors: ['#C41E3A', '#0C2340', '#FEDB00']},
  {id: 'LAD', name: 'Los Angeles Dodgers', colors: ['#005A9C', '#EF3E42', '#A5ACAF']},
  {id: 'SD', name: 'San Diego Padres', colors: ['#2F241D', '#FFC425']},
  {id: 'SF', name: 'San Francisco Giants', colors: ['#FD5A1E', '#27251F', '#EFD19F', '#AE8F6F']},
  {id: 'ARI', name: 'Arizona Diamondbacks', colors: ['#A71930', '#E3D4AD', '#000000', '#30CED8', '#FFFFFF']},
  {id: 'COL', name: 'Colorado Rockies', colors: ['#33006F', '#C4CED4', '#000000']},
];

@Injectable({
  providedIn: 'root'
})
export class MlbService {

  constructor() { }

  getTeams(): Observable<Team[]> {
    return of(TEAMS);
  }
}
