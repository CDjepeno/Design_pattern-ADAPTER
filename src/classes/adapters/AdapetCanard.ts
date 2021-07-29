import { IDindon } from '../../interfaces/IDindon';
import { ICanard } from '../../interfaces/ICanard';
export class AdapterCanard implements IDindon {
  canard: ICanard

  constructor(c: ICanard) {
    this.canard = c
  }

  gouglouter() {
    return this.canard.cancaner()
  }

  voler() {
    return this.canard.voler()
  }

}