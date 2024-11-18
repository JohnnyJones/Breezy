# Job Board

This is a sample job-tracking application built with React, TypeScript, and Vite. The application is designed to help HVAC companies manage their jobs using a kanban board interface.

## Features

- **Job Management**: Create, edit, and view jobs with customer names and descriptions.
- **Job Status**: Jobs can have statuses such as "Not Yet Started", "In Progress", and "Completed".
- **Kanban Board**: Visualize jobs in a kanban board format with drag-and-drop functionality to change job statuses.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Getting Started

### Prerequisites

- Bun (v0.5.0 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:

```bun install```

3. Start the development server:

```bun dev```

4. Open your browser and navigate to `http://localhost:5173`.

### Project Structure
- `frontend/`: Contains the source code for the frontend application.
  - `app/`: Main application components.
    - `AddJob.tsx`: Component for button for adding new jobs.
    - `Board.tsx`: Component for the kanban board.
    - `Column.tsx`: Component for individual columns in the kanban board.
    - `Editor.tsx`: Component for adding jobs and editing job details.
    - `Job.tsx`: Component for individual job cards.
    - `ProgressIcon.tsx`: Component for displaying job status icons.
    - `types.ts`: Type definitions for jobs and column data.
  - `components/`: Shared components used across the application.
    - `Example.tsx`: Example component.
    - `Nav.tsx`: Navigation component.
  - `static/`: Static assets and styles.
    - `index.css`: Tailwind stylesheet.
  - `main.tsx`: Entry point for home page.
  - `index.html`: Entry point for home page.

### Scripts
- `bun run dev`: Start the development server.
- `bun run build`: Build the application for production.
- `bun run preview`: Preview the production build.

### Dependencies
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Entry point to the DOM and server renderers for React.
- `react-dnd`: Drag-and-drop utilities for React.
- `react-dnd-html5-backend`: HTML5 backend for React DnD.
- `vite`: Next-generation frontend tooling.

### Dev Dependencies
- `typescript`: TypeScript language support.
- `tailwindcss`: Utility-first CSS framework.
- `autoprefixer`: PostCSS plugin to parse CSS and add vendor prefixes.
- `@vitejs/plugin-react`: Official Vite plugin for React.

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.