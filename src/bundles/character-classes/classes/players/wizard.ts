import type {
    Character,
    GameStateData,
    Player,
    PlayerClass,
} from '@adamantiamud/core';

export class Wizard implements PlayerClass {
    /* eslint-disable @typescript-eslint/lines-between-class-members */
    public readonly name: string = 'Wizard';
    public readonly description: string = '';
    public readonly abilityTable: PlayerClass['abilityTable'] = {};
    /* eslint-enable @typescript-eslint/lines-between-class-members */

    public setup(state: GameStateData, character: Character): void {}

    public levelUp(player: Player, newLevel: number): void {}
}

export default Wizard;
