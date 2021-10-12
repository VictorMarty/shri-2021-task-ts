import { color, TOptionsColor } from './colors';
import { markdown, TOptionsMarkDown } from './md';
export type TOptions = {
    [key: string]: string | boolean | string[]
}
export function style(text: string, options : TOptions): string {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
        return markdown(text, options);
    }
    return text;
}
