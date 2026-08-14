const characters = [
{
  name: "Lion Sin of Pride Escanor: Transcendent",
  icon: "https://i.imgur.com/ymNiE2M.png",
  affiliation: "Transcendent [Seven Deadly Sins]",
  grade: "Transcendence",
  attribute: "DEX",
  type: "DPS",
  recommendedPotential: "Full Critical Damage",

  trait: {
    name: "Power of the Apex",
    description: "Grants Overwhelming Power to allies assigned to the team every 5s for 3s, and restores 10 Energy every 5s.",
    effects: [
      {
        name: "Overwhelming Power",
        description: "Increases final Attack by 150%, increases final damage by 150%, and upon being hit, Critical Hit does not occur."
      }
    ]
  },

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 587% of Attack to the target. 50% chance to decrease cooldowns by 1s upon successful attack.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Blazing Sun",
      description: "Deals damage equal to 897% of Attack to all enemies within 3m of the initial target every 8 hits every 5s. Grants Sunshine to self each time this skill deals damage to an enemy.",
      effect: {
        name: "Sunshine",
        description: "Increases final Attack by 7% and Attack Speed by 3%. (Stacks up to 75 times)"
      }
    },

    {
      category: "Ultimate Move",
      name: "Punishment",
      description: "Deals damage equal to 2717% of Attack to all enemies in a 4m x 8m area in front of self. Final damage is increased by 150% for every 1 Sunshine buff applied to self upon attack. Inflicts the target with Eternal Flame for 7s upon successful attack.",
      effect: {
        name: "Eternal Flame",
        description: "Decreases final Defense by 20% and increases final damage taken by 150%, non-recoverable."
      }
    }
  ]
},
  {
  name: "Oslo & Hawk",
  icon: "https://i.imgur.com/SkAx7oY.png",
  affiliation: "[Boar Hat] Tavern",
  grade: "Legendary",
  attribute: "VIT",
  type: "Debuffer",
  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge!",
      description: "Deals damage equal to 730% of Attack to the target. Inflicts the target with Lv. 5 Blind for 1.5s upon attack.",
      effect: {
        name: "Lv. 5 Blind",
        description: "Decreases final Accuracy by 20%"
      }
    },

    {
      category: "Special Skill",
      name: "Fire the Catapult!",
      description: "50% chance to deal damage equal to 964% of Attack to all enemies within 1.5m of the initial target. Lowers the target's Energy by 5 upon attack. Inflicts the target with Mark of the Wild for 5s upon successful attack.",
      effect: {
        name: "Mark of the Wild",
        description: "Decreases final Attack by 30% and decreases final Defense by 30%"
      }
    },

    {
      category: "Ultimate Move",
      name: "Charge Again?!",
      description: "Deals damage equal to 2602% of Attack to all enemies in a 3m x 6m area in front of self. Final damage is increased by 300% for every 1 debuff(s) applied to the target upon attack. Inflicts the target with Prey for 7s upon successful attack.",
      effect: {
        name: "Prey",
        description: "Decreases final Evasion by 25%, and increases final damage taken by 200%. (Increases final damage taken by 200% if in a barrier state.)"
      }
    }
  ]
},
  {
  name: "Purgatory Meliodas",
  icon: "https://i.imgur.com/hZf1IJC.png",
  affiliation: "Purgatory",
  grade: "Legendary",
  attribute: "INT",
  type: "DPS",
  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Slash",
      description: "Deals damage equal to 450% of Attack to the target. Grants Extreme Fixation to allies upon successful attack.",
      effect: {
        name: "Extreme Fixation",
        description: "Increases final Accuracy by 5%. (Stacks up to 15 times)"
      }
    },

    {
      category: "Special Skill",
      name: "Chain Slash",
      description: "Upon landing normal skill 7 time(s), deals damage equal to 732% of Attack to all enemies within 3m of the initial target over 5 hits. Deals additional damage equal to 2% of the target's Max HP each time this skill does damage. If the target is a Stage Boss, final damage is increased by 50% for every 1 debuff applied to the target upon attack."
    },

    {
      category: "Passive",
      name: "True Magic",
      description: "Grants Shackles of Purgatory to self every 1s and inflicts Curse of Purgatory to all enemies every 3s.",
      effects: [
        {
          name: "Shackles of Purgatory",
          description: "Increases final Attack by 30% and Crit Damage by 25%. (Stacks up to 20 times)"
        },
        {
          name: "Curse of Purgatory",
          description: "Decreases Crit Resistance by 12% and increases final damage taken by 80%. (Stacks up to 7 times)"
        }
      ]
    },

    {
      category: "Ultimate Move",
      name: "Trillion Dark",
      description: "Deals damage equal to 2118% of Attack to all enemies in a 4m × 8m area in front of self. Final damage is increased by 100% for every 1 Shackles of Purgatory buff applied to self upon attack. If the target is a Stage Boss, an additional 50% final damage is applied."
    }
  ]
},
{
  name: "Guardian of Dusk Jenna",

  icon: "https://i.imgur.com/L0y0FJm.png",

  affiliation: "Druids of Istal",
  grade: "Legendary",
  attribute: "STR",
  type: "Support",

  recommendedPotential: "Full HP",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 575% of Attack to the target. Restores 3 Energy upon attack. 40% chance to remove 1 debuff(s) from allies upon successful attack.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Luminous Impact",
      description: "Upon landing normal skill 5 time(s), deals damage equal to 867% of Attack to all enemies within 2m of the initial target. Decreases allies' cooldowns by 1s upon attack. Grants Debuff Block and Lv. 5 Sturdy to allies for 3s upon successful attack.",
      effect: {
        name: "Debuff Block / Lv. 5 Sturdy",
        description: "Debuff Block: Immune to debuffs for the duration of the buff. Lv. 5 Sturdy: Increases Crit Resistance by 20%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Outset Light",
      description: "Deals damage equal to 2364% of Attack to all enemies within 4m of the initial target. Grants Nature's Whispers to allies for 5s upon attack.",
      effect: {
        name: "Nature's Whispers",
        description: "Nullifies damage taken 2 time(s), increases final damage by 1.5% for every 1% of target's remaining HP."
      }
    }
  ]
},  
{
    name: "[Napping Reaper] Cusack",
    icon: "https://i.imgur.com/idODild.png",
    affiliation: "Ancient Demon",
    grade: "Legendary",
    attribute: "INT",
    type: "Debuffer",
    recommendedPotential: "Full Critical Damage",
   

    skills: [
      {
        category: "Normal Skill",
        name: "Slash",
        description: "Deals damage equal to 480% of Attack to the target over 2 hits. Grants Swiftness to self for 2s each time this skill deals damage.",
        effect: {
          name: "Swiftness",
          description: "Increases Crit Chance by 4% and Increases Attack Speed by 12% (Stacks up to 20 times)."
        }
      },
      {
        category: "Special Skill",
        name: "Evil Sword Beam",
        description: "Upon landing normal skill 7 time(s), deals damage equal to 836% of Attack to all enemies in a 4m x 10m area in front of self. Grants Drive of Ruin to the heroes Zeldris/Cusack assigned to the team upon attack. Final damage increases by 200% for every 1 Debuff applied to the target upon successful attack.",
        effect: {
          name: "Drive of Ruin",
          description: "Ignores target's Defense by 3% and ignores Crit Defense by 3% upon attack (Stacks up to 10 times)."
        }
      },
      {
        category: "Ultimate Move",
        name: "Resonant",
        description: "Deals damage equal to 2375% of Attack to the target. Increases the Final Attack of the heroes Zeldris/Cusack assigned to the team by 100%, and increases their final accuracy by 20% upon attack. (Stacks up to 3 times) Inflicts the target with Mind Control for 5s and final damage is increased by 200% for every 1 Drive of Ruin buff applied to self upon successful attack.",
        effect: {
          name: "Mind Control",
          description: "Decreases final Attack by 25%, decreases final evasion by 25%, increases final damage taken by 100% if in a barrier state."
        }
      }
    ]
  },
{
  name: "Boar Sin of Gluttony Merlin: Transcendent",

  icon: "https://i.imgur.com/V93qcI5.png",

  affiliation: "Transcendent [Seven Deadly Sins]",
  grade: "Transcendence",
  attribute: "STR",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  trait: {
    name: "Infinity of Transcendence",
    description: "Reduces allied heroes' Cooldown by 1s and restores 5 Energy every 5s. This skill's activation interval is not affected by cooldown increase or reduction."
  },

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 575% of Attack to the target. 50% chance to remove 1 buff from the target upon successful attack.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Reflect Curtain",
      description: "Grants Magic Concentration and DoT Immunity to allied heroes.",
      effect: {
        name: "Magic Concentration / DoT Immunity",
        description: "Magic Concentration: Increases final Attack by 5% and Crit Chance by 2% every 1s (Stacks up to 30 times). DoT Immunity: Shock, Acid, Bleed, and Burn Immunity."
      }
    },

    {
      category: "Ultimate Move",
      name: "Exterminate Ray",
      description: "Deals damage equal to 2258% of Attack to all enemies in a 2m x 7m area in front of self. Final damage is increased by 35% for every 1 Magic Concentration buff applied to self upon attack. Inflicts Magic Erosion for 5s upon successful attack.",
      effect: {
        name: "Magic Erosion",
        description: "Decreases final Defense by 25%, Crit Resistance by 35%, and Crit Defense by 150%."
      }
    }
  ]
},
{
  name: "Grizzly Sin of Sloth King: Transcendent",

  icon: "https://i.imgur.com/fsETzae.png",

  affiliation: "Transcendent [Seven Deadly Sins]",
  grade: "Transcendence",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  trait: {
    name: "Wrath of the Fairy King",
    description: "Increases the final damage of allied heroes assigned to the team by 35% for every 1 allied hero that suffers a fatal blow during battle."
  },

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 325% of Attack to the target. Inflicts the target with Bind for 1s upon successful attack.",
      effect: {
        name: "Bind",
        description: "Unable to move for the duration of the effect."
      }
    },

    {
      category: "Special Skill",
      name: "Fairy Wind",
      description: "Grants Lv. 5 Spike and Magic Control to allied heroes.",
      effect: {
        name: "Lv. 5 Spike / Magic Control",
        description: "Lv. 5 Spike: Increases Crit Damage by 30%. Magic Control: Increases the final damage of skills by 30% when attacking disadvantage attribute targets."
      }
    },

    {
      category: "Ultimate Move",
      name: "Spirit Spear Chastiefol, Fourth Form: \"Sunflower\"",
      description: "Deals damage equal to 1363% of Attack to all enemies in a 4m x 8m area in front of self. Grants Lv. 5 Onslaught to allies for 10s upon attack.",
      effect: {
        name: "Lv. 5 Onslaught",
        description: "Increases final Attack by 20%."
      }
    }
  ]
},
{
  name: "Goat Sin of Lust Gowther: Transcendent",

  icon: "https://i.imgur.com/znhOwVH.png",

  affiliation: "Transcendent [Seven Deadly Sins]",
  grade: "Transcendence",
  attribute: "INT",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  trait: {
    name: "Mind Orchestrator",
    description: "When allies assigned to the team attacks, increases final damage by 20%, and upon allies being hit, decreases final damage taken by 20%."
  },

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 280% of Attack to the target. 35% chance to increase target's cooldowns by 1s upon successful attack.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Light Arrow",
      description: "Deals damage equal to 418% of Attack to the target every 5s. Restores 7 Energy and grants Lv. 5 Concentration and Lv. 5 Sturdy to allies for 3s upon attack.",
      effect: {
        name: "Lv. 5 Concentration / Lv. 5 Sturdy",
        description: "Lv. 5 Concentration: Increases final Accuracy by 15%. Lv. 5 Sturdy: Increases Critical Resistance by 20%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Rewrite Light",
      description: "Deals damage equal to 1280% of Attack to all enemies in a 3m x 8m area in front of self. Inflicts Emotion Transference for 5s and decreases allies' cooldowns by 2s upon successful attack.",
      effect: {
        name: "Emotion Transference",
        description: "Increases damage taken by 20%, non-recoverable (Treated as Infect)."
      }
    }
  ]
},
{
  name: "Serpent Sin of Envy Diane: Transcendent",

  icon: "https://i.imgur.com/feoQABK.png",

  affiliation: "Transcendent [Seven Deadly Sins]",
  grade: "Transcendence",
  attribute: "DEX",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  trait: {
    name: "Guardian of Earth",
    description: "Increases final Defense of Tank heroes assigned to the team by 30%, final Attack of DPS heroes by 25%, and final Accuracy of Support/Debuffer heroes by 25%."
  },

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 280% of Attack to the target. 50% chance to inflict Lv. 5 Resistance Down for 2s upon successful attack.",
      effect: {
        name: "Lv. 5 Resistance Down",
        description: "Decreases Crit Resistance by 22%."
      }
    },

    {
      category: "Special Skill",
      name: "Deadly Rock",
      description: "Deals damage equal to 428% of Attack to all enemies within 3m of the initial target every 5s. Inflicts Lv. 5 Break for 3s upon successful attack.",
      effect: {
        name: "Lv. 5 Break",
        description: "Decreases Crit Defense by 42%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Ground Gladius",
      description: "Deals damage equal to 1250% of Attack to all enemies within 4m of the initial target. Inflicts Lv. 5 Evasion Down for 5s, increases enemies' cooldowns by 2s, and grants Energy of Earth to allies for 5s upon successful attack.",
      effect: {
        name: "Lv. 5 Evasion Down / Energy of Earth",
        description: "Lv. 5 Evasion Down: Decreases final Evasion by 20%. Energy of Earth: Decreases damage taken from Reflects by 50% and increases Crit Defense by 50%."
      }
    }
  ]
},
{
  name: "Fox Sin of Greed Ban: Transcendent",

  icon: "https://i.imgur.com/GiysDXE.png",

  affiliation: "Transcendent [Seven Deadly Sins]",
  grade: "Transcendence",
  attribute: "VIT",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  trait: {
    name: "Fatal Strike",
    description: "Increases the Normal Skill Damage of [The Seven Deadly Sins] heroes assigned to the team by 35%, and increases Crit Damage by 35%."
  },

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 255% of Attack to the target. 50% chance to grant Lv. 5 Regeneration to allies for 2s upon successful attack.",
      effect: {
        name: "Lv. 5 Regeneration",
        description: "Restores HP by an amount equal to 26% of the caster's Attack every 1 second."
      }
    },

    {
      category: "Special Skill",
      name: "Rage Attack",
      description: "35% chance to deal damage equal to 400% of Attack to the target. Restores 3 Energy each time this skill deals damage to an enemy.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Vanishing Kill",
      description: "Deals damage equal to 1256% of Attack to all enemies in a 3m x 6m area in front of self. Removes 2 buffs on all enemies upon attack. Inflicts Snatch on the target for 10s and grants Snatch to self for 10s upon successful attack.",
      effect: {
        name: "Snatch",
        description: "Enemy: Decreases final Attack by 20%. Self: Increases final Attack by 25%."
      }
    }
  ]
},
{
  name: "The Dragon Sin of Wrath Meliodas: Transcendent",

  icon: "https://i.imgur.com/9zD3unS.png",

  affiliation: "Transcendent [Seven Deadly Sins]",
  grade: "Transcendence",
  attribute: "INT",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  trait: {
    name: "Rule of the Deadly Sins",
    description: "Increases final Attack of [The Seven Deadly Sins] heroes assigned to the deck by 20%, and increases final Accuracy by 20%."
  },

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 150% of Attack to the target. Grants Lv. 5 Sever to self for 2s upon successful attack.",
      effect: {
        name: "Lv. 5 Sever",
        description: "Increases Crit Chance by 20%."
      }
    },

    {
      category: "Special Skill",
      name: "Blaze Burst",
      description: "Upon landing a Critical Hit, deals damage equal to 228% of Attack to the target and reduces own cooldowns by 1s.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Virtual Body Doubles",
      description: "Deals damage equal to 967% of Attack to all enemies within 3m of the initial target. Grants Triple Step to self for 7s upon successful attack.",
      effect: {
        name: "Triple Step",
        description: "Increases Crit Chance by 30% and Attack Speed by 20%."
      }
    }
  ]
},

  {
    name: "Eternal Reincarnation Elizabeth",
    icon: "https://i.imgur.com/WrdRiPq.png",
    affiliation: "Guardians of Liones",
    grade: "Legendary",
    attribute: "VIT",
    type: "Support",
    tier: "SS",
 recommendedPotential: "Full Accuracy",

    skills: [
      {
        category: "Normal Skill",
        name: "Spiral Light",
        description: "Deals damage equal to 575% of Attack to the target. 40% chance to grant Lv. 5 Regeneration to the ally with the lowest HP for 2s upon successful attack.",
        effect: {
          name: "Lv. 5 Regeneration",
          description: "Restores HP by an amount equal to 26% of the caster's Attack every 1 second(s)."
        }
      },
      {
        category: "Special Skill",
        name: "Vali of Light",
        description: "Deals damage equal to 782% of Attack to all enemies within 3m x 8m of self every 5s. Final damage is increased by 10% for each 1% of the caster's remaining HP upon attack.",
        effect: null
      },
      {
        category: "Passive",
        name: "Sacred Prayer",
        description: "Grants Blessing of Reincarnation to allied heroes for 3s every 5s. This skill's activation interval is not affected by cooldown increase or reduction.",
        effect: {
          name: "Blessing of Reincarnation",
          description: "Increases final damage by 200% upon attack, and upon being hit, instantly recovers HP equal to 35% of damage taken upon attack."
        }
      },
      {
        category: "Ultimate Move",
        name: "Jonah's Ordeal",
        description: "Deals damage equal to 1952% of Attack to all enemies within 6m of the initial target. Restores 12 Energy and final damage is increased by 100% for every 1 debuff applied to the target upon attack.",
        effect: null
      }
    ]
  },

{
  name: "Mage Chandler",

  icon: "https://i.imgur.com/PRWro58.png",

  affiliation: "Ancient Demon",
  grade: "Legendary",
  attribute: "STR",
  type: "Debuffer",
  tier: "S",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 380% of Attack to the target. Increases the Attack Speed of the heroes Meliodas/Chandler assigned to the team by 40%, and increases their final damage by 50% upon attack. (Stacks up to 5 times).",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Death Rain",
      description: "Deals damage equal to 660% of Attack to all enemies in a 4m x 8m area in front of self over 3 hits every 5s. Increases the Attack Speed of the heroes Meliodas/Chandler assigned to the team by 40%, and increases their final damage by 50% upon attack. (Stacks up to 5 times). Inflicts Darkness for 3s upon successful attack.",
      effect: {
        name: "Darkness",
        description: "Decreases final Accuracy by 50% and decreases Crit Defense by 200% (Treated as Break)."
      }
    },

    {
      category: "Ultimate Move",
      name: "Meteor Works",
      description: "Deals damage equal to 1626% of Attack to all enemies within 6m of the initial target. This skill's final damage is increased by 500% against targets suffering from Darkness. Increases the Attack Speed of the heroes Meliodas/Chandler assigned to the team by 40%, and increases their final damage by 50% upon attack. (Stacks up to 5 times). Restores own HP equal to 30% of the damage dealt upon successful attack.",
      effect: null
    }
   ]
  },

{
  name: "Golden Wings Elaine",

  icon: "https://i.imgur.com/5keheT6.png",

  affiliation: "Guardians of the Forest",
  grade: "Legendary",
  attribute: "DEX",
  type: "Debuffer",
  tier: "S",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Pinpoint Strike",
      description: "Deals damage equal to 680% of Attack to the target. Increases the Final Attack of the heroes Ban/Elaine assigned to the team by 50%, and increases their final damage by 50% upon attack. (Stacks up to 5 times).",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Blessing of the Fairy",
      description: "Grants Fairy's Protection to allies for 3s every 5s. Increases the Final Attack of the heroes Ban/Elaine assigned to the team by 50%, and increases their final damage by 50% upon attack when the skill is used. (Stacks up to 5 times).",
      effect: {
        name: "Fairy's Protection",
        description: "Increases final Accuracy by 35%, Immune to Infection and Paralysis."
      }
    },

    {
      category: "Ultimate Move",
      name: "Tempest Falls",
      description: "Deals damage equal to 2285% of Attack to all enemies within 4m of the initial target. Increases the Final Attack of the heroes Ban/Elaine assigned to the team by 50%, and increases their final damage by 50% upon attack. (Stacks up to 5 times). Inflicts Vow Of Golden Wings for 5s upon successful attack.",
      effect: {
        name: "Vow Of Golden Wings",
        description: "Decreases Crit Damage by 200%, and increases final damage taken by 100%."
      }
    }
  ]
 },
{
  name: "Guardian Griamore",

  icon: "https://i.imgur.com/yODYMNy.png",

  affiliation: "Guardians of Liones",
  grade: "Legendary",
  attribute: "VIT",
  type: "Tank",
  tier: "A",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 754% of Attack to the target. 50% chance to grant Lv. 5 Steel to self for 2s upon successful attack.",
      effect: {
        name: "Lv. 5 Steel",
        description: "Increases final Defense by 20%."
      }
    },

    {
      category: "Special Skill",
      name: "Shell Blast",
      description: "Upon being hit 3 time(s), deals damage equal to 872% of Attack to the target, then deals damage equal to 2180% of Attack to all enemies within 3.5m. Increases Defense by 50% and decreases received final Damage by 10% upon attack. (Stacks up to 5 times).",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Wailing Wall",
      description: "Taunts all enemies within 5m of self for 3s, and upon being hit, does not receive Critical Hit for 7s. Grants Guardian Knight's Pride to allies for 5s upon attack.",
      effect: {
        name: "Guardian Knight's Pride",
        description: "Increases final Attack by 100%, final Defense by 200%, and Crit Defense by 300%."
      }
    }
  ]
},
{
  name: "Purgatory Ban",

  icon: "https://i.imgur.com/ZAfQIGI.png",

  affiliation: "Purgatory",
  grade: "Legendary",
  attribute: "INT",
  type: "DPS",
  tier: "S",
 recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 415% of Attack to the target over 3 hits. 50% chance to grant Swiftness to self for 2s upon successful attack.",
      effect: {
        name: "Swiftness",
        description: "Increases final Attack by 15% and Attack Speed by 5%. (Stacks up to 15 times)."
      }
    },

    {
      category: "Special Skill",
      name: "Heart Crusher",
      description: "Upon successfully landing 7 basic attacks, deals damage equal to 715% of Attack to all enemies in a 4m x 8m area in front of self. Inflicts targets hit with Trace of Purgatory for 3s upon successful attack, and final damage is increased by 1500% against targets in a barrier state.",
      effect: {
        name: "Trace of Purgatory",
        description: "Decreases final Attack by 20%, and increases final damage taken by 120%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Crazy Hunt",
      description: "Deals damage equal to 1727% of Attack to all enemies within 4m of the initial target. Grants Survivor of Purgatory to self for 7s upon attack, and final damage is increased by 2000% against targets in a barrier state.",
      effect: {
        name: "Survivor of Purgatory",
        description: "Increases final Attack by 200%, and increases final damage by 50% for every 1 buff applied to self. (Max 10)."
      }
    }
  ]
},
{
  name: "Tarmiel of Ocean",

  icon: "https://i.imgur.com/Htk78tE.png",

  affiliation: "The Four Archangels",
  grade: "Legendary",
  attribute: "DEX",
  type: "Support",
  tier: "SS",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 315% of Attack to the target. Restores 5 Energy upon successful attack.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Ark Shield",
      description: "Grants Protection of the Deep Sea to allies for 3s every 5s.",
      effect: {
        name: "Protection of the Deep Sea",
        description: "Nullifies damage taken 1 time(s). Upon being hit, damage taken does not exceed 45% of Max HP."
      }
    },

    {
      category: "Ultimate Move",
      name: "Ark",
      description: "Deals damage equal to 1318% of Attack to all enemies within 4m of the initial target. Restores allies' HP by an amount equal to 685% of Attack upon attack.",
      effect: null
    }
  ]
},
{
  name: "Traitor Meliodas",

  icon: "https://i.imgur.com/nDLxLlK.png",

  affiliation: "Holy Warrior",
  grade: "Legendary",
  attribute: "STR",
  type: "DPS",
  tier: "SS",
 recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Torso Cut",
      description: "Deals damage equal to 346% of Attack to the target. Grants Will of Betrayal to self upon attack.",
      effect: {
        name: "Will of Betrayal",
        description: "Ignores target's Evasion by 10%, ignores Crit Resistance by 10%, and ignores Crit Defense by 3% upon attack (Stacks up to 10 times)."
      }
    },

    {
      category: "Special Skill",
      name: "Spinning Slash",
      description: "45% chance to deal damage equal to 582% of Attack to all enemies within 3m of the initial target. Grants Will of Betrayal to self and decreases own cooldowns by 2s upon attack. Inflicts Brand of Betrayal for 3s upon attack.",
      effect: {
        name: "Brand of Betrayal",
        description: "Decreases final Attack by 25% and decreases final Defense by 25%."
      }
    },

    {
      category: "Passive",
      name: "Unified Offense & Defense",
      description: "When the caster's Max HP is 50% or above, final Attack increases by 100%, and when Max HP is 50% or below, the caster does not take Critical Hit damage when hit.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Cataclysm",
      description: "Deals damage equal to 1440% of Attack to all enemies within 5m of the initial target. Grants Will of Betrayal to self upon attack, and final damage is increased by 10% for every 1 Will of Betrayal buff applied to self. Final damage is increased by 100% against targets suffering from Brand of Betrayal.",
      effect: {
        name: "Will of Betrayal",
        description: "Ignores target's Evasion by 10%, ignores Crit Resistance by 10%, and ignores Crit Defense by 3% upon attack (Stacks up to 10 times)."
      }
    }
  ]
},
{
  name: "Berserk Estarossa",

  icon: "https://i.imgur.com/g5raH5A.png",

  affiliation: "Swallowed By Darkness",
  grade: "Legendary",
  attribute: "DEX",
  type: "Debuffer",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 280% of Attack to the target. 50% chance to grant Undead to self for 2s upon successful attack.",
      effect: {
        name: "Undead",
        description: "Revives with 75% of HP upon receiving a fatal blow."
      }
    },

    {
      category: "Special Skill",
      name: "Frenzy",
      description: "Deals damage equal to 500% of Attack to all enemies in a 3m x 10m area in front of self every 35s. Inflicts targets hit with Encroach and Lv. 5 Evasion Down for 3s upon successful attack.",
      effect: {
        name: "Encroach / Lv. 5 Evasion Down",
        description: "Encroach: Deals damage equal to 3% of the target's remaining HP every 1s, cannot obtain buffs (Treated as Shock). Lv. 5 Evasion Down: Decreases final Evasion by 20%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Tentacle Blade",
      description: "Deals damage equal to 1346% of Attack to all enemies within 4m of self. Grants Out of Control to self for 5s upon successful attack.",
      effect: {
        name: "Out of Control",
        description: "Increases final Attack by 120%, Crit Chance by 40%, and Attack Speed by 80%."
      }
    }
  ]
},
{
  name: "Hawk & Elizabeth",

  icon: "https://i.imgur.com/f1U1loy.png",

  affiliation: "[Boar Hat] Tavern",
  grade: "Legendary",
  attribute: "STR",
  type: "Support",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Rolling Ham Attack",
      description: "Deals damage equal to 305% of Attack to the target. 35% chance to grant Solidify to allies for 3s each time this skill deals damage to an enemy.",
      effect: {
        name: "Solidify",
        description: "Increases final Attack by 2%, increases Crit Defense by 5% (Stacks up to 50 times)."
      }
    },

    {
      category: "Special Skill",
      name: "Super Hawk Illusion",
      description: "40% chance to deal damage equal to 554% of Attack within 3m of the initial target. Grants Solidify to allies for 3s each time this skill deals damage to an enemy.",
      effect: {
        name: "Solidify",
        description: "Increases final Attack by 2%, increases Crit Defense by 5% (Stacks up to 50 times)."
      }
    },

    {
      category: "Ultimate Move",
      name: "Fire Breath",
      description: "Deals damage equal to 1446% of Attack to all enemies in a 3m x 8m area in front of self. Grants Solidify to allies for 3s each time this skill deals damage to an enemy, and final damage is increased by 20% for every 1 Solidify buff applied to self.",
      effect: {
        name: "Solidify",
        description: "Increases final Attack by 2%, increases Crit Defense by 5% (Stacks up to 50 times)."
      }
    }
  ]
},
{
  name: "Prince of Darkness Zeldris",

  icon: "https://i.imgur.com/TqET0V5.png",

  affiliation: "Another Side of the [Ten Commandments]",
  grade: "Legendary",
  attribute: "VIT",
  type: "DPS",
 recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Overload Slash",
      description: "Deals damage equal to 275% of Attack to the target. 50% chance to decrease cooldowns by 0.5s upon successful attack.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Eclipse Edge",
      description: "Deals damage equal to 567% of Attack to all enemies within 3m of the initial target every 5s. Final damage increases by 30% for every 1 Nebula of Darkness debuff applied to the target upon attack.",
      effect: null
    },

    {
      category: "Passive",
      name: "Dark Area",
      description: "Increases final Accuracy of allied heroes by 50%. Increases damage dealt by Normal Skills by 50%.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Ominous Nebula",
      description: "Pulls in enemies within 12m of self gradually (Treated as Knockback), and deals damage equal to 1317% of Attack to all enemies within 6m of self over 5 hits. Deals additional damage equal to 2% of the target's Max HP each time this skill does damage. Grants Crowd Control Immunity to self for 3s upon attack. Inflicts Nebula of Darkness upon successful attack.",
      effect: {
        name: "Crowd Control Immunity / Nebula of Darkness",
        description: "Crowd Control Immunity: Immune to all Crowd Control (Bind, Silence, Paralysis, Infection, Stun, Flinch, Freeze, Petrify, Knockback) and Slow effects. Nebula of Darkness: Decreases Crit Resistance by 5% and decreases Attack Speed by 2% (Stacks up to 15 times)."
      }
    }
  ]
},
{
  name: "Sariel of Tornado",

  icon: "https://i.imgur.com/NW1P4ez.png",

  affiliation: "The Four Archangels",
  grade: "Legendary",
  attribute: "INT",
  type: "DPS",
 recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 270% of Attack to the target. Grants Wind Pressure to allies for 2s upon successful attack.",
      effect: {
        name: "Wind Pressure",
        description: "Increases final Attack by 5% and final Accuracy by 4%. (Stacks up to 10 times)."
      }
    },

    {
      category: "Special Skill",
      name: "Tornado",
      description: "Deals damage equal to 460% of Attack to all enemies in a 3m x 10m area in front of self every 5s. Removes 1 buff from the target and final damage is increased by 5% for each 1% of the caster's remaining HP upon successful attack.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Twin Wind Blade",
      description: "Deals damage equal to 1237% of Attack to all enemies within 4m of the initial target. Grants Turbulence to self for 5s upon attack.",
      effect: {
        name: "Turbulence",
        description: "Ignores target's Defense by 90% and ignores Crit Defense by 30% upon attack."
      }
    }
  ]
},
{
  name: "Excalibur Arthur",

  icon: "https://i.imgur.com/bAt5sgi.png",

  affiliation: "Camelot",
  grade: "Legendary",
  attribute: "DEX",
  type: "Tank",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 264% of Attack to the target. 50% chance to grant Lv. 5 Steel to self for 2s upon successful attack.",
      effect: {
        name: "Lv. 5 Steel",
        description: "Increases final Defense by 20%."
      }
    },

    {
      category: "Special Skill",
      name: "The King’s Slash",
      description: "Deals damage equal to 440% of Attack to all enemies within 3m of the initial target every 5s. Restores 5 Energy upon successful attack. Inflicts the target with Brand of the Divine Sword for 3s upon successful attack, and this hero cannot have debuffs removed by debuff cancel effects for 3s.",
      effect: {
        name: "Brand of the Divine Sword",
        description: "Deals damage equal to 3% of the target's remaining HP every 1s, non-recoverable (Treated as Acid)."
      }
    },

    {
      category: "Ultimate Move",
      name: "The King’s Judgment",
      description: "Deals damage equal to 1288% of Attack to all enemies in a 3m x 8m area in front of self. Grants King’s Timing and Damage Restriction by 50% to allies for 5s upon attack.",
      effect: {
        name: "King’s Timing / Damage Restriction",
        description: "King’s Timing: Increases final Attack by 25%. Upon being hit, Critical Hit does not occur. Damage Restriction: Upon being hit, damage taken does not exceed a certain amount of Max HP."
      }
    }
  ]
},
{
  name: "Ludociel of Flash",

  icon: "https://i.imgur.com/CT4IVQM.png",

  affiliation: "The Four Archangels",
  grade: "Legendary",
  attribute: "STR",
  type: "DPS",
 recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 280% of Attack to the target. Inflicts Lv. 5 Blind for 1.5s upon successful attack.",
      effect: {
        name: "Lv. 5 Blind",
        description: "Decreases final Accuracy by 20%."
      }
    },

    {
      category: "Special Skill",
      name: "Holy Beam",
      description: "Deals damage equal to 464% of Attack to all enemies within 3m of the initial target every 5s. Final damage is increased by 100% against targets with buffs.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Goddess Holy Ark",
      description: "Deals damage equal to 1262% of Attack to all enemies in a 4m x 12m area in front of self. Grants Blessing of the Goddess to allies for 5s upon successful attack. Ludociel's final Attack increases by 30% for every 1 buff on allies.",
      effect: {
        name: "Blessing of the Goddess",
        description: "Increases Attack Speed by 15% and restores HP by an amount equal to 4% of Max HP every 1s."
      }
    }
  ]
},
{
  name: "Knight of Storm Howzer",

  icon: "https://i.imgur.com/kMPaLW9.png",

  affiliation: "Guardians of Liones",
  grade: "Legendary",
  attribute: "VIT",
  type: "Debuffer",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 205% of Attack to the target. Inflicts Weathering upon successful attack. If the target is a Stage Boss, final damage increases by 800%.",
      effect: {
        name: "Weathering",
        description: "Increases final damage taken by 2% (Stacks up to 10 times)."
      }
    },

    {
      category: "Special Skill",
      name: "Tempest Javelin",
      description: "Deals damage equal to 371% of Attack to all enemies in a 3m x 10m area in front of self every 5s. Inflicts Headwind for 3s and Paralysis for 1s upon successful attack. If the target is a Stage Boss, final damage is increased by 80% for each Weathering debuff inflicted on the target.",
      effect: {
        name: "Headwind / Paralysis",
        description: "Headwind: Decreases final Evasion by 25% and final Crit Chance by 25%. Paralysis: Unable to move or attack for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Breakthrough",
      description: "Deals damage equal to 1163% of Attack to all enemies within 6m of the target. Inflicts Lv. 5 Bleed and Lv. 3 Weaken for 10s upon successful attack. If the target is a Stage Boss, final damage is increased by 100% for each Weathering debuff inflicted on the target.",
      effect: {
        name: "Lv. 5 Bleed / Lv. 3 Weaken",
        description: "Lv. 5 Bleed: Deals damage equal to 30% every second. Lv. 3 Weaken: Decreases final Attack by 18%."
      }
    }
  ]
},
{
  name: "Small Wings King",

  icon: "https://i.imgur.com/CeH8XVe.png",

  affiliation: "Guardians of the Forest",
  grade: "Legendary",
  attribute: "INT",
  type: "Support",
 recommendedPotential: "Full Accuracy",
  skills: [
    {
      category: "Normal Skill",
      name: "Guardian Punch",
      description: "Deals damage equal to 225% of Attack to the target. 50% chance to remove 1 buff from the target upon successful attack.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "True Spirit Spear Chastiefol, Fifth Form: Increase",
      description: "Deals damage equal to 445% of Attack to all enemies in a 4m x 6m area in front of self every 5s. Inflicts Amplify for 3s upon successful attack.",
      effect: {
        name: "Amplify",
        description: "Deals damage equal to 1.5% of the target's Max HP every 1s and reduces Crit Defense by 100% (Treated as Bleed)."
      }
    },

    {
      category: "Passive",
      name: "The Sign of Growth",
      description: "Grants Lv. 5 Veil and Lv. 5 Sever to allied heroes for 5s every 10s.",
      effect: {
        name: "Lv. 5 Veil / Lv. 5 Sever",
        description: "Lv. 5 Veil: Absorbs damage equal to 25% of the caster's HP. Lv. 5 Sever: Increases Crit Chance by 20%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Tyrant Tempest",
      description: "Deals damage equal to 1100% of Attack to all enemies in a 4m x 8m area in front of self. For every Bleed/Acid/Shock/Burn effect on target, final damage is increased by 100% upon successful attack.",
      effect: null
    }
  ]
},
{
  name: "Thunderbolt Gilthunder",

  icon: "https://i.imgur.com/Zv9s1qI.png",

  affiliation: "Guardians of Liones",
  grade: "Legendary",
  attribute: "STR",
  type: "Tank",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 229% of Attack to the target. Grants Lv. 2 Onslaught to self each time this skill deals damage to an enemy.",
      effect: {
        name: "Lv. 2 Onslaught",
        description: "Increases final Attack by 8% (Up to 10 stacks)."
      }
    },

    {
      category: "Special Skill",
      name: "Thunderbolt",
      description: "Upon landing a Critical Hit, deals damage equal to 394% of Attack to all enemies within 4m of self and inflicts Lv. 5 Shock for 3s. Restores own HP by an amount equal to 15% of Max HP, and grants Lv. 5 Spike to self for 3s upon successful attack.",
      effect: {
        name: "Lv. 5 Shock / Lv. 5 Spike",
        description: "Lv. 5 Shock: Deals damage equal to 25% every 1s, and decreases Attack Speed by 8%. Lv. 5 Spike: Increases Crit Damage by 30%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Lightning King Sword",
      description: "Deals damage equal to 1076% of Attack to all enemies within 6m of the initial target. Grants Lv. 3 Absolute Defense with effects that cannot be removed, Lv. 5 Sturdy, and Lv. 5 Elasticity to self for 5s. Grants Lightning King's Heavy Armor with effects that cannot be removed to allies for 5s. If the target is a Stage Boss, inflicts Lv. 5 Destruction for 5s.",
      effect: {
        name: "Lv. 3 Absolute Defense / Lightning King's Heavy Armor",
        description: "Lv. 3 Absolute Defense: Nullifies damage taken 5 time(s). Lightning King's Heavy Armor: Increases Crit Damage by 30%, and decreases final damage taken by 20%. Lv. 5 Sturdy: Increases Crit Resistance by 25%. Lv. 5 Elasticity: Increases Crit Defense by 25%. Lv. 5 Destruction: Decreases final Defense by 30%."
      }
    }
  ]
},
{
  name: "Assault Mode Meliodas",

  icon: "https://i.imgur.com/ZALuvxs.png",

  affiliation: "Swallowed By Darkness",
  grade: "Legendary",
  attribute: "VIT",
  type: "DPS",
 recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Dark Sword",
      description: "Deals damage equal to 270% of Attack to all enemies in a 2m x 4m area in front of self. Inflicts Lv. 5 Burn for 2s upon successful attack.",
      effect: {
        name: "Lv. 5 Burn",
        description: "Deals damage equal to 25% of the caster's Attack every 1 second(s) and decreases Crit Resistance by 10%."
      }
    },

    {
      category: "Special Skill",
      name: "1,000 Divine Cuts",
      description: "Every 5s, deals damage equal to 474% of Attack to all enemies within 6m of the initial target. Prioritizes attacking targets with the highest Attack. For every 1 buff on the target, final damage is increased by 35% upon attack. (Up to 5 will apply). Inflicts Lv. 4 Weaken for 3s upon successful attack.",
      effect: {
        name: "Lv. 4 Weaken",
        description: "Decreases final Attack by 24%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Dark Pressure",
      description: "Deals damage equal to 1302% of Attack to all enemies within 7m x 7m of self. For every 1 debuff on target, final damage is increased by 35% upon attack. (Up to 7 will apply). Restores own HP equal to 30% of the damage dealt and grants Power of Darkness upon successful attack.",
      effect: {
        name: "Power of Darkness",
        description: "Increases final Attack by 35%. Upon receiving a Critical Hit, decreases final damage taken by 15%. (Stacks up to 5 times)."
      }
    }
  ]
},
{
  name: "Armor of the Abyss Galland",

  icon: "https://i.imgur.com/9TP0hUy.png",

  affiliation: "Another Side of the [Ten Commandments]",
  grade: "Legendary",
  attribute: "STR",
  type: "Debuffer",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 205% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Conflagration",
      description: "Every 5s, deals damage equal to 339% of Attack to the target and prioritizes attacking heroes with the highest Attack. Removes all buffs from the target and inflicts Buff Block for 2s and Armor Breaker for 1s upon successful attack.",
      effect: {
        name: "Buff Block / Armor Breaker",
        description: "Buff Block: Cannot obtain buffs for the duration of the debuff. Armor Breaker: Deals damage equal to 3% of the target's remaining HP every 1s."
      }
    },

    {
      category: "Ultimate Move",
      name: "Absolute Helter Skelter",
      description: "Deals damage equal to 1172% of Attack to all enemies in a 4m x 6m area in front of self. Inflicts Brand of Perjury for 5s each time this skill deals damage to an enemy, and inflicts various debuffs for 2s on targets hit upon successful attack. 1st hit: Bind. 2nd hit: Bleed. 3rd hit: Infection. 4th hit: Break. This skill's final damage is increased by 30% for each Brand of Perjury inflicted on the target upon successful 4th hit.",
      effect: {
        name: "Brand of Perjury / Ultimate Debuffs",
        description: "Brand of Perjury: Decreases final Evasion by 6% and decreases Crit Resistance by 6% (Stacks up to 4 times). Bind: Unable to move for the duration of the effect. Bleed: Takes damage equal to 24% of Attack every 1s. Infection: Unable to restore HP for the duration of the effect. Break: Decreases Crit Defense by 24%."
      }
    }
  ]
},
{
  name: "\"The One\" Escanor",

  icon: "https://i.imgur.com/XrLmb35.png",

  affiliation: "Awaken, [Seven Deadly Sins]",
  grade: "Legendary",
  attribute: "DEX",
  type: "DPS",
 recommendedPotential: "Full Critical Damage",
  skills: [
    {
      category: "Normal Skill",
      name: "Super Slash",
      description: "Deals damage equal to 225% of Attack to the target. Final damage is increased by 2% for each 1% of the caster's diminished HP upon attack.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Supernova",
      description: "40% chance to deal damage equal to 248% of Attack to the target. Makes the target Flinch upon successful attack. Deals damage equal to 372% of Attack to all enemies in a 3m x 8m area in front of self. Final damage increases by 30% for every 1 buff applied to the target upon attack.",
      effect: null
    },

    {
      category: "Passive",
      name: "The One",
      description: "Deals damage equal to 2% of the target's remaining HP within 5m of self every 1s and this damage does not reflect. Grants Lv. 5 Onslaught and Debuff Block to self at all times. This effect cannot be removed.",
      effect: {
        name: "Lv. 5 Onslaught / Debuff Block",
        description: "Lv. 5 Onslaught: Increases final Attack by 20%. Debuff Block: Immune to debuffs for the duration of the buff."
      }
    },

    {
      category: "Ultimate Move",
      name: "Divine Sword Escanor",
      description: "Deals damage equal to 1317% of Attack to all enemies in a 4m x 6m area in front of self and this damage does not reflect. Final damage is increased by 4% for each 1% of the caster's remaining HP upon attack.",
      effect: null
    }
  ]
},
{
  name: "Martial Artist of Earth Drole",

  icon: "https://i.imgur.com/F7goDkC.png",

  affiliation: "Another Side of the [Ten Commandments]",
  grade: "Legendary",
  attribute: "INT",
  type: "Support",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Flurry",
      description: "Deals damage equal to 168% of Attack to the target. Grants Chaotic Barrage to self for 3s each time this skill deals damage to an enemy.",
      effect: {
        name: "Chaotic Barrage",
        description: "Increases final Attack by 3% and Attack Speed by 7.5% (Up to 10 stacks)."
      }
    },

    {
      category: "Special Skill",
      name: "Giga Pick",
      description: "35% chance to deal damage equal to 292% of Attack to the target and inflicts Lv. 2 Petrify for 1s. Restores 5 Energy and grants Patience to [The Ten Commandments] heroes for 5s upon attack.",
      effect: {
        name: "Lv. 2 Petrify / Patience",
        description: "Lv. 2 Petrify: Unable to move or attack for the duration of the effect and decreases Crit Resistance by 6%. Patience: Increases final Defense by 35% and final Accuracy by 35%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Ground Impact",
      description: "Deals damage equal to 1014% of Attack to all enemies within a 3m x 10m area in front of self. Grants Normal Skills Damage Increase to [The Ten Commandments] heroes for 10s and decreases cooldowns by 2.5s upon successful attack.",
      effect: {
        name: "Normal Skills Damage Increase",
        description: "Increases damage dealt by Normal Skills by 30%."
      }
    }
  ]
},
{
  name: "Crimson Flame Mage Monspeet",

  icon: "https://i.imgur.com/5Shkr2P.png",

  affiliation: "Another Side of the [Ten Commandments]",
  grade: "Legendary",
  attribute: "DEX",
  type: "Support",
 recommendedPotential: "Full Accuracy",
  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 168% of Attack to the target. Restores 2 Energy upon successful attack.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Flame Ball",
      description: "Deals damage equal to 240% of Attack to all enemies within 4m of the initial target every 5s. Grants Silence Immunity and Stun Immunity to allies for 3s upon attack, and removes 2 debuffs from allies.",
      effect: {
        name: "Silence Immunity / Stun Immunity",
        description: "Silence Immunity: Immune to Silence. Stun Immunity: Nullifies Stun."
      }
    },

    {
      category: "Ultimate Move",
      name: "Ash Dragon",
      description: "Deals damage equal to 1014% of Attack to all enemies within 8m of the initial target, prioritizing Support targets. Enemies hit have their cooldowns increased by 2s, and allies' cooldowns are decreased by 2s upon attack.",
      effect: null
    }
  ]
},
{
  name: "First Fairy King Gloxinia",

  icon: "https://i.imgur.com/aE81mlh.png",

  affiliation: "Another Side of the [Ten Commandments]",
  grade: "Legendary",
  attribute: "INT",
  type: "Tank",
 recommendedPotential: "Full Accuracy",
  skills: [
    {
      category: "Normal Skill",
      name: "Pinpoint Strike",
      description: "Deals damage equal to 188% of Attack to the target. Grants Extreme Fixation to self for 5s each time this skill deals damage to an enemy.",
      effect: {
        name: "Extreme Fixation",
        description: "Increases final Accuracy by 20% (Stacks up to 5 times)."
      }
    },

    {
      category: "Special Skill",
      name: "Emerald Sanctuary",
      description: "Upon landing a Critical Hit, taunts all enemies within 3m of the initial target for 3s and grants Damage Restriction to self for 3s.",
      effect: {
        name: "Damage Restriction / Taunt",
        description: "Damage Restriction: Upon being hit, all incoming damage is fixed at 0. Taunt: Taunted targets will temporarily prioritize attacking the caster of the Taunt."
      }
    },

    {
      category: "Ultimate Move",
      name: "Spirit Spear Basquias, Ninth Form: Death Thorn",
      description: "Deals damage equal to 900% of Attack to all enemies within 6m of the initial target. Inflicts Wither for 10s and grants Lv. 5 Sever to self for 10s upon successful attack.",
      effect: {
        name: "Wither / Lv. 5 Sever",
        description: "Wither: Deals damage equal to 95% of the caster's Defense every 1s and decreases final Defense by 30% (Treated as Destruction). Lv. 5 Sever: Increases Crit Chance by 20%."
      }
    }
  ]
},
{
  name: "Mage of Infinity Merlin",

  icon: "https://i.imgur.com/1xAsttw.png",

  affiliation: "Awaken, [Seven Deadly Sins]",
  grade: "Legendary",
  attribute: "STR",
  type: "DPS",
 recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 200% of Attack to the target. Grants Magic Awakening to self for 2s upon successful attack.",
      effect: {
        name: "Magic Awakening",
        description: "Increases final Attack by 7.5% and Attack Speed by 5% (Up to 20 stacks)."
      }
    },

    {
      category: "Special Skill",
      name: "Elemental Tornado",
      description: "Deals damage equal to 292% of Attack to all enemies within 6m of the initial target every 5s. Every time damage is dealt, the target is gradually pulled toward the center of the activated skill.",
      effect: null
    },

    {
      category: "Passive",
      name: "Weakness Point Analysis",
      description: "Increases the final damage of skills by 20% when allied hero attacks disadvantage attribute targets.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Max Infinite",
      description: "Deals damage equal to 1093% of Attack to all enemies in a 4m x 12m area in front of self. Applies different debuffs to enemies depending on their role for 2s upon successful attack.",
      effect: {
        name: "Role-Based Debuffs",
        description: "Tank: Petrify, unable to move or attack and decreases Crit Resistance by 20%. DPS: Stun, unable to move or attack. Support: Silence, unable to use Special Skills or Ultimates. Debuffer: Paralysis, unable to move or attack."
      }
    }
  ]
},
{
  name: "Holy Knight of Ice Jericho",

  icon: "https://i.imgur.com/8uTPKM6.png",

  affiliation: "Guardians of Liones",
  grade: "Legendary",
  attribute: "DEX",
  type: "Debuffer",
 recommendedPotential: "Full Accuracy",
  skills: [
    {
      category: "Normal Skill",
      name: "Pinpoint Strike",
      description: "Deals damage equal to 135% of Attack to the target. This skill's final damage is increased by 100% against targets suffering from Shiver. If the target is a Stage Boss, final damage increases by an additional 800%.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Ice Slash",
      description: "35% chance to deal damage equal to 256% of Attack to all enemies in a 4m x 4m area in front of self. Inflicts Lv. 5 Freeze for 1.5s against targets suffering from Shiver upon attack. If the target is a Stage Boss, final damage increases by an additional 900%.",
      effect: {
        name: "Lv. 5 Freeze",
        description: "Prevents movement or attacking for the duration of the effect and decreases Crit Defense by 25%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Freezing Rush",
      description: "Deals damage equal to 902% of Attack to all enemies in a 4m x 8m area in front of self. Inflicts Shiver for 5s upon successful attack. If the target is a Stage Boss, final damage increases by an additional 1000%.",
      effect: {
        name: "Shiver",
        description: "Decreases final Evasion by 25% and final Crit Chance by 25%."
      }
    }
  ]
},
{
  name: "Wandering Swordsman Meliodas",

  icon: "https://i.imgur.com/Zdn7J5X.png",

  affiliation: "[Seven Deadly Sins], Transform!",
  grade: "Legendary",
  attribute: "VIT",
  type: "DPS",
 recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 150% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Triple Avatar",
      description: "Every 5s, deals damage equal to 258% of Attack to all enemies within 4m of the initial target. Grants Damage Restriction to self for 3s upon attack, and has a 40% chance to decrease cooldowns by 1.5s every time damage is dealt to the target.",
      effect: {
        name: "Damage Restriction",
        description: "Upon being hit, all incoming damage is fixed at 1."
      }
    },

    {
      category: "Ultimate Move",
      name: "Enchant: Hell Blaze",
      description: "Deals damage equal to 967% of Attack to all enemies in a 3m x 12m area in front of self. Grants Weapon Enhancement to self and inflicts Dark Fire for 5s upon successful attack.",
      effect: {
        name: "Weapon Enhancement / Dark Fire",
        description: "Weapon Enhancement: Increases final Attack by 12% and final Crit Chance by 5% (Stacks up to 10 times). Dark Fire: Deals damage equal to 100% of the caster's Attack every 1s, non-recoverable (Treated as Acid)."
      }
    }
  ]
},
{
  name: "Mad Scientist Valenti",

  icon: "https://i.imgur.com/NWnrCnU.png",

  affiliation: "[Seven Catastrophes]",
  grade: "Legendary",
  attribute: "INT",
  type: "Debuffer",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Pinpoint Strike",
      description: "Deals damage equal to 108% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Genesis",
      description: "Every 5s, deals damage equal to 210% of Attack to all enemies within 4m of the initial target. Inflicts Bind for 0.6s and inflicts Seven Deadly Sins heroes with Dark Matter for 3s upon successful attack.",
      effect: {
        name: "Bind / Dark Matter",
        description: "Bind: Unable to move for the duration of the effect. Dark Matter: Decreases final Attack by 15% and increases final Damage taken by 15%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Maxwell's Goblin",
      description: "Deals damage equal to 886% of Attack to all enemies within 6m of the initial target. Inflicts Electromagnetic Field for 10s upon successful attack.",
      effect: {
        name: "Electromagnetic Field",
        description: "Deals damage equal to 50% of the caster's Attack every 1s and decreases Attack Speed by 15% (Treated as Shock)."
      }
    }
  ]
},
{
  name: "White Wings Elizabeth",

  icon: "https://i.imgur.com/Ppvi5wa.png",

  affiliation: "Goddess Warrior",
  grade: "Legendary",
  attribute: "STR",
  type: "Support",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Pinpoint Strike",
      description: "Deals damage equal to 283% of Attack to the target. 40% chance to grant Hyper Regeneration to allies for 2s upon successful attack.",
      effect: {
        name: "Hyper Regeneration",
        description: "Restores HP by an amount equal to 2.5% of the hero's Max HP every 1 second(s)."
      }
    },

    {
      category: "Special Skill",
      name: "Goddess Bless",
      description: "Grants Triumph to allies and restores their Energy by 5 for 3s every 5s.",
      effect: {
        name: "Triumph",
        description: "Increases final damage by 50% for every 1 debuff applied to self. (Max 3)."
      }
    },

    {
      category: "Passive",
      name: "Indomitable Will",
      description: "The first time this hero suffers a fatal blow, grants Lv. 5 Revive to self.",
      effect: {
        name: "Lv. 5 Revive",
        description: "Upon receiving a fatal blow for the first time, revives with 100% of Max HP."
      }
    },

    {
      category: "Ultimate Move",
      name: "Goddess Pattern",
      description: "Restores allies' Energy by 10 upon using the skill. Inflicts allies with Reflect for 3s, reflecting 35% of the damage taken back at the attacker upon being hit.",
      effect: {
        name: "Reflect",
        description: "Upon being hit, reflects a portion of the damage taken back at the attacker."
      }
    }
  ]
},
{
  name: "Dark Fighter Ban",

  icon: "https://i.imgur.com/W5Ur7Em.png",

  affiliation: "[Seven Deadly Sins], Transform!",
  grade: "Legendary",
  attribute: "VIT",
  type: "Debuffer",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Pinpoint Strike",
      description: "Deals damage equal to 115% of Attack to the target. 40% chance to grant Undead to self for 2s upon successful attack.",
      effect: {
        name: "Undead",
        description: "Revives with 50% of HP upon receiving a fatal blow."
      }
    },

    {
      category: "Special Skill",
      name: "Mana Drain",
      description: "Deals damage equal to 225% of Attack to all enemies in a 3m x 8m area in front of self every 5s. Removes 5 Energy from the target and restores allies' Energy by 5 upon attack. Inflicts Lv. 5 Evasion Down for 3s upon successful attack.",
      effect: {
        name: "Lv. 5 Evasion Down",
        description: "Decreases final Evasion by 20%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Fox Hunt",
      description: "Deals damage equal to 1014% of Attack to the target. Inflicts Heart Destruction upon successful attack.",
      effect: {
        name: "Heart Destruction",
        description: "Increases final damage taken by 20% (Stacks up to 3 times)."
      }
    }
  ]
},
{
  name: "Emperor of Light Escanor",

  icon: "https://i.imgur.com/GSyyIHh.png",

  affiliation: "[Seven Deadly Sins], Transform!",
  grade: "Legendary",
  attribute: "INT",
  type: "DPS",
 recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 120% of Attack to the target. 30% chance to decrease cooldowns by 0.5s upon successful attack.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "One at the Pinnacle",
      description: "Grants High Noon to self every 3s. When High Noon reaches max stacks, removes all debuffs from self and gains Debuff Block for 5s. Every time damage is dealt to the target, final damage increases by 15% for every 1 High Noon effect applied.",
      effect: {
        name: "High Noon / Debuff Block",
        description: "High Noon: Increases final Attack by 5% and final Accuracy by 5% (Stacks up to 5 times). Debuff Block: Immune to debuffs for the duration of the buff."
      }
    },

    {
      category: "Ultimate Move",
      name: "Cruel Sun",
      description: "Deals damage equal to 880% of Attack to all enemies within 6m of the initial target. Inflicts Lv. 5 Burn for 10s upon successful attack.",
      effect: {
        name: "Lv. 5 Burn",
        description: "Deals damage equal to 25% of the caster's Attack every 1 second(s) and decreases Crit Resistance by 10%."
      }
    }
  ]
},
{
  name: "Demonic Love Melascula",

  icon: "https://i.imgur.com/eatTCfG.png",

  affiliation: "Another Side of the [Ten Commandments]",
  grade: "Legendary",
  attribute: "DEX",
  type: "Support",
 recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 85% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Soul Gathering",
      description: "Deals damage equal to 200% of Attack to all enemies within 6m of self every 5s. Restores allies' HP by an amount equal to 312% of Attack and grants the ally with the lowest HP Lv. 5 Veil for 3s upon successful attack.",
      effect: {
        name: "Lv. 5 Veil",
        description: "Absorbs damage equal to 25% of the caster's HP."
      }
    },

    {
      category: "Ultimate Move",
      name: "Demon Flash",
      description: "Deals damage equal to 781% of Attack to all enemies in a 3m x 8m area in front of self. Grants Lv. 5 Concentration to allies for 10s and decreases Ten Commandments allies' cooldowns by 2s upon successful attack.",
      effect: {
        name: "Lv. 5 Concentration",
        description: "Increases final Accuracy by 15%."
      }
    }
  ]
},
{
  name: "Invasion Arrow Gowther",

  icon: "https://i.imgur.com/hVmLNFw.png",

  affiliation: "[Seven Deadly Sins], Transform!",
  grade: "Legendary",
  attribute: "STR",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Soul Shot",
      description: "Deals damage equal to 96% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Blackout",
      description: "Deals damage equal to 192% of Attack to all enemies within 6m of self every 5s. Inflicts Silence for 1s upon successful attack.",
      effect: {
        name: "Silence",
        description: "Unable to use Special Skills or Ultimates for the duration of the effect."
      }
    },

    {
      category: "Passive",
      name: "Invasion",
      description: "Lowers the target's Energy by 10 when using Special Skills or Ultimate.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Celestial Rain",
      description: "Deals damage equal to 830% of Attack to all enemies in a 4m x 9m area in front of self. Upon successful attack, inflicts Tank/DPS targets with Tampered Memories for 5s and Support/Debuffer targets with Memory Distortion for 5s.",
      effect: {
        name: "Memory Distortion / Tampered Memories",
        description: "Memory Distortion: Decreases final Defense by 30% and increases damage taken by 20%. Tampered Memories: Decreases final Attack by 30% and Crit Chance by 20%."
      }
    }
  ]
},
{
  name: "Dragon Slayer Derieri",

  icon: "https://i.imgur.com/hRMWr37.png",

  affiliation: "Another Side of the [Ten Commandments]",
  grade: "Legendary",
  attribute: "DEX",
  type: "Tank",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Punch",
      description: "Deals damage equal to 232% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Injection",
      description: "The hero gains Acuity for 3s every 5s. The first time this hero suffers a fatal blow, the hero gains Immortality for 10s.",
      effect: {
        name: "Acuity / Immortality",
        description: "Acuity: Increases final Accuracy by 50% and final Evasion by 50%. Immortality: Cannot die for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Heavy Strike",
      description: "Deals damage equal to 944% of Attack to all enemies within 5m of the initial target. Grants Dragon Scales to Tank allies for 5s and reduces their cooldowns by 2s upon successful attack.",
      effect: {
        name: "Dragon Scales",
        description: "Increases final Attack by 20% and final Defense by 20%."
      }
    }
  ]
},
{
  name: "Guardian of the Fairies Old Fart King",

  icon: "https://i.imgur.com/MLDeWz8.png",

  affiliation: "Guardians of the Forest",
  grade: "Legendary",
  attribute: "INT",
  type: "DPS",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Pinpoint Strike",
      description: "Deals damage equal to 105% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Spirit Spear Chastiefol, Fifth Form: Increase",
      description: "25% chance to deal damage equal to 192% of Attack to all enemies within 4m of the initial target. Inflicts Status Promotion for 4s upon successful attack, and every time damage is dealt to the target, inflicts Disaster for 4s.",
      effect: {
        name: "Status Promotion / Disaster",
        description: "Status Promotion: Deals damage equal to 1.25% of the target's remaining HP every 1 second(s). Disaster: Decreases final Evasion by 5% and decreases Crit Defense by 20% (Stacks up to 5 times)."
      }
    },

    {
      category: "Ultimate Move",
      name: "Guardian Punch",
      description: "Deals damage equal to 885% of Attack to all enemies in a 3m x 12m area in front of self. Final damage is increased by 20% for every stack of Disaster on the target upon successful attack.",
      effect: null
    }
  ]
},
{
  name: "Holy Maiden of the Forest Elaine",

  icon: "https://i.imgur.com/xV0YKX5.png",

  affiliation: "Guardians of the Forest",
  grade: "Legendary",
  attribute: "VIT",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 95% of Attack to all enemies within 2m of the initial target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Holy Maiden’s Blessing",
      description: "Every 5s, grants Lv. 5 Onslaught to VIT attribute allies and Fairy allies for 3s, and grants Fairy’s Protection to all allies for 3s.",
      effect: {
        name: "Lv. 5 Onslaught / Fairy’s Protection",
        description: "Lv. 5 Onslaught: Increases final Attack by 20%. Fairy’s Protection: Increases Crit Resistance by 15% and Crit Defense by 25%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Oracle Prayer",
      description: "Deals damage equal to 851% of Attack to all enemies within 4m of the initial target. Grants Ignore Attribute Damage to allies for 10s upon successful attack.",
      effect: {
        name: "Ignore Attribute Damage",
        description: "Ignores additional attribute damage from disadvantaged attributes."
      }
    }
  ]
},
{
  name: "[Demon King's Deputy] Zeldris",

  icon: "https://i.imgur.com/AvVHN1j.png",

  affiliation: "[The Ten Commandments]",
  grade: "Legendary",
  attribute: "INT",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Swiftness Slash",
      description: "Deals damage equal to 90% of Attack to the target. 20% chance to inflict Slash for 1s upon successful attack.",
      effect: {
        name: "Slash",
        description: "Decreases Crit Resistance by 5% and decreases Crit Defense by 20%."
      }
    },

    {
      category: "Special Skill",
      name: "Mega Destruction",
      description: "Upon landing normal skill 5 times, deals damage equal to 164% of Attack to all enemies within 3m of the initial target and grants Swiftness to self.",
      effect: {
        name: "Swiftness",
        description: "Increases Crit Chance by 5% and increases Attack Speed by 100% (Stacks up to 3 times)."
      }
    },

    {
      category: "Passive",
      name: "Dark Aura",
      description: "Grants Spike to Ten Commandments allies.",
      effect: {
        name: "Spike",
        description: "Increases Crit Damage by 8% per 1 ally that has received buffs."
      }
    },

    {
      category: "Ultimate Move",
      name: "Combo Smash",
      description: "Deals damage equal to 1880% of Attack to the target. Removes all buffs from targets hit upon successful attack.",
      effect: null
    }
  ]
},
{
  name: "Holy Night’s Illusion Lillia",

  icon: "https://i.imgur.com/Ev8T3gE.png",

  affiliation: "[Seven Catastrophes]",
  grade: "Legendary",
  attribute: "VIT",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 105% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Pathetique",
      description: "20% chance to deal damage equal to 128% of Attack to all enemies within 3m of the initial target. Upon successful attack, inflicts Silence for 1s on targets that are Seven Deadly Sins heroes.",
      effect: {
        name: "Silence",
        description: "Unable to use Special Skills or Ultimates for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Hello, Mr. Snowman",
      description: "Deals damage equal to 712% of Attack to all enemies within 4m of the initial target. Grants Star Force to allies for 10s and reduces the cooldowns of the ally with the lowest HP by 3.5s upon successful attack.",
      effect: {
        name: "Star Force",
        description: "Increases final Accuracy by 30%. Increases damage dealt by Normal Skills by 30%."
      }
    }
  ]
},
{
  name: "The Serpent Sin of Envy Diane",

  icon: "https://i.imgur.com/feoQABK.png",

  affiliation: "[The Seven Deadly Sins]",
  grade: "Legendary",
  attribute: "STR",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 80% of Attack to the target. 20% chance to inflict Lv. 2 Petrify for 1s upon successful attack.",
      effect: {
        name: "Lv. 2 Petrify",
        description: "Unable to move or attack for the duration of the effect and decreases Crit Resistance by 6%."
      }
    },

    {
      category: "Special Skill",
      name: "Deadly Rock",
      description: "Every 5s, deals damage equal to 132% of Attack to all enemies within 2m of the initial target. Prioritizes attacking VIT-attribute heroes. Inflicts Infect and Lv. 4 Blood for 3s upon successful attack.",
      effect: {
        name: "Infect / Lv. 4 Blood",
        description: "Infect: Unable to recover HP for the duration of the effect. Lv. 4 Blood: Deals damage equal to 27% of the caster's Attack every 1 second(s)."
      }
    },

    {
      category: "Ultimate Move",
      name: "Ground Gladius",
      description: "Deals damage equal to 772% of Attack to all enemies within 4m of the initial target. Inflicts Lv. 4 Evasion Down for 5s and increases cooldowns by 2s upon successful attack. Grants Earth’s Calling to self for 3s.",
      effect: {
        name: "Lv. 4 Evasion Down / Earth’s Calling",
        description: "Lv. 4 Evasion Down: Decreases final Evasion by 16%. Earth’s Calling: Increases final Attack Speed by 200%."
      }
    }
  ]
},
{
  name: "Pitch-Black Meliodas",

  icon: "https://i.imgur.com/ZUJqvUD.png",

  affiliation: "Swallowed By Darkness",
  grade: "Legendary",
  attribute: "DEX",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 115% of Attack to the target. Grants Extreme Fixation to self for 5s upon successful attack.",
      effect: {
        name: "Extreme Fixation",
        description: "Increases final Accuracy by 20% (Stacks up to 5 times)."
      }
    },

    {
      category: "Special Skill",
      name: "Dark Claw",
      description: "Upon landing a Critical Hit, deals damage equal to 234% of Attack to all enemies in a 4m x 6m area in front of self. This skill's final damage is increased by 30% for each debuff on the target and restores 3 Energy upon successful attack.",
      effect: null
    },

    {
      category: "Passive",
      name: "Berserk",
      description: "The first time this hero suffers a fatal blow, the hero gains Immortality for 3s.",
      effect: {
        name: "Immortality",
        description: "Cannot die for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Dark Explosion",
      description: "Deals damage equal to 1280% of Attack to all enemies within 6m of self over 5 hits. Inflicts various debuffs on targets hit upon successful attack. All debuffs last 5s.",
      effect: {
        name: "Ultimate Debuffs",
        description: "1st hit (Slow): Decreases Attack Speed by 10%. 2nd hit (Erosion): Decreases Crit Damage by 30%. 3rd hit (Weaken): Decreases final Attack by 20%. 4th hit (Disperse): Decreases Crit Chance by 15%. 5th hit (Blind): Decreases final Accuracy by 15%."
      }
    }
  ]
},
{
  name: "Elizabeth of Eternal Rebirth",

  icon: "https://i.imgur.com/U43eDNh.png",

 affiliation: "Liones's Hero",
  grade: "Legendary",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Pinpoint Strike",
      description: "Deals damage equal to 95% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Shining Impact",
      description: "Deals damage equal to 142% of Attack to the target every 5s, prioritizing DPS heroes. Inflicts Paralysis for 1.5s and restores allies' HP by an amount equal to 326% of Attack upon successful attack.",
      effect: {
        name: "Paralysis",
        description: "Unable to move or attack for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Brilliant Protection",
      description: "Grants Lv. 2 Absolute Defense to allies for 10s and removes all debuffs from allies.",
      effect: {
        name: "Lv. 2 Absolute Defense",
        description: "Nullifies damage taken 2 time(s)."
      }
    }
  ]
},
{
  name: "Estarossa of Love",

  icon: "https://i.imgur.com/WgESs6d.png",

  affiliation: "[The Ten Commandments]",
  grade: "Legendary",
  attribute: "VIT",
  type: "Tank",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 70% of Attack to the target. Grants Love to self for 2s each time this skill deals damage to an enemy.",
      effect: {
        name: "Love",
        description: "Increases final Defense by 20%."
      }
    },

    {
      category: "Special Skill",
      name: "Full Counter",
      description: "Every 5s, taunts all enemies within 3m of the initial target for 3s and grants Reflect to self for 3s, dealing damage equal to 164% of Attack back at attackers upon being hit.",
      effect: {
        name: "Reflect / Taunt",
        description: "Reflect: Upon being hit, reflects a portion of the damage taken back at the attacker. Taunt: Taunted targets will temporarily prioritize attacking the caster of the Taunt."
      }
    },

    {
      category: "Ultimate Move",
      name: "Blackout",
      description: "Deals damage equal to 1016% of Attack to the target. Grants Lv. 2 Regeneration to Ten Commandments allies for 10s upon successful attack.",
      effect: {
        name: "Lv. 2 Regeneration",
        description: "Restores HP by an amount equal to 13% of the caster's Attack every 1 second(s)."
      }
    }
  ]
},
{
  name: "The Boar Sin of Gluttony Merlin",

  icon: "https://i.imgur.com/V93qcI5.png",

  affiliation: "[The Seven Deadly Sins]",
  grade: "Legendary",
  attribute: "STR",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 100% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Reflect Curtain",
      description: "Grants Lv. 5 Sever and DoT Immunity (Acid/Burn) to STR-attribute and [Seven Deadly Sins] allies.",
      effect: {
        name: "Lv. 5 Sever / DoT Immunity (Acid/Burn)",
        description: "Lv. 5 Sever: Increases Crit Chance by 20%. DoT Immunity (Acid/Burn): Immune to Acid and Burn."
      }
    },

    {
      category: "Ultimate Move",
      name: "Exterminate Ray",
      description: "Deals damage equal to 892% of Attack to all enemies in a 1.5m x 7m area in front of self. Removes all buffs and Knocks Back targets hit upon successful attack.",
      effect: null
    }
  ]
},
{
  name: "Derieri of Purity",

  icon: "https://i.imgur.com/Wnm2cnv.png",

  affiliation: "[The Ten Commandments]",
  grade: "Legendary",
  attribute: "STR",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Prioritizes Support heroes and deals damage equal to 105% of Attack. Grants Combo Star to self for 2s each time this skill deals damage to an enemy.",
      effect: {
        name: "Combo Star",
        description: "Increases final Attack by 1.5% and Attack Speed by 2.5% (Stacks up to 20 times)."
      }
    },

    {
      category: "Special Skill",
      name: "Combo Star",
      description: "50% chance to prioritize Support heroes and deal damage equal to 228% of Attack. Grants Combo Star to self for 2s each time this skill deals damage to an enemy.",
      effect: {
        name: "Combo Star",
        description: "Increases final Attack by 1.5% and Attack Speed by 2.5% (Stacks up to 20 times)."
      }
    },

    {
      category: "Ultimate Move",
      name: "Heavy Impact",
      description: "Prioritizes Support heroes and deals damage equal to 876% of Attack to all enemies within 3m of self. Grants Combo Star to self for 2s each time this skill deals damage to an enemy.",
      effect: {
        name: "Combo Star",
        description: "Increases final Attack by 1.5% and Attack Speed by 2.5% (Stacks up to 20 times)."
      }
    }
  ]
},
{
  name: "The Lion Sin of Pride Escanor",

  icon: "https://i.imgur.com/ymNiE2M.png",

  affiliation: "[The Seven Deadly Sins]",
  grade: "Legendary",
  attribute: "VIT",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 99% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Blazing Sun",
      description: "Deals damage equal to 188% of Attack to all enemies within 2m of the initial target every 5s. Grants Sunshine to self for 5s each time this skill deals damage to an enemy.",
      effect: {
        name: "Sunshine",
        description: "Increases Crit Chance by 0.4% and Crit Damage by 0.8% (Stacks up to 30 times)."
      }
    },

    {
      category: "Ultimate Move",
      name: "Punishment",
      description: "Deals damage equal to 926% of Attack to all enemies in a 4m x 7m area in front of self. Grants Overwhelmed to self for 10s upon successful attack. This skill deals damage as if the hero has an attribute advantage against all attributes.",
      effect: {
        name: "Overwhelmed",
        description: "Increases final Attack by 15%."
      }
    }
  ]
},
{
  name: "The Goat Sin of Lust Gowther",

  icon: "https://i.imgur.com/znhOwVH.png",

  affiliation: "[The Seven Deadly Sins]",
  grade: "Legendary",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 94% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Light Arrow",
      description: "Deals damage equal to 181% of Attack to the target every 5s. Restores 5 Energy and grants Lv. 4 Concentration to allies for 10s upon successful attack.",
      effect: {
        name: "Lv. 4 Concentration",
        description: "Increases final Accuracy by 12%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Rewrite Light",
      description: "Deals damage equal to 760% of Attack to all enemies in a 2m x 6.5m area in front of self. Reduces allies' cooldowns by 2s upon successful attack. This skill's final damage is increased by 40% against STR-attribute targets.",
      effect: null
    }
  ]
},
{
  name: "Holy Knight Jericho",

  icon: "https://i.imgur.com/GamzYUF.png",

  affiliation: "Liones Holy Knight",
  grade: "Legendary",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 88% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Flash Strike",
      description: "Upon landing a Critical Hit, deals damage equal to 98% of Attack to the target. Grants Lv. 5 Onslaught to INT-attribute allies for 3s upon successful attack.",
      effect: {
        name: "Lv. 5 Onslaught",
        description: "Increases final Attack by 20%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Godspeed Bone Cutter",
      description: "Deals damage equal to 644% of Attack to the target. Grants Lv. 3 Swiftness to allies for 10s upon successful attack.",
      effect: {
        name: "Lv. 3 Swiftness",
        description: "Increases Attack Speed by 6%."
      }
    }
  ]
},
{
  name: "Diamond Holy Knight Gilthunder",

  icon: "https://i.imgur.com/livEAjA.png",

  affiliation: "Liones's Hero",
  grade: "Legendary",
  attribute: "INT",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 64% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Thunder Scream Strike",
      description: "Upon landing a Critical Hit, deals damage equal to 149% of Attack to all enemies within 3m of self. Inflicts targets hit with Lv. 4 Shock for 3s upon successful attack.",
      effect: {
        name: "Lv. 4 Shock",
        description: "Deals damage equal to 22% of the caster's Attack every 1 second(s) and decreases Attack Speed by 6%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Lightning King Iron Hammer",
      description: "Deals damage equal to 658% of Attack to the target. Inflicts the target with Lv. 5 Break for 10s upon successful attack.",
      effect: {
        name: "Lv. 5 Break",
        description: "Decreases Crit Defense by 42%."
      }
    }
  ]
},
{
  name: "Sapphire Holy Knight Griamore",

  icon: "https://i.imgur.com/7mXzpr8.png",

  affiliation: "Liones's Hero",
  grade: "Legendary",
  attribute: "INT",
  type: "Tank",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 67% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Wall",
      description: "Grants Lv. 5 Veil to self for 3s every 5s.",
      effect: {
        name: "Lv. 5 Veil",
        description: "Absorbs damage equal to 25% of the caster's HP."
      }
    },

    {
      category: "Ultimate Move",
      name: "Burning Strike",
      description: "Deals damage equal to 591% of Attack to the target. Inflicts the target with Lv. 5 Break for 10s upon successful attack.",
      effect: {
        name: "Lv. 5 Break",
        description: "Decreases Crit Defense by 42%."
      }
    }
  ]
},
{
  name: "Diamond Holy Knight Howzer",

  icon: "https://i.imgur.com/rtRAQuD.png",

  affiliation: "Liones's Hero",
  grade: "Legendary",
  attribute: "INT",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 100% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Super Cyclone",
      description: "Deals damage equal to 142% of Attack to the target every 5s. Grants Lv. 5 Spike to self for 3s upon successful attack.",
      effect: {
        name: "Lv. 5 Spike",
        description: "Increases Crit Damage by 30%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Rising Tornado",
      description: "Deals damage equal to 772% of Attack to the target. Inflicts the target with Lv. 3 Resistance Down for 10s and grants Lv. 3 Swiftness to self for 10s upon successful attack.",
      effect: {
        name: "Lv. 3 Resistance Down / Lv. 3 Swiftness",
        description: "Lv. 3 Resistance Down: Decreases Crit Resistance by 14%. Lv. 3 Swiftness: Increases Attack Speed by 6%."
      }
    }
  ]
},
{
  name: "[Roars of Dawn] Slater",

  icon: "https://i.imgur.com/geAgbvb.png",

  affiliation: "[Roars of Dawn]",
  grade: "Legendary",
  attribute: "DEX",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 75% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Iron Slash",
      description: "Upon landing a Critical Hit, deals damage equal to 87% of Attack to all enemies in a 2m x 4m area in front of self. Inflicts targets hit with Lv. 4 Bleed for 3s upon successful attack.",
      effect: {
        name: "Lv. 4 Bleed",
        description: "Deals damage equal to 27% of the caster's Attack every 1 second(s)."
      }
    },

    {
      category: "Ultimate Move",
      name: "Overpower",
      description: "Deals damage equal to 549% of Attack to all enemies in a 2m x 4m area in front of self. Inflicts targets hit with Overpower for 5s upon successful attack.",
      effect: {
        name: "Overpower",
        description: "Decreases final Defense by 30% and decreases Crit Chance by 12%."
      }
    }
  ]
},
{
  name: "Grayroad of Pacifism",

  icon: "https://i.imgur.com/aZuHQCk.png",

  affiliation: "[The Ten Commandments]",
  grade: "Legendary",
  attribute: "DEX",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 95% of Attack to the target.",
      effect: {
        name: "Destroy Weapon",
        description: "Upon landing a basic attack, decreases the target's final Attack by 2% per stack for 3s, up to a maximum of 20%."
      }
    },

    {
      category: "Special Skill",
      name: "Binding Resentment",
      description: "50% chance to deal damage equal to 130% of Attack to the target. Inflicts Lv. 5 Resistance Down for 3s upon successful attack.",
      effect: {
        name: "Lv. 5 Resistance Down",
        description: "Decreases Crit Resistance by 22%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Breakable Bug",
      description: "Deals damage equal to 735% of Attack to the target. Inflicts the target with Lv. 5 Break for 10s upon successful attack.",
      effect: {
        name: "Lv. 5 Break",
        description: "Decreases Crit Defense by 42%."
      }
    }
  ]
},
{
  name: "New Generation Holy Knight Guila",

  icon: "https://i.imgur.com/QOCbYUZ.png",

  affiliation: "Liones Holy Knight",
  grade: "Legendary",
  attribute: "VIT",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 64% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Shot Bombs",
      description: "30% chance to deal damage equal to 129% of Attack to the target. Inflicts Lv. 5 Destruction for 3s upon successful attack.",
      effect: {
        name: "Lv. 5 Destruction",
        description: "Decreases final Defense by 30%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Chain Explosion",
      description: "Deals damage equal to 655% of Attack to all enemies within 2m of the initial target. Inflicts Lv. 4 Burn for 10s upon successful attack.",
      effect: {
        name: "Lv. 4 Burn",
        description: "Deals damage equal to 22% of the caster's Attack every 1 second(s) and decreases Crit Resistance by 7%."
      }
    }
  ]
},
{
  name: "Melascula of Faith",

  icon: "https://i.imgur.com/whrhLdl.png",

  affiliation: "[The Ten Commandments]",
  grade: "Legendary",
  attribute: "VIT",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 75% of Attack to the target.",
      effect: {
        name: "Soul Restoration",
        description: "Upon landing a normal skill, there is a 10% chance to restore allies' HP by an amount equal to 15% of Attack every second for 3 seconds."
      }
    },

    {
      category: "Special Skill",
      name: "Dark Doom",
      description: "Grants Lv. 5 Spike to VIT-attribute and [Ten Commandments] allies.",
      effect: {
        name: "Lv. 5 Spike",
        description: "Increases Crit Damage by 30%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Gloom Cocoon",
      description: "Deals damage equal to 721% of Attack to the target. Grants Lv. 4 Concentration to allies for 10s upon successful attack.",
      effect: {
        name: "Lv. 4 Concentration",
        description: "Increases final Accuracy by 12%."
      }
    }
  ]
},
{
  name: "Fraudrin of Selflessness",

  icon: "https://i.imgur.com/KHhnyW9.png",

  affiliation: "[The Ten Commandments]",
  grade: "Legendary",
  attribute: "STR",
  type: "Tank",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 68% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Dark Energy",
      description: "The first time this hero suffers a fatal blow, the hero gains Lv. 5 Revive.",
      effect: {
        name: "Lv. 5 Revive",
        description: "Upon receiving a fatal blow for the first time, revives with 100% of Max HP."
      }
    },

    {
      category: "Ultimate Move",
      name: "Full Size",
      description: "Deals damage equal to 602% of Attack to all enemies within 2.5m of self. Taunts nearby enemies for 10s upon successful attack.",
      effect: {
        name: "Taunt",
        description: "Taunted targets will temporarily prioritize attacking the caster of the Taunt."
      }
    }
  ]
},
{
  name: "\"Break\" Dreyfus",

  icon: "https://i.imgur.com/3gEXrZR.png",

  affiliation: "Liones Holy Knight",
  grade: "Legendary",
  attribute: "STR",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 76% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Demolishing Attack",
      description: "40% chance to deal damage equal to 146% of Attack to the target. Inflicts the target with Lv. 5 Blind for 3s upon successful attack.",
      effect: {
        name: "Lv. 5 Blind",
        description: "Decreases final Accuracy by 20%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Milky Way Jail Break Blade",
      description: "Deals damage equal to 620% of Attack to all enemies in a 2m x 8.5m area in front of self. Inflicts targets hit with Lv. 4 Resistance Down for 10s upon successful attack.",
      effect: {
        name: "Lv. 4 Resistance Down",
        description: "Decreases Crit Resistance by 18%."
      }
    }
  ]
},
{
  name: "Fairy Helbram",

  icon: "https://i.imgur.com/XyDgaNG.png",

  affiliation: "Fairy King's Forest",
  grade: "Legendary",
  attribute: "DEX",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 72% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Fog Wave",
      description: "Upon landing a Critical Hit, deals damage equal to 92% of Attack to the target. Inflicts the target with Lv. 5 Evasion Down for 3s upon successful attack.",
      effect: {
        name: "Lv. 5 Evasion Down",
        description: "Decreases final Evasion by 20%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Blood Suck",
      description: "Deals damage equal to 576% of Attack to all enemies within 2m of the initial target. Inflicts targets hit with Lv. 4 Petrify for 2s upon successful attack.",
      effect: {
        name: "Lv. 4 Petrify",
        description: "Unable to move or attack for the duration of the effect and decreases Crit Resistance by 14%."
      }
    }
  ]
},
{
  name: "[The Pleiades of the Azure Sky] Denzel",

  icon: "https://i.imgur.com/iBasz5m.png",

  affiliation: "[The Pleiades of the Azure Sky]",
  grade: "Legendary",
  attribute: "STR",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 76% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Dead Man's Revenge",
      description: "Deals damage equal to 102% of Attack to the target every 5s. Inflicts the target with Lv. 5 Slow for 3s upon successful attack.",
      effect: {
        name: "Lv. 5 Slow",
        description: "Decreases Attack Speed by 12%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Divine Execution",
      description: "Deals damage equal to 666% of Attack to the target. Inflicts the target with Lv. 5 Weaken for 10s upon successful attack.",
      effect: {
        name: "Lv. 5 Weaken",
        description: "Decreases final Attack by 30%."
      }
    }
  ]
},
{
  name: "Monspeet of Reticence",

  icon: "https://i.imgur.com/0YWLYNt.png",

  affiliation: "[The Ten Commandments]",
  grade: "Legendary",
  attribute: "VIT",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 72% of Attack to the target.",
      effect: {
        name: "Demoralize",
        description: "Upon landing a basic attack, there is a 10% chance to inflict Silence on enemies hit for 1s."
      }
    },

    {
      category: "Special Skill",
      name: "Black Fire",
      description: "Upon landing a Critical Hit, deals damage equal to 96% of Attack to all enemies within 2m of the initial target. Restores 5 Energy upon successful attack.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Hell's Phoenix",
      description: "Deals damage equal to 685% of Attack to all enemies in a 3m x 11m area in front of self. Inflicts targets hit with Hellblaze for 10s upon successful attack.",
      effect: {
        name: "Hellblaze",
        description: "Decreases Crit Resistance by 18%, Crit Defense by 32%, and deals damage equal to 50% of Attack every 1 second(s)."
      }
    }
  ]
},
{
  name: "Guardian of Istal Jenna",

  icon: "https://i.imgur.com/WzNZ8zZ.png",

  affiliation: "Druids of Istal",
  grade: "Legendary",
  attribute: "DEX",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 68% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Flash",
      description: "50% chance to deal damage equal to 111% of Attack to the target. Grants Druid's Blessing to DEX-attribute allies for 2s upon successful attack.",
      effect: {
        name: "Druid's Blessing",
        description: "Increases final Accuracy by 20%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Bright Shot",
      description: "Deals damage equal to 596% of Attack to the target. Removes all buffs on the target upon successful attack.",
      effect: null
    }
  ]
},
{
  name: "Guardian of Istal Zaneri",

  icon: "https://i.imgur.com/Um7OSMQ.png",

  affiliation: "Druids of Istal",
  grade: "Legendary",
  attribute: "DEX",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 72% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Miracle Light",
      description: "Upon landing a normal skill, there is a 50% chance to restore HP to the ally with the lowest HP by an amount equal to 72% of Attack. That ally is granted Druid's Protection for 5s.",
      effect: {
        name: "Druid's Protection",
        description: "Restores HP by an amount equal to 20% of the caster's Attack every second."
      }
    },

    {
      category: "Ultimate Move",
      name: "Point Light",
      description: "Restores allies' HP by an amount equal to 482% of Attack. Additionally, removes all debuffs from allies.",
      effect: null
    }
  ]
},
{
  name: "Swordsman Nanashi",

  icon: "https://i.imgur.com/Skqaccm.png",

  affiliation: "Camelot",
  grade: "Legendary",
  attribute: "VIT",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 105% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Thunderclap",
      description: "Grants Lv. 5 Swiftness to self for 3s every 5s.",
      effect: {
        name: "Lv. 5 Swiftness",
        description: "Increases Attack Speed by 10%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Leaf Slash",
      description: "Deals damage equal to 820% of Attack to the target. Restores 30 Energy if this skill defeats an enemy.",
      effect: null
    }
  ]
},
{
  name: "New King Arthur",

  icon: "https://i.imgur.com/gdHhQIW.png",

  affiliation: "Camelot",
  grade: "Legendary",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 98% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Legendary",
      description: "Grants Lv. 5 Sever to INT-attribute allies.",
      effect: {
        name: "Lv. 5 Sever",
        description: "Increases Crit Chance by 20%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Catapult",
      description: "Deals damage equal to 688% of Attack to the target. Inflicts the target with Lv. 5 Destruction for 10s upon successful attack.",
      effect: {
        name: "Lv. 5 Destruction",
        description: "Decreases final Defense by 30%."
      }
    }
  ]
},
{
  name: "Fighter Diane",

  icon: "https://i.imgur.com/fqOqV3T.png",

  affiliation: "[Boar Hat] Tavern",
  grade: "Legendary",
  attribute: "STR",
  type: "Tank",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 70% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Iron Heart",
      description: "The first time this hero suffers a fatal blow, the hero gains Immortality for 10s.",
      effect: {
        name: "Immortality",
        description: "Cannot die for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Ground Shock",
      description: "Deals damage equal to 710% of Attack to the target. Grants Lv. 5 Evasion to STR-attribute allies for 10s upon successful attack.",
      effect: {
        name: "Lv. 5 Evasion",
        description: "Increases final Evasion by 15%."
      }
    }
  ]
},
{
  name: "\"Acid\" Hendrickson",

  icon: "https://i.imgur.com/jsVT6ve.png",

  affiliation: "Seed of Betrayal",
  grade: "Legendary",
  attribute: "INT",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 72% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Acid Tower",
      description: "Upon landing a Critical Hit, deals damage equal to 103% of Attack to the target. Inflicts the target with Lv. 4 Bleed for 3s upon successful attack.",
      effect: {
        name: "Lv. 4 Bleed",
        description: "Deals damage equal to 27% of the caster's Attack every 1 second(s)."
      }
    },

    {
      category: "Ultimate Move",
      name: "Acid Down",
      description: "Deals damage equal to 654% of Attack to all enemies within 1.5m of the initial target. Inflicts targets hit with Lv. 5 Break for 10s upon successful attack.",
      effect: {
        name: "Lv. 5 Break",
        description: "Decreases Crit Defense by 42%."
      }
    }
  ]
},
{
  name: "The Fox Sin of Greed Ban",

  icon: "https://i.imgur.com/GiysDXE.png",

  affiliation: "[The Seven Deadly Sins]",
  grade: "Legendary",
  attribute: "INT",
  type: "DPS",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 100% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Rage Attack",
      description: "20% chance to deal damage equal to 180% of Attack to the target. Restores 10 Energy upon successful attack.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Vanishing Kill",
      description: "Deals damage equal to 912% of Attack to the target. Inflicts the target with Snatch for 10s and grants Snatch to self for 10s upon successful attack.",
      effect: {
        name: "Snatch",
        description: "Target: Decreases final Attack by 15%. Self: Increases final Attack by 15%."
      }
    }
  ]
},
{
  name: "The Dragon Sin of Wrath Meliodas",

  icon: "https://i.imgur.com/9zD3unS.png",

  affiliation: "[The Seven Deadly Sins]",
  grade: "Legendary",
  attribute: "STR",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 101% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Blaze Burst",
      description: "Upon landing a Critical Hit, deals damage equal to 199% of Attack to the target and reduces own cooldowns by 0.5s.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Virtual Body Doubles",
      description: "Deals damage equal to 815% of Attack to the target. Grants Triple Step to self for 7s upon successful attack.",
      effect: {
        name: "Triple Step",
        description: "Increases Crit Chance by 15% and Attack Speed by 10%."
      }
    }
  ]
},
{
  name: "The Grizzly Sin of Sloth King",

  icon: "https://i.imgur.com/fsETzae.png",

  affiliation: "[The Seven Deadly Sins]",
  grade: "Legendary",
  attribute: "DEX",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 78% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Fairy Wind",
      description: "Grants Lv. 5 Spike to DEX-attribute and [Seven Deadly Sins] allies.",
      effect: {
        name: "Lv. 5 Spike",
        description: "Increases Crit Damage by 30%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Spirit Spear Chastiefol, Fourth Form: \"Sunflower\"",
      description: "Deals damage equal to 702% of Attack to all enemies in a 4m x 7.5m area in front of self. Grants Lv. 5 Onslaught to DEX-attribute and [Seven Deadly Sins] allies for 10s upon successful attack.",
      effect: {
        name: "Lv. 5 Onslaught",
        description: "Increases final Attack by 20%."
      }
    }
  ]
},
{
  name: "Gloxinia of Repose",

  icon: "https://i.imgur.com/vOd2PcO.png",

  affiliation: "[The Ten Commandments]",
  grade: "Legendary",
  attribute: "VIT",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Pinpoint Strike",
      description: "Deals damage equal to 73% of Attack to the target. Restores HP to the ally with the lowest HP by an amount equal to 10% of Attack upon successful attack.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Spirit Spear Basquias, First Form: \"Basquias\"",
      description: "Deals damage equal to 117% of Attack to enemies within 3m of the initial target every 5s. Inflicts Lv. 4 Break for 3s to the target and Bind for 0.6s upon successful attack.",
      effect: {
        name: "Lv. 4 Break / Bind",
        description: "Lv. 4 Break: Decreases Crit Defense by 32%. Bind: Unable to move for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Spirit Spear Basquias, Seventh Form: \"Moon Rose\"",
      description: "Restores allies' HP by an amount equal to 625% of Attack. Grants DoT Immunity to allies for 3s. Additionally, removes all debuffs from allies.",
      effect: {
        name: "DoT Immunity",
        description: "Shock, Acid, Bleed, and Burn Immunity."
      }
    }
  ]
},
{
  name: "Warrior Matrona",

  icon: "https://i.imgur.com/JIHbDqR.png",

  affiliation: "Giant Warriors",
  grade: "Legendary",
  attribute: "VIT",
  type: "Tank",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 70% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Drop Deepen",
      description: "Upon being hit, grant Giant's Pride to all VIT-attribute allies for 2s.",
      effect: {
        name: "Giant's Pride",
        description: "Increases final Crit Resistance by 1% per stack, up to a maximum of 50%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Prison Grip",
      description: "Deals damage equal to 595% of Attack to all enemies within 3m of the initial target. Grants Petrify Immunity to self for 10s and taunts nearby enemies for 7s upon successful attack.",
      effect: {
        name: "Petrify Immunity / Taunt",
        description: "Petrify Immunity: Immune to Petrify. Taunt: Taunted targets will temporarily prioritize attacking the caster of the Taunt."
      }
    }
  ]
},
{
  name: "Drole of Patience",

  icon: "https://i.imgur.com/iqO9QBL.png",

  affiliation: "[The Ten Commandments]",
  grade: "Legendary",
  attribute: "DEX",
  type: "Tank",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 67% of Attack to the target. Restores own HP equal to 15% of Defense upon successful attack.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Steel Body",
      description: "The first time this hero suffers a fatal blow, the hero gains Immortality for 10s.",
      effect: {
        name: "Immortality",
        description: "Cannot die for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Giga Fall",
      description: "Deals damage equal to 619% of Attack to all enemies within 4m of self. Inflicts targets hit with Infect for 6s upon successful attack.",
      effect: {
        name: "Infect",
        description: "Unable to Recover HP for the duration of the effect."
      }
    }
  ]
},
{
  name: "\"Purge\" Zaratras",

  icon: "https://i.imgur.com/eivkqzm.png",

  affiliation: "Liones Holy Knight",
  grade: "Legendary",
  attribute: "VIT",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 100% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Purge of the Lightning God",
      description: "Upon landing a Critical Hit, deals damage equal to 150% of Attack to all enemies within 2m of the initial target. Grants Lv. 5 Swiftness to self for 3s upon successful attack. Restores 10 Energy if this skill defeats an enemy.",
      effect: {
        name: "Lv. 5 Swiftness",
        description: "Increases Attack Speed by 10%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Lightning God Sword",
      description: "Deals damage equal to 813% of Attack to all enemies in a 2m x 6m area in front of self.",
      effect: null
    }
  ]
},
{
  name: "Demon Hendrickson",

  icon: "https://i.imgur.com/46vyTiC.png",

  affiliation: "Seed of Betrayal",
  grade: "Legendary",
  attribute: "INT",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Explosion",
      description: "Deals damage equal to 76% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Dark Nebula",
      description: "Upon landing a Critical Hit, deals damage equal to 166% of Attack to all enemies within 2m of the initial target. Inflicts targets hit with Lv. 4 Blind for 3s upon successful attack.",
      effect: {
        name: "Lv. 4 Blind",
        description: "Decreases final Accuracy by 16%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Dead End",
      description: "Deals damage equal to 686% of Attack to the target. Inflicts the target with Infect for 6s upon successful attack.",
      effect: {
        name: "Infect",
        description: "Unable to Recover HP for the duration of the effect."
      }
    }
  ]
},
{
  name: "\"Fountain of Youth\" Saint Elaine",

  icon: "https://i.imgur.com/muF4EIy.png",

  affiliation: "Fairy King's Forest",
  grade: "Legendary",
  attribute: "VIT",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Pinpoint Strike",
      description: "Deals damage equal to 76% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Slicing Winds",
      description: "Deals damage equal to 122% of Attack to the target every 5s. Inflicts the target with Lv. 5 Resistance Down for 3s upon successful attack.",
      effect: {
        name: "Lv. 5 Resistance Down",
        description: "Decreases Crit Resistance by 22%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Wrath of the Gentle Breeze",
      description: "Deals damage equal to 620% of Attack to all enemies in a 3m x 6m area in front of self. Inflicts targets hit with Lv. 4 Disperse for 10s upon successful attack.",
      effect: {
        name: "Lv. 4 Disperse",
        description: "Decreases Crit Chance by 18%."
      }
    }
  ]
},
{
  name: "Galland of Truth",

  icon: "https://i.imgur.com/TvQmRwy.png",

  affiliation: "[The Ten Commandments]",
  grade: "Legendary",
  attribute: "DEX",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 100% of Attack to the target.",
      effect: {
        name: "Hard Skin",
        description: "Upon landing a basic attack, grants All Crowd Control (Bind, Silence, Paralysis, Infection, Stun, Flinch, Freeze, and Petrify) Immunity to self for 1s."
      }
    },

    {
      category: "Special Skill",
      name: "Dismal Scatter Cut",
      description: "50% chance to deal damage equal to 190% of Attack to the target. Grants Seasoned Fighter to self for 5s upon successful attack.",
      effect: {
        name: "Seasoned Fighter",
        description: "Increases Crit Chance by 3% per stack, up to a maximum of 30%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Critical Over",
      description: "Deals damage equal to 951% of Attack to the target. Grants 'Critical Over' to self for 10s before activating this skill.",
      effect: {
        name: "Critical Over",
        description: "Increases Attack Speed by 16%."
      }
    }
  ]
},
{
  name: "Grandmaster Hendrickson",

  icon: "https://i.imgur.com/4T57sg2.png",

  affiliation: "Liones Holy Knight",
  grade: "Legendary",
  attribute: "DEX",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 80% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Flame Wave",
      description: "Upon landing a Critical Hit, deals damage equal to 103% of Attack to the target. This skill's final damage is increased by 45% against INT-attribute targets.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Hell Blaze Wave",
      description: "Deals damage equal to 717% of Attack to the target. Inflicts the target with Lv. 5 Acid for 10s upon successful attack.",
      effect: {
        name: "Lv. 5 Acid",
        description: "Deals damage equal to 25% of the caster's Attack every 1 second(s) and decreases final Defense by 10%."
      }
    }
  ]
},
{
  name: "Sky Temple Protector Ellatte",

  icon: "https://i.imgur.com/hRPCaOf.png",

  affiliation: "Sky Temple Protectors",
  grade: "Legendary",
  attribute: "STR",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 57% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Anger Light",
      description: "Upon landing a Critical Hit, deals damage equal to 100% of Attack to the target. Removes all buffs on the target upon successful attack.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Holy Strike",
      description: "Deals damage equal to 590% of Attack to all enemies within 2m of the initial target. Grants Lv. 5 Sever to STR-attribute allies for 10s upon successful attack.",
      effect: {
        name: "Lv. 5 Sever",
        description: "Increases Crit Chance by 20%."
      }
    }
  ]
},
{
  name: "Knight Of Danafor Liz",

  icon: "https://i.imgur.com/864vtZQ.png",

  affiliation: "Kingdom of Danafor",
  grade: "Legendary",
  attribute: "VIT",
  type: "Support",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 68% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Cross Cut",
      description: "Upon landing a Critical Hit, deals damage equal to 133% of Attack to the target. Grants Lv. 5 Sever to VIT-attribute allies for 3s upon successful attack.",
      effect: {
        name: "Lv. 5 Sever",
        description: "Increases Crit Chance by 20%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Last Attack",
      description: "Deals damage equal to 627% of Attack to the target. Decreases allies' cooldowns by 2s upon successful attack.",
      effect: null
    }
  ]
},
{
  name: "Giant Girl Diane",

  icon: "https://i.imgur.com/fFs8wwT.png",

  affiliation: "Giant Warriors",
  grade: "Legendary",
  attribute: "INT",
  type: "Tank",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 63% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Stone Blast",
      description: "Each time this hero is healed, deals damage equal to 88% of Attack to all enemies within 3m of the initial target. Grants Steel Will to self for 5s upon successful attack. (Cooldown: 5s).",
      effect: {
        name: "Steel Will",
        description: "Restores HP by an amount equal to 12% of Defense every 1s. Increases final Defense by 40% and is immune to Flinch, Stun, and Freeze."
      }
    },

    {
      category: "Ultimate Move",
      name: "Ground Strike",
      description: "Deals damage equal to 543% of Attack to all enemies within 2m of the initial target. Inflicts Lv. 4 Petrify for 2s upon successful attack.",
      effect: {
        name: "Lv. 4 Petrify",
        description: "Unable to move or attack for the duration of the effect and decreases Crit Resistance by 14%."
      }
    }
  ]
},
{
  name: "Thousand Ashes Gelda",

  icon: "https://i.imgur.com/lueyWsZ.png",

  affiliation: "Vampires of Edinburgh",
  grade: "Legendary",
  attribute: "STR",
  type: "Support",

  recommendedPotential: "Full HP",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 68% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Blood Rage",
      description: "Upon landing a Critical Hit, deals damage equal to 95% of Attack to all enemies within 2m of the initial target. Restores allies' HP by an amount equal to 39% of Attack upon successful attack.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Ash Dust Burial",
      description: "Deals damage equal to 630% of Attack to the target. Restores allies' HP by an amount equal to 540% of Attack upon successful attack.",
      effect: null
    }
  ]
},
{
  name: "[Boar Hat] Tavern Master Meliodas",

  icon: "https://i.imgur.com/CgsRPvz.png",

  affiliation: "[Boar Hat] Tavern",
  grade: "Unique",
  attribute: "VIT",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 90% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Triple Attack",
      description: "Upon landing a Critical Hit, deals damage equal to 170% of Attack to the target.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "1,000 Divine Cuts",
      description: "Deals damage equal to 727% of Attack to all enemies within 2m of the initial target. Final damage is increased by 60% against DEX-attribute targets.",
      effect: null
    }
  ]
},
{
  name: "Holy Knight of Ice Gustav",

  icon: "https://i.imgur.com/8aJzCEf.png",

  affiliation: "Liones Holy Knight",
  grade: "Unique",
  attribute: "INT",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 60% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Freezing Field",
      description: "Upon landing a Critical Hit, deals damage equal to 94% of Attack to the target. Inflicts Lv. 4 Slow for 3s upon successful attack.",
      effect: {
        name: "Lv. 4 Slow",
        description: "Decreases Attack Speed by 10%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Blizzard Axel",
      description: "Deals damage equal to 592% of Attack to all enemies within 2m of the initial target. Inflicts Lv. 3 Freeze for 1.5s upon successful attack.",
      effect: {
        name: "Lv. 3 Freeze",
        description: "Prevents movement or attacking for the duration of the effect and decreases Crit Defense by 17%."
      }
    }
  ]
},
{
  name: "Cardinal Helbram",

  icon: "https://i.imgur.com/7sGDIkx.png",

  affiliation: "Liones Holy Knight",
  grade: "Unique",
  attribute: "STR",
  type: "Support",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 56% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Combat Roar",
      description: "Grants Lv. 4 Sever to STR-attribute allies for 3s every 6s.",
      effect: {
        name: "Lv. 4 Sever",
        description: "Increases Crit Chance by 16%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Killer Iceberg",
      description: "Deals damage equal to 583% of Attack to all enemies within 2m of the initial target. Grants Stun Immunity to allies for 10s upon successful attack.",
      effect: {
        name: "Stun Immunity",
        description: "Nullifies Stun."
      }
    }
  ]
},
{
  name: "Fairy King's Helper Gerharde",

  icon: "https://i.imgur.com/5Tk5TA1.png",

  affiliation: "Fairy King's Forest",
  grade: "Unique",
  attribute: "VIT",
  type: "Support",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 70% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Lying Hand",
      description: "Upon landing a normal skill, there is a 30% chance to restore allies' HP by an amount equal to 65% of Attack and grant them Lv. 3 Sturdy for 3s.",
      effect: {
        name: "Lv. 3 Sturdy",
        description: "Increases Crit Resistance by 12%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Piercing Roots",
      description: "Deals damage equal to 613% of Attack to the target. Inflicts Bind for 2s upon successful attack.",
      effect: {
        name: "Bind",
        description: "Unable to move for the duration of the effect."
      }
    }
  ]
},
{
  name: "[The Six Knights of Black] Pump",

  icon: "https://i.imgur.com/jmRub9M.png",

  affiliation: "[The Six Knights of Black]",
  grade: "Unique",
  attribute: "DEX",
  type: "Debuffer",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 75% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Death Thorn",
      description: "Upon landing a Critical Hit, deals damage equal to 141% of Attack to the target. Inflicts the target with Lv. 4 Slow for 3s upon successful attack.",
      effect: {
        name: "Lv. 4 Slow",
        description: "Decreases Attack Speed by 10%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Spiked Armor",
      description: "Deals damage equal to 614% of Attack to all enemies within 3m of self. Inflicts targets hit with Lv. 3 Bleed for 10s upon successful attack.",
      effect: {
        name: "Lv. 3 Bleed",
        description: "Deals damage equal to 24% of the caster's Attack every 1 second."
      }
    }
  ]
},
{
  name: "[The Pleiades of the Azure Sky] Dogedo",

  icon: "https://i.imgur.com/MlUw1Fm.png",

  affiliation: "[The Pleiades of the Azure Sky]",
  grade: "Unique",
  attribute: "VIT",
  type: "Tank",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Explosion",
      description: "Deals damage equal to 66% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Nitro Rush",
      description: "30% chance to deal damage equal to 122% of Attack to the target. Taunts nearby enemies for 3s upon successful attack.",
      effect: {
        name: "Taunt",
        description: "Taunted targets will temporarily prioritize attacking the caster of the Taunt."
      }
    },

    {
      category: "Ultimate Move",
      name: "Boost Hammer",
      description: "Deals damage equal to 521% of Attack to all enemies in a 1m x 6m area in front of self. Grants Lv. 5 Veil to self for 10s upon successful attack.",
      effect: {
        name: "Lv. 5 Veil",
        description: "Absorbs damage equal to 25% of the caster's HP."
      }
    }
  ]
},
{
  name: "Mage Gilfrost",

  icon: "https://i.imgur.com/xok3whp.png",

  affiliation: "Unknown",
  grade: "Unique",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 70% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Lightning Strike",
      description: "Upon landing a Critical Hit, deals damage equal to 88% of Attack to all enemies within 2m of the initial target. Inflicts targets hit with Lv. 3 Slow for 3s upon successful attack.",
      effect: {
        name: "Lv. 3 Slow",
        description: "Decreases Attack Speed by 8%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Elemental Orb",
      description: "Deals damage equal to 579% of Attack to all enemies within 4m of the initial target. Grants Lv. 1 Absolute Defense to allies for 10s upon successful attack.",
      effect: {
        name: "Lv. 1 Absolute Defense",
        description: "Nullifies damage taken 1 time(s)."
      }
    }
  ]
},
{
  name: "Danafor Holy Knight Cain",

  icon: "https://i.imgur.com/Zb2AtPM.png",

  affiliation: "Kingdom of Danafor",
  grade: "Unique",
  attribute: "STR",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 78% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Charge Fire",
      description: "30% chance to deal damage equal to 176% of Attack to all enemies in a 2m x 5m area in front of self. Final damage is increased by 60% against VIT-attribute targets.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Fire Tornado",
      description: "Deals damage equal to 700% of Attack to all enemies within 2m of the initial target. Final damage is increased by 90% against VIT-attribute targets.",
      effect: null
    }
  ]
},
{
  name: "Giant Girl Dolores",

  icon: "https://i.imgur.com/p943vOY.png",

  affiliation: "Giant Warriors",
  grade: "Unique",
  attribute: "DEX",
  type: "Support",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 70% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Snack Time",
      description: "Restores allies' HP by an amount equal to 195% of Attack every 10s.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Pulverizing Smash",
      description: "Deals damage equal to 651% of Attack to the target. Inflicts the target with Lv. 4 Blind for 10s upon successful attack.",
      effect: {
        name: "Lv. 4 Blind",
        description: "Decreases final Accuracy by 16%."
      }
    }
  ]
},
{
  name: "Divine Lance Corporal of the Goddesses Nerobasta",

  icon: "https://i.imgur.com/6RDAmSH.png",

  affiliation: "Goddess Warrior",
  grade: "Unique",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 66% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Blessing Aura",
      description: "Grants Lv. 3 Concentration to INT-attribute allies.",
      effect: {
        name: "Lv. 3 Concentration",
        description: "Increases final Accuracy by 9%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Ark",
      description: "Deals damage equal to 594% of Attack to all enemies within 2m of the initial target. Inflicts targets hit with Bind for 1.5s upon successful attack.",
      effect: {
        name: "Bind",
        description: "Unable to move for the duration of the effect."
      }
    }
  ]
},
{
  name: "Dual Sword Mod",

  icon: "https://i.imgur.com/yuIdYkK.png",

  affiliation: "Vampires of Edinburgh",
  grade: "Unique",
  attribute: "DEX",
  type: "Debuffer",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 75% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Reap Smash",
      description: "10% chance to deal damage equal to 94% of Attack to the target. Inflicts the target with Lv. 4 Destruction for 3s upon successful attack.",
      effect: {
        name: "Lv. 4 Destruction",
        description: "Decreases final Defense by 24%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Demonic Pierce",
      description: "Deals damage equal to 592% of Attack to all enemies within 3.5m of self. Inflicts targets hit with Lv. 3 Acid for 10s upon successful attack.",
      effect: {
        name: "Lv. 3 Acid",
        description: "Deals damage equal to 18% of the caster's Attack every 1 second and decreases final Defense by 5%."
      }
    }
  ]
},
{
  name: "[The Six Knights of Black] Bellion",

  icon: "https://i.imgur.com/n4H6CpD.png",

  affiliation: "[The Six Knights of Black]",
  grade: "Unique",
  attribute: "VIT",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 94% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Lightning Blade",
      description: "Deals damage equal to 125% of Attack to the target every 5s. Final damage is increased by 70% against DEX-attribute targets.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Death Burn",
      description: "Deals damage equal to 718% of Attack to all enemies within 3m of self. Removes all buffs from targets hit upon successful attack.",
      effect: null
    }
  ]
},
{
  name: "Dual Sword Ganne",

  icon: "https://i.imgur.com/FLNaGwx.png",

  affiliation: "Vampires of Edinburgh",
  grade: "Unique",
  attribute: "DEX",
  type: "Tank",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 66% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Earthquake",
      description: "30% chance to deal damage equal to 83% of Attack to the target. Taunts nearby enemies for 3s upon successful attack.",
      effect: {
        name: "Taunt",
        description: "Taunted targets will temporarily prioritize attacking the caster of the Taunt."
      }
    },

    {
      category: "Ultimate Move",
      name: "Bloody Pick",
      description: "Deals damage equal to 530% of Attack to all enemies within 3m of self. Restores own HP equal to 30% of the damage dealt upon successful attack.",
      effect: null
    }
  ]
},
{
  name: "The Rose Orlondi",

  icon: "https://i.imgur.com/Be3wZTQ.png",

  affiliation: "Vampires of Edinburgh",
  grade: "Unique",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 70% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Angry Spirit",
      description: "Grants Lv. 4 Evasion to INT-attribute allies.",
      effect: {
        name: "Lv. 4 Evasion",
        description: "Increases final Evasion by 12%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Bramble Whip",
      description: "Deals damage equal to 642% of Attack to the target. Restores allies' HP by an amount equal to 430% of Attack upon successful attack.",
      effect: null
    }
  ]
},
{
  name: "Black Claw Ren",

  icon: "https://i.imgur.com/cv5uiZ9.png",

  affiliation: "Vampires of Edinburgh",
  grade: "Unique",
  attribute: "STR",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 85% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Fast Smash",
      description: "Upon landing a Critical Hit, deals damage equal to 190% of Attack to the target. Grants Lv. 5 Spike to self for 3s upon successful attack.",
      effect: {
        name: "Lv. 5 Spike",
        description: "Increases Crit Damage by 30%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Black Claw Slash",
      description: "Deals damage equal to 802% of Attack to the target. Inflicts the target with Infect for 6s upon successful attack.",
      effect: {
        name: "Infect",
        description: "Unable to Recover HP for the duration of the effect."
      }
    }
  ]
},
{
  name: "[The Six Knights of Black] Derocchio",

  icon: "https://i.imgur.com/WXls1I9.png",

  affiliation: "[The Six Knights of Black]",
  grade: "Unique",
  attribute: "VIT",
  type: "Debuffer",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 75% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Combat Roar",
      description: "Upon being hit, there is a 20% chance to decrease own cooldowns by 2s.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Chained Light",
      description: "Deals damage equal to 592% of Attack to all enemies within 2m of the initial target. Inflicts targets hit with Lv. 3 Acid for 10s upon successful attack.",
      effect: {
        name: "Lv. 3 Acid",
        description: "Deals damage equal to 18% of the caster's Attack every 1 second and decreases final Defense by 5%."
      }
    }
  ]
},
{
  name: "[The Six Knights of Black] Gara",

  icon: "https://i.imgur.com/YvqfAyX.png",

  affiliation: "[The Six Knights of Black]",
  grade: "Unique",
  attribute: "VIT",
  type: "Support",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 70% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Wide Roar",
      description: "Upon landing normal skills 10 time(s), grants Lv. 4 Evasion to VIT-attribute allies for 10s.",
      effect: {
        name: "Lv. 4 Evasion",
        description: "Increases final Evasion by 12%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Flash Crush",
      description: "Deals damage equal to 624% of Attack to the target. Inflicts the target with Lv. 4 Slow for 10s upon successful attack.",
      effect: {
        name: "Lv. 4 Slow",
        description: "Decreases Attack Speed by 10%."
      }
    }
  ]
},
{
  name: "Vampire King Izraf",

  icon: "https://i.imgur.com/pSajIZg.png",

  affiliation: "Vampires of Edinburgh",
  grade: "Unique",
  attribute: "STR",
  type: "Tank",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 66% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Darkness Hand",
      description: "Upon being hit, there is a 30% chance to deal damage equal to 156% of Attack to the target. Restores own HP by an amount equal to 150% of the damage dealt upon successful attack.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Black Full-Plate",
      description: "Grants Lv. 5 Veil to self for 10s.",
      effect: {
        name: "Lv. 5 Veil",
        description: "Absorbs damage equal to 25% of the caster's HP."
      }
    }
  ]
},
{
  name: "Depraved Mage Vivian",

  icon: "https://i.imgur.com/4lOUkj8.png",

  affiliation: "Seed of Betrayal",
  grade: "Unique",
  attribute: "STR",
  type: "Debuffer",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 75% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Death Spell",
      description: "Upon landing a Critical Hit, deals damage equal to 122% of Attack to the target. Inflicts the target with Bind for 0.8s upon successful attack.",
      effect: {
        name: "Bind",
        description: "Unable to move for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Destroy Four Elements",
      description: "Deals damage equal to 642% of Attack to all enemies within 3m of the initial target. Inflicts targets hit with Bind for 1.5s upon successful attack.",
      effect: {
        name: "Bind",
        description: "Unable to move for the duration of the effect."
      }
    }
  ]
},
{
  name: "[The Pleiades of the Azure Sky] Deldry",

  icon: "https://i.imgur.com/nicaw9S.png",

  affiliation: "[The Pleiades of the Azure Sky]",
  grade: "Unique",
  attribute: "DEX",
  type: "Support",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 70% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Blow Kiss",
      description: "30% chance to deal damage equal to 109% of Attack to the target. Grants Lv. 4 Concentration to DEX-attribute allies for 3s upon successful attack.",
      effect: {
        name: "Lv. 4 Concentration",
        description: "Increases final Accuracy by 12%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Love Drive",
      description: "Deals damage equal to 577% of Attack to all enemies within 1.5m of the initial target. Grants Lv. 4 Onslaught to DEX-attribute allies for 10s upon successful attack.",
      effect: {
        name: "Lv. 4 Onslaught",
        description: "Increases final Attack by 16%."
      }
    }
  ]
},
{
  name: "[The Pleiades of the Azure Sky] Arden",

  icon: "https://i.imgur.com/tEJ4QrC.png",

  affiliation: "[The Pleiades of the Azure Sky]",
  grade: "Unique",
  attribute: "INT",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 94% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Cheap Shot",
      description: "Upon landing a Critical Hit, deals damage equal to 96% of Attack to the target. Final damage is increased by 90% against STR-attribute targets.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Vain",
      description: "Deals damage equal to 745% of Attack to all enemies within 2m of the initial target. Inflicts targets hit with Lv. 3 Erosion for 10s upon successful attack.",
      effect: {
        name: "Lv. 3 Erosion",
        description: "Decreases Crit Damage by 27%."
      }
    }
  ]
},
{
  name: "[The Pleiades of the Azure Sky] Waillo",

  icon: "https://i.imgur.com/XtQvGel.png",

  affiliation: "[The Pleiades of the Azure Sky]",
  grade: "Unique",
  attribute: "DEX",
  type: "Tank",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 66% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Marriage! Display!",
      description: "The first time this hero suffers a fatal blow, the hero gains Immortality for 6s.",
      effect: {
        name: "Immortality",
        description: "Cannot die for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Marriage! Blood-Stained!",
      description: "Deals damage equal to 530% of Attack to all enemies within 2m of the initial target. Grants Lv. 5 Evasion to self for 10s upon successful attack.",
      effect: {
        name: "Lv. 5 Evasion",
        description: "Increases final Evasion by 15%."
      }
    }
  ]
},
{
  name: "[The Six Knights of Black] Atra",

  icon: "https://i.imgur.com/JBq4TEr.png",

  affiliation: "[The Six Knights of Black]",
  grade: "Unique",
  attribute: "DEX",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 80% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Chasing Body",
      description: "Upon landing a Critical Hit, deals damage equal to 85% of Attack to the target. This skill's final damage is increased by 30% against INT-attribute targets.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Binding Seal",
      description: "Deals damage equal to 629% of Attack to all enemies within 2m of the initial target. Inflicts targets hit with Lv. 3 Acid for 10s upon successful attack.",
      effect: {
        name: "Lv. 3 Acid",
        description: "Deals damage equal to 18% of the caster's Attack every 1 second and decreases final Defense by 5%."
      }
    }
  ]
},
{
  name: "[The Pleiades of the Azure Sky] Deathpierce",

  icon: "https://i.imgur.com/962DwOr.png",

  affiliation: "[The Pleiades of the Azure Sky]",
  grade: "Unique",
  attribute: "STR",
  type: "Support",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 70% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Accelerando",
      description: "30% chance to deal damage equal to 88% of Attack to the target. Makes the target Flinch upon successful attack.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Brillante",
      description: "Deals damage equal to 606% of Attack to all enemies within 3m of self. Grants Lv. 4 Regeneration to allies for 10s upon successful attack.",
      effect: {
        name: "Lv. 4 Regeneration",
        description: "Restores HP by an amount equal to 23% of the caster's Attack every 1 second."
      }
    }
  ]
},
{
  name: "[Roars of Dawn] Weinheidt",

  icon: "https://i.imgur.com/kNI4VKw.png",

  affiliation: "[Roars of Dawn]",
  grade: "Unique",
  attribute: "VIT",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 90% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Flash Arrow",
      description: "Upon landing a Critical Hit, deals damage equal to 89% of Attack to the target. Final damage is increased by 30% against DEX-attribute targets.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Blackout Arrow",
      description: "Deals damage equal to 689% of Attack to all enemies within 1.5m of the initial target. Inflicts targets hit with Lv. 4 Bleed for 10s upon successful attack.",
      effect: {
        name: "Lv. 4 Bleed",
        description: "Deals damage equal to 27% of the caster's Attack every 1 second."
      }
    }
  ]
},
{
  name: "[The Six Knights of Black] Dahaka",

  icon: "https://i.imgur.com/ltlmk0M.png",

  affiliation: "[The Six Knights of Black]",
  grade: "Unique",
  attribute: "INT",
  type: "Tank",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 66% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Darkness Whip",
      description: "30% chance to deal damage equal to 162% of Attack to all enemies in a 1m x 6m area in front of self. Knocks Back targets hit by 1m upon successful attack.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Soul Steal",
      description: "Deals damage equal to 575% of Attack to all enemies within 3m of self. Grants Lv. 5 Veil to self for 10s upon successful attack.",
      effect: {
        name: "Lv. 5 Veil",
        description: "Absorbs damage equal to 25% of the caster's HP."
      }
    }
  ]
},
{
  name: "[Roars of Dawn] Jillian",

  icon: "https://i.imgur.com/0SoNrbc.png",

  affiliation: "[Roars of Dawn]",
  grade: "Unique",
  attribute: "INT",
  type: "Debuffer",

  recommendedPotential: "Full Accuracy",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 75% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Cross Shot",
      description: "10% chance to deal damage equal to 111% of Attack to the target. Inflicts STR-attribute targets with Lv. 4 Evasion Down for 3s upon successful attack.",
      effect: {
        name: "Lv. 4 Evasion Down",
        description: "Decreases final Evasion by 16%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Cancellation",
      description: "Deals damage equal to 669% of Attack to the target. Inflicts Bind for 2s upon successful attack.",
      effect: {
        name: "Bind",
        description: "Unable to move for the duration of the effect."
      }
    }
  ]
},
{
  name: "Warrior Chief Zoria",

  icon: "https://i.imgur.com/Ro0Nzkg.png",

  affiliation: "Sky Temple Protectors",
  grade: "Epic",
  attribute: "DEX",
  type: "Support",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 65% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Warrior's Spirit",
      description: "Grants Lv. 2 Onslaught to DEX-attribute allies.",
      effect: {
        name: "Lv. 2 Onslaught",
        description: "Increases final Attack by 8%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Cleave Evil",
      description: "Deals damage equal to 571% of Attack to the target. Makes the target Flinch upon successful attack. Final damage is increased by 45% against INT-attribute targets.",
      effect: {
        name: "Flinch",
        description: "Interrupts the target's current action."
      }
    }
  ]
},
{
  name: "Sky Temple Protector Solaad",

  icon: "https://i.imgur.com/fMm6b7O.png",

  affiliation: "Sky Temple Protectors",
  grade: "Epic",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 65% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Strike Cut",
      description: "Upon landing a Critical Hit, deals damage equal to 91% of Attack to the target. Restores 1 Energy upon successful attack.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Chain Ark",
      description: "Deals damage equal to 554% of Attack to all enemies within 3m of self. Decreases allies' cooldowns by 1s upon successful attack.",
      effect: null
    }
  ]
},
{
  name: "Ruby Holy Knight Marmas",

  icon: "https://i.imgur.com/EJYh9Mz.png",

  affiliation: "Liones Holy Knight",
  grade: "Epic",
  attribute: "INT",
  type: "Debuffer",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 93% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Self Gravity",
      description: "Grants Lv. 2 Evasion to INT-attribute allies.",
      effect: {
        name: "Lv. 2 Evasion",
        description: "Increases final Evasion by 6%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Gravity x10",
      description: "Deals damage equal to 599% of Attack to all enemies within 2m of the initial target. Inflicts targets hit with Lv. 3 Blind for 10s upon successful attack.",
      effect: {
        name: "Lv. 3 Blind",
        description: "Decreases final Accuracy by 12%."
      }
    }
  ]
},
{
  name: "[Beard of the Mountain Cat] Alioni",

  icon: "https://i.imgur.com/n8jiwoR.png",

  affiliation: "Beard of the Mountain Cat",
  grade: "Epic",
  attribute: "INT",
  type: "Tank",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 59% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Charge Forward!",
      description: "Upon landing a Critical Hit, deals damage equal to 106% of Attack to the target. Final damage is increased by 30% against STR-attribute targets.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Beard of the Mountain Cat, Assemble!",
      description: "Deals damage equal to 573% of Attack to the target. Grants Lv. 4 Veil to self for 10s upon successful attack.",
      effect: {
        name: "Lv. 4 Veil",
        description: "Absorbs damage equal to 20% of the caster's HP."
      }
    }
  ]
},
{
  name: "[Weird Fangs] Ruin",

  icon: "https://i.imgur.com/6KPt2Ly.png",

  affiliation: "Weird Fangs",
  grade: "Epic",
  attribute: "INT",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 78% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Heavy Hammer",
      description: "Upon landing a Critical Hit, deals damage equal to 107% of Attack to the target. Removes all buffs on the target upon successful attack.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Nightmare Illusion",
      description: "Deals damage equal to 674% of Attack to all enemies within 3m of self. Final damage is increased by 50% against STR-attribute targets.",
      effect: null
    }
  ]
},
{
  name: "Guardian of Istal Theo",

  icon: "https://i.imgur.com/krcsi6L.png",

  affiliation: "Druids of Istal",
  grade: "Epic",
  attribute: "VIT",
  type: "Support",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 65% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Druid's Wrath",
      description: "Upon landing a Critical Hit, deals damage equal to 97% of Attack to the target. Grants Lv. 2 Onslaught to VIT-attribute allies for 3s upon successful attack.",
      effect: {
        name: "Lv. 2 Onslaught",
        description: "Increases final Attack by 8%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Song of Protection",
      description: "Grants Lv. 2 Regeneration to allies for 10s.",
      effect: {
        name: "Lv. 2 Regeneration",
        description: "Restores HP by an amount equal to 13% of the caster's Attack every 1 second."
      }
    }
  ]
},
{
  name: "Princess of Liones Elizabeth",

  icon: "https://i.imgur.com/5J0jwBq.png",

  affiliation: "[Boar Hat] Tavern",
  grade: "Epic",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 61% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Slide Serve",
      description: "20% chance to deal damage equal to 119% of Attack to the target. Inflicts the target with Lv. 3 Weaken for 3s upon successful attack.",
      effect: {
        name: "Lv. 3 Weaken",
        description: "Decreases final Attack by 18%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Holy Fountain",
      description: "Restores allies' HP by an amount equal to 120% of Attack and grants them Lv. 2 Regeneration for 10s.",
      effect: {
        name: "Lv. 2 Regeneration",
        description: "Restores HP by an amount equal to 13% of the caster's Attack every 1 second."
      }
    }
  ]
},
{
  name: "[Roars of Dawn] Hugo",

  icon: "https://i.imgur.com/dqvYAek.png",

  affiliation: "[Roars of Dawn]",
  grade: "Epic",
  attribute: "VIT",
  type: "Tank",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Pinpoint Strike",
      description: "Deals damage equal to 51% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Chaos Blast",
      description: "30% chance to deal damage equal to 101% of Attack to the target. Grants Lv. 4 Sturdy to self for 3s upon successful attack.",
      effect: {
        name: "Lv. 4 Sturdy",
        description: "Increases Crit Resistance by 16%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Mortal Throw",
      description: "Deals damage equal to 546% of Attack to the target. Final damage is increased by 40% against DEX-attribute targets upon successful attack.",
      effect: null
    }
  ]
},
{
  name: "[Weird Fangs] Golgius",

  icon: "https://i.imgur.com/B1BAtBp.png",

  affiliation: "Weird Fangs",
  grade: "Epic",
  attribute: "STR",
  type: "Debuffer",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 70% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Throwing Star",
      description: "Upon landing a Critical Hit, deals damage equal to 93% of Attack to the target. Inflicts the target with Lv. 3 Destruction for 3s upon successful attack.",
      effect: {
        name: "Lv. 3 Destruction",
        description: "Decreases final Defense by 18%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Silent Strike",
      description: "Deals damage equal to 616% of Attack to the target. Inflicts the target with Lv. 3 Bleed for 10s upon successful attack.",
      effect: {
        name: "Lv. 3 Bleed",
        description: "Deals damage equal to 24% of the caster's Attack every 1 second(s)."
      }
    }
  ]
},
{
  name: "Apprentice Holy Knight Twigo",

  icon: "https://i.imgur.com/99dHrdF.png",

  affiliation: "Liones Holy Knight",
  grade: "Epic",
  attribute: "STR",
  type: "Support",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 65% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Strike Decision",
      description: "20% chance to deal damage equal to 83% of Attack to the target. Inflicts INT-attribute targets with Lv. 2 Evasion Down for 3s upon successful attack.",
      effect: {
        name: "Lv. 2 Evasion Down",
        description: "Decreases final Evasion by 8%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Spell Bead",
      description: "Grants Lv. 2 Steel to allies for 10s.",
      effect: {
        name: "Lv. 2 Steel",
        description: "Increases final Defense by 8%."
      }
    }
  ]
},
{
  name: "[Weird Fangs] Freesia",

  icon: "https://i.imgur.com/QHEdwTT.png",

  affiliation: "Weird Fangs",
  grade: "Epic",
  attribute: "VIT",
  type: "Debuffer",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 70% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Acid Bug",
      description: "10% chance to deal damage equal to 147% of Attack to the target. Inflicts the target with Lv. 3 Break for 3s upon successful attack.",
      effect: {
        name: "Lv. 3 Break",
        description: "Decreases Crit Defense by 24%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Storm Rondo",
      description: "Deals damage equal to 684% of Attack to all enemies within 2m of the initial target. Inflicts targets hit with Lv. 3 Acid for 10s upon successful attack.",
      effect: {
        name: "Lv. 3 Acid",
        description: "Deals damage equal to 18% of the caster's Attack every 1 second(s) and decreases final Defense by 5%."
      }
    }
  ]
},
{
  name: "Fight Festival Champion Taizoo",

  icon: "https://i.imgur.com/hKmmdjR.png",

  affiliation: "Vaizel",
  grade: "Epic",
  attribute: "DEX",
  type: "Tank",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 51% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Body Shot",
      description: "30% chance to deal damage equal to 83% of Attack to the target. Grants Lv. 4 Elasticity to self for 3s upon successful attack.",
      effect: {
        name: "Lv. 4 Elasticity",
        description: "Increases Crit Defense by 24%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Muscle Mania",
      description: "Grants Stun Immunity to self for 5s. Restores own HP by an amount equal to 150% of Defense.",
      effect: {
        name: "Stun Immunity",
        description: "Nullifies Stun."
      }
    }
  ]
},
{
  name: "[Roars of Dawn] Simon",

  icon: "https://i.imgur.com/COFUR0u.png",

  affiliation: "[Roars of Dawn]",
  grade: "Epic",
  attribute: "STR",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 87% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Burning Wind Strike",
      description: "Upon landing a Critical Hit, deals damage equal to 99% of Attack to the target. Grants Lv. 4 Swiftness to self for 3s upon successful attack.",
      effect: {
        name: "Lv. 4 Swiftness",
        description: "Increases Attack Speed by 8%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Rising Dragon Strike",
      description: "Deals damage equal to 620% of Attack to all enemies in a 2m x 4m area in front of self. This skill's final damage is increased by 50% against INT-attribute targets."
    }
  ]
},
{
  name: "[Weird Fangs] Jude",

  icon: "https://i.imgur.com/jsE7WNN.png",

  affiliation: "Weird Fangs",
  grade: "Epic",
  attribute: "DEX",
  type: "Debuffer",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 70% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Thorn Shot",
      description: "Deals damage equal to 93% of Attack to the target every 10s. Inflicts the target with Lv. 3 Blind for 3s upon successful attack.",
      effect: {
        name: "Lv. 3 Blind",
        description: "Decreases final Accuracy by 12%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Thorn Hunt",
      description: "Deals damage equal to 692% of Attack to the target. Inflicts the target with Stun for 1.5s upon successful attack.",
      effect: {
        name: "Stun",
        description: "Prevents movement or attacking for the duration of the effect."
      }
    }
  ]
},
{
  name: "[Great Trembling Mountain] Dumbelbas",

  icon: "https://i.imgur.com/sAbXG5R.png",

  affiliation: "Giant Warriors",
  grade: "Epic",
  attribute: "STR",
  type: "Tank",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 61% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Rock Smash",
      description: "20% chance to deal damage equal to 88% of Attack to the target. Grants Stun to both self and the target for 1s upon successful attack.",
      effect: {
        name: "Stun",
        description: "Prevents movement or attacking for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Mountain Strike",
      description: "Deals damage equal to 553% of Attack to all enemies within 2m of the initial target. Grants Stun Immunity to self for 5s upon successful attack.",
      effect: {
        name: "Stun Immunity",
        description: "Nullifies Stun."
      }
    }
  ]
},
{
  name: "Mutant Holy Knight Dale",

  icon: "https://i.imgur.com/O2vDMMa.png",

  affiliation: "Ordan Village",
  grade: "Epic",
  attribute: "DEX",
  type: "DPS",

  recommendedPotential: "Full Critical Damage",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 87% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Death Strike",
      description: "Upon landing a Critical Hit, deals damage equal to 151% of Attack to the target. Inflicts the target with Stun for 0.6s upon successful attack. (Cooldown: 5s)",
      effect: {
        name: "Stun",
        description: "Prevents movement or attacking for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Demon Breath",
      description: "Deals damage equal to 390% of Attack to all enemies within 3m of self. Grants Lv. 4 Sever to self for 10s upon successful attack.",
      effect: {
        name: "Lv. 4 Sever",
        description: "Increases Crit Chance by 16%."
      }
    }
  ]
},
{
  name: "Liones Royal Mage",

  icon: "https://i.imgur.com/cQfsWCT.png",

  affiliation: "Liones Holy Knight",
  grade: "Rare",
  attribute: "VIT",
  type: "DPS",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Explosion",
      description: "Deals damage equal to 80% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Sting Target",
      description: "30% chance to deal damage equal to 130% of Attack to the target. Final damage is increased by 20% against DEX-attribute targets."
    },

    {
      category: "Ultimate Move",
      name: "Heavy Bump",
      description: "Deals damage equal to 666% of Attack to all enemies within 2m of the initial target. Final damage is increased by 30% against DEX-attribute targets."
    }
  ]
},
{
  name: "Soul Herder",

  icon: "https://i.imgur.com/4GhXYNY.png",

  affiliation: "Undead",
  grade: "Rare",
  attribute: "STR",
  type: "Support",

recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 60% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Arcanum Injection",
      description: "Grants Lv. 2 Swiftness to STR-attribute allies for 3s every 6s.",
      effect: {
        name: "Lv. 2 Swiftness",
        description: "Increases Attack Speed by 2%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Piercing Gale",
      description: "Deals damage equal to 574% of Attack to the target. Grants Lv. 2 Onslaught to STR-attribute allies for 10s upon successful attack.",
      effect: {
        name: "Lv. 2 Onslaught",
        description: "Increases final Attack by 8%."
      }
    }
  ]
},
{
  name: "Liones Holy Knight Apprentice",

  icon: "https://i.imgur.com/bjxF7gD.png",

  affiliation: "Liones Holy Knight",
  grade: "Rare",
  attribute: "STR",
  type: "Debuffer",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 64% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Disturb Spirit",
      description: "Upon landing a Critical Hit, deals damage equal to 105% of Attack to the target. Makes the target Flinch upon successful attack."
    },

    {
      category: "Ultimate Move",
      name: "Pervading Darkness",
      description: "Deals damage equal to 569% of Attack to the target. Inflicts the target with Infect for 4s upon successful attack.",
      effect: {
        name: "Infect",
        description: "Unable to Recover HP for the duration of the effect."
      }
    }
  ]
},
{
  name: "Werewolf Chieftain",

  icon: "https://i.imgur.com/IO2rraP.png",

  affiliation: "Werebeasts",
  grade: "Rare",
  attribute: "STR",
  type: "DPS",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 80% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Brutal Blow",
      description: "Upon landing a Critical Hit, deals damage equal to 98% of Attack to the target. Restores own HP by an amount equal to 5% of Max HP if this skill defeats an enemy."
    },

    {
      category: "Ultimate Move",
      name: "Impact Strike",
      description: "Deals damage equal to 645% of Attack to the target. This skill's final damage is increased by 20% against INT-attribute targets."
    }
  ]
},
{
  name: "Liones Spearman",

  icon: "https://i.imgur.com/mRf9hxU.png",

  affiliation: "Liones Holy Knight",
  grade: "Rare",
  attribute: "STR",
  type: "Tank",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 55% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Cross Cleave",
      description: "5% chance to deal damage equal to 81% of Attack to the target. Grants Lv. 2 Absolute Defense to self for 3s upon successful attack.",
      effect: {
        name: "Lv. 2 Absolute Defense",
        description: "Nullifies damage taken 2 time(s)."
      }
    },

    {
      category: "Ultimate Move",
      name: "Heavy Bump",
      description: "Deals damage equal to 511% of Attack to the target. Removes all debuffs from self upon successful attack."
    }
  ]
},
{
  name: "Liones Holy Knight Striker",

  icon: "https://i.imgur.com/Bcmmk78.png",

  affiliation: "Liones Holy Knight",
  grade: "Rare",
  attribute: "DEX",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 60% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Arcanum Injection",
      description: "Upon being hit 3 time(s), restores allies' HP by an amount equal to 30% of Attack.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Piercing Gale",
      description: "Deals damage equal to 542% of Attack to the target. Restores allies' HP by an amount equal to 110% of Attack upon successful attack.",
      effect: null
    }
  ]
},
{
  name: "Soul Guardian",

  icon: "https://i.imgur.com/JWatCRH.png",

  affiliation: "Undead",
  grade: "Rare",
  attribute: "DEX",
  type: "DPS",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 80% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Terrain Glory",
      description: "The first 1 time this hero suffers a fatal blow, the hero gains Lv. 3 Revive.",
      effect: {
        name: "Revive",
        description: "Upon receiving a fatal blow for the first time, revives with 60% of Max HP."
      }
    },

    {
      category: "Ultimate Move",
      name: "Rapid Cutter",
      description: "Deals damage equal to 645% of Attack to the target. Grants Lv. 2 Concentration to self for 10s upon successful attack.",
      effect: {
        name: "Concentration",
        description: "Increases final Accuracy by 6%."
      }
    }
  ]
},
{
  name: "Soul Watchman",

  icon: "https://i.imgur.com/gFxWYY5.png",

  affiliation: "Undead",
  grade: "Rare",
  attribute: "INT",
  type: "Tank",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 56% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Slam Crush",
      description: "Upon landing a Critical Hit, deals damage equal to 69% of Attack to the target. Grants Lv. 2 Regeneration to self for 3s upon successful attack.",
      effect: {
        name: "Regeneration",
        description: "Restores HP by an amount equal to 13% of the caster's Attack every 1 second(s)."
      }
    },

    {
      category: "Ultimate Move",
      name: "Pervading Darkness",
      description: "Deals damage equal to 507% of Attack to the target. Inflicts the target with Bind for 1.5s upon successful attack.",
      effect: {
        name: "Bind",
        description: "Unable to move for the duration of the effect."
      }
    }
  ]
},
{
  name: "Impish Hide and Seek",

  icon: "https://i.imgur.com/O59Qli9.png",

  affiliation: "Spirits",
  grade: "Rare",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 60% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Terrain Glory",
      description: "Grants Paralysis Immunity to allies.",
      effect: {
        name: "Paralysis Immunity",
        description: "Immune to Paralysis."
      }
    },

    {
      category: "Ultimate Move",
      name: "Curse of Pain",
      description: "Deals damage equal to 540% of Attack to the target. Inflicts the target with Silence for 1.5s upon successful attack.",
      effect: {
        name: "Silence",
        description: "Unable to use Special Skills or Ultimates for the duration of the effect."
      }
    }
  ]
},
{
  name: "Liones Holy Knight Supporter",

  icon: "https://i.imgur.com/y4hfonc.png",

  affiliation: "Liones Holy Knight",
  grade: "Rare",
  attribute: "VIT",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 60% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Rampage Stagger",
      description: "30% chance to deal damage equal to 98% of Attack to the target. Grants Lv. 2 Concentration to VIT-attribute allies for 3s upon successful attack.",
      effect: {
        name: "Lv. 2 Concentration",
        description: "Increases final Accuracy by 6%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Bump Explosion",
      description: "Deals damage equal to 567% of Attack to the target. Removes all buffs on the target upon successful attack."
    }
  ]
},
{
  name: "Werebear Chieftain",

  icon: "https://i.imgur.com/ZRSKHSN.png",

  affiliation: "Werebeasts",
  grade: "Rare",
  attribute: "DEX",
  type: "Tank",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 56% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Cross Cleave",
      description: "Upon landing a Critical Hit, deals damage equal to 85% of Attack to the target. Grants Lv. 3 Sturdy to self for 3s upon successful attack.",
      effect: {
        name: "Sturdy",
        description: "Increases Crit Resistance by 12%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Deep Chuck",
      description: "Deals damage equal to 565% of Attack to the target. Grants Lv. 3 Elasticity to self for 10s upon successful attack.",
      effect: {
        name: "Elasticity",
        description: "Increases Crit Defense by 18%."
      }
    }
  ]
},
{
  name: "Oblivion Assault Captain",

  icon: "https://i.imgur.com/2mjFEoE.png",

  affiliation: "Undead",
  grade: "Rare",
  attribute: "DEX",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 60% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Rampage Stagger",
      description: "30% chance to deal damage equal to 74% of Attack to the target. Grants Bind Immunity to allies for 3s upon successful attack.",
      effect: {
        name: "Bind Immunity",
        description: "Nullifies Bind."
      }
    },

    {
      category: "Ultimate Move",
      name: "Bump Explosion",
      description: "Deals damage equal to 529% of Attack to the target. Removes all debuffs from allies upon successful attack.",
      effect: {
        name: "Debuff Cleanse",
        description: "Removes all debuffs from allies."
      }
    }
  ]
},
{
  name: "Chess King",

  icon: "https://i.imgur.com/JzBwYG7.png",

  affiliation: "Chess Pieces",
  grade: "Rare",
  attribute: "INT",
  type: "DPS",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 72% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Arcanum Injection",
      description: "Upon being hit 5 time(s), gain Lv. 3 Concentration for 3s.",
      effect: {
        name: "Concentration",
        description: "Increases final Accuracy by 9%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Rapid Cutter",
      description: "Deals damage equal to 656% of Attack to the target. Grants Lv. 3 Onslaught to self for 10s upon successful attack.",
      effect: {
        name: "Onslaught",
        description: "Increases final Attack by 12%."
      }
    }
  ]
},
{
  name: "Liones Holy Knight Defender",

  icon: "https://i.imgur.com/RWYYfyz.png",

  affiliation: "Liones Holy Knight",
  grade: "Rare",
  attribute: "INT",
  type: "Debuffer",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 64% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Cursed Disgrace",
      description: "Upon landing a Critical Hit, deals damage equal to 79% of Attack to the target. Inflicts the target with Lv. 3 Bleed for 3s upon successful attack.",
      effect: {
        name: "Bleed",
        description: "Deals damage equal to 24% of the caster's Attack every 1 second(s)."
      }
    },

    {
      category: "Ultimate Move",
      name: "Curse of Pain",
      description: "Deals damage equal to 578% of Attack to the target. Inflicts the target with Lv. 3 Break for 10s upon successful attack.",
      effect: {
        name: "Break",
        description: "Decreases Crit Defense by 24%."
      }
    }
  ]
},
{
  name: "Giant Warrior",

  icon: "https://i.imgur.com/3vo2Wot.png",

  affiliation: "Giant Warriors",
  grade: "Rare",
  attribute: "VIT",
  type: "Tank",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Pinpoint Strike",
      description: "Deals damage equal to 56% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Brutal Blow",
      description: "Upon landing a Critical Hit, deals damage equal to 79% of Attack to the target. Grants Lv. 3 Steel to self for 3s upon successful attack.",
      effect: {
        name: "Steel",
        description: "Increases final Defense by 12%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Bump Explosion",
      description: "Deals damage equal to 500% of Attack to all enemies within 2m of the initial target. Grants Lv. 3 Veil to self for 10s upon successful attack.",
      effect: {
        name: "Veil",
        description: "Absorbs damage equal to 15% of the caster's HP."
      }
    }
  ]
},
{
  name: "Liones Mage Apprentice",

  icon: "https://i.imgur.com/AXMTRwU.png",

  affiliation: "Liones Holy Knight",
  grade: "Rare",
  attribute: "VIT",
  type: "Debuffer",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 64% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Cursed Disgrace",
      description: "30% chance to deal damage equal to 75% of Attack to the target. Inflicts the target with Lv. 3 Blind for 3s upon successful attack.",
      effect: {
        name: "Lv. 3 Blind",
        description: "Decreases final Accuracy by 12%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Curse of Pain",
      description: "Deals damage equal to 584% of Attack to all enemies within 2m of the initial target. Inflicts targets hit with Lv. 1 Burn for 10s upon successful attack.",
      effect: {
        name: "Lv. 1 Burn",
        description: "Deals damage equal to 12% of the caster's Attack every 1 second(s) and decreases Crit Resistance by 2%."
      }
    }
  ]
},
{
  name: "Corrupted Fairy Rania",

  icon: "https://i.imgur.com/N97jyBy.png",

  affiliation: "Fairy King's Forest",
  grade: "Rare",
  attribute: "VIT",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 60% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Seething Pain",
      description: "Upon landing a Critical Hit, deals damage equal to 86% of Attack to the target. Restores allies' HP by an amount equal to 20% of Attack upon successful attack.",
      effect: {
        name: "Healing",
        description: "Restores allies' HP by an amount equal to 20% of Attack."
      }
    },

    {
      category: "Ultimate Move",
      name: "Pervading Darkness",
      description: "Deals damage equal to 150% of Attack to the target. Inflicts the target with Bind for 1.5s upon successful attack.",
      effect: {
        name: "Bind",
        description: "Unable to move for the duration of the effect."
      }
    }
  ]
},
{
  name: "Wandering Banshee",

  icon: "https://i.imgur.com/SbwKoiz.png",

  affiliation: "Spirits",
  grade: "Normal",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 58% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Cursed Disgrace",
      description: "Grants Lv. 1 Onslaught to INT-attribute allies.",
      effect: {
        name: "Onslaught",
        description: "Increases final Attack by 4%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Curse of Pain",
      description: "Deals damage equal to 487% of Attack to the target. Inflicts the target with Lv. 2 Blind for 10s upon successful attack.",
      effect: {
        name: "Blind",
        description: "Decreases final Accuracy by 8%."
      }
    }
  ]
},
{
  name: "Croakie",

  icon: "https://i.imgur.com/2muWLSz.png",

  affiliation: "Britannia's Wildlife",
  grade: "Normal",
  attribute: "STR",
  type: "Tank",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 54% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Sting Target",
      description: "Upon landing a Critical Hit, deals damage equal to 59% of Attack to the target. Grants Lv. 2 Steel to self for 3s upon successful attack.",
      effect: {
        name: "Lv. 2 Steel",
        description: "Increases final Defense by 8%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Impact Strike",
      description: "Deals damage equal to 548% of Attack to all enemies within 4.5m of self. Removes all buffs from targets hit upon successful attack.",
      effect: {
        name: "Buff Removal",
        description: "Removes all buffs from targets hit upon successful attack."
      }
    }
  ]
},
{
  name: "Werewolf Tracker",

  icon: "https://i.imgur.com/1PugTLh.png",

  affiliation: "Werebeasts",
  grade: "Normal",
  attribute: "VIT",
  type: "DPS",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 77% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Slam Crush",
      description: "Upon landing a Critical Hit, deals damage equal to 84% of Attack to the target. Grants Lv. 2 Swiftness to self for 3s upon successful attack.",
      effect: {
        name: "Lv. 2 Swiftness",
        description: "Increases Attack Speed by 2%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Curse of Pain",
      description: "Deals damage equal to 592% of Attack to all enemies within 2m of the initial target. Inflicts targets hit with Lv. 1 Slow for 10s upon successful attack.",
      effect: {
        name: "Lv. 1 Slow",
        description: "Decreases Attack Speed by 3%."
      }
    }
  ]
},
{
  name: "Mossy Albion Fragment",

  icon: "https://i.imgur.com/7SSjbkG.png",

  affiliation: "Traces of the Demons",
  grade: "Normal",
  attribute: "DEX",
  type: "Tank",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Explosion",
      description: "Deals damage equal to 90% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Arcanum Injection",
      description: "Upon being hit 3 time(s), restores own HP by an amount equal to 1% of Max HP.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Pervading Darkness",
      description: "Deals damage equal to 483% of Attack to all enemies within 2m of the initial target. Inflicts targets hit with Infect for 2s upon successful attack.",
      effect: {
        name: "Infect",
        description: "Unable to Recover HP for the duration of the effect."
      }
    }
  ]
},
{
  name: "Patrol Fairy",

  icon: "https://i.imgur.com/xFUZlJF.png",

  affiliation: "Fairy King's Forest",
  grade: "Normal",
  attribute: "STR",
  type: "Debuffer",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 54% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Cursed Disgrace",
      description: "Upon landing a Critical Hit, deals damage equal to 89% of Attack to the target. Inflicts the target with Lv. 2 Burn for 3s upon successful attack.",
      effect: {
        name: "Lv. 2 Burn",
        description: "Deals damage equal to 15% of the caster's Attack every 1 second(s) and decreases Crit Resistance by 3%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Curse of Pain",
      description: "Deals damage equal to 576% of Attack to the target. Inflicts the target with Lv. 2 Break for 10s upon successful attack.",
      effect: {
        name: "Lv. 2 Break",
        description: "Decreases Crit Defense by 16%."
      }
    }
  ]
},
{
  name: "Chess Bishop",

  icon: "https://i.imgur.com/2Xn6CxR.png",

  affiliation: "Chess Pieces",
  grade: "Normal",
  attribute: "VIT",
  type: "Debuffer",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 56% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Disturb Spirit",
      description: "Upon being hit 5 time(s), inflicts the closest enemy with Silence for 1s.",
      effect: {
        name: "Silence",
        description: "Unable to use Special Skills or Ultimates for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Pervading Darkness",
      description: "Deals damage equal to 531% of Attack to the target. Inflicts the target with Lv. 2 Resistance Down for 10s upon successful attack.",
      effect: {
        name: "Lv. 2 Resistance Down",
        description: "Decreases Crit Resistance by 10%."
      }
    }
  ]
},
{
  name: "Soul Taker",

  icon: "https://i.imgur.com/2Gt82ow.png",

  affiliation: "Undead",
  grade: "Normal",
  attribute: "VIT",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Pinpoint Strike",
      description: "Deals damage equal to 58% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Rampage Stagger",
      description: "Upon landing a Critical Hit, deals damage equal to 63% of Attack to the target. Grants Lv. 1 Elasticity to VIT-attribute allies for 3s upon successful attack.",
      effect: {
        name: "Lv. 1 Elasticity",
        description: "Increases Crit Defense by 6%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Deep Chuck",
      description: "Deals damage equal to 496% of Attack to all enemies within 3m of self. Grants Lv. 2 Regeneration to self for 10s upon successful attack.",
      effect: {
        name: "Lv. 2 Regeneration",
        description: "Restores HP by an amount equal to 13% of the caster's Attack every 1 second(s)."
      }
    }
  ]
},
{
  name: "Werebear Shaman",

  icon: "https://i.imgur.com/rmyJEGr.png",

  affiliation: "Werebeasts",
  grade: "Normal",
  attribute: "DEX",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 56% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Cursed Disgrace",
      description: "20% chance to deal damage equal to 63% of Attack to the target. Makes the target Flinch upon successful attack.",
      effect: {
        name: "Flinch",
        description: "Interrupts the target's current action."
      }
    },

    {
      category: "Ultimate Move",
      name: "Intensive Care",
      description: "Grants Lv. 1 Regeneration to allies for 10s.",
      effect: {
        name: "Lv. 1 Regeneration",
        description: "Restores HP by an amount equal to 8% of the caster's Attack every 1 second(s)."
      }
    }
  ]
},
{
  name: "Screamer",

  icon: "https://i.imgur.com/LmdhPOP.png",

  affiliation: "Britannia's Wildlife",
  grade: "Normal",
  attribute: "INT",
  type: "Tank",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 61% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Disturb Spirit",
      description: "Upon landing a Critical Hit, deals damage equal to 82% of Attack to the target. Inflicts the target with Lv. 2 Weaken for 3s upon successful attack.",
      effect: {
        name: "Lv. 2 Weaken",
        description: "Decreases final Attack by 12%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Rapid Cutter",
      description: "Deals damage equal to 519% of Attack to all enemies within 3m of self. Grants Lv. 1 Regeneration to allies for 10s upon successful attack.",
      effect: {
        name: "Lv. 1 Regeneration",
        description: "Restores HP by an amount equal to 8% of the caster's Attack every 1 second(s)."
      }
    }
  ]
},
{
  name: "Chess Rook",

  icon: "https://i.imgur.com/Fp6uw1O.png",

  affiliation: "Chess Pieces",
  grade: "Normal",
  attribute: "STR",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 54% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Terrain Glory",
      description: "Grants Lv. 1 Spike to STR-attribute allies.",
      effect: {
        name: "Lv. 1 Spike",
        description: "Increases Crit Damage by 6%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Impact Strike",
      description: "Deals damage equal to 541% of Attack to the target. Final damage is increased by 20% against VIT-attribute targets.",
      effect: {
        name: "Bonus Damage",
        description: "Final damage is increased by 20% against VIT-attribute targets."
      }
    }
  ]
},
{
  name: "Seeker Fairy",

  icon: "https://i.imgur.com/8l7jQ2V.png",

  affiliation: "Fairy King's Forest",
  grade: "Normal",
  attribute: "STR",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 58% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Slam Crush",
      description: "Upon landing a Critical Hit, deals damage equal to 81% of Attack to the target. Restores own HP by an amount equal to 3% of Max HP upon successful attack.",
      effect: {
        name: "Healing",
        description: "Restores own HP by an amount equal to 3% of Max HP."
      }
    },

    {
      category: "Ultimate Move",
      name: "Heavy Bump",
      description: "Deals damage equal to 539% of Attack to the target. Restores allies' HP by an amount equal to 150% of Attack upon successful attack.",
      effect: {
        name: "Healing",
        description: "Restores allies' HP by an amount equal to 150% of Attack."
      }
    }
  ]
},
{
  name: "Crystal Golem",

  icon: "https://i.imgur.com/8rNpS03.png",

  affiliation: "Spirits",
  grade: "Normal",
  attribute: "DEX",
  type: "DPS",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Pinpoint Strike",
      description: "Deals damage equal to 77% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Seething Pain",
      description: "Upon landing a Critical Hit, deals damage equal to 105% of Attack to the target. This skill's final damage is increased by 20% against INT-attribute targets.",
      effect: {
        name: "Bonus Damage",
        description: "Final damage is increased by 20% against INT-attribute targets."
      }
    },

    {
      category: "Ultimate Move",
      name: "Curse of Pain",
      description: "Deals damage equal to 623% of Attack to the target. Inflicts the target with Stun for 1s upon successful attack.",
      effect: {
        name: "Stun",
        description: "Prevents movement or attacking for the duration of the effect."
      }
    }
  ]
},
{
  name: "Rock Golem",

  icon: "https://i.imgur.com/Xg5h0U2.png",

  affiliation: "Spirits",
  grade: "Normal",
  attribute: "DEX",
  type: "Debuffer",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 62% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Arcanum Injection",
      description: "The first 1 time this hero suffers a fatal blow, the hero gains Immortality for 3s.",
      effect: {
        name: "Immortality",
        description: "Cannot die for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Pervading Darkness",
      description: "Deals damage equal to 576% of Attack to the target. Inflicts the target with Stun for 1s upon successful attack.",
      effect: {
        name: "Stun",
        description: "Prevents movement or attacking for the duration of the effect."
      }
    }
  ]
},
{
  name: "Fairy King's Forest Messenger",

  icon: "https://i.imgur.com/TZxXh8h.png",

  affiliation: "Fairy King's Forest",
  grade: "Normal",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 58% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Terrain Glory",
      description: "Upon being hit 3 time(s), restores allies' HP by an amount equal to 50% of Attack.",
      effect: {
        name: "Healing",
        description: "Restores allies' HP by an amount equal to 50% of Attack."
      }
    },

    {
      category: "Ultimate Move",
      name: "Impact Strike",
      description: "Deals damage equal to 520% of Attack to the target. Restores allies' HP by an amount equal to 100% of Attack upon successful attack.",
      effect: {
        name: "Healing",
        description: "Restores allies' HP by an amount equal to 100% of Attack."
      }
    }
  ]
},
{
  name: "Crowned Owl",

  icon: "https://i.imgur.com/S0LFi62.png",

  affiliation: "Britannia's Wildlife",
  grade: "Basic",
  attribute: "STR",
  type: "Tank",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 52% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Terrain Glory",
      description: "Grants Bleed Immunity to allies.",
      effect: {
        name: "Bleed Immunity",
        description: "Immune to Bleed."
      }
    },

    {
      category: "Ultimate Move",
      name: "Deep Chuck",
      description: "Deals damage equal to 473% of Attack to all enemies within 3m of self. Grants Lv. 1 Evasion to self for 10s upon successful attack.",
      effect: {
        name: "Lv. 1 Evasion",
        description: "Increases final Evasion by 3%."
      }
    }
  ]
},
{
  name: "Cliff Howler",

  icon: "https://i.imgur.com/L7Ciu89.png",

  affiliation: "Britannia's Wildlife",
  grade: "Basic",
  attribute: "INT",
  type: "Tank",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 52% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Arcanum Injection",
      description: "Grants Freeze Immunity to allies.",
      effect: {
        name: "Freeze Immunity",
        description: "Immune to Freeze."
      }
    },

    {
      category: "Ultimate Move",
      name: "Bump Explosion",
      description: "Deals damage equal to 461% of Attack to the target. Grants Lv. 1 Absolute Defense to self for 10s upon successful attack.",
      effect: {
        name: "Lv. 1 Absolute Defense",
        description: "Nullifies damage taken 1 time(s)."
      }
    }
  ]
},
{
  name: "Poisonbug",

  icon: "https://i.imgur.com/HrmJ5wh.png",

  affiliation: "Britannia's Wildlife",
  grade: "Basic",
  attribute: "INT",
  type: "Debuffer",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 61% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Disturb Spirit",
      description: "30% chance to deal damage equal to 103% of Attack to the target. Inflicts the target with Lv. 1 Blind for 3s upon successful attack.",
      effect: {
        name: "Lv. 1 Blind",
        description: "Decreases final Accuracy by 4%."
      }
    },

    {
      category: "Ultimate Move",
      name: "Heavy Bump",
      description: "Deals damage equal to 503% of Attack to the target. Inflicts the target with Lv. 2 Acid for 10s upon successful attack.",
      effect: {
        name: "Lv. 2 Acid",
        description: "Deals damage equal to 15% of the caster's Attack every 1 second(s) and decreases final Defense by 3%."
      }
    }
  ]
},
{
  name: "Wandering Soul",

  icon: "https://i.imgur.com/Ea5Sbct.png",

  affiliation: "Spirits",
  grade: "Basic",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 55% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Disturb Spirit",
      description: "Every 10s, inflicts all enemies within 3m of self with Silence for 1s and restores all allies' HP by an amount equal to 30% of Attack.",
      effect: {
        name: "Silence",
        description: "Unable to use Special Skills or Ultimates for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Rapid Cutter",
      description: "Deals damage equal to 467% of Attack to the target. Restores own HP by an amount equal to 3% of Max HP upon successful attack.",
      effect: {
        name: "Healing",
        description: "Restores own HP by an amount equal to 3% of Max HP."
      }
    }
  ]
},
{
  name: "Mischievous Little Ghost",

  icon: "https://i.imgur.com/saMx9kX.png",

  affiliation: "Undead",
  grade: "Basic",
  attribute: "INT",
  type: "DPS",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Hellfire",
      description: "Deals damage equal to 74% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Terrain Glory",
      description: "Grants Paralysis Immunity to allies.",
      effect: {
        name: "Paralysis Immunity",
        description: "Immune to Paralysis."
      }
    },

    {
      category: "Ultimate Move",
      name: "Impact Strike",
      description: "Deals damage equal to 614% of Attack to the target. Grants Lv. 1 Spike to self for 10s upon successful attack.",
      effect: {
        name: "Lv. 1 Spike",
        description: "Increases Crit Damage by 6%."
      }
    }
  ]
},
{
  name: "Stump Golem",

  icon: "https://i.imgur.com/4jbkrYe.png",

  affiliation: "Spirits",
  grade: "Basic",
  attribute: "STR",
  type: "DPS",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 74% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Seething Pain",
      description: "Upon landing a Critical Hit, deals damage equal to 152% of Attack to the target. Restores 2 Energy upon successful attack.",
      effect: {
        name: "Energy Recovery",
        description: "Restores 2 Energy upon successful attack."
      }
    },

    {
      category: "Ultimate Move",
      name: "Impact Strike",
      description: "Deals damage equal to 659% of Attack to the target. Inflicts the target with Lv. 1 Acid for 10s upon successful attack.",
      effect: {
        name: "Lv. 1 Acid",
        description: "Deals damage equal to 12% of the caster's Attack every 1 second(s) and decreases final Defense by 2%."
      }
    }
  ]
},
{
  name: "Trapbug",

  icon: "https://i.imgur.com/fo4Fzre.png",

  affiliation: "Britannia's Wildlife",
  grade: "Basic",
  attribute: "VIT",
  type: "Debuffer",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Bomb",
      description: "Deals damage equal to 51% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Cursed Disgrace",
      description: "Upon landing a Critical Hit, deals damage equal to 108% of Attack to the target. Inflicts the target with Infect for 1s upon successful attack.",
      effect: {
        name: "Infect",
        description: "Unable to Recover HP for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Curse of Pain",
      description: "Deals damage equal to 547% of Attack to the target. Inflicts the target with Lv. 2 Blind for 10s upon successful attack.",
      effect: {
        name: "Lv. 2 Blind",
        description: "Decreases final Accuracy by 8%."
      }
    }
  ]
},
{
  name: "Vampiric Bat",

  icon: "https://i.imgur.com/pIEYTUl.png",

  affiliation: "Britannia's Wildlife",
  grade: "Basic",
  attribute: "VIT",
  type: "DPS",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 76% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Sting Target",
      description: "Upon landing a Critical Hit, deals damage equal to 128% of Attack to the target. Final damage is increased by 20% against DEX-attribute targets.",
      effect: {
        name: "DEX Slayer",
        description: "Final damage is increased by 20% against DEX-attribute targets."
      }
    },

    {
      category: "Ultimate Move",
      name: "Glorious Aura",
      description: "Grants Lv. 1 Evasion to self for 10s.",
      effect: {
        name: "Lv. 1 Evasion",
        description: "Increases final Evasion by 3%."
      }
    }
  ]
},
{
  name: "Black Poisonous Spider",

  icon: "https://i.imgur.com/05gOoln.png",

  affiliation: "Britannia's Wildlife",
  grade: "Basic",
  attribute: "VIT",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 55% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Seething Pain",
      description: "Upon landing a Critical Hit, deals damage equal to 110% of Attack to the target. Restores 2 Energy upon successful attack.",
      effect: {
        name: "Energy Recovery",
        description: "Restores 2 Energy upon successful attack."
      }
    },

    {
      category: "Ultimate Move",
      name: "Bump Explosion",
      description: "Deals damage equal to 516% of Attack to the target. Restores 5 Energy upon successful attack.",
      effect: {
        name: "Energy Recovery",
        description: "Restores 5 Energy upon successful attack."
      }
    }
  ]
},
{
  name: "Aggressive Fighter",

  icon: "https://i.imgur.com/vWBl7GG.png",

  affiliation: "Vaizel",
  grade: "Basic",
  attribute: "STR",
  type: "DPS",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 69% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Sting Target",
      description: "30% chance to deal damage equal to 107% of Attack to the target. Final damage is increased by 20% against VIT-attribute targets.",
      effect: {
        name: "VIT Slayer",
        description: "Final damage is increased by 20% against VIT-attribute targets."
      }
    },

    {
      category: "Ultimate Move",
      name: "Piercing Gale",
      description: "Deals damage equal to 605% of Attack to the target. Final damage is increased by 30% against VIT-attribute targets.",
      effect: {
        name: "VIT Slayer",
        description: "Final damage is increased by 30% against VIT-attribute targets."
      }
    }
  ]
},
{
  name: "Walker Shaman",

  icon: "https://i.imgur.com/JzVG4j2.png",

  affiliation: "Walkers",
  grade: "Basic",
  attribute: "VIT",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 48% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Arcanum Injection",
      description: "Restores allies' HP by an amount equal to 1% of their Max HP every 5s.",
      effect: {
        name: "Healing",
        description: "Restores allies' HP by an amount equal to 1% of their Max HP every 5s."
      }
    },

    {
      category: "Ultimate Move",
      name: "Curse of Pain",
      description: "Deals damage equal to 498% of Attack to the target. Makes the target Flinch upon successful attack.",
      effect: {
        name: "Flinch",
        description: "Interrupts the target's current action."
      }
    }
  ]
},
{
  name: "Walker Warrior",

  icon: "https://i.imgur.com/hPZuj8H.png",

  affiliation: "Walkers",
  grade: "Basic",
  attribute: "DEX",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Charge",
      description: "Deals damage equal to 54% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Terrain Glory",
      description: "Grants Bleed Immunity to allies.",
      effect: {
        name: "Bleed Immunity",
        description: "Immune to Bleed."
      }
    },

    {
      category: "Ultimate Move",
      name: "Pervading Darkness",
      description: "Deals damage equal to 500% of Attack to the target. Inflicts the target with Silence for 0.5s upon successful attack.",
      effect: {
        name: "Silence",
        description: "Unable to use Special Skills or Ultimates for the duration of the effect."
      }
    }
  ]
},
{
  name: "Shadow",

  icon: "https://i.imgur.com/vX8TtL1.png",

  affiliation: "Spirits",
  grade: "Basic",
  attribute: "STR",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 55% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Arcanum Injection",
      description: "Grants Silence Immunity to allies.",
      effect: {
        name: "Silence Immunity",
        description: "Immune to Silence."
      }
    },

    {
      category: "Ultimate Move",
      name: "Impact Strike",
      description: "Deals damage equal to 527% of Attack to the target. Restores own HP by an amount equal to 40% of the damage dealt upon successful attack.",
      effect: null
    }
  ]
},
{
  name: "Wild Screamer",

  icon: "https://i.imgur.com/3Oonxgm.png",

  affiliation: "Britannia's Wildlife",
  grade: "Basic",
  attribute: "STR",
  type: "Debuffer",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 59% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Cross Cleave",
      description: "Upon taking a hit, deals damage equal to 80% of Attack to the target. Taunts nearby enemies for 1s upon successful attack. (Cooldown: 5s)",
      effect: {
        name: "Taunt",
        description: "Taunted targets will temporarily prioritize attacking the caster of the Taunt."
      }
    },

    {
      category: "Ultimate Move",
      name: "Curse of Pain",
      description: "Deals damage equal to 525% of Attack to the target. Inflicts the target with Lv. 1 Slow for 10s upon successful attack.",
      effect: {
        name: "Lv. 1 Slow",
        description: "Decreases Attack Speed by 3%."
      }
    }
  ]
},
{
  name: "Oblivion Recon Unit",

  icon: "https://i.imgur.com/jAWPwFu.png",

  affiliation: "Undead",
  grade: "Basic",
  attribute: "VIT",
  type: "Tank",

  recommendedPotential: -",

  skills: [
    {
      category: "Normal Skill",
      name: "Splinter",
      description: "Deals damage equal to 45% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Terrain Glory",
      description: "Grants Infection Immunity to allies.",
      effect: {
        name: "Infection Immunity",
        description: "Immune to Infection."
      }
    },

    {
      category: "Ultimate Move",
      name: "Deep Chuck",
      description: "Deals damage equal to 375% of Attack to the target. Grants Lv. 1 Veil to self for 10s upon successful attack.",
      effect: {
        name: "Lv. 1 Veil",
        description: "Absorbs damage equal to 5% of the caster's HP."
      }
    }
  ]
},
{
  name: "Berserk Holy Knight Striker",

  icon: "https://i.imgur.com/U6eblhU.png",

  affiliation: "Traces of the Demons",
  grade: "Basic",
  attribute: "DEX",
  type: "Debuffer",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Blast",
      description: "Deals damage equal to 40% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Disturb Spirit",
      description: "30% chance to deal damage equal to 90% of Attack to the target. Inflicts the target with Paralysis for 0.4s upon successful attack.",
      effect: {
        name: "Paralysis",
        description: "Unable to move or attack for the duration of the effect."
      }
    },

    {
      category: "Ultimate Move",
      name: "Pervading Darkness",
      description: "Deals damage equal to 523% of Attack to all enemies within 3m of self. Inflicts targets hit with Stun for 1s upon successful attack.",
      effect: {
        name: "Stun",
        description: "Prevents movement or attacking for the duration of the effect."
      }
    }
  ]
},
{
  name: "Fierce Dragon",

  icon: "https://i.imgur.com/7mn0Pom.png",

  affiliation: "Britannia's Wildlife",
  grade: "Basic",
  attribute: "STR",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 55% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Terrain Glory",
      description: "0.01% chance to deal damage equal to 875% of Attack to the target. Grants Lv. 3 Absolute Defense to allies for 10s upon successful attack.",
      effect: {
        name: "Lv. 3 Absolute Defense",
        description: "Nullifies damage taken 5 time(s)."
      }
    },

    {
      category: "Ultimate Move",
      name: "Pervading Darkness",
      description: "Deals damage equal to 489% of Attack to all enemies within 3m of self. Inflicts targets hit with Infect for 2s upon successful attack.",
      effect: {
        name: "Infect",
        description: "Unable to Recover HP for the duration of the effect."
      }
    }
  ]
},
{
  name: "Berserk Holy Knight Apprentice",

  icon: "https://i.imgur.com/jtMwBS6.png",

  affiliation: "Traces of the Demons",
  grade: "Basic",
  attribute: "DEX",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Strike",
      description: "Deals damage equal to 43% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Slam Crush",
      description: "30% chance to deal damage equal to 84% of Attack to the target. Restores own HP by an amount equal to 50% of Defense upon successful attack.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Rapid Cutter",
      description: "Deals damage equal to 554% of Attack to the target. Inflicts the target with Lv. 2 Blind for 10s upon successful attack.",
      effect: {
        name: "Lv. 2 Blind",
        description: "Decreases final Accuracy by 8%."
      }
    }
  ]
},
{
  name: "Mushroom Albion Fragment",

  icon: "https://i.imgur.com/BCZPiBc.png",

  affiliation: "Traces of the Demons",
  grade: "Basic",
  attribute: "DEX",
  type: "DPS",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 98% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Brutal Blow",
      description: "30% chance to deal damage equal to 132% of Attack to the target. Final damage is increased by 20% against INT-attribute targets.",
      effect: null
    },

    {
      category: "Ultimate Move",
      name: "Curse of Pain",
      description: "Deals damage equal to 605% of Attack to the target. Inflicts the target with Stun for 1s upon successful attack.",
      effect: {
        name: "Stun",
        description: "Prevents movement or attacking for the duration of the effect."
      }
    }
  ]
},
{
  name: "Mole",

  icon: "https://i.imgur.com/KojC6ZB.png",

  affiliation: "Britannia's Wildlife",
  grade: "Basic",
  attribute: "DEX",
  type: "Tank",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Heavy Blow",
      description: "Deals damage equal to 52% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Arcanum Injection",
      description: "Grants Lv. 1 Veil to self for 3s every 10s.",
      effect: {
        name: "Lv. 1 Veil",
        description: "Absorbs damage equal to 5% of the caster's HP."
      }
    },

    {
      category: "Ultimate Move",
      name: "Deep Chuck",
      description: "Deals damage equal to 461% of Attack to the target. Grants Lv. 1 Elasticity to self for 10s upon successful attack.",
      effect: {
        name: "Lv. 1 Elasticity",
        description: "Increases Crit Defense by 6%."
      }
    }
  ]
},
{
  name: "Oblivion Supply Corps",

  icon: "https://i.imgur.com/4y9LzCd.png",

  affiliation: "Undead",
  grade: "Basic",
  attribute: "INT",
  type: "Support",

  recommendedPotential: "-",

  skills: [
    {
      category: "Normal Skill",
      name: "Strike",
      description: "Deals damage equal to 48% of Attack to the target.",
      effect: null
    },

    {
      category: "Special Skill",
      name: "Arcanum Injection",
      description: "Grants Bind Immunity to allies.",
      effect: {
        name: "Bind Immunity",
        description: "Nullifies Bind."
      }
    },

    {
      category: "Ultimate Move",
      name: "Rapid Cutter",
      description: "Deals damage equal to 485% of Attack to the target. Grants Lv. 1 Absolute Defense to self for 10s upon successful attack.",
      effect: {
        name: "Lv. 1 Absolute Defense",
        description: "Nullifies damage taken 1 time(s)."
      }
    }
  ]
}
];
const grid = document.getElementById("characterGrid");
const searchInput = document.getElementById("searchInput");
const attributeFilter = document.getElementById("attributeFilter");
const typeFilter = document.getElementById("typeFilter");
const affiliationFilter = document.getElementById("affiliationFilter");


function renderCharacters() {
  grid.innerHTML = "";

const selectedGrade = document.getElementById("gradeFilter").value; 
 const searchText = searchInput.value.toLowerCase();
  const selectedAttribute = attributeFilter.value;
  const selectedType = typeFilter.value;
  const selectedAffiliation = affiliationFilter.value;

  const filteredCharacters = characters.filter(character => {
    return (
      character.name.toLowerCase().includes(searchText) &&
      (selectedAttribute === "" || character.attribute === selectedAttribute) &&
      (selectedType === "" || character.type === selectedType) &&
      (selectedAffiliation === "" || character.affiliation === selectedAffiliation) &&
(selectedGrade === "" || character.grade === selectedGrade)
    );
  });

  filteredCharacters.forEach(character => {
    const card = document.createElement("div");
   card.className = "character-card";
card.classList.add(`grade-${character.grade}`);

    card.innerHTML = `
      <img src="${character.icon}" class="character-icon" alt="${character.name} icon">

      <h3>${character.name}</h3>

      <div class="affiliation-badge">
        ${character.affiliation}
      </div>

      <p>${character.attribute} / ${character.type}</p>

      <p>${character.grade}</p>

     
    `;

    card.onclick = () => openPopup(character);
    grid.appendChild(card);
  });
}

function openPopup(character) {
  document.getElementById("charName").textContent = character.name;
  document.getElementById("charAffiliation").textContent = character.affiliation;
  document.getElementById("charGrade").textContent = character.grade;
  document.getElementById("charAttributeType").textContent = `${character.attribute} / ${character.type}`;

document.getElementById("charPotential").textContent =
  character.recommendedPotential || "Not available yet";

const oldTraitBox = document.getElementById("traitBox");
if (oldTraitBox) {
  oldTraitBox.remove();
}

if (character.trait) {
  const traitBox = document.createElement("div");
  traitBox.id = "traitBox";
  traitBox.className = "skill-box";

  const traitEffects = character.trait.effects
    ? character.trait.effects
        .map(effect => `
          <div class="effect-box">
            <p class="effect-name">[${effect.name}]</p>
            <p class="effect-description">${effect.description}</p>
          </div>
        `)
        .join("")
    : character.trait.effect
      ? `
        <div class="effect-box">
          <p class="effect-name">[${character.trait.effect.name}]</p>
          <p class="effect-description">${character.trait.effect.description}</p>
        </div>
      `
      : "";

  traitBox.innerHTML = `
    <h3 class="skill-category">Trait</h3>
    <h4 class="skill-name">"${character.trait.name}"</h4>
    <p class="skill-description">${character.trait.description}</p>
    ${traitEffects}
  `;

 document.querySelector("#popup .info-box").after(traitBox);
}
  

  const skillsContainer = document.getElementById("skillsContainer");
  skillsContainer.innerHTML = "";

  character.skills.forEach(skill => {
    const skillBox = document.createElement("div");
    skillBox.className = "skill-box";

    skillBox.innerHTML = `
      <h3 class="skill-category">${skill.category}</h3>
      <h4 class="skill-name">"${skill.name}"</h4>
      <p class="skill-description">${skill.description}</p>

${
  skill.effects
    ? skill.effects
        .map(effect => `
          <div class="effect-box">
            <p class="effect-name">[${effect.name}]</p>
            <p class="effect-description">${effect.description}</p>
          </div>
        `)
        .join("")
    : skill.effect
      ? `
        <div class="effect-box">
          <p class="effect-name">[${skill.effect.name}]</p>
          <p class="effect-description">${skill.effect.description}</p>
        </div>
      `
      : ""
}
    `;

    skillsContainer.appendChild(skillBox);
  });

  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

searchInput.addEventListener("input", renderCharacters);
attributeFilter.addEventListener("change", renderCharacters);
typeFilter.addEventListener("change", renderCharacters);
affiliationFilter.addEventListener("change", renderCharacters);
document.getElementById("gradeFilter").addEventListener("change", renderCharacters);

renderCharacters();

const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");
const closeAbout = document.getElementById("closeAbout");

aboutBtn.addEventListener("click", () => {
  aboutModal.classList.remove("hidden");
});

closeAbout.addEventListener("click", () => {
  aboutModal.classList.add("hidden");
});

aboutModal.addEventListener("click", (e) => {
  if (e.target === aboutModal) {
    aboutModal.classList.add("hidden");
  }
});

const pveTierBtn = document.getElementById("pveTierBtn");
const pveTierModal = document.getElementById("pveTierModal");
const closePveTier = document.getElementById("closePveTier");

pveTierBtn.addEventListener("click", () => {
  pveTierModal.classList.remove("hidden");
});

closePveTier.addEventListener("click", () => {
  pveTierModal.classList.add("hidden");
});

pveTierModal.addEventListener("click", (e) => {
  if (e.target === pveTierModal) {
    pveTierModal.classList.add("hidden");
  }
});


const pvpTierBtn = document.getElementById("pvpTierBtn");
const pvpTierModal = document.getElementById("pvpTierModal");
const closePvpTier = document.getElementById("closePvpTier");

pvpTierBtn.addEventListener("click", () => {
  pvpTierModal.classList.remove("hidden");
});

closePvpTier.addEventListener("click", () => {
  pvpTierModal.classList.add("hidden");
});

pvpTierModal.addEventListener("click", (e) => {
  if (e.target === pvpTierModal) {
    pvpTierModal.classList.add("hidden");
  }
});
const summonBtn = document.getElementById("summonBtn");
const summonModal = document.getElementById("summonModal");
const closeSummon = document.getElementById("closeSummon");

summonBtn.addEventListener("click", () => {
  summonModal.classList.remove("hidden");
});

closeSummon.addEventListener("click", () => {
  summonModal.classList.add("hidden");
});

summonModal.addEventListener("click", (e) => {
  if (e.target === summonModal) {
    summonModal.classList.add("hidden");
  }
});
const changelogBtn = document.getElementById("changelogBtn");
const changelogModal = document.getElementById("changelogModal");
const closeChangelog = document.getElementById("closeChangelog");

changelogBtn.addEventListener("click", () => {
  changelogModal.classList.remove("hidden");
});

closeChangelog.addEventListener("click", () => {
  changelogModal.classList.add("hidden");
});

changelogModal.addEventListener("click", (e) => {
  if (e.target === changelogModal) {
    changelogModal.classList.add("hidden");
  }
});
