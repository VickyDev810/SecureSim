# backend/api/routes.py
from fastapi import APIRouter
from core.encryption import encrypt_data, decrypt_data

router = APIRouter()

@router.post("/send_data")
def send_data(payload: dict):
    plaintext = payload.get("data", "Hello, Cyber World!")
    ciphertext = encrypt_data(plaintext)
    return {"ciphertext": ciphertext}

@router.post("/use_data")
def use_data(payload: dict):
    ciphertext = payload.get("ciphertext")
    plaintext = decrypt_data(ciphertext)
    return {"plaintext": plaintext}

