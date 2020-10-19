import type {
    CharacterInterface,
    GameStateData,
    Player,
    PlayerClass,
} from '@adamantiamud/adamantia-core/build/lib';

export class Barbarian implements PlayerClass {
    /* eslint-disable @typescript-eslint/lines-between-class-members */
    public readonly name: string = 'Barbarian';
    public readonly description: string = '';
    public readonly abilityTable: PlayerClass['abilityTable'] = {};
    /* eslint-enable @typescript-eslint/lines-between-class-members */

    public setup(state: GameStateData, character: CharacterInterface): void {}

    public levelUp(player: Player, newLevel: number): void {}
}

export default Barbarian;
