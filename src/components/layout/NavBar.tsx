import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="flex w-full justify-center space-x-5 ">
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/notion">
        <h1>Notion</h1>
      </Link>
    </div>
  );
}
