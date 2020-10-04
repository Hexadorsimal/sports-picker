import { Injectable } from '@angular/core';
import {Team} from './team.model';
import {Observable, of} from 'rxjs';


const TEAMS: Team[] = [
  {id: 'NE', name: 'New England Revolution'},
  {id: 'RBNY', name: 'New York Red Bulls'},
  {id: 'NYCFC', name: 'New York City FC'},
  {id: 'PHI', name: 'Philadelphia Union'},
  {id: 'DC', name: 'D.C. United'},
  {id: 'TOR', name: 'Toronto FC'},
  {id: 'MTL', name: 'Montreal Impact'},
  {id: 'ATL', name: 'Atlanta United FC'},
  {id: 'MIA', name: 'Inter Miami CF'},
  {id: 'CIN', name: 'FC Cincinnati'},
  {id: 'CHI', name: 'Chicago Fire FC'},
  {id: 'MIN', name: 'Minnesota United FC'},
  {id: 'RSL', name: 'Real Salt Lake'},
  {id: 'LAG', name: 'LA Galaxy'},
  {id: 'LAFC', name: 'Los Angeles FC'},
  {id: 'SJ', name: 'San Jose Earthquakes'},
  {id: 'POR', name: 'Portland Timbers'},
  {id: 'SEA', name: 'Seattle Sounders FC'},
  {id: 'COL', name: 'Colorado Rapids'},
  {id: 'DAL', name: 'FC Dallas'},
  {id: 'HOU', name: 'Houston Dynamo'},
  {id: 'VAN', name: 'Vancouver Whitecaps FC'},
  {id: 'SKC', name: 'Sporting Kansas City'},
  {id: 'CLB', name: 'Columbus Crew'},
  {id: 'NSH', name: 'Nashville'},
  {id: 'ORL', name: 'Orlando City FC'},
];

@Injectable({
  providedIn: 'root'
})
export class MlsService {

  constructor() { }

  getTeams(): Observable<Team[]> {
    return of(TEAMS);
  }
}
