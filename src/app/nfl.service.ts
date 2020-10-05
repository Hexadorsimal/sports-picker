import { Injectable } from '@angular/core';
import {Team} from './team.model';
import {Observable, of} from 'rxjs';

const TEAMS: Team[] = [
  {id: 'NYG', name: 'New York Giants', colors: ['#0B2265', '#A71930', '#A5ACAF']},
  {id: 'WAS', name: 'Washington Football Team', colors: ['#773141', '#FFB612', '#FFFFFF']},
  {id: 'PHI', name: 'Philadelphia Eagles', colors: ['#004C54', '#A5ACAF', '#ACC0C6', '#000000', '#565A5C']},
  {id: 'DAL', name: 'Dallas Cowboys', colors: ['#003594', '#041E42', '#869397', '#7F9695', '#FFFFFF']},
  {id: 'MIN', name: 'Minnesota Vikings', colors: ['#4F2683', '#FFC62F', '#FFFFFF']},
  {id: 'GB', name: 'Green Bay Packers', colors: ['#203731', '#FFB612', '#FFFFFF']},
  {id: 'DET', name: 'Detroit Lions', colors: ['#0076B6', '#B0B7BC', '#000000', '#FFFFFF']},
  {id: 'CHI', name: 'Chicago Bears', colors: ['#0B162A', '#C83803', '#FFFFFF']},
  {id: 'SEA', name: 'Seattle Seahawks', colors: ['#002244', '#69BE28', '#A5ACAF']},
  {id: 'ARI', name: 'Arizona Cardinals', colors: ['#97233F', '#000000', '#FFB612']},
  {id: 'SF', name: 'San Francisco 49ers', colors: ['#AA0000', '#B3995D', '#000000']},
  {id: 'LAR', name: 'Los Angeles Rams', colors: ['#003594', '#FFA300', '#FF8200', '#FFD100', '#FFFFFF']},
  {id: 'CAR', name: 'Carolina Panthers', colors: ['#0085CA', '#101820', '#BFC0BF']},
  {id: 'NO', name: 'New Orleans Saints', colors: ['#D3BC8D', '#101820', '#FFFFFF']},
  {id: 'TB', name: 'Tampa Bay Buccaneers', colors: ['#D50A0A', '#FF7900', '#0A0A08', '#B1BABF', '#34302B']},
  {id: 'ATL', name: 'Atlanta Falcons', colors: ['#A71930', '#000000', '#A5ACAF']},
  {id: 'NE', name: 'New England Patriots', colors: ['#002244', '#C60C30', '#B0B7BC']},
  {id: 'BUF', name: 'Buffalo Bills', colors: ['#00338D', '#C60C30', '#FFFFFF']},
  {id: 'MIA', name: 'Miami Dolphins', colors: ['#008E97', '#FC4C02', '#005778']},
  {id: 'NYJ', name: 'New York Jets', colors: ['#125740', '#000000', '#FFFFFF']},
  {id: 'BAL', name: 'Baltimore Ravens', colors: ['#241773', '#000000', '#9E7C0C', '#C60C30']},
  {id: 'CLE', name: 'Cleveland Browns', colors: ['#311D00', '#FF3C00', '#FFFFFF']},
  {id: 'CIN', name: 'Cincinnati Bengals', colors: ['#FB4F14', '#000000', '#FFFFFF']},
  {id: 'PIT', name: 'Pittsburgh Steelers', colors: ['#FFB612', '#101820', '#003087', '#C60C30', '#A5ACAF', '#FFFFFF']},
  {id: 'KC', name: 'Kansas City Chiefs', colors: ['#E31837', '#FFB81C', '#FFFFFF']},
  {id: 'DEN', name: 'Denver Broncos', colors: ['#FB4F14', '#002244', '#FFFFFF']},
  {id: 'LAC', name: 'Los Angeles Chargers', colors: ['#002A5E', '#FFC20E', '#0080C6']},
  {id: 'LV', name: 'Las Vegas Raiders', colors: ['#000000', '#A5ACAF', '#FFFFFF']},
  {id: 'IND', name: 'Indianapolis Colts', colors: ['#002C5F', '#A2AAAD', '#FFFFFF']},
  {id: 'HOU', name: 'Houston Texans', colors: ['#03202F', '#A71930', '#FFFFFF']},
  {id: 'JAX', name: 'Jacksonville Jaguars', colors: ['#006778', '#D7A22A', '#9F792C', '#101820']},
  {id: 'TEN', name: 'Tennessee Titans', colors: ['#0C2340', '#4B92DB', '#C8102E', '#8A8D8F', '#A2AAAD', '#54585A']},
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
