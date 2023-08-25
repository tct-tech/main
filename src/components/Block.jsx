const Block = (props) => { 
    const handleClick = () => {
        window.open(props.URL, '_blank').focus();
    }

    return (
        <div className="block" onClick={handleClick}>
            <div className="blockTitle">{props.title}</div>
            <div className="bockDescr">{props.descr}</div>
        </div>
    )
}

export default Block;
