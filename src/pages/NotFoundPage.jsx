import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '48px', color: 'var(--color-primary, #c8102e)', marginBottom: '20px' }}>404</h1>
      <h2 style={{ fontSize: '24px', marginBottom: '30px' }}>Page Not Found</h2>
      <p style={{ marginBottom: '40px' }}>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" style={{ padding: '12px 24px', backgroundColor: 'var(--color-primary, #c8102e)', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
        Return to Home
      </Link>
    </div>
  );
}
