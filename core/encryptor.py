# core/encryptor.py

from cryptography.fernet import Fernet
import base64
import os

# For demo; in production, manage this securely (e.g., sealed key)
KEY_PATH = "/tmp/encryption.key"

def load_key():
    if not os.path.exists(KEY_PATH):
        key = Fernet.generate_key()
        with open(KEY_PATH, "wb") as f:
            f.write(key)
    else:
        with open(KEY_PATH, "rb") as f:
            key = f.read()
    return Fernet(key)

def encrypt_data(plaintext: str) -> str:
    f = load_key()
    return f.encrypt(plaintext.encode()).decode()

def decrypt_data(ciphertext: str) -> str:
    f = load_key()
    return f.decrypt(ciphertext.encode()).decode()
