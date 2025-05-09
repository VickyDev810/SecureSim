from pydantic import BaseModel

class MessageIn(BaseModel):
    sender_id: str
    recipient_id: str
    message: str

class MessageOut(BaseModel):
    id: str
    encrypted_message: str
