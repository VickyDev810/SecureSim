# backend/main.py
from fastapi import FastAPI
from api.routes import router as api_router

app = FastAPI(title="CyberShieldSim API")
app.include_router(api_router, prefix="/api")

