Pixisphere

This project is built as part of the **Pixisphere internship assignment**, focusing on creating a photographer listing and profile viewing platform using **React**, **Tailwind CSS**, and **JSON Server**.

##  Table of Contents

- > Features
- > Installation
- > Usage
- > Technologies Used
- > Contributing
- > License


##  Features

-   Filter Sidebar  
  Filter photographers by:
  - City
  - Minimum Price
  - Minimum Rating
  - Multiple Styles (Candid, Outdoor, etc.)

-      Search Bar
  - Fully functional search by name, city, or tags  
  - 🔁 Includes **debouncing** for better performance

-     Sorting Dropdown
  Sort photographers by:
  - Price: Low to High
  - Rating: High to Low
  - Recently Added

-     Profile Page
  View full profile of each photographer with:
  - Bio, location, rating, styles
  - Image gallery (portfolio)
  - Customer reviews

-     Fully Responsive UI  -> using Tailwind CSS


##  Installation

Clone the repository:
git clone https://github.com/your-username/project-name.

Navigate to the project directory:
cd pixisphere

Install dependencies:
npm install


## Usage

1. Start JSON Server (mock backend):
json-server final-db.json --port 3001

 Run the frontend app:
 npm run dev
copy this link in browser : http://localhost:5173


## Technologies Used

Language: JavaScript (ES6+)
Framework: React (with Vite)
Styling: Tailwind CSS
Routing: React Router DOM
Backend Mock API: JSON Server
State Management: useState, useEffect, and props
Deployment: Vercel


##  Contributing

Contributions are welcome! Feel free to fork this repo, make changes, and submit a pull request.

