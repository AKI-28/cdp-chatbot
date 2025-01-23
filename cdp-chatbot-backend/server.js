const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Pre-scraped and indexed content for each CDP
const indexedDocs = {
  "Segment": {
    link: "https://segment.com/docs/?ref=nav",
    content: "Segment is a Customer Data Platform (CDP), which means that it provide a service that simplifies collecting and using data from the users of your digital properties (websites, apps, etc). With Segment, you can collect, transform, send, and archive your first-party customer data. Segment simplifies the process of collecting data and hooking up new tools, allowing you to spend more time using your data, and less time trying to collect it. You can also enrich the customer data you collect by connecting data from your other tools, and then aggregate it to monitor performance, inform decision-making processes, and create uniquely customized user experiences. You can also use Unify, Segment’s identity resolution tool, to unify data from individual users to gain a wholistic understanding of their actions."
  },
  "mParticle": {
    link: "https://docs.mparticle.com/",
    content: "mParticle is a customer data platform (CDP) that simplifies how you collect and connect your user data to hundreds of vendors without needing to manage multiple integrations. mParticle simplify the entire process for you, so you can do more with your data without the hassle of complex integrations."
  },
  "Lytics": {
    link: "https://docs.lytics.com/",
    content: "Lytics provides AI-driven customer data solutions for audience segmentation and targeting. Lytics helps solve the problem of increasing complexity in reaching customers and helps companies deliver relevant, contextual, one-to-one marketing at scale"
  },
  "Zeotap": {
    link: "https://docs.zeotap.com/home/en-us/",
    content: "Zeotap is a customer intelligence platform (CIP) that helps brands understand their customers and improve customer engagement. It uses customer data to help brands predict behaviors and deliver personalized experiences. Zeotap enables businesses to unify, enrich, and activate customer data securely."
  }
};

// Handle user questions
app.post("/chatbot", async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  let bestMatch = Object.keys(indexedDocs).find(cdp => question.toLowerCase().includes(cdp.toLowerCase()));

  if (!bestMatch) {
    return res.json({ answer: "I can only answer questions about Segment, mParticle, Lytics, or Zeotap." });
  }

  const docData = indexedDocs[bestMatch];
  return res.json({
    answer: `Here's what I found for ${bestMatch}:

${docData.content}`,
    description: docData.description,
    link: docData.link
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
