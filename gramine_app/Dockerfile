# Use a base Python image (already includes python3 + pip)
FROM python:3.13-slim

# Set working directory
WORKDIR /app

# Install python-venv for creating virtual environments
RUN apt-get update && \
    apt-get install -y python3-venv && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Create virtual environment
RUN python3 -m venv /opt/venv

# Set ENV to use venv's pip/python
ENV PATH="/opt/venv/bin:$PATH"

# Copy app code into container
COPY . .

# Install Python dependencies into venv
RUN pip install --no-cache-dir -r requirements.txt

# (Optional) Show venv Python path for debugging
RUN which python

# Default CMD – this will be overridden in gramine-direct anyway
CMD ["python", "app.py"]
