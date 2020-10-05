import { Injectable } from '@angular/core';
import {Team} from './team.model';
import {Observable, of} from 'rxjs';


const TEAMS: Team[] = [
  {id: 'NE', name: 'New England Revolution', colors: ['#E51938', '#002B5C']},
  {id: 'RBNY', name: 'New York Red Bulls', colors: ['#E31351', '#002F65', '#FFC425']},
  {id: 'NYCFC', name: 'New York City FC', colors: ['#6CACE4', '#041E42', '#F15524']},
  {id: 'PHI', name: 'Philadelphia Union', colors: ['#002D55', '#5090CD', '#B38707', '#B49759']},
  {id: 'DC', name: 'D.C. United', colors: ['#EE1A39', '#231F20']},
  {id: 'TOR', name: 'Toronto FC', colors: ['#AB1E2D', '#3F4743', '#A3AAAD']},
  {id: 'MTL', name: 'Montreal Impact', colors: ['#2B63AD', '#28477D', '#373536', '#929397', '#BBC3C6']},
  {id: 'ATL', name: 'Atlanta United FC', colors: ['#80000A', '#221F1F', '#A19060', '#817144']},
  {id: 'MIA', name: 'Inter Miami CF', colors: ['#F7B5CD', '#231F20']},
  {id: 'CIN', name: 'FC Cincinnati', colors: ['#FE5000', '#003087', '#041E42', '#BBBCBC']},
  {id: 'CHI', name: 'Chicago Fire FC', colors: ['#121F48', '#B3272D', '#909191']},
  {id: 'MIN', name: 'Minnesota United FC', colors: ['#585958', '#D8DAD9', '#231F20', '#DF2426', '#9BCDE4']},
  {id: 'RSL', name: 'Real Salt Lake', colors: ['#B30838', '#013A81', '#F5E700']},
  {id: 'LAG', name: 'LA Galaxy', colors: ['#0065A4', '#00245D', '#C4C7DC', '#FFD200', '#EEB111', '#8C8B8C', '#B3B2B3', '#231F20']},
  {id: 'LAFC', name: 'Los Angeles FC', colors: ['#000000', '#C39E6D', '#E31837', '#55565A', '#B3B2B1']},
  {id: 'SJ', name: 'San Jose Earthquakes', colors: ['#1F1F1F', '#30457A', '#A42A35']},
  {id: 'POR', name: 'Portland Timbers', colors: ['#00482B', '#D69A00']},
  {id: 'SEA', name: 'Seattle Sounders FC', colors: ['#236192', '#658D1B', '#1D252D']},
  {id: 'COL', name: 'Colorado Rapids', colors: ['#862633', '#8BB8E8', '#8D9093']},
  {id: 'DAL', name: 'FC Dallas', colors: ['#D11241', '#003E7E', '#D1D5D8']},
  {id: 'HOU', name: 'Houston Dynamo', colors: ['#F4911E', '#92C3F1', '#231F20']},
  {id: 'VAN', name: 'Vancouver Whitecaps FC', colors: ['#04265C', '#94C2E4', '#84868C']},
  {id: 'SKC', name: 'Sporting Kansas City', colors: ['#93B1D7', '#002A5C', '#A0A1A5']},
  {id: 'CLB', name: 'Columbus Crew', colors: ['#FEF200', '#231F20']},
  {id: 'ORL', name: 'Orlando City FC', colors: ['#61259E', '#FFE293']},
  {id: 'NSH', name: 'Nashville', colors: []},
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
