import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/success");
  };

  return (
    <div>
      <h2>Multi Step Form</h2>

      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <br /><br />

      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />

      <br /><br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormPage;