Sure! Here's the idea of **Secure Sim** in a concise manner:

---

**Secure Sim** is a deployable, secure data processing API that ensures sensitive data is encrypted and protected throughout its lifecycle:

- **Data at Rest**: Data is securely sealed and encrypted for tamper-proof storage.
- **Data in Transit**: Data is encrypted during transmission (e.g., over HTTPS), ensuring privacy while being sent.
- **Data in Use**: Data is processed in a **trusted enclave** (Gramine), ensuring that even during computation, the backend or anyone with access to the system cannot access the raw data.

It enables **secure file storage**, **privacy-preserving data processing**, and **confidential analytics**, and can be integrated into any application (e.g., healthcare, finance, or secure backend systems) that needs **trusted execution**. 

In essence, **Secure Sim** leverages **Gramine enclaves** to guarantee that sensitive data remains **protected throughout** its lifecycle — while stored, transmitted, and processed.

---




# Secure Sim

**Secure Sim** is a deployable, secure data processing API that ensures sensitive data is encrypted, processed, and stored securely. It provides a robust solution to protect data **in transit**, **at rest**, and **in use** by leveraging **Gramine enclaves** for trusted execution environments. This project exposes FastAPI endpoints for encryption, decryption, and tamper-proof storage, making it easy to integrate into any application requiring secure data handling.

## Features

- **/encrypt**: Encrypt plaintext data and return the ciphertext.
- **/decrypt**: Decrypt ciphertext and return the plaintext.
- **/seal**: Seal data to disk, ensuring tamper-proof storage.
- **/unseal**: Unseal data back to readable form.
- **/status**, **/metrics**, **/health** (optional): API health and metrics for monitoring.
  
### Benefits:
- **Data Protection**: Ensures protection of data during transit, at rest, and during computation.
- **Gramine-Backed Enclave**: Uses **Gramine enclaves** for processing data securely, ensuring sensitive data remains private and tamper-proof.
- **Easy Integration**: Can be integrated into any application for secure file storage, encryption, or privacy-preserving analytics.

## Architecture

1. **FastAPI**: Exposes RESTful API endpoints for encryption, decryption, and data sealing.
2. **Gramine Enclaves**: Secure execution environments that ensure sensitive data is processed without exposing it to unauthorized access.
3. **Encryption & Key Management**: Uses encryption techniques (e.g., **AES**, **RSA**) for protecting data at rest, in transit, and in use.

## Requirements

- Docker (for containerization)
- Gramine (SGX-compatible trusted execution environments)
- Python 3.9+ 
- FastAPI
- Cryptography libraries

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/secure-sim.git
    cd secure-sim
    ```

2. Build the Docker container for Gramine:
    ```bash
    docker build -t secure-sim-gramine .
    ```

3. (Optional) Build the Docker container for the backend FastAPI:
    ```bash
    docker build -t secure-sim-backend .
    ```

4. Start the Docker containers:
    ```bash
    docker-compose up
    ```

    This will launch both the FastAPI backend and the Gramine container.

## Usage

### 1. Encrypt Data
Send a `POST` request to `/encrypt` with your plaintext data.

- **Endpoint**: `/encrypt`
- **Method**: POST
- **Request Body**:
    ```json
    {
        "data": "Hello, Secure Sim!"
    }
    ```
- **Response**:
    ```json
    {
        "ciphertext": "<encrypted_data>"
    }
    ```

### 2. Decrypt Data
Send a `POST` request to `/decrypt` with the ciphertext.

- **Endpoint**: `/decrypt`
- **Method**: POST
- **Request Body**:
    ```json
    {
        "ciphertext": "<encrypted_data>"
    }
    ```
- **Response**:
    ```json
    {
        "plaintext": "Hello, Secure Sim!"
    }
    ```

### 3. Seal Data (Store Securely)
Send a `POST` request to `/seal` to seal the data to disk.

- **Endpoint**: `/seal`
- **Method**: POST
- **Request Body**:
    ```json
    {
        "data": "Sensitive File Content"
    }
    ```
- **Response**:
    ```json
    {
        "status": "Data sealed successfully"
    }
    ```

### 4. Unseal Data
Send a `POST` request to `/unseal` to retrieve the sealed data.

- **Endpoint**: `/unseal`
- **Method**: POST
- **Request Body**:
    ```json
    {
        "sealed_data": "<sealed_data>"
    }
    ```
- **Response**:
    ```json
    {
        "data": "Sensitive File Content"
    }
    ```

### 5. Optional: Health/Status Check
Check the API’s health or view system metrics.

- **Endpoint**: `/status`, `/metrics`, `/health`
- **Method**: GET
- **Response**:
    ```json
    {
        "status": "Healthy"
    }
    ```

## Docker Usage

### 1. Build Docker Images
To build the Docker image for Gramine and FastAPI:
```bash
docker build -t secure-sim-gramine ./gramine
docker build -t secure-sim-backend ./backend
```

### 2. Run with Docker Compose
To run the application with Docker Compose:
```bash
docker-compose up --build
```

This will automatically start the backend and the Gramine enclave in separate containers, and the API will be available at `http://localhost:8000`.

## Integration Example

You can integrate this API into your own backend or chat app. For example:

- **In a chat app**: Use the `/encrypt` endpoint before sending messages over the network. When receiving a message, use the `/decrypt` endpoint to read the message.
- **In file storage**: Store encrypted files using `/seal` and retrieve them securely using `/unseal`.

## Future Enhancements

- **Add more encryption methods**: Integrate additional encryption algorithms for stronger or customizable security.
- **Use cases**: Extend the API to support secure computation for other use cases like analytics or processing logs.

## License

MIT License

---


# RUN COMMAND 
╰─ ❯❯ docker run -it --rm --security-opt seccomp=unconfined secure-sim-enclave

# RUN interactive mode inside docker
docker run -it --rm \
  --security-opt seccomp=unconfined \
  --entrypoint /bin/bash \
  -v "$PWD":/app \
  secure-sim-enclave

# Build Command
docker build -f docker/Dockerfile.enclave -t secure-sim-enclave .




# 🔐 SecureSim: Full-Spectrum Data Security Platform

A proof-of-concept simulation showcasing **end-to-end data security** across:

- ✅ **Data at Rest** (encrypted + optionally SGX-sealed)
- ✅ **Data in Transit** (HTTPS/TLS)
- ✅ **Data in Process** (confidential computing via Gramine enclaves)

This system enables sending **messages, files, or structured data** over a secure API, processing it inside a **trusted execution environment**, and optionally storing it encrypted or sealed.

---

## 🧱 Components

### 1. 🖥️ Backend (FastAPI + Gramine)
- A REST API capable of:
  - Receiving encrypted messages or files over HTTPS.
  - Decrypting and processing data **inside a Gramine SGX enclave**.
  - Optionally re-encrypting and returning data.
- All file operations (write/read) inside Gramine use protected mounts or memory.

### 2. 🌐 Frontend (Next.js)
- A clean UI to:
  - Submit messages or files
  - View received or decrypted content
  - Demonstrate HTTPS file/message transmission

### 3. 🔐 Gramine + SGX (Simulated via `gramine-direct`)
- Enclave-based execution (simulated or real Intel SGX)
- Remote Attestation optional (for real SGX hardware)
- File sealing & in-enclave encryption logic built in
- Fernet key sealing using SGX available as option

---

## 📂 Directory Structure

```

secure-app/
│
├── backend/
│   ├── app/
│   │   ├── main.py          # FastAPI app
│   │   ├── api.py           # REST endpoints
│   │   ├── models.py        # Pydantic schemas
│   │   ├── encryptor.py     # Encryption logic (Fernet or RSA)
│   │   ├── sealer.py        # SGX sealing/unsealing (simulated)
│   │   └── gramine-manifest.template
│   ├── certs/               # TLS certs
│   └── run\_secure.py        # HTTPS startup (uvicorn + certs)
│
├── frontend/
│   ├── pages/               # index.tsx, receive.tsx
│   ├── components/          # FileUploader, MessageBox
│   └── utils/               # API handlers
│
└── README.md                # You're here

````

---

## 🚀 Features

| Feature                    | Status | Notes |
|---------------------------|--------|-------|
| HTTPS + TLS               | ✅     | Cert-based secure transport |
| Encryption at Rest        | ✅     | Fernet or RSA |
| Sealing with SGX          | ✅     | Simulated with `gramine-direct`, optional real sealing |
| In-enclave Processing     | ✅     | Message processing inside Gramine enclave |
| Web Frontend              | ✅     | Secure file/message upload UI |
| Remote Attestation        | ⚠️     | Not yet implemented (requires real SGX) |

---

## 🛡️ How Each Security Principle is Met

### ✅ Data at Rest
- Encrypted using a Fernet key
- Optionally **sealed** using SGX to prevent host tampering
- No unencrypted data is ever stored

### ✅ Data in Transit
- TLS/HTTPS ensures all communication is encrypted between client and backend
- Optionally enforce HSTS and disable plaintext fallback

### ✅ Data in Process
- All critical operations (decrypt, seal, process) are performed inside a **Gramine enclave**
- Host can't peek into memory or tamper with logic

---

## 🧪 Usage

### 🔧 Prerequisites

- Python 3.12
- Node.js + npm (for frontend)
- Gramine (`gramine-direct` for dev without SGX)
- TLS certs (self-signed or valid)

### 🐍 Backend

```bash
cd backend
# Install deps
pip install -r requirements.txt

# Run with HTTPS
python run_secure.py
````

Or run inside Gramine:

```bash
gramine-manifest -Dlog_level=error -Dentrypoint=/usr/bin/python3.12 config/python.manifest.template >python.manifest
gramine-direct python app/main.py
```

### 🧑‍💻 Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🧠 Future Work

* Full remote attestation flow with DCAP
* Role-based access with JWT & OAuth
* File metadata protection
* UI upload/download progress and encryption indicators

---

## 📜 License

MIT — built for educational and demonstrative purposes.

---

## 🤝 Acknowledgments

* Intel SGX
* Gramine Project
* FastAPI + Next.js communities

```

## UI Screenshots

### Dashboard
![Dashboard](./website_sim/frontend/screenshots/dashboard.jpg)

### Send Message
![Message](./website_sim/frontend/screenshots/message.jpg)
