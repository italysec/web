import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Easter egg for invite contact
function inv1t3() {
    var c0nt4ct = [[0x67], [0x40], [0x69, 0x74, 0x61, 0x6c, 0x79, 0x73, 0x65, 0x63], [0x2e], [0x63, 0x6f, 0x6d]];
    var __xor__ = 0x00;
    var r3sult = '';
    for (var i = 0; i < c0nt4ct.length; i++) {
        var s = '';
        for (var j = 0; j < c0nt4ct[i].length; j++) {
            s += String.fromCharCode(c0nt4ct[i][j] ^ __xor__);
        }
        r3sult += s;
    }
    console.log('🏴‍☠️ ', r3sult);
}

// Make it available globally
declare global {
    interface Window {
        inv1t3: () => void;
    }
}

window.inv1t3 = inv1t3;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
) 