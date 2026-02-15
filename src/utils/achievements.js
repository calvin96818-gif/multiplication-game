// src/utils/achievements.js

const achievements = {
    beginner: {
        name: "Beginner",
        description: "Complete your first multiplication problem.",
        unlocked: false,
    },
    intermediate: {
        name: "Intermediate",
        description: "Complete 10 multiplication problems.",
        unlocked: false,
    },
    expert: {
        name: "Expert",
        description: "Complete 50 multiplication problems.",
        unlocked: false,
    },
    master: {
        name: "Master",
        description: "Achieve a score of 100% on a test.",
        unlocked: false,
    },
};

function unlockAchievement(achievementKey) {
    if (achievements[achievementKey]) {
        achievements[achievementKey].unlocked = true;
        console.log(`Achievement Unlocked: ${achievements[achievementKey].name}`);
    } else {
        console.error("Achievement not found");
    }
}

function checkAchievements() {
    return Object.values(achievements).filter(achievement => achievement.unlocked);
}

module.exports = {
    achievements,
    unlockAchievement,
    checkAchievements,
};