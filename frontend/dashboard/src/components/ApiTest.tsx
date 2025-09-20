import React, { useState, useEffect } from 'react';
import { apiClient } from '../lib/api';

export const ApiTest: React.FC = () => {
  const [status, setStatus] = useState<string>('Testing connection...');
  const [backendData, setBackendData] = useState<any>(null);
  const [error, setError] = useState<string>('');






  // ApiTest component removed