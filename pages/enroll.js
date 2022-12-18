import { Form } from '../components/Form';
import withAuth from '../components/isAuth';

function Enroll() {

  const handleSubmit =async (formData) => {
    const response = await fetch('http://localhost/enrollStudent', {
        method: 'POST',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(event),
        credentials:"include"
    });
    const res=await response.json()
    console.log(res);
    alert(res.message)
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
