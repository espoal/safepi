const filter = {
  vendorId: 0x1d6b // Linux Foundation
};

try {
  const port = await navigator.serial.requestPort({filters: [filter]});
  // Continue connecting to |port|.
} catch (e) {
  // Permission to access a device was denied implicitly or explicitly by the user.
}

await port.open({ baudrate: 11200 });

const encoder = new TextEncoder();
const writer = port.writable.getWriter();


writer.write(encoder.encode("AT"));

const decoder = new TextDecoder();
const reader = port.readable.getReader();

while (true) {
  const { value, done } = await reader.read();

  console.log(decoder.decode(value));
}