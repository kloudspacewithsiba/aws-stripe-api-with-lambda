export default function Description({ description }) {
  return (
    <div className="product-single__description">
      <h3 className="block-title mb-4">
        Sed do eiusmod tempor incididunt ut labore
      </h3>
      <p className="content">
        {description}
      </p>
    </div>
  );
}
