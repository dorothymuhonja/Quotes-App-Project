export class Quote {
    showDetails: boolean;
    constructor(public id: number, public name: string, public author: string, public  postedBy: string, public postedOn: Date) {
        this.showDetails=false;
    }
}