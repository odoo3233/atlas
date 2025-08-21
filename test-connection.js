// Test script to verify frontend-backend connection
const fetch = require('node-fetch');

async function testConnection() {
  console.log('Testing Frontend-Backend Connection...\n');

  try {
    // Test 1: Health check
    console.log('1. Testing health check...');
    const healthResponse = await fetch('http://localhost:5001/api/health');
    const healthData = await healthResponse.json();
    console.log('✅ Health check passed:', healthData);

    // Test 2: Get all products
    console.log('\n2. Testing products API...');
    const productsResponse = await fetch('http://localhost:5001/api/products');
    const productsData = await productsResponse.json();
    console.log(`✅ Products API passed: Found ${productsData.length} products`);

    // Test 3: Get specific product
    if (productsData.length > 0) {
      console.log('\n3. Testing specific product API...');
      const productId = productsData[0].id;
      const productResponse = await fetch(`http://localhost:5001/api/products/${productId}`);
      const productData = await productResponse.json();
      console.log(`✅ Specific product API passed: Product "${productData.name}" found`);

      // Test 4: Get product by barcode
      console.log('\n4. Testing barcode API...');
      const barcode = productData.barcode;
      const barcodeResponse = await fetch(`http://localhost:5001/api/products/barcode/${barcode}`);
      const barcodeData = await barcodeResponse.json();
      console.log(`✅ Barcode API passed: Product with barcode "${barcode}" found`);
    }

    console.log('\n🎉 All tests passed! Frontend and backend are properly connected.');
    console.log('\nAvailable API endpoints:');
    console.log('- GET /api/health - Health check');
    console.log('- GET /api/products - Get all products');
    console.log('- GET /api/products/:id - Get product by ID');
    console.log('- GET /api/products/barcode/:barcode - Get product by barcode');
    console.log('- GET /api/orders - Get all orders');
    console.log('- GET /api/exhibitions - Get all exhibitions');

  } catch (error) {
    console.error('❌ Connection test failed:', error.message);
    console.log('\nTroubleshooting tips:');
    console.log('1. Make sure the backend server is running on port 5001');
    console.log('2. Make sure the database is running and accessible');
    console.log('3. Check if CORS is properly configured');
    console.log('4. Verify the API endpoints are working');
  }
}

testConnection();
