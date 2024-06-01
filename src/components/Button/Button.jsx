const Button = (props) => {
  return (
    <div>
      <button
        className="bg-blue-900 text-white font-medium text-xl w-60 uppercase h-16 -mt-3  rounded hover:bg-blue-700 transition-colors"
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
