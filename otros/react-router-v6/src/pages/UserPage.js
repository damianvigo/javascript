import { useParams } from 'react-router-dom';

export default function UserPage() {
  // const params = useParams();
  const { id } = useParams();

  // console.log(params);

  return (
    <div>
      user <h1>{id}</h1>
    </div>
  );
}
