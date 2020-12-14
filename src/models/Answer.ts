/**
 * Author model for front
 * it is necessary to fix this model, which will be use in app
 */
import { IAnswerAPI } from 'interfaces/api/answer';

export class Answer {
  public id: number;

  public body: string;

  public bodyMarkdown: string;

  public score: number;

  constructor(initializer?: Answer) {
    this.id = initializer?.id || 0;
    this.body = initializer?.body || '';
    this.bodyMarkdown = initializer?.bodyMarkdown || '';
    this.score = initializer?.score || 0;
  }

  static createInstance(initializer: IAnswerAPI): Answer {
    const instance = new Answer();

    instance.id = initializer.answer_id;
    instance.body = initializer.body;
    instance.bodyMarkdown = initializer.body_markdown;
    instance.score = initializer.score;

    return instance;
  }

  static createArrayOfInstance(initializer: IAnswerAPI[]): Answer[] {
    return initializer.map(Answer.createInstance);
  }
}
