# core/sealer.py

import base64
from encryptor import encrypt_data, decrypt_data

def seal_data(data: str, path: str):
    sealed = encrypt_data(data)
    with open(path, "w") as f:
        f.write(sealed)

def unseal_data(path: str) -> str:
    with open(path, "r") as f:
        sealed = f.read()
    return decrypt_data(sealed)
