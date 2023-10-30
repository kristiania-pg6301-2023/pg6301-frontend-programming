import { useEffect, useState } from "react";

export function LoginCallback({ applicationConfig }) {
  const [debug, setDebug] = useState();

  async function handleCallback() {
    const hash = Object.fromEntries(new URLSearchParams(window.location.hash));
    setDebug(hash);
  }
  useEffect(() => {
    handleCallback();
  }, []);


  return <>
    <div>Login callback</div>
    <pre>{JSON.stringify(debug, null, 2)}</pre>
  </>;
}