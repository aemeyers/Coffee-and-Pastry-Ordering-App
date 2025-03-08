// Mock data for coffee and pastry products
export const allCoffees = [{
  id: 'c1',
  name: 'Espresso',
  description: 'Strong and concentrated coffee.',
  price: 2.99,
  image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'coffee'
}, {
  id: 'c2',
  name: 'Cappuccino',
  description: 'Espresso with steamed milk.',
  price: 3.99,
  image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'coffee'
}, {
  id: 'c3',
  name: 'Latte',
  description: 'Espresso with milk foam.',
  price: 4.29,
  image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'coffee'
}, {
  id: 'c4',
  name: 'Cold Brew',
  description: 'Smooth cold coffee.',
  price: 4.99,
  image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'coffee'
}, {
  id: 'c5',
  name: 'Americano',
  description: 'Diluted espresso.',
  price: 3.49,
  image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'coffee'
}, {
  id: 'c6',
  name: 'Mocha',
  description: 'Coffee with chocolate.',
  price: 4.59,
  image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'coffee'
}];
export const allPastries = [{
  id: 'p1',
  name: 'Croissant',
  description: 'Buttery pastry.',
  price: 3.49,
  image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'pastry'
}, {
  id: 'p2',
  name: 'Blueberry Muffin',
  description: 'Fresh muffin.',
  price: 3.29,
  image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'pastry'
}, {
  id: 'p3',
  name: 'Choc Cookie',
  description: 'Classic cookie.',
  price: 2.99,
  image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'pastry'
}, {
  id: 'p4',
  name: 'Cinnamon Roll',
  description: 'Sweet roll.',
  price: 4.29,
  image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'pastry'
}, {
  id: 'p5',
  name: 'Danish',
  description: 'Almond pastry.',
  price: 3.99,
  image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'pastry'
}, {
  id: 'p6',
  name: 'Banana Bread',
  description: 'Fresh bread.',
  price: 3.79,
  image: 'https://images.unsplash.com/photo-1606101205927-c0fed0edc7fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'pastry'
}];
export const featuredCoffees = allCoffees.slice(0, 2);
export const featuredPastries = allPastries.slice(0, 2);