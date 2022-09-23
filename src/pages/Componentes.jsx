import React from 'react'
import { createRoot } from 'react-dom/client';
import FlashCard from '../components/FlashCard/FlashCard'
import '../styles/global.scss'

import data from '../data/cards.json'

const cards = data["Cards"]
const passed = []
let count = 0

function generateCard(){

    let area = document.querySelector('#card-area');
    let root = createRoot(area); // createRoot(container!) if you use TypeScript

    let t = cards.length

    if(passed.length == t){
        alert("Todos os cards já foram.")
    } else{
        let i = Math.floor(Math.random() * t) 

        while(passed.includes(i) == true){
            i = Math.floor(Math.random() * t) 
        }
    
        let card = cards[i]
        passed.push(i)
        console.log(passed)
    
        root.render(<FlashCard nome={card["Nome"]} definicao={card["Definicao"]}/>)
    }
}

function Componentes() {
    return (
        <div className="container">
            

            <div className="card-area" id="card-area">

            </div>

            <div className="row-btns">

                <button className="btn-generate" onClick={generateCard}>Gerar Card</button>

            </div>

        </div>
    )
}

export default Componentes