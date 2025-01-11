import { Injectable } from "@angular/core";
import { Post } from "../interfaces/Post";


@Injectable({
    providedIn:'root'
})

export class PostService{

    posts:Array<Post>=[
        {id:1,title:"Post Title 1",post:"Dummy Post 1"},
        {id:2,title:"Post Title 2",post:"Dummy Post 2"},
        {id:3,title:"Post Title 3",post:"Dummy Post 3"},
        {id:4,title:"Post Title 4",post:"Dummy Post 4"},
        {id:5,title:"Post Title 5",post:"Dummy Post 5"},
        {id:6,title:"Post Title 6",post:"Dummy Post 6"},
        {id:7,title:"Post Title 7",post:"Dummy Post 7"}        
    ];
    constructor(){
        
    }
    getPost(){
        return this.posts;
    }
    addPostService(post:Post){
        this.posts.push(post);
    }
}