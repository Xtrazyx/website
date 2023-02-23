import { Number } from './cells/number';
import { Sandpile } from './cells/sandpile';
import { GamingSandpile } from './cells/gamingSandpile';
import { Text } from './cells/text';
import { CellComponentType } from '../powerGrid';
import { SandPileValueType } from './cells/sandpile';

interface DisplayRegistry {
    text: CellComponentType<string>;
    number: CellComponentType<number>;
    sandpile: CellComponentType<SandPileValueType>;
    gamingSandpile: CellComponentType<SandPileValueType>;
}

export interface RegistryType {
    display: DisplayRegistry;
}

const Registry: RegistryType = {
    display: {
        text: Text,
        number: Number,
        sandpile: Sandpile,
        gamingSandpile: GamingSandpile
    },
};

export default Registry;
