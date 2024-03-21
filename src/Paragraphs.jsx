import { GoSquareFill } from "react-icons/go"

const Paragraph = ({paragraphs})=>{
    return <div style={{width:"80%"}} className="paragraph truculenta">

        {paragraphs.map((item)=>{
            return <div className="para-style">
                <GoSquareFill style={{marginRight:"1rem"}}/>
                <p style={{margin:"1rem", width:"100%"}}>{item}</p>
            </div>
        })}

    </div>
}

export default Paragraph