import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];

  // posts: [];

  // constructor(http: Http) {
  //   http.get(this.url)
  //     .subscribe( response => {
  //       console.log(response.json());
  //       this.posts =response.json()

  //     })
  //  }
  constructor(private service: PostService) {

  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(post => this.posts = post)
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post)

    input.value = "";

    this.service.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id
      }, (error: AppError) => {
        this.posts.splice(0, 1)
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError)
        }
        else throw error
      })
  }
  updatePost(post) {
    this.service.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost);
      })
    //  this.http.put(this.url,{ isReady: true})
  }
  deletePost(post) {
    let index = this.posts.indexOf(post)
    this.posts.splice(index, 1)

    this.service.delete(post.id)
      .subscribe(
        () => {

        },
        (error: AppError) => {
          this.posts.splice(index, 0, post)
          if (error instanceof NotFoundError) {
            alert("This post has already been deleted")
            // this.form.setErrors(error)
          }
          else throw error
        })
  }



}
