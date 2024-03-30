# Food-Delivery-App-API
**API Documentation**

This README provides detailed documentation for the API endpoints, including request/response formats, and error handling.

**Endpoints**

- **POST /calculate-price**
  - Calculates the total price based on the provided parameters.

**Request Format**

```json
{
  "zone": "central",
  "organization_id": 1,
  "total_distance": 12,
  "item_type": "perishable"
}
```

- `zone` (String): Specifies the delivery zone.
- `organization_id` (Number): Identifies the organization.
- `total_distance` (Number): Indicates the total distance of delivery.
- `item_type` (String): Represents the type of item being delivered.

**Response Format**

```json
{
  "total_price": 2050
}
```

- `total_price` (Number): Represents the calculated total price for the delivery.

**Error Handling**

- 404 Not Found:
  - Returned when pricing details are not found for the given parameters.
- 500 Internal Server Error:
  - Returned when an unexpected error occurs during price calculation.

**Setup Guide**

To set up the project locally, follow these instructions:

1. Clone the repository from GitHub.
2. Install Node.js and npm if not already installed.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install dependencies.
5. Set up your local PostgreSQL database with the provided models: Organization, Item, and Pricing.
6. Create a `.env` file in the project root and configure the database connection details (e.g., `DATABASE_URL=your_database_url`).
7. Run `npm start` to start the server.

**Example Request and Response**

Example Request:
```json
{
  "zone": "central",
  "organization_id": 1,
  "total_distance": 12,
  "item_type": "perishable"
}
```

Example Response:
```json
{
  "total_price": 2050
}
```

This concludes the API documentation and setup guide. If you encounter any issues or have further questions, please refer to the provided error handling section or reach out to the project maintainers.
