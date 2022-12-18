import { Form } from '../components/form';
import withAdminRoute from '../components/adminRoute';

const AddStudent = () => {
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

  const handleSubmit = async (formData) => {
    try {
      // Create a new FormData object
      const data = new FormData();

      // Add the form data and file to the FormData object
      data.append('usn', formData.usn);
      data.append('name', formData.name);
      data.append('department', formData.department);
      data.append('image', formData.image);

      // Send the POST request to the server with the FormData object as the request body
      const response = await fetch('http://localhost/addStudent', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Form fields={fields} submitText="Add Student" onSubmit={handleSubmit} />
    </div>
  );
};

export default withAdminRoute(AddStudent);
