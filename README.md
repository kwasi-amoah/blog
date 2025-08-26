📝 Blog Platform Backend

A Node.js + Express + MongoDB backend for a blogging platform.
Supports user roles (Admin & Regular User), JWT authentication, posts & comments CRUD, password reset, and email notifications.

🚀 Features

User Authentication (JWT)

User Roles: Admin & Regular User

Blog Posts: Create, Read, Update, Delete (CRUD)

Comments: Add, Edit, Delete on posts

Password Reset via Email (Nodemailer + Gmail/SMTP)

Role-based Access Control (admins can manage all, users can only manage their own content)

Security: Helmet, CORS, Rate Limiting

🛠️ Tech Stack

Node.js + Express

MongoDB + Mongoose

JWT Authentication

Nodemailer for emails

📚 API Endpoints
Auth

POST /api/auth/register → Register a new user

POST /api/auth/login → Login & get JWT

POST /api/auth/request-password-reset → Request password reset email

POST /api/auth/reset-password/:token → Reset password

Posts

POST /api/posts → Create a new post (auth required)

GET /api/posts → Get all posts

GET /api/posts/:id → Get a single post

PUT /api/posts/:id → Update post (owner or admin)

DELETE /api/posts/:id → Delete post (owner or admin)

Comments

POST /api/posts/:id/comments → Add a comment (auth required)

PUT /api/comments/:id → Update comment (owner or admin)

DELETE /api/comments/:id → Delete comment (owner or admin)

🔐 Roles & Permissions

Admin: Can manage all posts & comments

User: Can manage their own posts & comments only

📧 Mailing

Password reset emails are sent using Nodemailer + Gmail SMTP.

Swap with SendGrid or another provider if needed.

🧪 Testing (Optional)

You can use Postman or Insomnia to test endpoints.
(Jest + supertest can also be added for unit tests).
