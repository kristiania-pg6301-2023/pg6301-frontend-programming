export function ApplicationView({ user }) {
  return <h1>Welcome {user.name} ({user.email})</h1>;
}