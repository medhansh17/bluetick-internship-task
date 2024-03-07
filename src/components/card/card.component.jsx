import "./cards.styles.css";

export function CustomCard(props) {
  return (
    <div
      className={`custom-card bg-white shadow-md border border-gray-200 rounded-lg max-w-md mb-5 w-full ${props.className}`}
      id={props.id}
      style={props.style}
    >
      <a href={props.url}>
        <img className="rounded-t-lg" src={props.imageUrl} alt="image" />
      </a>
      <div className="p-5">
        <a href={props.url}>
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {props.title}
          </h5>
        </a>
        <p className="font-normal text-gray-700 mb-3">{props.content}</p>
        <a
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          href={props.url}
        >
          Read more
        </a>
      </div>
    </div>
  );
}
export default CustomCard;
