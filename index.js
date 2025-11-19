import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [video, setVideo] = useState("");

  const handleDownload = async () => {
    if (!url) return alert("Please enter a 小红书 link");
    try {
      const res = await fetch(`/api/xhs?url=${encodeURIComponent(url)}`);
      const data = await res.json();
      if (data.video) setVideo(data.video);
      else setVideo("解析失败");
    } catch (err) {
      setVideo("解析失败");
    }
  };

  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif" }}>
      <h1>小红书去水印工具</h1>
      <input
        type="text"
        placeholder="粘贴小红书链接"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "60%", padding: "10px" }}
      />
      <button
        onClick={handleDownload}
        style={{ padding: "10px 20px", marginLeft: "10px" }}
      >
        解析
      </button>

      {video && (
        <div style={{ marginTop: "20px" }}>
          <a href={video} target="_blank">
            点击下载无水印视频
          </a>
        </div>
      )}
    </div>
  );
}
