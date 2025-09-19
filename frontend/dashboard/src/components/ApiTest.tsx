import React, { useState, useEffect } from 'react';
import { apiClient } from '../lib/api';

export const ApiTest: React.FC = () => {
  const [status, setStatus] = useState<string>('Testing connection...');
  const [backendData, setBackendData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    try {
      setStatus('Connecting to backend...');
      const response = await apiClient.healthCheck();
      setBackendData(response);
      setStatus('✅ Connected successfully!');
      setError('');
    } catch (err) {
      setStatus('❌ Connection failed');
      setError(err instanceof Error ? err.message : 'Unknown error');
      console.error('Backend connection error:', err);
    }
  };

  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Backend Connection Test</h3>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-medium">Status:</span>
          <span className={status.includes('✅') ? 'text-green-600' : status.includes('❌') ? 'text-red-600' : 'text-blue-600'}>
            {status}
          </span>
        </div>

        {backendData && (
          <div className="bg-gray-50 p-3 rounded">
            <div className="font-medium">Backend Response:</div>
            <pre className="text-sm mt-1">{JSON.stringify(backendData, null, 2)}</pre>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 p-3 rounded">
            <div className="font-medium text-red-800">Error:</div>
            <div className="text-red-600 text-sm mt-1">{error}</div>
          </div>
        )}

        <button
          onClick={testConnection}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Test Again
        </button>
      </div>
    </div>
  );
};