AI Blogging Platform 

A lightweight, AI-powered blogging platform built with Next.js , Tailwind CSS , and React Toastify . Users can generate blog posts, view them in a clean UI, and perform CRUD operations (Create, Read, Delete). 
Table of Contents 

    Features 
    Tech Stack 
    Setup Instructions 
    API Endpoints 
    Folder Structure 
    Contributing 
     

Features 

    AI-Powered Blog Generation : Generate blog posts by entering a topic.
    Responsive Design : Fully optimized for all devices (desktop, tablet, mobile).
    CRUD Operations :
        Create new blog posts.
        View blog posts in a card-based layout.
        Delete blog posts from the detailed view page.
         
    Search & Filtering : Real-time search functionality to filter blog posts.
    Fancy Notifications : Success and error notifications using react-toastify.
    Skeleton Loaders : Smooth loading states for better user experience.
    Professional Pages :
        About Page: Provides information about the platform.
        Contact Page: Includes a contact form and social media links.
         
     

Tech Stack 

    Frontend : Next.js, React, Tailwind CSS
    Styling : Tailwind CSS for responsive and modern design
    Notifications : React Toastify for fancy alerts
    Backend : Mocked APIs using Next.js API routes
    State Management : React Hooks (useState, useEffect)
    Routing : Next.js App Router for dynamic routing
     

Setup Instructions 
Prerequisites 

    Node.js (v16 or higher)
    npm or yarn
     

Steps to Run Locally 

    Clone the Repository  
    bash
     

 
1
2
git clone https://github.com/your-username/ai-blogging-platform.git
cd ai-blogging-platform
 
 

Install Dependencies  
bash
 
 
1
npm install
 
 

Run the Development Server  
bash
 
 
1
npm run dev
 
 

Open the Application 
Open your browser and navigate to: 
 
 
1
http://localhost:3000
 
 

Optional: Build for Production 
To build the app for production: 
bash
 

     
    1
    2
    npm run build
    npm start
     
     
     

API Endpoints 

All API endpoints are mocked and stored in-memory. The following endpoints are available: 
1. Generate a New Blog Post 

    Endpoint : /api/generate-post
    Method : POST
    Request Body :
    json
     

 
1
2
3
4
⌄
{
  "title": "My First Post",
  "content": "This is the content of my first post."
}
 
 
Response :
json
 

     
    1
    2
    3
    4
    5
    6
    ⌄
    {
      "id": 12345,
      "title": "My First Post",
      "content": "This is the content of my first post.",
      "createdAt": "2023-10-01T12:34:56Z"
    }
     
     
     

2. Fetch All Blog Posts 

    Endpoint : /api/get-posts
    Method : GET
    Response :
    json
     

     
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14
    ⌄
    ⌄
    ⌄
    [
      {
        "id": 12345,
        "title": "My First Post",
        "content": "This is the content of my first post.",
        "createdAt": "2023-10-01T12:34:56Z"
      },
      {
        "id": 67890,
        "title": "Another Post",
        "content": "This is another blog post.",
        "createdAt": "2023-10-02T14:20:10Z"
      }
    ]
     
     
     

3. Delete a Blog Post 

    Endpoint : /api/delete-post
    Method : DELETE
    Query Parameter :
     

 
1
?id=12345
 
 
Response :
json
 

     
    1
    2
    3
    ⌄
    {
      "message": "Post deleted successfully"
    }
     
     
     

Folder Structure 
 
 
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
ai-blogging-platform/
├── app/
│   ├── api/                # API routes (mocked backend)
│   │   ├── generate-post.ts
│   │   ├── get-posts.ts
│   │   └── delete-post.ts
│   ├── blog/
│   │   └── [id]/           # Dynamic route for individual blog posts
│   │       └── page.tsx
│   ├── about/
│   │   └── page.tsx        # About Page
│   ├── contact/
│   │   └── page.tsx        # Contact Page
│   ├── create/
│   │   └── page.tsx        # Create Blog Page
│   └── layout.tsx          # Shared layout for all pages
├── components/
│   ├── BlogCard.tsx        # Blog card component
│   ├── BlogForm.tsx        # Form to create new blog posts
│   ├── Layout.tsx          # Shared layout component
│   └── SearchBar.tsx       # Search bar component
├── public/                 # Static assets (if any)
├── styles/
│   └── globals.css         # Global styles
├── package.json            # Project dependencies
└── README.md               # This file
 
 
Contributing 

We welcome contributions! If you'd like to contribute to this project, follow these steps: 

    Fork the repository.
    Create a new branch for your feature or bug fix:
    bash
     

 
1
git checkout -b feature-name
 
 
Commit your changes:
bash
 
 
1
git commit -m "Add feature or fix"
 
 
Push your branch:
bash
 

     
    1
    git push origin feature-name
     
     
    Open a pull request on GitHub.
     

License 

This project is licensed under the MIT License. See the LICENSE  file for details. 