import { Injectable } from '@angular/core';
import {Team} from './team.model';
import {Observable, of} from 'rxjs';

const TEAMS: Team[] = [
  {id: 'BOS', name: 'Boston Celtics'},
  {id: 'NYK', name: 'New York Knicks'},
  {id: 'BKN', name: 'Brooklyn Nets'},
  {id: 'PHI', name: 'Philadelphia 76ers'},
  {id: 'WSH', name: 'Washington Wizards'},
  {id: 'MIA', name: 'Miami Heat'},
  {id: 'ORL', name: 'Orlando Magic'},
  {id: 'ATL', name: 'Atlanta Hawks'},
  {id: 'CHA', name: 'Charlotte Hornets'},
  {id: 'MEM', name: 'Memphis Grizzlies'},
  {id: 'HOU', name: 'Houston Rockets'},
  {id: 'SA', name: 'San Antonio Spurs'},
  {id: 'DAL', name: 'Dallas Mavericks'},
  {id: 'OKC', name: 'Oklahoma City Thunder'},
  {id: 'PHX', name: 'Phoenix Suns'},
  {id: 'LAL', name: 'Los Angeles Lakers'},
  {id: 'LAC', name: 'Los Angeles Clippers'},
  {id: 'GSW', name: 'Golden State Warriors'},
  {id: 'POR', name: 'Portland Trailblazers'},
  {id: 'UTA', name: 'Utah Jazz'},
  {id: 'DEN', name: 'Denver Nuggets'},
  {id: 'MIN', name: 'Minnesota Timberwolves'},
  {id: 'DET', name: 'Detroit Pistons'},
  {id: 'CHI', name: 'Chicago Bulls'},
  {id: 'CLE', name: 'Cleveland Cavaliers'},
  {id: 'TOR', name: 'Toronto Raptors'},
  {id: 'NOP', name: 'New Orleans Pelicans'},
  {id: 'MIL', name: 'Milwaukee Bucks'},
  {id: 'IND', name: 'Indiana Pacers'},
];

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  constructor() { }

  getTeams(): Observable<Team[]> {
    return of(TEAMS);
  }
}
