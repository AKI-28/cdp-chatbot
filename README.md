# cdp-chatbot

Overview:
The CDP Chatbot is an intelligent assistant that helps users answer "how-to" questions related to four Customer Data Platforms (CDPs): Segment, mParticle, Lytics, and Zeotap. It retrieves real-time information from the official documentation of these CDPs to provide users with relevant guidance.

Features:
- Real-time Web Scraping: Uses Puppeteer to fetch documentation data dynamically.
- Intelligent Query Matching: Identifies the relevant CDP based on user questions.
- Direct Documentation Links: Provides a direct link to the official documentation for more details.

Tech Stack:
- Backend: Node.js, Express, Puppeteer
- Frontend: React (optional for UI)

Installation & Setup
Prerequisites:
Ensure you have the following installed:
- Node.js (v14+ recommended)
- npm or yarn

Steps:
1. Clone the repository:
   git clone https://github.com/AKI-28/cdp-chatbot.git
   cd cdp-chatbot
2. Install dependencies: npm install
3. Start the backend server: 
   open Command Prompt
   cd cdp-chatbot-backend   
   npm start (Should see 'Server running on port 5000')
4. If using a frontend, navigate to the frontend directory and run:
   cd cdp-chatbot-frontend
   npm start

API Endpoints:
'POST /chatbot'
Request:
  {
    "question": "How do I set up a new source in Segment?"
  }
Response:
  {
    "answer": "Here's what I found for Segment: ...",
    "link": "https://segment.com/docs/?ref=nav"
  }

Troubleshooting:
- If you get a TimeoutError, increase the Puppeteer navigation timeout in 'server.js'.
- If Puppeteer fails to launch, install missing dependencies:
  npm install puppeteer --unsafe-perm=true

License:
This project is open-source under the MIT License.

Contributing:
Feel free to submit issues or pull requests to improve the chatbot!

