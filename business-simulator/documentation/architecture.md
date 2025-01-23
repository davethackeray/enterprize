# Architecture Overview

## Frontend
- Built with React.js and Tailwind CSS.
- Components are modular and reusable.

## Backend
- Built with Node.js and Express.
- Uses SQLite for local database storage.

## AI Integration
- Uses Gemini API for scenario generation and feedback.
- Prompts are stored in `ai/prompts/`.

## Testing
- Unit tests are written with Jest.
- Integration tests cover API endpoints.

## Directory Structure
- `/src`: Contains frontend code.
  - `/components`: React components.
  - `/styles`: CSS files.
- `/server`: Contains backend code.
  - `/routes`: Express routes.
  - `/config.js`: Configuration settings.
- `/ai`: AI integration code.
  - `/api`: API calls to Gemini.
  - `/prompts`: AI prompts.
- `/documentation`: Project documentation.
- `/tests`: Unit and integration tests.