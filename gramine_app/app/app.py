# gramine_app/app.py
from core.encryption import decrypt_data, encrypt_data

def process_data(data: str) -> str:
    # Simulate secure computation
    return data[::-1]  # Reverse the text

if __name__ == "__main__":

    # with open("../data/input.txt", "w") as f:
    #     f.write(encrypt_data("Hello, Gramine!"))
    # with open("../data/input.txt", "r") as f:
    #     ciphertext = f.read().strip()
    ciphertext = encrypt_data("Hello, Gramine")
    plaintext = decrypt_data(ciphertext)
    result = process_data(plaintext)
    resultCipher = encrypt_data(result)
    print(resultCipher)
    print(decrypt_data(resultCipher))
    # with open("../data/output.txt", "w") as f:
    #     f.write(result)
