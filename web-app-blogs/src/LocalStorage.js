function populateRows(store) {
  const rows = [];

  for (let i = 0; i < store.length; i++) {
    const key = store.key(i);
    const row = {
      key,
      value: store.getItem(key),
    };

    rows.push(row);
  }

  return rows;
}

function LocalStorage() {
  const store = window.localStorage;
  const rows = populateRows(store);

  return (
    <div className="row">
      <h2>LocalStorage</h2>
      {store.length ? (
        <table>
          <thead>
            <tr>
              <th>key</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              return (
                <tr>
                  <td>{row.key}</td>
                  <td>{row.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Empty storage</p>
      )}
    </div>
  );
}

export default LocalStorage;
