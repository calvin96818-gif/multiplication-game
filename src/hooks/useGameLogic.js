import { useState, useEffect } from 'react';

const useGameLogic = () => {
    const [gameState, setGameState] = useState({
        score: 0,
        question: '',
        correctAnswer: 0,
        isGameActive: false,
    });

    const generateQuestion = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const answer = num1 * num2;
        setGameState({
            ...gameState,
            question: `What is ${num1} * ${num2}?`,
            correctAnswer: answer,
        });
    };

    const startGame = () => {
        setGameState({
            score: 0,
            isGameActive: true,
        });
        generateQuestion();
    };

    const submitAnswer = (userAnswer) => {
        if (!gameState.isGameActive) return;
        if (userAnswer === gameState.correctAnswer) {
            setGameState(prevState => ({
                ...prevState,
                score: prevState.score + 1,
            }));
        }
        generateQuestion();
    };

    const endGame = () => {
        setGameState(prevState => ({
            ...prevState,
            isGameActive: false,
        }));
    };

    return { gameState, startGame, submitAnswer, endGame };
};

export default useGameLogic;