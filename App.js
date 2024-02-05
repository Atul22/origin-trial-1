function App() {
  return (
    <div>
      <button onClick={() => {
        const iframe = document.createElement("iframe");
        iframe.src = "";
        iframe.style.width = "200px";
        iframe.style.height = "100px";
        iframe.style.border = "1px solid #ccc"; // Set border or other styles
        document.getElementById("iframeContainer").appendChild(iframe);
      }}>
        Load Iframe
      </button>
      <div id="iframeContainer" />
    </div>
  );
}

export default App;
