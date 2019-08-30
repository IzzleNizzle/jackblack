import React, { useEffect, useState } from 'react'
import { withContext } from "../AppContext"

function CardList(context) {
    const [deckId, setDeckId] = useState()

    const [cardOne, setCardOne] = useState()
    const [cardTwo, setCardTwo] = useState()


    const [cardThree, setCardThree] = useState()
    const [cardFour, setCardFour] = useState()


    useEffect(() => {
        fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
            .then(response => response.json())
            .then(resJson => setDeckId(resJson["deck_id"]))
    }, [])

    const getCards = () => {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
            .then(response => response.json())
            .then(resJson => {
                setCardOne(resJson.cards[0].image)
                context.setHandOne(resJson.cards[0].value)
                setCardTwo(resJson.cards[1].image)
                context.setHandTwo(resJson.cards[1].value)
                setCardThree(resJson.cards[2].image)
                context.setHandThree(resJson.cards[2].value)
                setCardFour(resJson.cards[3].image)
                context.setHandFour(resJson.cards[3].value)
            })

    }
    return (
        <div>
            <div className="handOne">
                <img src={cardOne} alt="" srcset="" />
                <img src={cardTwo} alt="" srcset="" />
            </div>
            <div className="handTwo">
                <img src={cardThree} alt="" srcset="" />
                <img src={cardFour} alt="" srcset="" />
            </div>
            <button onClick={getCards}>Get new cards</button>
        </div>
    )
}

export default withContext(CardList)