import fetch from "node-fetch";

export default async function handler(req, res) {
  const xhsUrl = req.query.url;
  if (!xhsUrl) return res.status(400).json({ error: "Missing URL" });

  try {
    // Example: replace with your chosen 小红书解析 API
    const apiRes = await fetch(
      `https://xhsapi.top/api/xhs?url=${encodeURIComponent(xhsUrl)}`
    );
    const data = await apiRes.json();

    // Return unwatermarked video URL
    res.status(200).json({ video: data.data.play });
  } catch (err) {
    res.status(500).json({ error: "解析失败" });
  }
}

