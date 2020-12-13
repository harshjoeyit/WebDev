import React, {useState, useEffect} from 'react';
import shuffle from 'shuffle-array';
import Card from './Card';
import './style.css';
import Timer from './Timer';


const randomColor = () => {
    return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}

const CardState = {
    HIDING: 0,
    SHOWING: 1,
    MATCHING: 2
};

const MemoryGame = () => {
    const initState = {
        totalCards: 4, 
        cards: [], 
        noClick: false, 
        startTime: new Date().getTime(),
        getSnapShot: false,
        finishTime: 0
    }

    const [state, setState] = useState(initState);

    useEffect(() => {
        let newCards = [];
        for(let i=0; i<state.totalCards; i++) {
            let randCol = randomColor();
            let card = {
                id: i,
                cardState: CardState.HIDING,
                backgroundColor: randCol
            }
            newCards.push(card);
            card = {
                id: i+Number(state.totalCards),
                cardState: CardState.HIDING,
                backgroundColor: randCol
            }
            newCards.push(card);
        }

        newCards = shuffle(newCards);
        setState({
            ...state,
            cards: newCards
        })
        
    }, [state.totalCards])


    // card click handler 
    const handleCardClick = (id) => {
    
        if(state.noClick) {
            // can't reveal the card, under penalty for unmatching cards
            return;
        }

        const mapCardState = (cards, idsToChange, newCardState) => {
            return cards.map(c => {
                if(idsToChange.includes(c.id)) {
                    return {
                        ...c, 
                        cardState: newCardState
                    };
                }
                return c;
            });
        }

        // clicked card
        const foundCard = state.cards.find(c => c.id === id);
        console.log(foundCard);
        
        // ----> Error herer <---=
        if(foundCard.cardState !== CardState.HIDING) {
            // if the card is NOT hiding we dont want to do anything
            return;
        }

        // cards=> updated cards where clicked is SHOWING
        let cards = mapCardState(state.cards, [id], CardState.SHOWING);
       
        // find only the showing cards 
        const showingCards = cards.filter(c => c.cardState === CardState.SHOWING);
        // get ids of showing cards 
        const ids = showingCards.map(c => c.id);
        
        if(showingCards.length === 2 && 
            showingCards[0].backgroundColor === showingCards[1].backgroundColor)  {
                // 2 matching cards 
                // set the state of these 2 cards to MATCHING
                cards = mapCardState(cards, ids, CardState.MATCHING);
        
        } else if(showingCards.length === 2) {
            // 2 unmatching cards 
            let hidingCards = mapCardState(cards, ids, CardState.HIDING);
            // update cards to show both, hide later 
            setState({
                ...state,
                cards: cards,
                noClick: true
            });
            
            // add 1.3 sec time penalty for choosing wrong cards 
            setTimeout(() => {
                setState({
                    ...state,
                    cards: hidingCards,
                    noClick: false
                });
            }, 1300)

            return;
        }
        
        // reach here if in 2 cases 
        // - only 1 card showing
        // - 2 cards showing and matched 
        
        let takeSnapNow = false;
        const matchingCards = cards.filter(c => c.cardState === CardState.MATCHING).length;
        if(matchingCards === 2*state.totalCards) {
            // bingo we won 
            console.log('take snapshot now')
            takeSnapNow = true;
        }

        setState({
            ...state,
            cards: cards,
            getSnapShot: takeSnapNow
        });
    }

    // handling input for number of cards 
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
            startTime: new Date().getTime()
        })
    }

    const handleNewGame = () => {
        let updatedCards = state.cards.map(card => (
            {...card, cardState: CardState.HIDING}
        ));
        updatedCards = shuffle(updatedCards);
        setState({
            ...state,
            cards: updatedCards,
            startTime: new Date().getTime()
        });
    }

    const captureFinishTime = (finishTime) => {
        console.log(finishTime);
        setState({
            ...state, 
            finishTime: finishTime
        });
    }

    return (
        <div>
            <input 
                className="input"
                style={{display:'block'}}
                name="totalCards"
                placeholder="Number of cards"
                value={state.totalCards}
                onChange={handleChange}
            />
            <button
                style={{display:'block'}}
                onClick={handleNewGame}
            >
                New Game
            </button>

            <Timer 
                startTime={state.startTime} 
                getSnapShot={state.getSnapShot}
                captureFinishTime={captureFinishTime}
            />

            {
                (state.getSnapShot)
                ? (<h2>Finish Time: {state.finishTime}</h2>)
                : (<></>)
            }

            {
                state.cards.map(card => {
                    return (
                    <Card 
                        key={card.id}
                        showing={card.cardState !== CardState.HIDING} 
                        backgroundColor={card.backgroundColor}
                        onClick={() => {handleCardClick(card.id)}}
                    />
                    );
                })
            }
        </div>
    )
}

export default MemoryGame
