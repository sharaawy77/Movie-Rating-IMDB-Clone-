

export interface Review {
    author:string;
    content:string;
    created_at:string;
    id:string;
    updated_at:string;
    url:string;
    author_details:{
        name:string;
        username:string;
        avatar_path:string;
        rating:number;

    }

}
