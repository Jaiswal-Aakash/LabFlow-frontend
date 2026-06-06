/** TODO LAB-201: multi file picker, previews[], onFilesChange(File[]) */
const ImageUploader = ({ onFilesChange }) => {
  return (
    <input
      type="file"
      accept="image/*"
      multiple
      onChange={(e) => onFilesChange?.(Array.from(e.target.files || []))}
      className="w-full text-sm"
    />
  );
};

export default ImageUploader;
