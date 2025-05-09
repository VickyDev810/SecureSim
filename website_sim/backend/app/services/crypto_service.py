from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes
import base64

def encrypt_with_rsa(pubkey_pem: str, plaintext: str) -> str:
    pubkey = serialization.load_pem_public_key(pubkey_pem.encode())
    ciphertext = pubkey.encrypt(
        plaintext.encode(),
        padding.OAEP(mgf=padding.MGF1(algorithm=hashes.SHA256()), algorithm=hashes.SHA256(), label=None)
    )
    return base64.b64encode(ciphertext).decode()