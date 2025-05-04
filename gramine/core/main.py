# core/main.py

import argparse
from encryptor import encrypt_data, decrypt_data
from sealer import seal_data, unseal_data

def main():
    parser = argparse.ArgumentParser(description="Secure Sim Core Processor")
    subparsers = parser.add_subparsers(dest="command")

    # Encrypt
    encrypt_parser = subparsers.add_parser("encrypt")
    encrypt_parser.add_argument("data", help="Plaintext data to encrypt")

    # Decrypt
    decrypt_parser = subparsers.add_parser("decrypt")
    decrypt_parser.add_argument("data", help="Encrypted data to decrypt")

    # Seal
    seal_parser = subparsers.add_parser("seal")
    seal_parser.add_argument("data", help="Data to seal to disk")
    seal_parser.add_argument("--path", required=True, help="Path to sealed file")

    # Unseal
    unseal_parser = subparsers.add_parser("unseal")
    unseal_parser.add_argument("--path", required=True, help="Path to sealed file")

    args = parser.parse_args()

    if args.command == "encrypt":
        print(encrypt_data(args.data))
    elif args.command == "decrypt":
        print(decrypt_data(args.data))
    elif args.command == "seal":
        seal_data(args.data, args.path)
        print("Sealed.")
    elif args.command == "unseal":
        print(unseal_data(args.path))
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
