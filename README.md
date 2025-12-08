# MUNA (Made-Up Name API)

MUNA is a lightweight, high-performance API for generating fantasy names. It is built using [Hono](https://hono.dev/) and powers name generation using the [@ironarachne/made-up-names](https://www.npmjs.com/package/@ironarachne/made-up-names) library.

## Features

- **Multiple Races**: Generate names for classic fantasy races like Elves, Dwarves, Orcs, and more.
- **Name Types**: Support for various categories including male, female, family names, and place names (towns, regions).
- **Fast & Simple**: Returns results in JSON format.
- **CORS Enabled**: Ready for client-side usage.

## API Usage

### Root Endpoint
`GET /`

Returns a welcome message listing all currently supported races and basic usage instructions.

### Generate Names
`GET /race/:race/:nameType/:count`

Generates a list of names based on the specified parameters.

**Parameters:**
- `:race`: The fantasy race (e.g., `elf`, `dwarf`, `human`, `orc`).
- `:nameType`: The type of name to generate. Common types include:
  - `male`
  - `female`
  - `family`
  - `given` (mix of male/female)
  - `town`
  - `region`
- `:count`: The number of names to generate (integer).

**Example:**
```bash
curl http://localhost:3000/race/elf/female/5
```

**Response:**
```json
{
  "count": 5,
  "names": [
    "Name1",
    "Name2",
    "Name3",
    "Name4",
    "Name5"
  ]
}
```

## Local Development

### Prerequisites

- [Bun](https://bun.sh/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ironarachne/muna.git
   cd muna
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

### Running the Server

To start the development server using Bun:

```bash
bun dev
```

The server will start (typically on port 3000).

### Running Tests

This project uses [Vitest](https://vitest.dev/) for testing.

To run both unit tests and integration tests, just run:

```bash
bun test
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

Please ensure you add appropriate tests for any new functionality.

## License

This project is licensed under the MIT License.
