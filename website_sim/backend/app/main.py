from fastapi import FastAPI
from app.routes import message
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Secure Messaging API")
app.include_router(message.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://10.12.62.124:3001"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
