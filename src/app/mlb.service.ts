import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {Team} from './team.model';

const TEAMS: Team[] = [
  {id: 'NYY', name: 'New York Yankees'},
  {id: 'TOR', name: 'Toronto Blue Jays'},
  {id: 'BOS', name: 'Boston Red Sox'},
  {id: 'TB', name: 'Tamba Bay Rays'},
  {id: 'BAL', name: 'Baltimore Orioles'},
  {id: 'MIN', name: 'Minnesota Twins'},
  {id: 'DET', name: 'Detroit Tigers'},
  {id: 'CWS', name: 'Chicago White Sox'},
  {id: 'CLE', name: 'Cleveland Indians'},
  {id: 'KC', name: 'Kansas City Royals'},
  {id: 'LAA', name: 'Los Angeles Angels'},
  {id: 'OAK', name: 'Oakland Athletics'},
  {id: 'SEA', name: 'Seattle Mariners'},
  {id: 'TEX', name: 'Texas Rangers'},
  {id: 'HOU', name: 'Houston Astros'},
  {id: 'NYM', name: 'New York Mets'},
  {id: 'PHI', name: 'Philadelphia Phillies'},
  {id: 'WSH', name: 'Washington Nationals'},
  {id: 'MIA', name: 'Miami Marlins'},
  {id: 'ATL', name: 'Atlanta Braves'},
  {id: 'CIN', name: 'Cincinnati Reds'},
  {id: 'PIT', name: 'Pittsburgh Pirates'},
  {id: 'CHC', name: 'Chicago Cubs'},
  {id: 'MIL', name: 'Milwaukee Brewers'},
  {id: 'STL', name: 'St. Louis Cardinals'},
  {id: 'LAD', name: 'Los Angeles Dodgers'},
  {id: 'SD', name: 'San Diego Padres'},
  {id: 'SF', name: 'San Francisco Giants'},
  {id: 'ARI', name: 'Arizona Diamondbacks'},
  {id: 'COL', name: 'Colorado Rockies'},
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
