async function get(data: any): Promise<any | false> {
  const server = "http://localhost/TCC/server.php";
  const params = new URLSearchParams(data);
  const urlWithParams = `${server}?${params.toString()}`;

  try {
    const res = await fetch(urlWithParams, {
      method: 'GET'
    });

    if (res.ok) {
      const result = await res.json();
      console.log("Server response:", result);
      if (result && result.erro) {
          console.error("Server returned error:", result.erro);
          return false;
      }
      return result; // Return the data object (e.g., { id, nome, email })
    } else {
      console.error(`Server responded with status: ${res.status}`);
      return false;
    }
  } catch (err) {
    console.error(`Workspace error: ${err}`);
    return false;
  }
}

