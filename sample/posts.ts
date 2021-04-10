import { PostModel } from '../domain/interfaces/social';

export const Posts: PostModel[] = [
  {
    likes: ['606dc33dc159e9118fe933f0'],
    comments: [],
    _id: '606dc5c8de1077125ad70bba',
    content: '4th Post 🔥',
    postedBy: {
      likes: ['606dc5c8de1077125ad70bba'],
      role: ['SuperAdmin'],
      _id: '606dc33dc159e9118fe933f0',
      name: 'Super Admin User',
      username: 'SuperAdmin',
      email: 'superadmin@test.com',
      avatar:
        'https://eu.ui-avatars.com/api/?name=Super,Admin,User&background=random&bold=true&rounded=true'
    },
    createdAt: '2021-04-07T14:46:32.902Z'
  },
  {
    likes: [],
    comments: [],
    _id: '606dc5898719f31243531480',
    content: '3rd Post 🔥',
    postedBy: {
      likes: ['606dc5c8de1077125ad70bba'],
      role: ['SuperAdmin'],
      _id: '606dc33dc159e9118fe933f0',
      name: 'Super Admin User',
      username: 'SuperAdmin',
      email: 'superadmin@test.com',
      avatar:
        'https://eu.ui-avatars.com/api/?name=Super,Admin,User&background=random&bold=true&rounded=true'
    },
    createdAt: '2021-04-07T14:45:29.126Z'
  },
  {
    likes: [],
    comments: [],
    _id: '606dc490ee35e41208a5da4b',
    content: 'Second Post 🔥',
    postedBy: {
      likes: ['606dc5c8de1077125ad70bba'],
      role: ['SuperAdmin'],
      _id: '606dc33dc159e9118fe933f0',
      name: 'Super Admin User',
      username: 'SuperAdmin',
      email: 'superadmin@test.com',
      avatar:
        'https://eu.ui-avatars.com/api/?name=Super,Admin,User&background=random&bold=true&rounded=true'
    },
    createdAt: '2021-04-07T14:41:20.253Z'
  },
  {
    likes: [],
    comments: ['606e13ab44b49209f2b454a4'],
    _id: '606dc4256ac81b11f4ac92f8',
    content: 'First Post 🔥',
    postedBy: {
      likes: ['606dc5c8de1077125ad70bba'],
      role: ['SuperAdmin'],
      _id: '606dc33dc159e9118fe933f0',
      name: 'Super Admin User',
      username: 'SuperAdmin',
      email: 'superadmin@test.com',
      avatar:
        'https://eu.ui-avatars.com/api/?name=Super,Admin,User&background=random&bold=true&rounded=true'
    },
    createdAt: '2021-04-07T14:39:33.030Z'
  }
];

export const PostOrders1 = [
  {
    _id: '001',
    name: 'JD Sport',
    image:
      'https://images.unsplash.com/photo-1597094662420-0928ddfa4784?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    _id: '002',
    name: 'Footlocker',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

export const PostOrders2 = [
  {
    _id: '001',
    name: 'JD Sport',
    image:
      'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];
