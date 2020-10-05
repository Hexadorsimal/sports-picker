import { Injectable } from '@angular/core';
import {Team} from './team.model';
import {Observable, of} from 'rxjs';

const TEAMS: Team[] = [
  {id: 'BOS', name: 'Boston Celtics', colors: ['#007A33', '#BA9653', '#963821', '#E59E6D', '#000000']},
  {id: 'NYK', name: 'New York Knicks', colors: ['#006BB6', '#F58426', '#BEC0C2', '#000000']},
  {id: 'BKN', name: 'Brooklyn Nets', colors: ['#000000', '#FFFFFF']},
  {id: 'PHI', name: 'Philadelphia 76ers', colors: ['#006BB6', '#ED174C', '#002B5C', '#C4CED4']},
  {id: 'WSH', name: 'Washington Wizards', colors: ['#002B5C', '#E31837', '#C4CED4']},
  {id: 'MIA', name: 'Miami Heat', colors: ['#98002E', '#F9A01B', '#000000']},
  {id: 'ORL', name: 'Orlando Magic', colors: ['#0077C0', '#C4CED4', '#000000']},
  {id: 'ATL', name: 'Atlanta Hawks', colors: ['#E03A3E', '#C1D32F', '#26282A']},
  {id: 'CHA', name: 'Charlotte Hornets', colors: ['#1D1160', '#00788C', '#A1A1A4']},
  {id: 'MEM', name: 'Memphis Grizzlies', colors: ['#5D76A9', '#12173F', '#F5B112', '#707271']},
  {id: 'HOU', name: 'Houston Rockets', colors: ['#CE1141', '#000000', '#C4CED4']},
  {id: 'SA', name: 'San Antonio Spurs', colors: ['#C4CED4', '#000000']},
  {id: 'DAL', name: 'Dallas Mavericks', colors: ['#00538C', '#002B5E', '#B8C4CA', '#000000']},
  {id: 'OKC', name: 'Oklahoma City Thunder', colors: ['#007AC1', '#EF3B24', '#002D62', '#FDBB30']},
  {id: 'PHX', name: 'Phoenix Suns', colors: ['#1D1160', '#E56020', '#000000', '#63727A', '#F9AD1B', '#B95915', '#BEC0C2']},
  {id: 'LAL', name: 'Los Angeles Lakers', colors: ['#552583', '#FDB927', '#000000']},
  {id: 'LAC', name: 'Los Angeles Clippers', colors: ['#C8102E', '#1D428A', '#BEC0C2', '#000000']},
  {id: 'GSW', name: 'Golden State Warriors', colors: ['#1D428A', '#FFC72C']},
  {id: 'POR', name: 'Portland Trailblazers', colors: ['#E03A3E', '#000000']},
  {id: 'UTA', name: 'Utah Jazz', colors: ['#002B5C', '#00471B', '#F9A01B']},
  {id: 'DEN', name: 'Denver Nuggets', colors: ['#0E2240', '#FEC524', '#8B2131', '#1D428A']},
  {id: 'MIN', name: 'Minnesota Timberwolves', colors: ['#0C2340', '#236192', '#78BE20', '#9EA2A2']},
  {id: 'DET', name: 'Detroit Pistons', colors: ['#C8102E', '#1D42BA', '#BEC0C2', '#002D62']},
  {id: 'CHI', name: 'Chicago Bulls', colors: ['#CE1141', '#000000']},
  {id: 'CLE', name: 'Cleveland Cavaliers', colors: ['#860038', '#041E42', '#FDBB30', '#000000']},
  {id: 'TOR', name: 'Toronto Raptors', colors: ['#CE1141', '#000000', '#A1A1A4', '#B4975A']},
  {id: 'NOP', name: 'New Orleans Pelicans', colors: ['#0C2340', '#C8102E', '#85714D']},
  {id: 'MIL', name: 'Milwaukee Bucks', colors: ['#00471B', '#EEE1C6', '#0077C0', '#000000']},
  {id: 'IND', name: 'Indiana Pacers', colors: ['#002D62', '#FDBB30', '#BEC0C2']},
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
