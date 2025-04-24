import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { AccountDetails } from './Components/AccountDetails';
import { History } from './Components/History';
import { AddTransaction } from './Components/AddTransaction';

import { TransactionsProvider } from './Hooks/TransContext';
import React from 'react';

function App() {
  return (
    <TransactionsProvider>
      <Header />
      <div className='container'>
        <Balance />
        <AccountDetails />
        <History />
        <AddTransaction />
      </div>
      {/* Add the "Learn React" link */}
      <footer>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </footer>
    </TransactionsProvider>
  );
}

export default App;
