Absolutely — here's a detailed, **project-level `README.md`** that documents everything built so far, including the Gramine-based secure backend and the website frontend. It explains:

* The project's **purpose**
* How it secures **data at rest**, **in transit**, and **in process**
* The technologies used
* How to run and test it locally (with/without SGX)

---

```markdown
# 🔐 CyberShieldSim: Full-Spectrum Data Security Platform

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

