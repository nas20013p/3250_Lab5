import React, { useState, useEffect } from 'react';

function App() {

  const [people, setPeople] = useState([]);
  const [formData, setFormData] = useState({ id: '', name: '', address: '' });

  useEffect(() => {
    fetch('https://humble-space-fortnight-v6v4q59v6x453wxrq-3001.app.github.dev/select')
      .then((response) => response.json())
      .then((data) => {
        setPeople(data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error); 
      });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault(); 
    const { id, name, address } = formData; 

    fetch(`https://humble-space-fortnight-v6v4q59v6x453wxrq-3001.app.github.dev/insert?id=${id}&name=${name}&address=${address}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add person'); 
        }
        return response.json();
      })
      .then(() => {
        setPeople([...people, { id, name, address }]);
        setFormData({ id: '', name: '', address: '' });
      })
      .catch((error) => {
        console.error('Error inserting data:', error); 
      });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Name and Address</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          style={styles.input}
          required
        />
        <button style={styles.button} type="submit">Add Person</button>
      </form>

      {people.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Address</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={index}>
                <td style={styles.td}>{person.id}</td>
                <td style={styles.td}>{person.name}</td>
                <td style={styles.td}>{person.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center' }}>No data available</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    margin: '0 5px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    cursor: 'pointer',
  },
  table: {
    margin: '0 auto',
    borderCollapse: 'collapse',
    width: '80%',
  },
  th: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: '1px solid #ddd',
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'center',
  },
};

export default App;






