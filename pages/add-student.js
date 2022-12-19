import withAdminRoute from '../components/adminRoute';
import { useEffect, useState } from 'react';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    usn: '',
    name: '',
    department: '',
    image: '',
  });
  const fields = [
    {
      name: 'usn',
      label: 'USN',
      type: 'text',
      placeholder: 'Enter USN',
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter name',
    },
    {
      name: 'department',
      label: 'Department',
      type: 'text',
      placeholder: 'Enter department',
    },
    {
      name: 'image',
      label: 'Image',
      type: 'file',
    },
  ];

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    if (event.target.name === 'image') {
      setFormData({
        ...formData,
        [event.target.name]: event.target.files[0],
      });
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Make a POST request to the backend route
      let f=new FormData()
      console.log(formData)
      f.append('label',formData.usn)
      f.append('name',formData.name)
      f.append('department',formData.department)
      f.append('image',formData.image)
      console.log(f)
      const response = await fetch('http://localhost/addStudent', {
        method: 'POST',
        mode:'cors',
        // headers:{
        //     'Content-type':'multipart/form-data'
        // },
        body: f,
        credentials: 'include',
      });

      // If the request was successful, show a success message
      if (response.ok) {
        alert('Student added successfully!');
      } else {
        // If the request was unsuccessful, show an error message
        alert('Error adding student: ' + response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              required={field.required}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default withAdminRoute(AddStudent);
