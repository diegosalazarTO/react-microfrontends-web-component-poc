function AppConfig() {
  const appConfig = window.AppConfig ?? {};

  appConfig.apollo = "foo";

  return (
    <div className="row">
      <h2>AppConfig</h2>
      {appConfig ? (
        <pre>{JSON.stringify(appConfig, null, 2)}</pre>
      ) : (
        <p>AppConfig not available</p>
      )}
    </div>
  );
}

export default AppConfig;
