import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
const { BlobServiceClient } = require("@azure/storage-blob");

const blobServiceClient = new BlobServiceClient(get_blob_account(ktodb));


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

export {blobServiceClient}


