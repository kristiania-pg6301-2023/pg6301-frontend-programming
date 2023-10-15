import { useEffect } from "react";

export function LoginCallback() {
  const callbackParameters = Object.fromEntries(
    new URLSearchParams(window.location.hash),
  );

  async function handleCallback() {}

  useEffect(() => {
    handleCallback();
  }, []);

  return (
    <>
      <div>Please wait...</div>
      <pre>{JSON.stringify(callbackParameters, null, 2)}</pre>
    </>
  );
}
