import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerLicense } from '@syncfusion/ej2-base'
import './index.css'
import App from './App.jsx'

import { ContextProvider } from './contexts/ContextProvider';
// Syncfusion CSS Imports
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-react-popups/styles/material.css';
import '@syncfusion/ej2-react-kanban/styles/material.css';
import '@syncfusion/ej2-react-inputs/styles/material.css';
import '@syncfusion/ej2-react-dropdowns/styles/material.css';

// Registering Syncfusion license key
registerLicense("Ngo9BigBOggjHTQxAR8/V1JGaF5cX2NCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdmWH1cdHRTRWRYWUFxVkVWYEs=");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
)
