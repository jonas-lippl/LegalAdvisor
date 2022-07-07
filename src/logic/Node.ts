interface INodeEvalFunc {
  (): Node
}

interface IOptions {
  [text: string]: Node | INodeEvalFunc
}

export class Node {
  question: string;
  options: IOptions;

  constructor(question: string, options: IOptions) {
    this.question = question;
    this.options = options;
  }
}