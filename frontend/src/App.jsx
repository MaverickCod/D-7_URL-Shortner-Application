import axios from "axios";
import { useState } from "react";
import "./App.css";
function App() {
  const [url, setUrl] = useState("");
  const [shortedUrl, setShortedUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:5252/shortUrl", { url });
    console.log(response.data);
    alert(response.data.message);
    setShortedUrl(response.data.shortedUrl);
    setUrl("");
  }

  return (
    <>
      <div className="container">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter URL to Shorten"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="input-field"
            />
            <input type="submit" value="Shorten URL" className="submit-btn" />
          </form>
          <div>
            {shortedUrl && shortedUrl.length > 0 ? (
              <p>
                Your Shortened URL is:{" "}
                <span className="shorted-url">{shortedUrl}</span>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
