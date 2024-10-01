import placeholder from "../assets/no-image-placeholder.webp";

export default function getCroppedImage(url: string) {
  if (url === null) return placeholder;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}
