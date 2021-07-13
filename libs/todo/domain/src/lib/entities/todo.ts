interface ITodoParams {
  _id?: string|undefined;
  title?: string|undefined;
}

export class Todo implements ITodoParams {
  public _id?: string|undefined;
  public title?: string|undefined;

  constructor(params: Partial<ITodoParams> = {}, fromStatic = false){
    if (fromStatic !== true) {
      throw new Error('Use static create() method');
    }
    const {_id = null, title = null} = params;
    Object.assign(this, {_id, title});
  }

  static create(params: ITodoParams) {
    return new Todo(params, true);
  }
}
