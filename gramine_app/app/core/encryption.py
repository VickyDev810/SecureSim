# gramine_app/core/encryption.py
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os, base64

key = AESGCM.generate_key(bit_length=128)  # Must match backend later
aesgcm = AESGCM(key)

def encrypt_data(plaintext: str) -> str:
    nonce = os.urandom(12)
    ciphertext = aesgcm.encrypt(nonce, plaintext.encode(), None)
    return base64.b64encode(nonce + ciphertext).decode()

def decrypt_data(ciphertext_b64: str) -> str:
    data = base64.b64decode(ciphertext_b64)
    nonce = data[:12]
    ciphertext = data[12:]
    return aesgcm.decrypt(nonce, ciphertext, None).decode()
