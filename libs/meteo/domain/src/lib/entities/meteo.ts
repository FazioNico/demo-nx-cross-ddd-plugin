export interface RequestCurrentWeather {
  getCurrentWeather(lat: number, long: number): Promise<Meteo>
}

interface IMeteoParams {
  temp: number|undefined;
  name: string|undefined;
  icon: string|undefined;
}

export class Meteo implements IMeteoParams {
  public temp: number|undefined;
  public name: string|undefined;
  public icon: string|undefined;

  constructor(params: Partial<IMeteoParams> = {}, fromStatic = false){
    if (fromStatic !== true) {
      throw new Error('Use static create() method');
    }
    const {temp = null, name = null, icon = null} = params;
    Object.assign(this, {temp, name, icon});
  }

  static create(params: IMeteoParams) {
    return new Meteo(params, true);
  }
}