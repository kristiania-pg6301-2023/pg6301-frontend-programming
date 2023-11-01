export function ApplicationView({ user }) {
  return (
    <h1>
      Welcome {user.name || user.pid} ({user.email})
    </h1>
  );
}
