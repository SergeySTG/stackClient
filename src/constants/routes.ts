export enum SearchParams {
  title = 'search',
}

export const Routes = {
  main: '/',
  search: {
    base: '/search',
    getSearchTitle(title: string): string {
      return `${this.base}?${SearchParams.title}=${title}`;
    },
  }, // result page of search
  question: '/question/:id', // question info
};
