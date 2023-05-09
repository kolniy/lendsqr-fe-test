import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.scss';

import Login from './components/Login/Login';
import Dashboard from './components/pages/Dashboard/Dashboard';
import UserPage from "./components/pages/Users/Index"
import SingleUserDetailsPage from './components/pages/Users/SingleUserDetailsPage';
import Guarantorspage from "./components/pages/Guarantors/Index"
import LoansPage from "./components/pages/Loans/Index"
import DecisionModelsPage from "./components/pages/DecisionModels/Index"
import SavingsPage from "./components/pages/Savings/Index"
import LoanRequestPage from "./components/pages/LoanRequest/Index"
import WhiteListPage from "./components/pages/WhiteList/Index"
import KarmaPage from "./components/pages/Karma/Index"
import OrganizationPage from "./components/pages/Organization/Index"
import LoanProductPage from "./components/pages/LoanProduct/Index"
import SavingsProducts from "./components/pages/SavingProduct/Index"
import FeesAndChargesPage from "./components/pages/FeesAndCharges/Index"
import TransactionsPage from "./components/pages/Transaction/Index"
import ServicesPage from "./components/pages/Services/Index"
import ServiceAccountPage from "./components/pages/ServiceAccount/Index"
import SettlementsPage from "./components/pages/Settlements/Index"
import ReportsPage from "./components/pages/Report/Index"
import PreferencesPage from "./components/pages/Preferences/Index"
import FeesAndPricingPage from "./components/pages/Pricing/Index"
import AuditLogsPage from "./components/pages/Logs/Index"
import NotificationsPage from "./components/pages/Notification/Index"
import DocumentationsPage from "./components/pages/Documentation/Index"


function App() {

  return <>
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/dashboard/home' element={<Dashboard />} />
          <Route path="/dashboard/users" element={<UserPage />} />
          <Route path="/dashboard/users/:userId" element={<SingleUserDetailsPage />} />
          <Route path="/dashboard/guarantors" element={<Guarantorspage />} />
          <Route path="/dashboard/loan" element={<LoansPage />} />
          <Route path="/dashboard/model" element={<DecisionModelsPage />} />
          <Route path="/dashboard/saving" element={<SavingsPage />} />
          <Route path="/dashboard/request" element={<LoanRequestPage />} />
          <Route path="/dashboard/whitelist" element={<WhiteListPage />} />
          <Route path="/dashboard/karma" element={<KarmaPage />} />
          <Route path="/dashboard/organization" element={<OrganizationPage />} />
          <Route path="/dashboard/product" element={<LoanProductPage />} />
          <Route path="/dashboard/saving/product" element={<SavingsProducts />} />
          <Route path="/dashboard/fees" element={<FeesAndChargesPage />} />
          <Route path="/dashboard/transaction" element={<TransactionsPage />} />
          <Route path="/dashboard/service" element={<ServicesPage />} />
          <Route path="/dashboard/account" element={<ServiceAccountPage />} />
          <Route path="/dashboard/settlement" element={<SettlementsPage />} />
          <Route path="/dashboard/reports" element={<ReportsPage />} />
          <Route path="/dashboard/preferences" element={<PreferencesPage />} />
          <Route path="/dashboard/pricing" element={<FeesAndPricingPage />} />
          <Route path="/dashboard/logs" element={<AuditLogsPage />} />
          <Route path="/dashboard/docs" element={<DocumentationsPage />} />
          <Route path="/dashboard/notification" element={<NotificationsPage />} />
        </Routes>
    </Router>
  </>
}

export default App;
