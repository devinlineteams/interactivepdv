import { SearchComponentProps } from "@/types";

function SearchComponent(props:SearchComponentProps){
    const {inputs, buttons, message} = props

    return (
        <form>
            {inputs .map((input, index)=>(
                <input key={index} {...input} />
            ))}
            {buttons.map((button, index)=>(
                <button key={index} {...button}></button>
            ))}
            {
                message && (<div style={{color:message.type == ''?'red':'green'}} >
                    {message.msg}
                </div>)
            }

        </form>
    )
}
export default SearchComponent;