export interface Comment {
    id: number;
    parentId: number | null;
    text: string;
    children?: Comment[];
    open : boolean;
  }