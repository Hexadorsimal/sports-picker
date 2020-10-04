import { Injectable } from '@angular/core';
import {Team} from './team.model';
import {Observable, of} from 'rxjs';

const TEAMS: Team[] = [
  {id: 'WSH', name: 'Washington Capitals'},
  {id: 'NYR', name: 'New York Rangers'},
  {id: 'NYI', name: 'New York Islanders'},
  {id: 'PHI', name: 'Philadelphia Flyers'},
  {id: 'BOS', name: 'Boston Bruins'},
  {id: 'PIT', name: 'Pittsburgh Penguins'},
  {id: 'FLA', name: 'Florida Panthers'},
  {id: 'TBL', name: 'Tampa Bay Lightning'},
  {id: 'NSH', name: 'Nashville Predators'},
  {id: 'DET', name: 'Detroit Red Wings'},
  {id: 'MIN', name: 'Minnesota Wild'},
  {id: 'CHI', name: 'Chicago Blackhawks'},
  {id: 'WPG', name: 'Winnipeg Jets'},
  {id: 'TOR', name: 'Toronto Maple Leafs'},
  {id: 'MTL', name: 'Montreal Canadiens'},
  {id: 'OTT', name: 'Ottawa Senators'},
  {id: 'VAN', name: 'Vancouver Canucks'},
  {id: 'SJS', name: 'San Jose Sharks'},
  {id: 'LAK', name: 'Los Angeles Kings'},
  {id: 'VGK', name: 'Vegas Golden Knights'},
  {id: 'COL', name: 'Colorado Avalanche'},
  {id: 'CBJ', name: 'Columbus Blue Jackets'},
  {id: 'EDM', name: 'Edmonton Oilers'},
  {id: 'CLG', name: 'Calgary Flames'},
  {id: 'CAR', name: 'Carolina Hurricanes'},
  {id: 'BUF', name: 'Buffalo Sabres'},
  {id: 'NJD', name: 'New Jersey Devils'},
  {id: 'STL', name: 'St. Loius Blues'},
  {id: 'DAL', name: 'Dallas Stars'},
  {id: 'ARI', name: 'Arizona Coyotes'},
  {id: 'ANA', name: 'Anaheim Ducks'},
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
