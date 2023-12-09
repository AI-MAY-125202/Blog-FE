export interface Comment {
    id: number;
    idParent: number | null;
    content: string;
    children?: Comment[];
    open : number;
    image : string;
    idUser : number;
    idNews : number;
    created_at : Date;
    username : string
  }

  export interface CommentCreate {
    idParent?: number | null;
    content?: string;
    open? : number;
    idUser? : number;
    idNews? : number;
  }