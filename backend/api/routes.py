from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from core.encryption import encrypt_data, decrypt_data
import os

# Initialize FastAPI app
app = FastAPI()

class DataRequest(BaseModel):
    data: str

# POST endpoint to encrypt plaintext data
@app.post("/encrypt")
def encrypt(request: DataRequest):
    try:
        encrypted_data = encrypt_data(request.data)
        return {"encrypted_data": encrypted_data}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# POST endpoint to decrypt ciphertext
@app.post("/decrypt")
def decrypt(request: DataRequest):
    try:
        decrypted_data = decrypt_data(request.data)
        return {"decrypted_data": decrypted_data}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# Root endpoint for health check
@app.get("/")
def read_root():
    return {"message": "Secure Data Processing API is running!"}

