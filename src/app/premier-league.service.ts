import { Injectable } from '@angular/core';
import {Team} from './team.model';
import {Observable, of} from 'rxjs';

const TEAMS: Team[] = [
  {id: 'ARS', name: 'Arsenal', colors: ['#EF0107', '#DB0007', '#063672', '#9C824A', '#FFFFFF']},
  {id: 'AVL', name: 'Aston Villa', colors: ['#95BFE5', '#670E36', '#FEE505']},
  {id: 'BHA', name: 'Brighton and Hove Albion', colors: ['#0057B8', '#FFCD00']},
  {id: 'BUR', name: 'Burnley', colors: ['#6C1D45', '#99D6EA', '#EDE939', '#F0B323']},
  {id: 'CHE', name: 'Chelsea', colors: ['#034694', '#EE242C', '#DBA111', '#6A7AB5', '#D1D3D4']},
  {id: 'CRY', name: 'Crystal Palace', colors: ['#1B458F', '#A7A5A6', '#C4122E']},
  {id: 'EVE', name: 'Everton', colors: ['#003399', '#FFFFFF']},
  {id: 'FUL', name: 'Fulham', colors: ['#CC0000', '#000000']},
  {id: 'LEE', name: 'Leeds United', colors: ['#FFCD00', '#1D428A', '#AC944D']},
  {id: 'LEI', name: 'Leicester City', colors: ['#003090', '#FDBE11']},
  {id: 'LIV', name: 'Liverpool', colors: ['#C8102E', '#00B2A9', '#F6EB61']},
  {id: 'MCI', name: 'Manchester City', colors: ['#6CABDD', '#1C2C5B', '#FFC659', '#D4A12A', '#EC3325']},
  {id: 'MUN', name: 'Manchester United', colors: ['#DA291C', '#FBE122']},
  {id: 'NEW', name: 'Newcastle United', colors: ['#241F20', '#F1BE48', '#41B6E6', '#BBBCBC', '#F9423A']},
  {id: 'SHU', name: 'Sheffield United', colors: ['#EE2737', '#0D171A', '#FFEC2D']},
  {id: 'SOU', name: 'Southampton', colors: ['#D71920', '#130C0E', '#FFC20E', '#00AEEF', '#0DB14B']},
  {id: 'TOT', name: 'Tottenham Hotspur', colors: ['#132257']},
  {id: 'WBA', name: 'West Bromwich Albion', colors: ['#122F67', '#FFFFFF', '#755031', '#149557', '#A41B22']},
  {id: 'WHU', name: 'West Ham United', colors: ['#7A263A', '#1BB1E7', '#F3D459']},
  {id: 'WOL', name: 'Wolverhampton Wanderers', colors: ['#FDB913', '#231F20']},
];

@Injectable({
  providedIn: 'root'
})
export class PremierLeagueService {

  constructor() { }

  getTeams(): Observable<Team[]> {
    return of(TEAMS);
  }
}
