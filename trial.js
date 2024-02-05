const TOKEN = "AzbasO25DiALmTH24pB2H5abvW2sxqSjUuTjTJMXZdcvEPDRfE0FL1ULtwsl2zCPNFRPQ20/d4Uj8HlJKme1ggkAAACMeyJvcmlnaW4iOiJodHRwczovL2RjLmRldi5kZXhpbGFiLmFjcm9iYXQuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmciLCJleHBpcnkiOjE3MjU0MDc5OTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=";
const otMeta = document.createElement("meta");
otMeta.httpEquiv = "origin-trial";
otMeta.content = TOKEN;
document.head.append(otMeta);
console.log("trial script...");
