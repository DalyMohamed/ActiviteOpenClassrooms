//Définissions d'une constante comme un tableau

import { Post } from './post';

export const POSTS: Post[] = [
  { title: 'Mon Premier Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur nulla a enim egestas posuere. Quisque viverra, enim et scelerisque cursus, metus diam eleifend quam, a eleifend ligula arcu at enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', loveIts : 1, created_at : new Date() },
  { title: 'Mon Deuxième Post', content: 'Consectetur adipiscing elit. Nullam consectetur nulla a enim egestas posuere. Quisque viverra, enim et scelerisque cursus, metus diam eleifend quam, a eleifend ligula arcu at enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', loveIts : 1, created_at : new Date() },
  { title: 'Encore un Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur nulla a enim egestas posuere. Quisque viverra, enim et scelerisque cursus, metus diam eleifend quam, a eleifend ligula arcu at enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', loveIts : 1, created_at : new Date() },

];