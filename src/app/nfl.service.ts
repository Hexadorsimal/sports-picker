import { Injectable } from '@angular/core';
import {Team} from './team.model';
import {Observable, of} from 'rxjs';

const TEAMS: Team[] = [
  {id: 'NYG', name: 'New York Giants'},
  {id: 'WAS', name: 'Washington Football Team'},
  {id: 'PHI', name: 'Philadelphia Eagles'},
  {id: 'DAL', name: 'Dallas Cowboys'},
  {id: 'MIN', name: 'Minnesota Vikings'},
  {id: 'GB', name: 'Green Bay Packers'},
  {id: 'DET', name: 'Detroit Lions'},
  {id: 'CHI', name: 'Chicago Bears'},
  {id: 'SEA', name: 'Seattle Seahawks'},
  {id: 'ARI', name: 'Arizona Cardinals'},
  {id: 'SF', name: 'San Francisco 49ers'},
  {id: 'LAR', name: 'Los Angeles Rams'},
  {id: 'CAR', name: 'Carolina Panthers'},
  {id: 'NO', name: 'New Orleans Saints'},
  {id: 'TB', name: 'Tampa Bay Buccaneers'},
  {id: 'ATL', name: 'Atlanta Falcons'},
  {id: 'NE', name: 'New England Patriots'},
  {id: 'BUF', name: 'Buffalo Bills'},
  {id: 'MIA', name: 'Miami Dolphins'},
  {id: 'NYJ', name: 'New York Jets'},
  {id: 'BAL', name: 'Baltimore Ravens'},
  {id: 'CLE', name: 'Cleveland Browns'},
  {id: 'CIN', name: 'Cincinnati Bengals'},
  {id: 'PIT', name: 'Pittsburgh Steelers'},
  {id: 'KC', name: 'Kansas City Chiefs'},
  {id: 'DEN', name: 'Denver Broncos'},
  {id: 'LAC', name: 'Los Angeles Chargers'},
  {id: 'LV', name: 'Las Vegas Raiders'},
  {id: 'IND', name: 'Indianapolis Colts'},
  {id: 'HOU', name: 'Houston Texans'},
  {id: 'JAX', name: 'Jacksonville Jaguars'},
  {id: 'TEN', name: 'Tennessee Titans'},
];

@Injectable({
  providedIn: 'root'
})
export class NflService {

  constructor() { }

  getTeams(): Observable<Team[]> {
    return of(TEAMS);
  }
}
