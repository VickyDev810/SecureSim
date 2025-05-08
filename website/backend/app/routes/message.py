from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from app.services import crypto_service, storage_service
from app.models.schema import MessageIn, MessageOut
import uuid

router = APIRouter()

PUBLIC_KEYS = {}  # Simulated storage, can be replaced with persistent store

@router.post("/pubkey")
def upload_public_key(user_id: str = Form(...), pubkey: str = Form(...)):
    PUBLIC_KEYS[user_id] = pubkey
    return {"status": "Public key uploaded."}

@router.post("/send-text", response_model=MessageOut)
def send_text(msg: MessageIn):
    pubkey = PUBLIC_KEYS.get(msg.recipient_id)
    if not pubkey:
        raise HTTPException(status_code=404, detail="Public key not found.")
    encrypted = crypto_service.encrypt_with_rsa(pubkey, msg.message)
    msg_id = storage_service.save_encrypted_message(msg.sender_id, msg.recipient_id, encrypted)
    return MessageOut(id=msg_id, encrypted_message=encrypted)

@router.post("/send-file")
def send_file(user_id: str = Form(...), recipient_id: str = Form(...), file: UploadFile = File(...)):
    contents = file.file.read()
    pubkey = PUBLIC_KEYS.get(recipient_id)
    if not pubkey:
        raise HTTPException(status_code=404, detail="Public key not found.")
    encrypted = crypto_service.encrypt_with_rsa(pubkey, contents.decode())
    file_id = storage_service.save_file(user_id, recipient_id, file.filename, encrypted)
    return {"file_id": file_id}

@router.get("/messages/{msg_id}")
def get_message(msg_id: str):
    return storage_service.load_encrypted_message(msg_id)

@router.get("/files/{file_id}")
def get_file(file_id: str):
    return storage_service.load_file(file_id)
