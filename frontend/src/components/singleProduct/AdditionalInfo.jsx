export default function AdditionalInfo({ additionalInfo }) {
  const productInformation = additionalInfo && additionalInfo[0];
  return (
    <div className="product-single__addtional-info">
      <div className="item">
        <label className="h6">Weight</label>
        <span>{productInformation && productInformation.weight}</span>
      </div>
      <div className="item">
        <label className="h6">Dimensions</label>
        <span>{productInformation && productInformation.dimensions}</span>
      </div>
      <div className="item">
        <label className="h6">Size</label>
        <span>{productInformation && productInformation.size}</span>
      </div>
      <div className="item">
        <label className="h6">Color</label>
        <span>{productInformation && productInformation.color}</span>
      </div>
      <div className="item">
        <label className="h6">Storage</label>
        <span>{productInformation && productInformation.storage}</span>
      </div>
    </div>
  );
}
