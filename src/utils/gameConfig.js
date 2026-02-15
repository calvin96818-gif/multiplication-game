const gameConfig = {
    difficultyLevels: {
        easy: {
            name: 'Easy',
            maxNumber: 10,
            timeLimit: 60
        },
        medium: {
            name: 'Medium',
            maxNumber: 20,
            timeLimit: 45
        },
        hard: {
            name: 'Hard',
            maxNumber: 50,
            timeLimit: 30
        }
    },
    settings: {
        enableSound: true,
        showTimer: true,
        maxAttempts: 3
    }
};

export default gameConfig;