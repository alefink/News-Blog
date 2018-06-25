import {Injectable} from '@angular/core';

import {Posts} from './posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {

  private posts: Posts[] = [
    new Posts(
      1,
      'Magna sed adipiscing',
      'Lorem ipsum dolor amet nullam consequat etiam feugiat',
      'Jane Doe',
      '/assets/images/avatar.jpg',
      'General',
      'November 1, 2017',
      '/assets/images/pic01.jpg',
      'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus ' +
      'porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed ' +
      'tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla',
      28,
      128),

    new Posts(
      2,
      'Ultricies sed magna euismod enim vitae gravida',
      'Lorem ipsum dolor amet nullam consequat etiam feugiat',
      'Jane Doe',
      '/assets/images/avatar.jpg',
      'General',
      'October 25, 2017',
      '/assets/images/pic02.jpg',
      'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus ' +
      'porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.',
      28,
      128),

    new Posts(
      3,
      'Euismod et accumsan',
      'Lorem ipsum dolor amet nullam consequat etiam feugiat',
      'Jane Doe',
      '/assets/images/avatar.jpg',
      'General',
      'October 22, 2017',
      '/assets/images/pic03.jpg',
      'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus ' +
      'porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed ' +
      'tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula ' +
      'tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula',
      28,
      128),
  ];

  getAllPosts() {
    return this.posts.slice();
  }

  getPost(id: number) {
    return this.posts.find(
      (s) => {
        return s.id === id;
      }
    );
  }

  updatePost(id: number, postEdited: Posts) {
    const post = this.posts.find(
      (s) => {
        return s.id === id;
      }
    );
    if (post) {
      this.posts[id - 1] = postEdited;
    } else {
      this.posts.push(postEdited);
    }
  }

  deletePost(id: number) {
    const post = this.posts.find(
      (s) => {
        return s.id === id;
      }
    );
    if (post) {
      this.posts.splice(id - 1, 1);
    }
  }

  getDate() {
    const months = [ 'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December' ];
    const month = months[new Date().getMonth()];
    return ( month + ' ' + new Date().getDate() + ', ' + new Date().getFullYear());
  }

}
