import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from flask import Flask,request,jsonify
from flask_cors import CORS

tokenizer = AutoTokenizer.from_pretrained("idajikuu/AI-HUMAN-detector")
model = AutoModelForSequenceClassification.from_pretrained("idajikuu/AI-HUMAN-detector")
user_input=list(input('Enter text\n').split('\n'))
inputs=tokenizer(user_input,return_tensors="pt")
with torch.no_grad():
    logits=model(**inputs).logits
predicted_realness = logits.argmax().item()
if(model.config.id2label[predicted_realness]=='Fake'):
    print("humannn")
else:
    print("It is AI")