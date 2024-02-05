const TOKEN = "AzkRqATO4cpzWGTRoZoSfko9p4mHWhuuhWQAw8vWwVFD6hfg1uBuWcx9J1VxvYAaziI8o8aotpWT5sbPDZf7OwgAAACCeyJvcmlnaW4iOiJodHRwczovL2F0dWwyMi5naXRodWIuaW86NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZyIsImV4cGlyeSI6MTcyNTQwNzk5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==";
const otMeta = document.createElement("meta");
otMeta.httpEquiv = "origin-trial";
otMeta.content = TOKEN;
document.head.append(otMeta);
console.log("trial script...");
