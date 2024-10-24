// App.js

import React from 'react';
import './payment.css'; // Assuming you have a CSS file for styling
import PaymentForm from './PaymentForm'; // Import the PaymentForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <main>
        <PaymentForm />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} My Company</p>
      </footer>
    </div>
  );
}

export default App;
