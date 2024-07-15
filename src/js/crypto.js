function getMessageEncoding(message) {
  let enc = new TextEncoder();
  return enc.encode(message);
}

function toHex(buffer) {
  return Array.from(buffer)
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
}

async function generateKeyPair() {
    // Implementation for RSA key generation
    let keyPair = await window.crypto.subtle.generateKey(
        {
          name: "RSA-OAEP",
          modulusLength: 4096,
          publicExponent: new Uint8Array([1, 0, 1]),
          hash: "SHA-256",
        },
        true,
        ["encrypt", "decrypt"],
      );
    return keyPair;
}

async function encryptMessage(publicKey, message) {
    // Implementation for RSA encryption
    let encoded = getMessageEncoding(message);
    let encrypted = await window.crypto.subtle.encrypt(
        { name: "RSA-OAEP" },
        publicKey,
        encoded,
      );
    let uint8View = new Uint8Array(encrypted)
    return toHex(uint8View);
}

async function decryptMessage(privateKey, ciphertext) {
    // Implementation for RSA decryption
    let buffer = new Uint8Array(ciphertext.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
    let decrypted = await window.crypto.subtle.decrypt(
        { name: "RSA-OAEP" },
        privateKey,
        buffer,
      );
    return new TextDecoder().decode(decrypted);
}

async function generateKeyPairBtn() {}
async function encryptMessageBtn() {}
async function decryptMessageBtn() {}