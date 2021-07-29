import { Colvert } from './classes/Colvert';
import { DindonSavage } from './classes/DindonSavage';
import { AdapterDindon } from './classes/adapters/AdapterDindon';
import { AdapterCanard } from './classes/adapters/AdapetCanard';
export class RunCanard {

  main() {
    const dindonSavage: DindonSavage = new DindonSavage()
    const adapterDindon: AdapterDindon = new AdapterDindon(dindonSavage)

    return adapterDindon.cancaner()
  }

  main2() {
    const canard: Colvert = new Colvert()
    const adapterCanard: AdapterCanard = new AdapterCanard(canard)

    return adapterCanard.gouglouter()
  }


}