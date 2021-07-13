
export interface RequestCurrentGeolocation {
  getCurrentLocation: () => Promise<Geolocation>
}

interface IGeolocationParams {
  lat: number|undefined;
  long: number|undefined;
}

export class Geolocation implements IGeolocationParams {
  public lat: number|undefined;
  public long: number|undefined;

  constructor(params: Partial<IGeolocationParams> = {}, fromStatic = false){
    if (fromStatic !== true) {
      throw new Error('Use static create() method');
    }
    const {lat = null, long = null} = params;
    Object.assign(this, {lat, long});
  }

  static create(params: IGeolocationParams) {
    return new Geolocation(params, true);
  }
}
