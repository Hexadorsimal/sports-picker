import { Injectable } from '@angular/core';
import {Team} from './team.model';
import {Observable, of} from 'rxjs';

const TEAMS: Team[] = [
  {id: 'WSH', name: 'Washington Capitals', colors: ['#041E42', '#C8102E', '#FFFFFF']},
  {id: 'NYR', name: 'New York Rangers', colors: ['#0038A8', '#CE1126', '#FFFFFF']},
  {id: 'NYI', name: 'New York Islanders', colors: ['#00539B', '#F47D30']},
  {id: 'PHI', name: 'Philadelphia Flyers', colors: ['#F74902', '#000000', '#FFFFFF']},
  {id: 'BOS', name: 'Boston Bruins', colors: ['#FFB81C', '#000000']},
  {id: 'PIT', name: 'Pittsburgh Penguins', colors: ['#000000', '#CFC493', '#FCB514', '#FFFFFF']},
  {id: 'FLA', name: 'Florida Panthers', colors: ['#041E42', '#C8102E', '#B9975B']},
  {id: 'TBL', name: 'Tampa Bay Lightning', colors: ['#002868', '#FFFFFF']},
  {id: 'NSH', name: 'Nashville Predators', colors: ['#FFB81C', '#041E42', '#FFFFFF']},
  {id: 'DET', name: 'Detroit Red Wings', colors: ['#CE1126', '#FFFFFF']},
  {id: 'MIN', name: 'Minnesota Wild', colors: ['#A6192E', '#154734', '#EAAA00', '#DDCBA4']},
  {id: 'CHI', name: 'Chicago Blackhawks', colors: ['#CF0A2C', '#FF671B', '#00833E', '#FFD100', '#D18A00', '#001970', '#000000', '#FFFFFF']},
  {id: 'WPG', name: 'Winnipeg Jets', colors: ['#041E42', '#004C97', '#AC162C', '#7B303E', '#55565A', '#8E9090', '#FFFFFF']},
  {id: 'TOR', name: 'Toronto Maple Leafs', colors: ['#00205B', '#FFFFFF']},
  {id: 'MTL', name: 'Montreal Canadiens', colors: ['#AF1E2D', '#192168']},
  {id: 'OTT', name: 'Ottawa Senators', colors: ['#C52032', '#C2912C', '#000000', '#FFFFFF']},
  {id: 'VAN', name: 'Vancouver Canucks', colors: ['#00205B', '#00843D', '#041C2C', '#99999A', '#FFFFFF']},
  {id: 'SJS', name: 'San Jose Sharks', colors: ['#006D75', '#EA7200', '#000000', '#FFFFFF']},
  {id: 'LAK', name: 'Los Angeles Kings', colors: ['#111111', '#A2AAAD', '#FFFFFF']},
  {id: 'VGK', name: 'Vegas Golden Knights', colors: ['#B4975A', '#333F42', '#C8102E', '#000000', '#FFFFFF']},
  {id: 'COL', name: 'Colorado Avalanche', colors: ['#6F263D', '#236192', '#A2AAAD', '#000000']},
  {id: 'CBJ', name: 'Columbus Blue Jackets', colors: ['#002654', '#CE1126', '#A4A9AD']},
  {id: 'EDM', name: 'Edmonton Oilers', colors: ['#041E42', '#FF4C00']},
  {id: 'CLG', name: 'Calgary Flames', colors: ['#C8102E', '#F1BE48', '#111111', '#FFFFFF']},
  {id: 'CAR', name: 'Carolina Hurricanes', colors: ['#CC0000', '#000000', '#A2AAAD', '#76232F']},
  {id: 'BUF', name: 'Buffalo Sabres', colors: ['#002654', '#FCB514', '#ADAFAA', '#C8102E']},
  {id: 'NJD', name: 'New Jersey Devils', colors: ['#CE1126', '#000000', '#FFFFFF']},
  {id: 'STL', name: 'St. Loius Blues', colors: ['#002F87', '#FCB514', '#041E42', '#FFFFFF']},
  {id: 'DAL', name: 'Dallas Stars', colors: ['#006847', '#8F8F8C', '#111111']},
  {id: 'ARI', name: 'Arizona Coyotes', colors: ['#8C2633', '#E2D6B5', '#111111']},
  {id: 'ANA', name: 'Anaheim Ducks', colors: ['#F47A38', '#B9975B', '#C1C6C8', '#000000']},
];

@Injectable({
  providedIn: 'root'
})
export class NhlService {

  constructor() { }

  getTeams(): Observable<Team[]> {
    return of(TEAMS);
  }
}
