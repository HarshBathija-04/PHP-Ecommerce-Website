# HB Store — Modern PHP E-Commerce Website

A modern, full-featured E-Commerce web application built with PHP, MySQL, JavaScript, and custom modern CSS with a dark luxurious aesthetic.

🌐 **Live Demo:** [https://hbstore.infinityfreeapp.com/](https://hbstore.infinityfreeapp.com/)

---

## ✨ Features

- **Modern Dark Luxury Design:** Sleek dark-mode aesthetic with warm gold accents, glassmorphism cards, and smooth micro-animations.
- **Product Catalog & Categorization:** Multi-level categories (Top, Mid, End), search, filtering, and customer reviews.
- **Shopping Cart & Checkout:** Dynamic quantity updating, stock availability checks, and order summary.
- **Customer Portal:** User registration, login with MD5 encryption, order history tracking, and profile/shipping management.
- **Admin & Vendor Panels:** Full inventory management, order processing, banner controls, and site settings.
- **Responsive Layout:** Optimized for desktop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

- **Backend:** PHP 7.x / 8.x, PDO (PHP Data Objects)
- **Database:** MySQL / MariaDB
- **Frontend:** HTML5, Modern Vanilla CSS3, JavaScript (ES6+), Bootstrap
- **Typography:** Google Fonts (*Inter*, *Playfair Display*)
- **Hosting:** InfinityFree (Live Deployment)

---

## 🚀 Local Installation & Setup

1. **Clone or Download the Repository:**
   ```bash
   git clone https://github.com/yourusername/PHP-Ecommerce-Website.git
   ```

2. **Setup Local Server:**
   - Install and open [XAMPP](https://www.apachefriends.org/).
   - Start **Apache** and **MySQL** services.
   - Move or clone this project folder into `xampp/htdocs/`.

3. **Import Database:**
   - Open phpMyAdmin at `http://localhost/phpmyadmin/`.
   - Create a new database named `if0_42651040_HBStore` (or `achmegrade_project`).
   - Click **Import** and choose the SQL file:
     `DATABASE FILE/achmegrade_project.sql`
   - Click **Go** to import all tables and sample data.

4. **Configure Database Connection:**
   - Update database credentials in `admin/inc/config.php` and `vender/inc/config.php` if running locally:
     ```php
     $dbhost = 'localhost';
     $dbname = 'achmegrade_project';
     $dbuser = 'root';
     $dbpass = '';
     define("BASE_URL", "http://localhost/PHP-Ecommerce-Website/");
     ```

5. **Access the Website:**
   - Open your browser and visit: `http://localhost/PHP-Ecommerce-Website/`

---

## 🔑 Default Login Credentials

| Role | Portal URL | Email | Password |
| :--- | :--- | :--- | :--- |
| **Admin Panel** | `/admin` | `admin@mail.com` | `Password@123` |
| **Vendor Panel** | `/vender` | `admin@mail.com` | `Password@123` |

---

## 🌐 Live Website
Visit the live store anytime at: **[https://hbstore.infinityfreeapp.com/](https://hbstore.infinityfreeapp.com/)**
