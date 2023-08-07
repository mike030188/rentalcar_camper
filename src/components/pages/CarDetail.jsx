import { StyledCarDetail } from "../styles/CarDetail.style";

export default function CarDetailComp ({yangi: { company, cost, name, license, people, photo, type }}) {
    const datas = card.yangi
    console.log(datas)
    
    return(
        <StyledCarDetail>
            <div>
                <img src={photo} alt="img is not find" />
            </div>
            <div>
                <h2>{name}</h2>
                <p>{type}</p>
            </div>
            
        </StyledCarDetail>
    )
}