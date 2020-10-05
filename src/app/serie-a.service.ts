import { Injectable } from '@angular/core';
import {Team} from './team.model';
import {Observable, of} from 'rxjs';

const TEAMS: Team[] = [
  {id: '', name: 'Atalanta', colors: ['#1E71B8', '#000000']},
  {id: '', name: 'Milan', colors: ['#FB090B', '#000000']},
  {id: '', name: 'Sassuolo', colors: ['#00A752', '#000000', '#FFFFFF', '#C7C7C7']},
  {id: '', name: 'Inter', colors: ['#A29161', '#221F20', '#0068A8']},
  {id: '', name: 'Napoli', colors: ['#003C82', '#12A0D7', '#FFFFFF']},
  {id: '', name: 'Hellas Verona', colors: ['#005395', '#FFE74A', '#F6C245', '#C49E46', '#FFFFFF', '#221F20']},
  {id: '', name: 'Benevento', colors: ['#E41E26', '#F8EF18', '#050708', '#FFFFFF']},
  {id: '', name: 'Juventus', colors: ['#000000', '#FFFFFF', '#FFCD00']},
  {id: '', name: 'Lazio', colors: ['#87D8F7', '#FFFFFF', '#15366F', '#D7A819']},
  {id: '', name: 'Roma', colors: ['#F0BC42', '#8E1F2F', '#CACACC', '#000000']},
  {id: '', name: 'Genoa', colors: ['#AD1919', '#05232F', '#FFD400', '#FFFFFF']},
  {id: '', name: 'Bologna', colors: ['#1A2F48', '#A21C26', '#FFFFFF', '#ECECEC']},
  {id: '', name: 'Fiorentina', colors: ['#EC1C23', '#A29160', '#482E92', '#FFFFFF']},
  {id: '', name: 'Sampdoria', colors: ['#1B5497', '#C21718', '#FFFFFF', '#000000']},
  {id: '', name: 'Spezia', colors: ['#1A171B', '#AC9863', '#FFFFFF']},
  {id: '', name: 'Parma', colors: ['#1B4094', '#FFD200', '#FFFFFF']},
  {id: '', name: 'Cagliari', colors: ['#002350', '#AD002A', '#FFFFFF']},
  {id: '', name: 'Torino', colors: ['#8A1E03', '#EEB111', '#5E91CC', '#FFFFFF']},
  {id: '', name: 'Udinese', colors: ['#000000', '#FFFFFF', '#8B7D37', '#7F7F7F']},
  {id: '', name: 'Crotone', colors: ['#0C233F', '#D13239', '#FFFFFF', '#F3EB5F']},
];

@Injectable({
  providedIn: 'root'
})
export class SerieAService {

  constructor() { }

  getTeams(): Observable<Team[]> {
    return of(TEAMS);
  }
}
