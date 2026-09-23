import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [marks, setMarks] = useState('');
  const [result, setResult] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [submittedMarks, setSubmittedMarks] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (name === '') {
      setError('Please enter student name');
      setResult('');
      return;
    }

    if (marks === '' || marks < 0 || marks > 100) {
      setError('Please enter marks between 0 and 100');
      setResult('');
      return;
    }

    setError('');
    setSubmittedName(name);
    setSubmittedMarks(marks);

    if (marks >= 40) {
      setResult('Pass');
    } else {
      setResult('Fail');
    }
  }

  return (
    <div className="container">
      <h2>Student Result Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name:</label>
          <br />
          <input
            type="text"
            placeholder="e.g. Sharon Jose"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Marks:</label>
          <br />
          <input
            type="number"
            placeholder="e.g. 75"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {error && <p className="error">{error}</p>}

      {result && (
        <div className="result">
          <h3>Result</h3>
          <p><b>Name:</b> {submittedName}</p>
          <p><b>Marks:</b> {submittedMarks}</p>
          <p>
            <b>Status:</b>{' '}
            <span className={result === 'Pass' ? 'pass' : 'fail'}>
              {result}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
