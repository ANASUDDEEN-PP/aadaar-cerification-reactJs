// AadharVerification.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/aadaar.css';

const AadharVerification = () => {
    const [aadharNumber, setAadharNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [verificationResult, setVerificationResult] = useState(null);
  
    const handleVerification = async () => {
      try {
        setLoading(true);
  
        // Simulating API call, replace with your actual API call
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  
        // Simulating successful verification, replace with your actual logic
        if (response.data) {
          setVerificationResult(true);
          toast.success('Aadhar is valid!', { position: toast.POSITION.TOP_CENTER });
        } else {
          setVerificationResult(false);
          toast.error('Aadhar is invalid!', { position: toast.POSITION.TOP_CENTER });
        }
      } catch (error) {
        console.error(error);
        toast.error('Error during verification!', { position: toast.POSITION.TOP_CENTER });
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="container">
        <h1>Aadhar Verification</h1>
        <form>
          <label>Aadhar Number:</label>
          <input type="text" value={aadharNumber} onChange={(e) => setAadharNumber(e.target.value)} />
          <br />
          <button type="button" onClick={handleVerification}>
            Verify
          </button>
        </form>
  
        {loading && <p>Loading...</p>}
  
        {verificationResult !== null && !loading && (
          <div className={`result ${verificationResult ? 'success' : 'error'}`}>
            <h2>Verification Result:</h2>
            <p>{verificationResult ? 'Aadhar is valid!' : 'Aadhar is invalid.'}</p>
          </div>
        )}
  
        <ToastContainer />
      </div>
    );
  };
  
  export default AadharVerification;