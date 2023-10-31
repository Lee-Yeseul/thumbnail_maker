export function randomRGB() {
  let rgb = '#';
  rgb += (Math.floor(Math.random() * 90 + 1) + 150)
    .toString(16)
    .padStart(2, '0');
  rgb += (Math.floor(Math.random() * 90 + 1) + 150)
    .toString(16)
    .padStart(2, '0');
  rgb += (Math.floor(Math.random() * 90 + 1) + 150)
    .toString(16)
    .padStart(2, '0');
  return rgb;
}

export const encodeFileToBase64 = async (fileBlob: Blob) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(fileBlob);
  });
};

export const saveCaptureImg = (uri: string, filename: string) => {
  try {
    const link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  } catch (err) {
    console.log(err);
  }
};
