import { Form } from '../components/form';
import withAdminRoute from '../components/adminRoute';

const Register = () => {
  const fields = [
    { name: 'id', label: 'ID', type: 'text', required: true },
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
    { name: 'department', label: 'Department', type: 'text' },
  ];

  const handleSubmit = (formData) => {
    // add code to handle form submission here
    console.log(formData);
  };

  return (
    <Form
      fields={fields}
      submitText="Register Enroller"
      onSubmit={handleSubmit}
    />
  );
};

export default withAdminRoute(Register);
