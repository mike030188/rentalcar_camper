import { StyledCard } from "../styles/Card.style";

export default function CardComp ({item: { id, title, body, image }}) {
    return(
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={image} alt="Car interior" />
            </div>
        </StyledCard>
    )
}