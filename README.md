# Trafegus Vehicle and Driver Management System

A REST API for managing vehicles and drivers using Express.js, TypeScript, and PostgreSQL.

## Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd trafegus
```

2. Install dependencies:
```bash
cd backend
npm install
```

3. Start the application using Docker Compose:
```bash
docker-compose up --build
```

This will start:
- PostgreSQL database on port 5432
- Adminer (database management tool) on port 8080
- Backend API on port 3000

## API Endpoints

### Vehicles

- `POST /vehicles` - Create a new vehicle
- `GET /vehicles` - Get all vehicles
- `GET /vehicles/:id` - Get a specific vehicle
- `PUT /vehicles/:id` - Update a vehicle
- `DELETE /vehicles/:id` - Delete a vehicle

### Drivers

- `POST /drivers` - Create a new driver
- `GET /drivers` - Get all drivers
- `GET /drivers/:id` - Get a specific driver
- `PUT /drivers/:id` - Update a driver
- `DELETE /drivers/:id` - Delete a driver

## Data Models

### Vehicle
- `plate`: string (3-7 chars)
- `renavam`: string (3-30 chars)
- `model`: string (3-20 chars)
- `brand`: string (3-20 chars)
- `year`: number
- `color`: string (3-20 chars)

### Driver
- `name`: string (3-200 chars)
- `rg`: string (max 20 chars)
- `cpf`: string (max 11 chars)
- `phone`: string (max 20 chars, optional)
- `vehicle`: reference to Vehicle

## Development

To run the application in development mode:

```bash
cd backend
npm run dev
```

## Database Management

Access the Adminer interface at `http://localhost:8080` to manage the database:
- System: PostgreSQL
- Server: postgres
- Username: trafegus
- Password: trafegus123
- Database: trafegus_db 

#Frontend

## Technologies

- **React**: Frontend library
- **TypeScript**: Type safety and better developer experience
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Hook Form**: Form handling
- **Zod**: Schema validation
- **TanStack Table**: Table management
- **Lucide React**: Icon library

## Available Scripts

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Run ESLint
yarn lint

# Fix ESLint issues
yarn lint:fix

# Format code with Prettier
yarn format
```

## Running production mode 

```bash
yarn build

yarn preview
```

## Development

The application uses:
- React Hook Form with Zod for form validation
- TanStack Table for data display
- React Context for state management
- Tailwind CSS for styling
- TypeScript for type safety

### Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:3001
```

### Styling

The project uses Tailwind CSS for styling. Configuration can be found in:
- `tailwind.config.js`
- `src/index.css`

### Type Safety

TypeScript interfaces for the main entities can be found in `src/types/index.ts`

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## Related

- [Backend API Documentation](#backend)
- [Project Overview](##)