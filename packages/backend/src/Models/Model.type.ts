export interface Attribute {}

export interface Connection {}

/**
 * The base class for other classes that represent database models. It defines several
 * properties that are common to most database models, such as the connection to
 * the database, the name of the collection or table, and the primary key.
 */
export abstract class Model {
  /**
   * The connection that will be used to query
   *
   * @var Connection|null
   */
  protected connection?: Connection;

  /**
   * The collection (or table) name which is presented by this model
   *
   * @var string
   */
  protected collection: string;

  protected name: string = '';

  /**
   * The primary key for the model.
   *
   * @var string
   */
  protected primaryKey: string = '_id';

  /**
   * The "type" of the primary key ID.
   *
   * @var string
   */
  protected keyType: string = 'uuid';

  /**
   * The array of booted models. We store this model here when initiated to
   * prevent loading the same model more than once.
   *
   * @var Array[Model]
   */
  protected static bootedModels: { [key: string]: any } = {};

  /**
   * These hidden attributes that will be returned from database.
   * This helps to prevent leaked important information like passwords and tokens
   *
   * @var Array[string]
   */
  protected hidden: Array<string>;

  /**
   * The number of models to return for pagination.
   *
   * @var Number
   */
  protected perPage: Number = 15;

  /**
   * Create a new Eloquent model instance.
   *
   * @param  array  $attributes
   * @return undefined
   */
  public constructor(attributes: { [key: string]: any } = {}) {
    // Boot the model if it's not booted before
    // This prevent loading the same model more than once
    this.bootIfNotBooted();

    // TODO add implement fill, forceFill & isFillable functions
    // this.fill($attributes);
  }

  /**
   * Check if the model needs to be booted and if so, do it.
   *
   * @return undefined
   */
  protected bootIfNotBooted(): undefined {
    if (!Model.bootedModels.includes(this.name)) {
      Model.bootedModels[this.name] = true;

      // TODO add support for Models Events
      // this.fireModelEvent('booting', false);

      Model.booting();
      Model.boot();
      Model.booted();

      // this.fireModelEvent('booted', false);
    }
  }

  /**
   * Perform any actions required before the model boots.
   *
   * @return undefined
   */
  protected static booting() {
    // ...
  }

  /**
   * Bootstrap the model and its traits.
   *
   * @return undefined
   */
  protected static boot() {
    // ...
  }

  /**
   * Perform any actions required after the model boots.
   *
   * @return undefined
   */
  protected static booted() {
    // ...
  }

  /**
   * Clear the list of booted models so they will be re-booted.
   *
   * @return undefined
   */
  public static clearBootedModels() {
    this.bootedModels = [];
  }
}

export default Model;
