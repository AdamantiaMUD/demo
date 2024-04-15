import type {
    Character,
    GameStateData,
    Player,
    PlayerClass,
} from '@adamantiamud/core';

export class Monk implements PlayerClass {
    /* eslint-disable @typescript-eslint/lines-between-class-members */
    public readonly name: string = 'Monk';
    public readonly description: string = '';
    public readonly abilityTable: PlayerClass['abilityTable'] = {};
    /* eslint-enable @typescript-eslint/lines-between-class-members */

    public setup(state: GameStateData, character: Character): void {}

    public levelUp(player: Player, newLevel: number): void {}
}

export default Monk;