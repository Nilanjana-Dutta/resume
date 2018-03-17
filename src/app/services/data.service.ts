import { Injectable } from '@angular/core';
import { Cv } from '../models/Cv';
@Injectable()
export class DataService {

  cvs:Cv[];
  constructor() { }

}
