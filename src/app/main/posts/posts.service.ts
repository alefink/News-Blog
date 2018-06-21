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

  getPosts() {
    return this.posts.slice();
  }

  addPost(post: Posts) {
    this.posts.push(post);
  }

  deletePost(post: Posts) {
  }

}
