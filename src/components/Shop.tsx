import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Badge
} from '@mui/material';
import { Search, ShoppingCart, Favorite, FilterList } from '@mui/icons-material';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  sizes: string[];
  colors: string[];
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 2499,
    originalPrice: 3499,
    image: "👔",
    category: "formal",
    brand: "StyleCorp",
    rating: 4.5,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Black"]
  },
  {
    id: 2,
    name: "Casual Denim Jeans",
    price: 1999,
    image: "👖",
    category: "casual",
    brand: "DenimCo",
    rating: 4.3,
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black", "Grey"]
  },
  {
    id: 3,
    name: "Party Dress",
    price: 4999,
    originalPrice: 6999,
    image: "👗",
    category: "party",
    brand: "GlamFashion",
    rating: 4.8,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Red", "Black", "Navy"]
  },
  {
    id: 4,
    name: "Sneakers",
    price: 3499,
    image: "👟",
    category: "accessories",
    brand: "SportStyle",
    rating: 4.6,
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["White", "Black", "Red"]
  }
];

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState(0);

  const categories = [
    { value: 'all', label: 'All Items' },
    { value: 'formal', label: 'Formal Wear' },
    { value: 'casual', label: 'Casual Wear' },
    { value: 'party', label: 'Party Wear' },
    { value: 'accessories', label: 'Accessories' }
  ];

  const filteredProducts = sampleProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = () => {
    setCartItems(prev => prev + 1);
    // Here you would typically add the product to a cart state/context
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ color: '#333', fontWeight: 'bold' }}>
          Shop Clothes
        </Typography>
        <IconButton color="primary" sx={{ position: 'relative' }}>
          <Badge badgeContent={cartItems} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Box>

      {/* Search and Filters */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              placeholder="Search for clothes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: <Search sx={{ mr: 1, color: '#666' }} />
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory}
                label="Category"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <MenuItem key={category.value} value={category.value}>
                    {category.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortBy}
                label="Sort By"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <MenuItem value="popular">Most Popular</MenuItem>
                <MenuItem value="price-low">Price: Low to High</MenuItem>
                <MenuItem value="price-high">Price: High to Low</MenuItem>
                <MenuItem value="rating">Highest Rated</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              variant="outlined"
              startIcon={<FilterList />}
              fullWidth
              sx={{ height: '56px' }}
            >
              Filters
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              '&:hover': { 
                transform: 'translateY(-4px)', 
                transition: 'transform 0.3s',
                boxShadow: 3
              }
            }}>
              <CardMedia
                sx={{ 
                  height: 250, 
                  backgroundColor: '#f5f5f5', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <Typography variant="h1" sx={{ fontSize: '4rem' }}>
                  {product.image}
                </Typography>
                <IconButton
                  sx={{ position: 'absolute', top: 8, right: 8, backgroundColor: 'white' }}
                  size="small"
                >
                  <Favorite />
                </IconButton>
              </CardMedia>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {product.brand}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {product.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h6" sx={{ color: '#333', fontWeight: 'bold' }}>
                    ₹{product.price}
                  </Typography>
                  {product.originalPrice && (
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        textDecoration: 'line-through', 
                        color: '#999', 
                        ml: 1 
                      }}
                    >
                      ₹{product.originalPrice}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ display: 'flex', gap: 0.5, mb: 2, flexWrap: 'wrap' }}>
                  {product.sizes.slice(0, 3).map((size) => (
                    <Chip key={size} label={size} size="small" variant="outlined" />
                  ))}
                  {product.sizes.length > 3 && (
                    <Chip label={`+${product.sizes.length - 3}`} size="small" variant="outlined" />
                  )}
                </Box>
                <Box sx={{ mt: 'auto', display: 'flex', gap: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{ borderRadius: 2 }}
                  >
                    Try On Avatar
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    onClick={() => handleAddToCart()}
                    sx={{ borderRadius: 2 }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Load More */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button variant="outlined" size="large" sx={{ px: 4 }}>
          Load More Products
        </Button>
      </Box>
    </Container>
  );
}

export default Shop;
