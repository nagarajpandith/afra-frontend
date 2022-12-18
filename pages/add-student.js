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

  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <Form fields={fields} submitText="Add Student" onSubmit={handleSubmit} />
    </div>
  );
};

export default withAdminRoute(AddStudent);
