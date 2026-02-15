const shopItems = {
  skins: [
    { name: 'Basic Skin', price: 100 },
    { name: 'Epic Skin', price: 500 },
    { name: 'Legendary Skin', price: 1000 }
  ],
  hats: [
    { name: 'Normal Hat', price: 150 },
    { name: 'Fancy Hat', price: 600 },
    { name: 'Royal Hat', price: 1200 }
  ],
  effects: [
    { name: 'Fire Effect', price: 200 },
    { name: 'Ice Effect', price: 700 },
    { name: 'Lightning Effect', price: 1400 }
  ],
  powerups: [
    { name: 'Speed Boost', price: 300 },
    { name: 'Double Score', price: 650 },
    { name: 'Invincibility', price: 1300 }
  ],
  treasures: [
    { name: 'Gold Coin', price: 50 },
    { name: 'Silver Coin', price: 150 },
    { name: 'Diamond', price: 500 }
  ],
  vipTiers: [
    { tier: 'Bronze', price: 1000, benefits: ['Access to exclusive items', '1% discount on all purchases'] },
    { tier: 'Silver', price: 2500, benefits: ['Access to exclusive items', '5% discount on all purchases', 'Monthly free powerup'] },
    { tier: 'Gold', price: 5000, benefits: ['Access to exclusive items', '10% discount on all purchases', 'Monthly free powerup', 'Special chat badge'] },
    { tier: 'Platinum', price: 10000, benefits: ['Access to exclusive items', '15% discount on all purchases', 'Monthly free powerup', 'Special chat badge', 'VIP-only shop items'] }
  ]
};

export default shopItems;