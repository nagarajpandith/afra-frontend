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
      // Make a POST request to the backend route
      const response = await fetch('http://localhost/addStudent', {
        method: 'POST',
        body: formData,
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
      <Form fields={fields} submitText="Add Student" onSubmit={handleSubmit} />
    </div>
  );
};

export default withAdminRoute(AddStudent);
