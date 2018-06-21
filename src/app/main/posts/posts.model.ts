export class Posts {

  constructor(
    public id: number,
    public title: string,
    public description: string,
    public author: string,
    public avatarImage: string,
    public category: string,
    public date: string,
    public imagePath: string,
    public postText: string,
    public likesCount: number,
    public commentsCount: number) {}

}
