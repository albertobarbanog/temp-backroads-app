import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 2, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis obcaecati ducimus delectus repudiandae quod numquam id, corporis sapiente facilis quia laboriosam, similique ipsa deleniti nihil iste, expedita mollitia. Aliquam, ratione!',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis obcaecati ducimus delectus repudiandae quod numquam id, corporis sapiente facilis quia laboriosam, similique ipsa deleniti nihil iste, expedita mollitia. Aliquam, ratione!',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis obcaecati ducimus delectus repudiandae quod numquam id, corporis sapiente facilis quia laboriosam, similique ipsa deleniti nihil iste, expedita mollitia. Aliquam, ratione!',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'August 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quos natus fugiat amet hic laudantium perferendis.',
    location: 'China',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'September 15th, 2020',
    title: 'Kenya Highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quos natus fugiat amet hic laudantium perferendis.',
    location: 'Kenya',
    duration: 8,
    cost: 2500,
  },
  {
    id: 3,
    image: tour3,
    date: 'October 1st, 2020',
    title: 'Explore Indonesia',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quos natus fugiat amet hic laudantium perferendis.',
    location: 'Indonesia',
    duration: 10,
    cost: 3000,
  },
  {
    id: 4,
    image: tour4,
    date: 'November 12th, 2020',
    title: 'Discover Egypt',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quos natus fugiat amet hic laudantium perferendis.',
    location: 'Egypt',
    duration: 7,
    cost: 2200,
  },
];
