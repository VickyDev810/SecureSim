# Backend

This is the backend component of the Secure Sim project. It handles the core processing and data management tasks required by the application.

## Directory Structure

```
├── app
│   ├── __init__.py
│   ├── main.py
│   ├── models
│   │   └── schema.py
│   └── services
│       ├── __init__.py
│       ├── crypto_service.py
│       └── storage_service.py
├── certs
│   ├── server.crt
│   └── server.key
├── data
│   └── messages
├── README.md
└── run_secure.py
```

### Components

- **app/main.py**: The main entry point of the application.
- **app/models/schema.py**: Defines the data schema used by the application.
- **app/services/crypto_service.py**: Provides cryptographic functions.
- **app/services/storage_service.py**: Manages data storage operations.

### Certificates

- **Create a certificates directory using**
```bash
    mkdir certs
```

- **certs/**: Contains SSL/TLS certificates required for secure connections.

### Data

- **data/messages**: Directory used for storing messages data.

### Script

- **run_secure.py**: Script to initiate the backend application.

## Setup

1. **Generate SSL Certificates**:
   To generate SSL certificates, run the following command:
   ```
   openssl req -x509 -newkey rsa:4096 -nodes -keyout certs/server.key -out certs/server.crt -days 365
   ```
2. **Installation**:
   Ensure you have the necessary dependencies installed. You may need Python and pip for package installation.

3. **Running the Backend**:
   To start the backend service, use the following command:
   ```
   python run_secure.py
   ```

## Usage

This backend component works as part of a larger system in the Secure Sim project. It handles requests routed to it via the main application interface.

## Contributing

Contributions are welcome! Please ensure all new code relates to the core operations and data management of the project, and includes adequate documentation.

