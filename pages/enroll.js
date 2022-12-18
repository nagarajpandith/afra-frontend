import { Form } from '../components/Form';
import withAuth from '../components/isAuth';

function Enroll() {
  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost/enrollStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Student enrolled successfully!');
      } else {
        alert('Error enrolling student: ' + response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fields = [
    {
      name: 'usn',
      label: 'USN',
      type: 'text',
      required: true,
    },
    {
      name: 'code',
      label: 'Code',
      type: 'text',
      required: true,
    },
  ];

  return <Form fields={fields} submitText="Enroll" onSubmit={handleSubmit} />;
}

export default withAuth(Enroll);
