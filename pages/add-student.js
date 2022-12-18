import { Form } from '../components/form';
import withAdminRoute from '../components/adminRoute';
import { useState } from 'react';

const AddStudent = () => {
  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState({});

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
      name: 'descriptions',
      label: 'Descriptions',
      type: 'text',
      placeholder: 'Enter descriptions',
    },
    {
      name: 'image',
      label: 'Image',
      type: 'file',
    },
  ];

  const handleSubmit = (formData) => {
    studentModel
      .create(formData)
      .then(() => {
        // navigate to students list page or show a success message
      })
      .catch((error) => {
        setErrors(error.errors);
      });
  };

  return (
    <div>
      <Form fields={fields} submitText="Add Student" onSubmit={handleSubmit} />
    </div>
  );
};

export default withAdminRoute(AddStudent);
