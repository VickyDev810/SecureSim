import os
import uuid

BASE_DIR = "data/messages"
os.makedirs(BASE_DIR, exist_ok=True)

def save_encrypted_message(sender: str, recipient: str, data: str) -> str:
    msg_id = str(uuid.uuid4())
    path = os.path.join(BASE_DIR, f"{msg_id}.txt")
    with open(path, "w") as f:
        f.write(data)
    return msg_id

def load_encrypted_message(msg_id: str):
    path = os.path.join(BASE_DIR, f"{msg_id}.txt")
    if not os.path.exists(path):
        return {"error": "Not found"}
    with open(path, "r") as f:
        return {"message": f.read()}

def save_file(sender: str, recipient: str, filename: str, data: str) -> str:
    file_id = str(uuid.uuid4())
    path = os.path.join(BASE_DIR, f"{file_id}_{filename}")
    with open(path, "w") as f:
        f.write(data)
    return file_id

def load_file(file_id: str):
    for fname in os.listdir(BASE_DIR):
        if fname.startswith(file_id):
            with open(os.path.join(BASE_DIR, fname), "r") as f:
                return {"filename": fname, "content": f.read()}
    return {"error": "File not found"}
