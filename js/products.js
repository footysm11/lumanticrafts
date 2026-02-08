// Sample product data
const products = [
    {
        id: 1,
        name: "Classic Black Hoodie",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&q=80"
        ],
        description: "A timeless classic black hoodie made from premium cotton blend. Perfect for everyday wear with a comfortable fit and durable construction.",
        features: [
            "100% Premium Cotton Blend",
            "Kangaroo Pocket",
            "Ribbed Cuffs and Hem",
            "Adjustable Drawstring Hood",
            "Machine Washable"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Black", "Navy", "Gray"],
        inStock: true
    },
    {
        id: 2,
        name: "Navy Blue Premium Hoodie",
        price: 54.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop&q=80"
        ],
        description: "Elevate your style with this premium navy blue hoodie. Features a soft fleece lining and modern fit that's perfect for casual outings.",
        features: [
            "Premium Fleece Lining",
            "Double-Needle Stitching",
            "Kangaroo Pocket",
            "Ribbed Cuffs and Hem",
            "Pre-Shrunk Fabric"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy", "Black", "Charcoal"],
        inStock: true
    },
    {
        id: 3,
        name: "Gray Pullover Hoodie",
        price: 44.99,
        originalPrice: 59.99,
        image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&h=800&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&h=800&fit=crop&q=80"
        ],
        description: "Comfortable and versatile gray pullover hoodie. Ideal for layering or wearing on its own. Made with sustainable materials.",
        features: [
            "Eco-Friendly Materials",
            "Soft Brushed Interior",
            "Kangaroo Pocket",
            "Ribbed Cuffs and Hem",
            "Relaxed Fit"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Gray", "Black", "Olive"],
        inStock: true
    },
    {
        id: 4,
        name: "White Minimalist Hoodie",
        price: 52.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop&q=80&auto=format",
        images: [
            "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop&q=80&auto=format",
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop&q=80"
        ],
        description: "Clean and minimalist white hoodie with a modern silhouette. Perfect for those who appreciate simplicity and quality.",
        features: [
            "Premium Cotton",
            "Minimalist Design",
            "Kangaroo Pocket",
            "Ribbed Cuffs and Hem",
            "Oversized Fit"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Cream", "Beige"],
        inStock: true
    },
    {
        id: 5,
        name: "Olive Green Hoodie",
        price: 49.99,
        originalPrice: 64.99,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop&q=80"
        ],
        description: "Stylish olive green hoodie that stands out from the crowd. Features a comfortable fit and eye-catching color.",
        features: [
            "Premium Cotton Blend",
            "Unique Color Option",
            "Kangaroo Pocket",
            "Ribbed Cuffs and Hem",
            "Regular Fit"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Olive", "Black", "Brown"],
        inStock: true
    },
    {
        id: 6,
        name: "Charcoal Zip-Up Hoodie",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&q=80"
        ],
        description: "Versatile charcoal zip-up hoodie with a full-length zipper. Perfect for those who prefer easy on/off and adjustable ventilation.",
        features: [
            "Full-Length Zipper",
            "Premium Cotton Blend",
            "Zippered Pockets",
            "Ribbed Cuffs and Hem",
            "Modern Fit"
        ],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Charcoal", "Black", "Navy"],
        inStock: true
    }
];

