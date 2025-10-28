import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './core/components/Layout';
import Dashboard from '../src/features/pages/Dashboard';
import Borrower from '../src/features/pages/Borrower';
import Loans from '../src/features/pages/Loans';
import RealEstate from '../src/features/pages/RealEstateOwned';
import Summary from '../src/features/pages/Summary';


function App() {
  return (
    <Router>
      <Layout>
           <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/borrower/:id" element={<Borrower />} />
          <Route path="/real-estate-owned" element={<RealEstate />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
    
      </Layout>
    </Router>
  );
}

export default App;



