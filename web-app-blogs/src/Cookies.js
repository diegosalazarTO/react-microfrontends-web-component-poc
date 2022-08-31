function getCookies() {
  const cookies = document.cookie;
  const rows = [];

  if (cookies) {
    cookies.split("; ").forEach((cookie) => {
      const row = cookie.split("=");
      const value = {
        key: row[0],
        value: row[1],
      };

      rows.push(value);
    });
  }

  return rows;
}

function Cookies() {
  const cookies = getCookies();

  return (
    <div className="row">
      <h2>Cookies</h2>
      {cookies.length ? (
        <table>
          <thead>
            <tr>
              <th>key</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            {cookies.map((cookie) => {
              return (
                <tr>
                  <td>{cookie.key}</td>
                  <td>{cookie.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Cookies not available</p>
      )}
    </div>
  );
}

export default Cookies;
