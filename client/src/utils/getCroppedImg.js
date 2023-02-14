import { createCanvas } from 'canvas';

const getCroppedImg = async (imageSrc, crop, zoom) => {
  // Create a canvas to draw the cropped image on
  const canvas = createCanvas(crop.width, crop.height);
  const ctx = canvas.getContext('2d');

  // Create a new Image object and set its src attribute to the imageSrc parameter
  const image = new Image();
  image.src = imageSrc;

  // Calculate the scaled crop size based on the zoom level
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  const croppedWidth = crop.width * scaleX * zoom;
  const croppedHeight = crop.height * scaleY * zoom;

  // Draw the cropped image onto the canvas
  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    croppedWidth,
    croppedHeight,
    0,
    0,
    crop.width,
    crop.height
  );

  // Convert the canvas to a data URL and return it
  return canvas.toDataURL('image/jpeg');
};


export default getCroppedImg;