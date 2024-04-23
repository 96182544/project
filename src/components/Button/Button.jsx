
const Button = (props) => {
    return (
      <div>
        <button className="bg-blue-900 py-2 px-10 border-2 border-blue-500 text-white hover:text-white transition-all " onClick={props.onClick}>
          {props.title}
        </button>
      </div>
    );
  };
  
  export default Button;
  