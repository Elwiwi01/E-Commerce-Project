E-commerce Jewelry Store

Project Description
The E-commerce Jewelry Store is a web application designed to showcase and sell a variety of jewelry items, including earrings, rings, bracelets, and necklaces. Built with React and `react-router-dom`, this app provides an intuitive interface for users to browse products, filter by category, search by name, sort by various criteria, and manage their shopping cart. The application tracks product views and purchases, displays these metrics on product pages, and highlights new arrivals with a badge for items with fewer than 10 views. Cart items persist across sessions using localStorage, ensuring a seamless shopping experience.

Setup Instructions
To run this project locally, follow these steps:

1. Clone the Repository
   - Clone the repository to your local machine using:
     git clone <repository-url>
   - Replace <repository-url> with the URL of your GitHub repository.

2. Install Dependencies
   - Navigate to the project directory:
     cd e-commerce-jewelry-store
   - Install the required Node.js packages:
     npm install

3. Set Up Environment Variables
   - Ensure you have a .env file in the root directory with necessary configurations (e.g., API keys if applicable). A sample .env file can be created based on any provided documentation.

4. Run the Application
   - Start the development server:
     npm start
   - The app should open automatically in your default browser at http://localhost:3000. If not, manually navigate to that URL.

5. Build for Production (Optional)
   - To create a production build:
     npm run build
   - This generates a build folder with optimized static files.

Features Implemented

Required Features
- Product Browsing: Display a grid of products filtered by category (e.g., earrings, rings, bracelets, necklaces).
- Dynamic Routing: Set up dynamic routes using react-router-dom (e.g., /product/:id for product details).
- Product Details Page:
  - Larger product image, product name, price (with DZD (₫) currency symbol), views count, number of times sold, customer reviews section with star ratings and comments, and an "Add to Cart" button.
  - Automatically increments the views count each time the product page is viewed.
- Shopping Cart Implementation:
  - View added items in the cart.
  - Adjust quantities (increase/decrease) for each item.
  - Remove items from the cart.
  - Display the total cart value in DZD (₫).
  - Navbar includes a cart icon showing the number of items in the cart.
  - Uses React state management (useState) to handle cart operations.

Bonus Features
- Search Bar: Allow users to filter products by name.
- "New Arrival" Badge: Show a badge on products with fewer than 10 views.
- Persistent Cart: Save cart items in localStorage to persist across page reloads.

Additional Features
- Sorting Options: Enable sorting of products by name, popularity (based on views), and price.
- View and Purchase Counters: Track and display the number of times a product is viewed and purchased on its detailed page.
- Responsive Design: Utilize a grid layout for product display with a clean, user-friendly interface.

Notes
- Ensure all image assets (e.g., product_1.png to product_40.png, star_icon.png, star_dull_icon.png, dropdown_icon.png) are placed in the src/Components/Assets directory.
- The project requires react-router-dom for navigation and routing.
- For production deployment, configure a web server to serve the build folder.
