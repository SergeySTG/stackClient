import { IResponseAPI } from 'interfaces/api';

export class Response<T> {
  public hasMore: boolean;

  public items: T[];

  public page?: number;

  public total?: number;

  public getMore?: () => Promise<Response<T> | null>;

  constructor(initializer?: Response<T>) {
    this.hasMore = !!initializer?.hasMore;
    this.items = initializer?.items || [];
  }

  static createInstance<Q, D>(
    getItems: (items: D[]) => Q[],
    api: IResponseAPI<D>
  ): Response<Q> {
    const instance = new Response<Q>();

    instance.hasMore = api.has_more;
    instance.items = getItems(api.items);
    instance.page = api.page;
    instance.total = api.total;

    return instance;
  }

  static async createInstancePagination<Q, D>(
    fetch: (page: number) => Promise<IResponseAPI<D>>,
    getItems: (items: D[]) => Q[],
    currentPage = 1
  ): Promise<Response<Q>> {
    const apiResponse = await fetch(currentPage);
    const instance = Response.createInstance<Q, D>(getItems, apiResponse);

    if (instance.hasMore) {
      instance.getMore = (): Promise<Response<Q>> => {
        return Response.createInstancePagination<Q, D>(
          fetch,
          getItems,
          (instance.page || 1) + 1
        );
      };
    }

    return instance;
  }
}
