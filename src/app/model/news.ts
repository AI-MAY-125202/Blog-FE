export interface News {
  id?:number,
  idTopic?: string;
  idUser?: number;
  type?: number;
  content?: string;
  image?: string;
  file?: File;
  created_at?: Date;
  username?: string;
  avatar?: string;
  topicname?: string;
}
