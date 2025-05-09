import uvicorn

if __name__ == "__main__":

    # For Deployment Ready https
    uvicorn.run("app.main:app", host="0.0.0.0", port=8080, ssl_certfile="certs/server.crt", ssl_keyfile="certs/server.key")

    # For local Testing
    # uvicorn.run("app.main:app", host="0.0.0.0", port=8080)
