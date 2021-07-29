import { ICanard } from '../../interfaces/ICanard';
import { IDindon } from '../../interfaces/IDindon';
export class AdapterDindon implements ICanard {
  dindon: IDindon

  constructor(d: IDindon) {
    this.dindon = d
  }

  cancaner() {
    return this.dindon.gouglouter()
  }

  voler() {
    return this.dindon.voler()
  }



}