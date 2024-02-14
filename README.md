# Blog App

This MERN stack web application offers users a seamless experience for managing blogs and profiles. Through secure authentication, users can sign up and log in to access CRUD functionalities, including creating, reading, updating, and deleting blogs. The application's responsive design, powered by Tailwind CSS, ensures a visually appealing layout across devices. Leveraging MongoDB, Express.js, React, and Node.js, it provides a scalable architecture for efficient management of data and server-side logic. Additionally, users can explore and interact with their own and others' profiles, enhancing engagement and community interaction within the platform.

## Prerequisites

Before running the project locally, make sure you have the following installed:

- Web browser (e.g., Chrome, Firefox)
- Code editor (e.g., Visual Studio Code)
- Node JS

## Getting Started

Follow these steps to run the project locally:

1. **Clone the Repository:**

   Open your terminal or command prompt and run the following command to clone the repository to your local machine:

   ```bash
   git clone https://github.com/Satya1824/CipherSchools_blog_app.git
   ```

2. **Open Project Folder:**

   Navigate to the project folder using the `cd` command:

   ```bash
   cd <project-folder>
   ```

   Replace `<project-folder>` with the name of the project folder.

3. **Open In Code Editor:**

   Open the project folder in your preferred code editor. For example, using Visual Studio Code:

   ```bash
   code .
   ```

4. **Go To The Server Folder:**

   Navigate to the server folder using the `cd` command:

   ```bash
   cd server
   ```

5. **Add .env File:**

   Create a .env file in the server directory and add these variables to the .env:

   ```bash
    MONGO_URL=<YOUR_MONGO_URL>
    PORT=8000
    SECRET=<YOUR_SECRET_KEY>
   ```

   Replace `<YOUR_MONGO_URL>` with yours mongoDB url.
   Replace `<YOUR_SECRET_KEY>` with yours jwt secret key.

6. **Run The Server Using The Following Command:**

   ```bash
    npm start
   ```

7. **Go To The Client Folder:**

   Navigate to the client folder using the `cd` command:

   ```bash
   cd client
   ```

8. **Add .env File:**

   Create a .env file in the client directory and add this variables to the .env:

   ```bash
    SERVER_URL=http://localhost:8000/api/v1
   ```

9. **Run The App Using The Following Command:**

   ```bash
    npm run dev
   ```

10. **Explore the App:**

- Create a account by entering the required details.
- Then login with your credentials.
- Explore the app.

##
