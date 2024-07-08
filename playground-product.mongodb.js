// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('skit_interns');

// Create a new document in the collection.
db.getCollection('products').insertMany(
    [
        {
          "product_id": 1,
          "name": "Lux",
          "description": "A good fraganance soap",
          "new_price": 25.0,
          "old_price": 56.0,
          "product_qty": 56,
          "category": "Health",
          "sub_category": "soap",
          "rating": 4.5,
          "colors": ["White", "Pink", "Blue"]
        },
        {
          "product_id": 2,
          "name": "Apple",
          "description": "A juicy red apple",
          "new_price": 2.0,
          "old_price": 3.0,
          "product_qty": 100,
          "category": "Food",
          "sub_category": "Fruits",
          "rating": 4.7,
          "colors": ["Red", "Green", "Yellow"]
        },
        {
          "product_id": 3,
          "name": "Samsung Galaxy S21",
          "description": "Latest smartphone from Samsung",
          "new_price": 999.0,
          "old_price": 1299.0,
          "product_qty": 20,
          "category": "Electronics",
          "sub_category": "Smartphones",
          "rating": 4.8,
          "colors": ["Phantom Black", "Phantom Silver", "Phantom Violet"]
        },
        {
          "product_id": 4,
          "name": "KitKat",
          "description": "Delicious chocolate wafers",
          "new_price": 1.0,
          "old_price": 1.5,
          "product_qty": 200,
          "category": "Food",
          "sub_category": "Snacks",
          "rating": 4.6,
          "colors": ["Brown", "White"]
        },
        {
          "product_id": 5,
          "name": "Dove Shampoo",
          "description": "Moisturizing shampoo for soft hair",
          "new_price": 10.0,
          "old_price": 15.0,
          "product_qty": 40,
          "category": "Health",
          "sub_category": "Hair Care",
          "rating": 4.4,
          "colors": ["White", "Blue"]
        },
        {
          "product_id": 6,
          "name": "Sony WH-1000XM4",
          "description": "Noise-canceling headphones",
          "new_price": 349.0,
          "old_price": 399.0,
          "product_qty": 15,
          "category": "Electronics",
          "sub_category": "Headphones",
          "rating": 4.9,
          "colors": ["Black", "Silver"]
        },
        {
          "product_id": 7,
          "name": "Lays Chips",
          "description": "Crunchy potato chips",
          "new_price": 2.0,
          "old_price": 3.0,
          "product_qty": 150,
          "category": "Food",
          "sub_category": "Snacks",
          "rating": 4.3,
          "colors": ["Yellow", "Green"]
        },
        {
          "product_id": 8,
          "name": "Colgate Toothpaste",
          "description": "Complete oral care toothpaste",
          "new_price": 3.0,
          "old_price": 4.0,
          "product_qty": 60,
          "category": "Health",
          "sub_category": "Oral Care",
          "rating": 4.7,
          "colors": ["White", "Blue", "Red"]
        },
        {
          "product_id": 9,
          "name": "LG OLED CX Series",
          "description": "4K OLED Smart TV",
          "new_price": 1499.0,
          "old_price": 1999.0,
          "product_qty": 10,
          "category": "Electronics",
          "sub_category": "Televisions",
          "rating": 4.8,
          "colors": ["Black"]
        },
        {
          "product_id": 10,
          "name": "Banana",
          "description": "A ripe and sweet banana",
          "new_price": 0.5,
          "old_price": 0.7,
          "product_qty": 150,
          "category": "Food",
          "sub_category": "Fruits",
          "rating": 4.6,
          "colors": ["Yellow", "Green"]
        },
        {
          "product_id": 11,
          "name": "Nivea Body Lotion",
          "description": "Moisturizing body lotion",
          "new_price": 8.0,
          "old_price": 10.0,
          "product_qty": 30,
          "category": "Health",
          "sub_category": "Skin Care",
          "rating": 4.5,
          "colors": ["White", "Blue"]
        },
        {
          "product_id": 12,
          "name": "Coca-Cola",
          "description": "Refreshing carbonated soft drink",
          "new_price": 1.0,
          "old_price": 1.5,
          "product_qty": 100,
          "category": "Food",
          "sub_category": "Beverages",
          "rating": 4.4,
          "colors": ["Brown"]
        },
        {
          "product_id": 13,
          "name": "MacBook Pro",
          "description": "Powerful laptop by Apple",
          "new_price": 1299.0,
          "old_price": 1499.0,
          "product_qty": 8,
          "category": "Electronics",
          "sub_category": "Laptops",
          "rating": 4.9,
          "colors": ["Space Gray", "Silver"]
        },
        {
          "product_id": 14,
          "name": "Oreo Cookies",
          "description": "Chocolate sandwich cookies",
          "new_price": 2.0,
          "old_price": 3.0,
          "product_qty": 120,
          "category": "Food",
          "sub_category": "Snacks",
          "rating": 4.7,
          "colors": ["Brown", "White"]
        },
        {
          "product_id": 15,
          "name": "Garnier Shampoo",
          "description": "Strengthening shampoo for healthy hair",
          "new_price": 12.0,
          "old_price": 15.0,
          "product_qty": 35,
          "category": "Health",
          "sub_category": "Hair Care",
          "rating": 4.6,
          "colors": ["Green", "Yellow"]
        },
        {
          "product_id": 16,
          "name": "Dell XPS 15",
          "description": "High-performance laptop",
          "new_price": 1299.0,
          "old_price": 1499.0,
          "product_qty": 12,
          "category": "Electronics",
          "sub_category": "Laptops",
          "rating": 4.8,
          "colors": ["Silver"]
        },
        {
          "product_id": 17,
          "name": "Pepsi",
          "description": "Refreshing carbonated soft drink",
          "new_price": 1.0,
          "old_price": 1.5,
          "product_qty": 90,
          "category": "Food",
          "sub_category": "Beverages",
          "rating": 4.5,
          "colors": ["Blue", "White"]
        },
        {
          "product_id": 18,
          "name": "Nokia 3310",
          "description": "Classic mobile phone",
          "new_price": 49.0,
          "old_price": 69.0,
          "product_qty": 25,
          "category": "Electronics",
          "sub_category": "Mobile Phones",
          "rating": 4.7,
          "colors": ["Black", "Blue", "Yellow"]
        },
        {
          "product_id": 19,
          "name": "Yogurt",
          "description": "Creamy and delicious yogurt",
          "new_price": 1.0,
          "old_price": 1.5,
          "product_qty": 80,
          "category": "Food",
          "sub_category": "Dairy",
          "rating": 4.6,
          "colors": ["White"]
        },
        {
          "product_id": 20,
          "name": "Oral-B Toothbrush",
          "description": "Soft bristle toothbrush",
          "new_price": 2.0,
          "old_price": 3.0,
          "product_qty": 50,
          "category": "Health",
          "sub_category": "Oral Care",
          "rating": 4.4,
          "colors": ["Blue", "Green", "Red"]
        }
      ]
);
