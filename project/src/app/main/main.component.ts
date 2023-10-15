import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  newComment: string = '';
  comments: Comment[] = [];
  images: ImageWithComments[] = [];
  imageSrc: string = '';
  liked: boolean = false;
  add: any;

postimage:any
  postcomment:any
  constructor(private servicedata: ServiceService, private http: HttpClient) {
    this.get()
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.imageSrc = URL.createObjectURL(file);
    this.liked = false; // Reset the like status when a new image is uploaded.

    // Store the current image along with its comments
    this.images.push({ src: this.imageSrc, comments: this.comments });

    // Clear the comments for the new image
    this.comments = [];
  }
  get(){
    this.servicedata.getdata().subscribe((res:any)=>{
      console.log(res);
      this.postcomment=res.comment
      this.postimage=res.image
    })
  }

  postComment() {
    if (this.newComment) {
      this.comments.push({ text: this.newComment, likes: 0 });
      this.newComment = '';

      const data = {
        image: this.imageSrc,
        comment:this.comments
      };

  
      this.servicedata.postdata(data).subscribe((res:any) => {
        console.log('Post data', res.comment);
      
      });
    }
  }

  click(a: any) {
    this.add = a;
    
  }

  likeComment(comment: Comment) {
    comment.likes++;
    this.liked = true;
  }
}

interface Comment {
  text: string;
  likes: number;
}

interface ImageWithComments {
  src: string;
  comments: Comment[];
}

