export class Recipe {
    public name: string; //public is accessor to make available outside assign type
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}