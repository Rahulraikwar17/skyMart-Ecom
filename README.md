# ⚡ SkyMart

A modern, full-featured e-commerce front-end built with **React**, **Tailwind CSS**, and the **Fake Store API** — featuring live cart tracking, product filtering, related-product recommendations, and a fully custom, animated UI.

**🔗 Live Demo:** [sky-mart-ecom-topaz.vercel.app](https://sky-mart-ecom-topaz.vercel.app/main)

---

## ✨ Features

### 🛍️ Shopping Experience
- Browse products fetched live from [Fake Store API](https://fakestoreapi.com)
- Search, filter by category, and sort (price, rating) on the Shop page
- Product detail pages with **"You might also like"** — related products pulled dynamically by category
- Add to cart, adjust quantity, and remove items — all persisted per user in `localStorage`
- Animated slide-out cart sidebar with live subtotal and a demo checkout flow (toast confirmation)

### 🏠 Home Page
- Personalized welcome hero with time-based greeting (Good Morning / Afternoon / Evening / Night)
- Autoplaying looped background video with a glassmorphism offer panel
- Live **Stats Bar** — Cart Items, Cart Value, Top Rated Products, and Categories, all computed in real time from cart + product data
- Category quick-links, New Arrivals, Top Rated, and Trust Badges sections

### 👤 Accounts
- Register / Login flow with form validation (`react-hook-form`)
- Auth state and cart data persisted in `localStorage`, scoped per logged-in user
- Branded split-screen auth pages

### 🎨 UI/UX
- Fully responsive, mobile-first layout
- Centered, animated navbar with active-route highlighting
- Custom hover animations, glow effects, and glassmorphism throughout
- Built entirely with reusable, composable components

---

## 🧰 Tech Stack

| Category | Tech |
|---|---|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Routing | React Router |
| Forms | React Hook Form |
| Icons | Lucide React |
| Notifications | React Toastify |
| HTTP Client | Axios |
| Data Source | [Fake Store API](https://fakestoreapi.com) |
| Deployment | Vercel |


## 🔑 Data & State Management

SkyMart uses three core React Contexts:

- **`ProductContext`** — fetches and caches the full product catalog once on load, shared across every component (no duplicate API calls)
- **`CartContext`** — manages cart items (add, remove, increase/decrease quantity), persisted to `localStorage` per logged-in user
- **`AuthContext`** — handles registration, login, and session persistence

No backend or API key is required — all product data comes from the public [Fake Store API](https://fakestoreapi.com), and auth/cart data is stored client-side.



## 👨‍💻 Author

**Rahul Raikwar**
Founder & Developer, SkyMart

