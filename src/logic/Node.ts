export interface IOptions {
  [text: string]: Node;
}

export class Node {
  question: string;
  options: IOptions;

  constructor(question: string, options: IOptions) {
    this.question = question;
    this.options = options;
  }
}
