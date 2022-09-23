import React from 'react'
import './FlashCard.scss'

let flag = 'Front'

function flipCard() {
    let card = document.querySelector("#card")
    if(flag == "Front"){
        card.style.transform = "rotateY(180deg)"    
        flag = "Back"
    } else{
        card.style.transform = "rotateY(0deg)"
        flag = "Front"
    }
}

function FlashCard(props){
    return (
        <div className="card">
            
            <div className="card-inner" id="card" onClick={flipCard}>

                <div className="card-front">
                    
                    <span className="card-name">{props.nome}</span>

                </div>

                <div className="card-back">

                    <span className="card-result">{props.definicao}</span>

                </div>

            </div>

        </div>
    )
}

export default FlashCard