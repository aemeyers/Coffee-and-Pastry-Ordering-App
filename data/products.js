// Mock data for coffee and pastry products
export const allCoffees = [{
  id: 'c1',
  name: 'Espresso',
  description: 'Strong and concentrated coffee served in a small cup.',
  price: 2.99,
  image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'coffee'
}, {
  id: 'c2',
  name: 'Cappuccino',
  description: 'Espresso with steamed milk and a layer of frothed milk.',
  price: 3.99,
  image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'coffee'
}, {
  id: 'c3',
  name: 'Latte',
  description: 'Espresso with steamed milk and a light layer of foam.',
  price: 4.29,
  image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'coffee'
}, {
  id: 'c4',
  name: 'Americano',
  description: 'Espresso diluted with hot water.',
  price: 3.49,
  image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'coffee'
}, {
  id: 'c5',
  name: 'Mocha',
  description: 'Espresso with chocolate and steamed milk.',
  price: 4.59,
  image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'coffee'
}, {
  id: 'c6',
  name: 'Cold Brew',
  description: 'Coffee brewed with cold water over a long period.',
  price: 4.99,
  image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'coffee'
}];
export const allPastries = [{
  id: 'p1',
  name: 'Croissant',
  description: 'Buttery, flaky, French viennoiserie pastry.',
  price: 3.49,
  image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'pastry'
}, {
  id: 'p2',
  name: 'Blueberry Muffin',
  description: 'Moist muffin filled with fresh blueberries.',
  price: 3.29,
  image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'pastry'
}, {
  id: 'p3',
  name: 'Chocolate Chip Cookie',
  description: 'Classic cookie with chunks of chocolate.',
  price: 2.99,
  image: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'pastry'
}, {
  id: 'p4',
  name: 'Cinnamon Roll',
  description: 'Sweet roll with cinnamon and frosting.',
  price: 4.29,
  image: 'https://images.unsplash.com/photo-1509365390695-33acd7879c95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'pastry'
}, {
  id: 'p5',
  name: 'Almond Danish',
  description: 'Flaky pastry filled with almond paste.',
  price: 3.99,
  image: 'https://images.unsplash.com/photo-1620921598635-c9e89873b98d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'pastry'
}, {
  id: 'p6',
  name: 'Banana Bread',
  description: 'Moist bread made with ripe bananas.',
  price: 3.79,
  image: 'https://images.unsplash.com/photo-1595427433969-021b5b87d37f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  type: 'pastry'
}];
export const featuredCoffees = allCoffees.slice(0, 2);
export const featuredPastries = allPastries.slice(0, 2);