/**
 * Author model for front
 * it is necessary to fix this model, which will be use in app
 */
import { IUserAPI } from 'interfaces/api/user';

export class Author {
  public name?: string;

  public id?: number;

  public image?: string;

  constructor(initializer?: Author) {
    this.name = initializer?.name;
    this.id = initializer?.id;
    this.image = initializer?.image;
  }

  static createInstance(initializer: IUserAPI): Author {
    const instance = new Author();

    instance.id = initializer.user_id;
    instance.name = initializer.display_name;
    instance.image = initializer.profile_image;

    return instance;
  }
}
