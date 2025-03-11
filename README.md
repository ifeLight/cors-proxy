# cors-proxy
# CORS Proxy

This repository contains a simple Node.js proxy server that adds Cross-Origin Resource Sharing (CORS) headers to requests, allowing you to bypass CORS restrictions when making requests from your browser or other clients.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node.js and npm installed.

### Installing

1.  Clone the repository:

    ```bash
    git clone https://github.com/ifeLight/cors-proxy.git
    cd cors-proxy
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  (Optional) Create a `.env` file to specify the port:

    ```bash
    PORT=8010
    ```

    If you don't create this file, the server will default to port 8010.

### Running the Server

To start the proxy server, run:

```bash
npm start
```