import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Link to="/">
        <h1>Blog</h1>
      </Link>
      <Link to="/notion">
        <h1>Notion</h1>
      </Link>
    </div>
  );
}
