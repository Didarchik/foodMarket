import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import style from "./Testinomial.module.scss"
import avatar from "../../assets/img/avatar.png"
import rating from "../../assets/img/ratings.png"
import {Context} from "../../App"
function Testinomial() {
  const {inputRef} = useContext(Context);
  return (
    <div className={style.testBlock} tabIndex="0" ref={el => inputRef.current[3] = el}>
        <Card className={style.upperBlock}>
            <Card.Title className={style.testinomial}>Testinomial</Card.Title>
            <Card.Title className={style.title}>What They Are Saying</Card.Title>
            <Card.Body>
                <Card.Text className={style.cardText}>Lorem ipsum dolor sit amet consectetur. Non tincidunt  magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</Card.Text>
            </Card.Body>
        </Card>
        <Card className = {style.lowerBlock}>
            <Card.Img src={avatar} className={style.avatar} />
            <Card.Text className={style.title}>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</Card.Text>
            <Card.Img src={rating} className={style.rating}/>
            <Card.Title className={style.name}>John Doe</Card.Title>
        </Card>
    </div>
  )
}

export default Testinomial