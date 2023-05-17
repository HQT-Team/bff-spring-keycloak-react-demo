export default function Loader() {
  return (
    <div
      id="ftco-loader"
      className="show fullscreen"
    >
      <svg
        className="circular"
        width="48px"
        height="48px"
      >
        <circle
          className="path-bg"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke-width="4"
          stroke="#eeeeee"
        />
        <circle
          className="path"
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke-width="4"
          stroke-miterlimit="10"
          stroke="#F96D00"
        />
      </svg>
    </div>
  );
}
