export default function Loader({ text = 'Loading...' }) {
  return (
    <div className="loader-wrap">
      <div className="loader"></div>
      <p>{text}</p>
    </div>
  );
}
