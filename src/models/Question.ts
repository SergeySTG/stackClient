// Автор вопроса, тема, количество ответов, теги.
import { Author } from 'models/Author';
import { IQuestionAPI } from 'interfaces/api/question';

/**
 * Question model for front
 * it is necessary to fix this model, which will be use in app
 */
export class Question {
  public title: string;

  public answerCount: number;

  public tags: string[];

  public owner: Author;

  public score: number;

  public viewCount: number;

  public id: number;

  constructor(initializer?: Question) {
    this.title = initializer?.title || '';
    this.answerCount = initializer?.answerCount || 0;
    this.tags = initializer?.tags || [];
    this.owner = new Author(initializer?.owner);
    this.id = initializer?.id || 0;
    this.score = 0;
    this.viewCount = 0;
  }

  static createInstance(model: IQuestionAPI): Question {
    const instance = new Question();

    instance.title = model.title;
    instance.answerCount = model.answer_count;
    instance.tags = model.tags;
    instance.owner = Author.createInstance(model.owner);
    instance.id = model.question_id;
    instance.score = model.score;
    instance.viewCount = model.view_count;

    return instance;
  }

  static createArrayOfInstance(items: IQuestionAPI[]): Question[] {
    return items.map(Question.createInstance);
  }
}
