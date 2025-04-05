/**
 *  Convert JWT exp in days
 * @param exp- Number to be convert
 * @return Converted exp in days
 */
export function jwtExpirationDateConvert(exp:number):number{
    const currentTime = Math.floor(Date.now()/1000);
    const secondsUntilExpiration = exp-currentTime;
    const secondsInDays = 60*60*24;
    const daysUntilExpiration = secondsUntilExpiration/secondsInDays;
    return daysUntilExpiration;
}