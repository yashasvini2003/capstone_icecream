const SampleButton = ({btnName, click}) => {
    return (
        <button onClick={click} className="p-2 mr-2 border border-solid border-black rounded-full bg-black text-white hover:bg-white hover:text-black">
            {btnName}
        </button>
    );
}

export default SampleButton;