from app.core.crypto import encrypt_with_public_key, decrypt_with_private_key

def test_rsa_encryption():
    with open("tests/public.pem", "rb") as f:
        public_key = f.read()
    with open("tests/private.pem", "rb") as f:
        private_key = f.read()

    message = "Top secret"
    encrypted = encrypt_with_public_key(message, public_key)
    decrypted = decrypt_with_private_key(encrypted, private_key)

    assert decrypted == message
