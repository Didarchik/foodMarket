import React, {useState} from 'react'
import {Card, Button} from "react-bootstrap"
import pickMeal from "../../assets/img/aboutFood.png"
import style from "./Order.module.scss"
import { data } from '../../data'

function Order() {
    console.log(data);
    const [expand, setExpand] = useState([true, true, true, true]);
    const handleMoreText = (e) => {
        setExpand(expand.map((item, id) => id === e ? !item : item));
    }

    const [selected, setSelected] = useState([true, false, false, false]);
    const [typeOfFood, setTypeOfFood] = useState(0);
    const handleTypeFood = (e) => {
        setTypeOfFood(e);
        setSelected(selected.map((item, id) => id === e ? true : false));
    }
    return (
    <div className={style.orderPage}>
        <div className={style.upperBlock}>
            <h2>Available Foods</h2>
            <ul className='foodType'>
                Cuisine:
                <li style={{fontWeight: selected[0] ? 'bold' : 'normal'}} onClick={() => handleTypeFood(0)}>all</li>
                <li style={{fontWeight: selected[1]? 'bold' : 'normal'}} onClick={() => handleTypeFood(1)}>pizza</li>
                <li style={{fontWeight: selected[2]? 'bold' : 'normal'}} onClick={() => handleTypeFood(2)}>sushi</li>
                <li style={{fontWeight: selected[3]? 'bold' : 'normal'}} onClick={() => handleTypeFood(3)}>vegan</li>
            </ul>
        </div>
        <div className={`${style.foodBlock} d-flex flex-wrap`}> 
            {data.length && data.map(item => {
                if (typeOfFood === 0){
                    return (
                        <Card key={item.id} className={`${style.card} `}>
                            <Card.Img src={item.img} className={style.img}/>
                            <Card.Body>
                                <Card.Title className={style.title}>{item.title}</Card.Title>
                                <Card.Text className={style.text}>{expand[item.id] ? <p>{item.text.substring(0, 100)}<b onClick={() => handleMoreText(item.id)}>...</b></p>: item.text}</Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <div className='d-flex justify-content-between'>
                                    <Card.Title>Price</Card.Title>
                                    <Card.Title>{item.price}</Card.Title>
                                </div>
                                <Button className={style.btn}>Order</Button>
                            </Card.Body>
                        </Card>
                    )
                }
                else{
                    if (typeOfFood === item.type){
                        return (
                            <Card key={item.id} className={`${style.card}`}>
                            <Card.Img src={item.img} className={style.img}/>
                            <Card.Body>
                                <Card.Title className={style.title}>{item.title}</Card.Title>
                                <Card.Text className={style.text}>{expand[item.id] ? <p>{item.text.substring(0, 100)}<b onClick={() => handleMoreText(item.id)}>...</b></p>: item.text}</Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <div className='d-flex justify-content-between'>
                                    <Card.Title>Price</Card.Title>
                                    <Card.Title>{item.price}</Card.Title>
                                </div>
                                <Button className={style.btn}>Order</Button>
                            </Card.Body>
                        </Card>
                        )
                    }
                }
            })}
        </div>
    </div>
  )
}

export default Order