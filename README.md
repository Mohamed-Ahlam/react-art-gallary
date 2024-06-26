# React Art Gallery

Welcome to the React Art Gallery, a dynamic single-page application crafted with React for art enthusiasts and collectors. This application offers a virtual gallery experience, enabling users to manage their art collection efficiently. React Art Gallery allows users to view the currently featured artwork, explore a comprehensive list of artworks, add new pieces to their collection, and select any artwork to be the "featured" piece.

## Features

- **Main Gallery Page:** A central page that displays all the art pieces, with each artwork's name and artist shown underneath to provide quick insights into the collection.
- **Individual Artwork Pages:** Each artwork can be accessed through its own dedicated page, which provides more detailed information about the piece, allowing viewers to engage deeply with each artwork.

## Requirements

- **React:** Set up the project using Create React App to harness a powerful environment for building the user interface.
- **CSS:** Style the application to be visually engaging and intuitive for users.
- **JavaScript (JS):** Utilize React's state management and rendering capabilities to manage interactions such as adding new artworks and updating the featured artwork display.
- **React Router:** Implement `react-router-dom` for routing to manage navigation to individual artwork pages.

## Version Control Using Git

### Working with Branches
To enhance collaboration and streamline development, follow a branching strategy:

1. **Create a Development Branch:**
   After initializing your repository, create a separate branch for development to keep the main branch stable.
   ```zsh
   git checkout -b development
   ```
   This command creates a new branch named `development` and switches to it.

2. **Regular Commits:**
   Make regular commits in your `development` branch to track changes and updates:
   ```zsh
   git add .
   git commit -m "Add new feature or fix"
   ```

3. **Merge to Main:**
   Once you are ready to update the main version of your application, merge the development branch into the main branch:
   ```zsh
   git checkout main
   git merge development
   ```

4. **Handling Merge Conflicts:**
   If there are conflicts during the merge, Git will prompt you to resolve them. Ensure all conflicts are resolved before completing the merge.

5. **Push Changes:**
   Always keep your remote repository updated:
   ```zsh
   git push origin main
   ```

## Getting Started

### Prerequisites
Ensure you have `node` and `npm` installed on your machine, as they are essential for running the React application.

### Setup Instructions
1. **Create a new React project:**
   ```zsh
   npx create-react-app react-art-gallery
   cd react-art-gallery
   ```

2. **Install React Router:**
   This is crucial for adding navigation capabilities to the app.
   ```zsh
   npm install react-router-dom
   ```

3. **Start the Development Server:**
   ```zsh
   npm start
   ```
   This will run the app in development mode. Visit [http://localhost:3000](http://localhost:3000) to see it in your browser.

4. **Initialize Git and Branching:**
   Set up your repository and branching as outlined in the Version Control section.

### Commands to Remember
- `npm start`: Runs the app in development mode.
- `git add .`: Stages your changes for the next commit.
- `git commit -m "your-message"`: Records your snapshot into your history.
- `git push`: Updates the remote repository with your local changes.
