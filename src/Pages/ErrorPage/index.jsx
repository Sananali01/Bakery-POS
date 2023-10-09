
function ErrorPage() {
  const errorPageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#0B121E",
  };

  const headingStyle = {
    fontSize: "3rem",
    marginBottom: "20px",
    color: "white",
  };

  const messageStyle = {
    fontSize: "1.5rem",
    color: "white",
  };

  return (
    <div style={errorPageStyle}>
      <h1 style={headingStyle}>Oops! Something went wrong</h1>
      <p style={messageStyle}>We are sorry, but there was an error.</p>
    </div>
  );
}

export default ErrorPage;
