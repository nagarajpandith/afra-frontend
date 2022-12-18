import { Form } from '../components/form';
import withAdminRoute from '../components/adminRoute';

const AddCourse = () => {
  const fields = [
    { name: 'code', label: 'Course Code', type: 'text', required: true },
    { name: 'subSection', label: 'Sub Section', type: 'text', required: true },
    { name: 'name', label: 'Course Name', type: 'text', required: true },
  ];

  const handleSubmit = async (formData) => {
    // add code to handle form submission here
    const response = await fetch('http://localhost/addCourse', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      credentials: 'include',
    });
    const res = await response.json();

    console.log(res);
    // console.log(formData);
  };

  return (
    <Form fields={fields} submitText="Add Course" onSubmit={handleSubmit} />
  );
};

export default withAdminRoute(AddCourse);
