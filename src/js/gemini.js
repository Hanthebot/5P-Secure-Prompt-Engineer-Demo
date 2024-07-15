const {VertexAI} = require('@google-cloud/vertexai');

// based on above code, write a class that initiates a gemini chat, and sends messages to it upon a function call.
class GeminiChat {
  constructor(projectId = 'hanthebot-web', location = 'us-central1', model = 'gemini-1.5-flash-001') {
    this.projectId = projectId;
    this.location = location;
    this.model = model;
  }

  async initChat() {
    const vertexAI = new VertexAI({project: this.projectId, location: this.location});
    const generativeModel = vertexAI.getGenerativeModel({
      model: this.model,
    });

    this.chat = generativeModel.startChat({});
  }

  async sendMessage(message) {
    const result = await this.chat.sendMessage(message);
    return result.response.candidates[0].content.parts[0].text;
  }
}

// Usage: 
// let gemini = new GeminiChat();
// gemini.initChat();
// gemini.sendMessage("I would like to know about Gemini the AI by Google.").then(console.log);
// gemini.sendMessage("What strength does it have, compared to ChatGPT by OpenAI?").then(console.log);