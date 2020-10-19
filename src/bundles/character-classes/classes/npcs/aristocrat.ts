import type {
    CharacterInterface,
    GameStateData,
    NpcClass,
} from '@adamantiamud/adamantia-core/build/lib';

export class Aristocrat implements NpcClass {
    /* eslint-disable @typescript-eslint/lines-between-class-members */
    public readonly name: string = 'Aristocrat';
    public readonly description: string = '';
    public readonly abilityTable: NpcClass['abilityTable'] = {};
    /* eslint-enable @typescript-eslint/lines-between-class-members */

    public setup(state: GameStateData, character: CharacterInterface): void {}
}

export default Aristocrat;
