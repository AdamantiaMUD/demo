import {Player, PlayerClass} from '@adamantiamud/adamantia-core';

export class Cleric implements PlayerClass {
    levelUp(player: Player, newLevel: number): void {}
}

export default Cleric;