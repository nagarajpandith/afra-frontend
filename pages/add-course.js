import { Form } from '../components/form';

const AddCourse = () => {
  const fields = [
    { name: 'code', label: 'Course Code', type: 'text', required: true },
    { name: 'subSection', label: 'Sub Section', type: 'text', required: true },
    { name: 'name', label: 'Course Name', type: 'text', required: true },
  ];

  const handleSubmit = (formData) => {
    // add code to handle form submission here
    console.log(formData);
  };

  return (
    <Form fields={fields} submitText="Add Course" onSubmit={handleSubmit} />
  );
};

export default AddCourse;
