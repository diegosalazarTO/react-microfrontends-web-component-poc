function AppConfig() {
  const appConfig = window.AppConfig ?? {};

  appConfig.apollo = "foo";

  console.log(process.env);

  return (
    <div className="row">
      <h2>AppConfig</h2>
      {appConfig ? (
        <pre>{JSON.stringify(appConfig, null, 2)}</pre>
      ) : (
        <p>AppConfig not available</p>
      )}
      <h2>Environment Variables</h2>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>REACT_APP_TEST_URL</td>
            <td>{process.env.REACT_APP_TEST_URL}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AppConfig;
