import type {
    CharacterInterface,
    GameStateData,
    NpcClass,
} from '@adamantiamud/core';

export class Warrior implements NpcClass {
    /* eslint-disable @typescript-eslint/lines-between-class-members */
    public readonly name: string = 'Warrior';
    public readonly description: string = '';
    public readonly abilityTable: NpcClass['abilityTable'] = {};
    /* eslint-enable @typescript-eslint/lines-between-class-members */

    public setup(state: GameStateData, character: CharacterInterface): void {}
}

export default Warrior;
