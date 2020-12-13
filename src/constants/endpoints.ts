const API_URL = 'https://api.stackexchange.com/2.2';

export const EndPoints = {
  search: `${API_URL}/search`,
  questions: {
    base: `${API_URL}/questions`,
    answers(questionId: number): string {
      return `${this.base}/${questionId}/answers`;
    },
  },
  users: {
    base: `${API_URL}/users`,
    ids(userId: string): string {
      return `${this.base}/${userId}`;
    },
    questions(userId: string): string {
      return `${this.ids(userId)}/questions`;
    },
  },
};
