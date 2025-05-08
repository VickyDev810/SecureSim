import uvicorn

if __name__ == "__main__":
    # uvicorn.run("app.main:app", host="0.0.0.0", port=8080, ssl_certfile="certs/server.crt", ssl_keyfile="certs/server.key")

    uvicorn.run("app.main:app", host="0.0.0.0", port=8080)
