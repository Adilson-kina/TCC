export default async function post(data) {
  const server = "http://localhost/TCCGP/server.php";
  try {
    const res = await fetch(server, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      const result = await res.json();
      console.log("Server response:", result);
      return result.status ?? true;
    } else {
      console.log("Server error");
      return false;
    }
  } catch (err) {
    console.log(`Fetch error: ${err}`);
    return false;
  }
}
