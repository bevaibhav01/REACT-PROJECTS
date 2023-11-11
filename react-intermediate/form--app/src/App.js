import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",lastName:"",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <form>
        <label htmlFor='firstName'>First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Name"
          onChange={changeHandler}
          value={formData.firstName}
        />
      </form>
      
    </div>
  );
}

export default App;
