import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import cn from "classnames"
import styles from "./style.module.scss"

export default function BeerCard({ beer }) {
    console.log("beer:", beer)
    return (
        <Col className={cn("mb-5 d-flex")} xs={12} sm={6} lg={4}>
            <Link to={`/beer/${beer._id}`} className={cn(styles.textDeco)}>
                <Card className={cn('mt-3', styles.cardBeer)}>
                    <Card.Img src={beer.photo} variant="top" className={cn(styles.imgBeer)} />
                    <Card.Body className="card-body p-1">
                        <h5 className={cn('card-title', styles.titleBeer)}>{beer.name}</h5>
                        <p className="card-text">{beer.brewery}</p>
                        <p className="card-text">Alc: {beer.alc}</p>
                        <p className={cn("card-text", styles.placeBeer)}>{beer.place}</p>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}
