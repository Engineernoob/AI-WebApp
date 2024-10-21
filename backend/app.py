from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
from transformers import  AutoModelForCausalLM, AutoTokenizer
import traceback

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # This enables CORS for all routes

# Load the model and tokenizer from Hugging Face
MODEL_NAME = "microsoft/DialoGPT-small"  
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)

# Manually add a padding token to the tokenizer
tokenizer.pad_token = tokenizer.eos_token

model = AutoModelForCausalLM.from_pretrained(MODEL_NAME)

# Initialize an empty conversation history list
conversation_history = []

@app.route('/api/ask', methods=['POST'])
def ask_question():
    data = request.json
    question = data.get('question')

    if not question:
        return jsonify({"error": "No question provided"}), 400

    try:
        # Add the user's question to the conversation history
        conversation_history.append(f"Human: {question}")

        # Prepare the context by joining the conversation history
        context = "\n".join(conversation_history)

        # Tokenize and encode the conversation history
        inputs = tokenizer.encode(context + "\nAI:", return_tensors="pt", truncation=True, max_length=1024)

        # Create attention mask
        attention_mask = inputs.ne(tokenizer.pad_token_id).long()

        # Generate a response using the model
        outputs = model.generate(
    inputs,
    attention_mask=attention_mask,  # Optionally include attention_mask if input contains padding
    max_length=inputs.shape[1] + 50,  # Generate 50 tokens beyond the input length
    num_return_sequences=1,
    no_repeat_ngram_size=2,
    do_sample=True,
    top_k=50,
    top_p=0.95,
    temperature=0.7,
    pad_token_id=tokenizer.eos_token_id
        )

        # Decode the generated response back into text
        assistant_response = tokenizer.decode(outputs[0], skip_special_tokens=True)

        # Extract only the AI's response
        ai_response = assistant_response.split("AI:")[-1].strip()

        # Add the assistant's response to the conversation history
        conversation_history.append(f"AI: {ai_response}")

        return jsonify({"response": ai_response})

    except Exception as e:
        # Print the full traceback to the console
        print(traceback.format_exc())
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
