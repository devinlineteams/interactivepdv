/**
 *  Convert Pixels To Rem
 * @param pixels - Pixels value to be Converted
 * @return the converted rem value
 */
export function pxToRem(pixels:number):string{
    return `${pixels / 16}rem`;
}
