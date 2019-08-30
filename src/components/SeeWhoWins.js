import React, { useEffect, useState } from 'react'
import { withContext } from "../AppContext"

function SeeWhoWins(context) {
    const [winner, setWinner] = useState('')
    useEffect(() => {
        let playerOneScore = parseInt(context.state.handOne) + parseInt(context.state.handTwo)
        let playerTwoScore = parseInt(context.state.handThree) + parseInt(context.state.handFour)
        console.log(playerOneScore, playerTwoScore);

        if (playerOneScore > 21) {
            if (playerTwoScore <= 21) {
                setWinner('player two won')
                return
            }
        }

        if (playerTwoScore > 21) {
            if (playerOneScore <= 21) {
                setWinner('player one won')
                return
            }
        }

        if (playerOneScore > 21 && playerTwoScore > 21) {
            console.log('both players busted')
            setWinner('both players busted')
            return
        }

        if (playerOneScore > playerTwoScore) {
            console.log('player one wins')
            setWinner('player one Won')
        }
        else if (playerTwoScore > playerOneScore) {
            console.log('player two wins')
            setWinner('player two won')
        }
        else {
            setWinner('Get cards to play')
        }
        console.log(context);
    }, [context])
    return (
        <div>
            {winner ? `${winner}` : "loading..."}
        </div>
    )
}

export default withContext(SeeWhoWins)
