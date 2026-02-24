// In-memory store - replace with a real DB (MongoDB, PostgreSQL) in production
const store = {
  users: [],
  products: [
    {
      id: '1',
      name: 'Wireless Keyboard',
      sku: 'WK-001',
      price: 49.99,
      stock: 120,
      category: 'Electronics',
      description: 'Compact wireless keyboard with long battery life',
      createdAt: new Date('2026-01-10').toISOString(),
      updatedAt: new Date('2026-01-10').toISOString(),
    },
    {
      id: '2',
      name: 'USB-C Hub',
      sku: 'UC-002',
      price: 34.99,
      stock: 85,
      category: 'Electronics',
      description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader',
      createdAt: new Date('2026-01-12').toISOString(),
      updatedAt: new Date('2026-01-12').toISOString(),
    },
    {
      id: '3',
      name: 'Ergonomic Chair',
      sku: 'EC-003',
      price: 299.99,
      stock: 15,
      category: 'Furniture',
      description: 'Adjustable lumbar support, breathable mesh back',
      createdAt: new Date('2026-01-15').toISOString(),
      updatedAt: new Date('2026-01-15').toISOString(),
    },
    {
      id: '4',
      name: 'Desk Lamp',
      sku: 'DL-004',
      price: 24.99,
      stock: 0,
      category: 'Lighting',
      description: 'LED desk lamp with adjustable brightness and color temperature',
      createdAt: new Date('2026-01-20').toISOString(),
      updatedAt: new Date('2026-01-20').toISOString(),
    },
  ],
};

module.exports = store;
