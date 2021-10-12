import { backgroundColors, effects, fontColors, Reset } from './model';
function addColor(text : string, color : string, isBackground : boolean = false): string {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}


type TFont = string;
type TBackground = string;
type TEffectsList = string[];

function getEffects(effectList : TEffectsList) : string {
    return effectList.map(effect => effects[effect]).join('')
}

export type TOptionsColor = {
    font?: TFont,
    background?: TBackground,
    effects?: TEffectsList,
 }

export function color(text : string, options? : TOptionsColor) {
    const preparedText: string = text.replace(/ё/g, 'е');
    let result: string = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
