export default async function toDataURL(url: string): Promise<string> {
  return fetch(url)
    .then((res) => res.blob())
    .then(blobToBase64);
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
}
