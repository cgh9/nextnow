"use strict";
self["webpackHotUpdate_N_E"]("pages/resources",{

/***/ "./utils/lists.ts":
/*!************************!*\
  !*** ./utils/lists.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "communityList": function() { return /* binding */ communityList; },
/* harmony export */   "resourceList": function() { return /* binding */ resourceList; },
/* harmony export */   "guildsList": function() { return /* binding */ guildsList; },
/* harmony export */   "marketsList": function() { return /* binding */ marketsList; },
/* harmony export */   "derivativesList": function() { return /* binding */ derivativesList; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
// Loot communities
var communityList = [{
  name: "Loot Community Discord",
  description: "For all things Loot and derivatives (note: high traffic)",
  url: "https://discord.gg/NXEntTSHgy"
}, {
  name: "Loot Talk (Forum)",
  description: "A place for structured discussion of all things Loot, for builders and the community",
  url: "https://loot-talk.com"
}, {
  name: "Loot Builders Discord",
  description: "Focused on developers, artists, and writers with minimal derivative, token, and market chat",
  url: "https://discord.gg/Btefs83ART"
}]; // Loot resources

var resourceList = [{
  name: "Loot Rarity",
  description: "Loot attributes and rarities sheet by @AustinGreen",
  url: "https://docs.google.com/spreadsheets/d/1Al0Yi-tM7K_05pCKjkQtSJjwbV2jMfac1i_oC4j2EYI/edit"
}, {
  name: "dhof-loot",
  description: "All bags, item occurrences, bag rarity, and images by @anish-agnihotri and @ktasbas",
  url: "https://github.com/Anish-Agnihotri/dhof-loot"
}, {
  name: "Loot subgraph",
  description: "Loot bag, owner, and transfer subgraph by @shahruz",
  url: "https://thegraph.com/legacy-explorer/subgraph/shahruz/loot"
}, {
  name: "loot-sdk",
  description: "TypeScript wrapper to loot subgraph by @shahruz",
  url: "https://www.npmjs.com/package/loot-sdk"
}, {
  name: "loot.js",
  description: "A javascript library that allow you to interact with loot and more loot contracts by @0x84A",
  url: "https://github.com/0x84A/loot.js"
}, {
  name: "0xinventory.app",
  description: "Loot bag and item rarity explorer by @scotato",
  url: "https://0xinventory.app/"
}, {
  name: "Robes.Market",
  description: "Floor tracker for bags containing Divine Robes by @worm#6888",
  url: "https://robes.market/"
}, {
  name: "Pixel Character Generator",
  description: "Generates pixel characters from loot bags",
  url: "https://www.lootcharacter.com/"
}, {
  name: "Loot sound",
  description: "Sounds for loot attributes by @geeogi",
  url: "https://www.lootsound.com/"
}, {
  name: "loot-rarity",
  description: "Rarity colors for Loot (TypeScript / JS library) by @bpierre",
  url: "https://github.com/bpierre/loot-rarity"
}, {
  name: "loot-rarity-bookmarklet",
  description: "Bookmarklet to add rarity colors to OpenSea by @bpierre",
  url: "https://loot-rarity-for-opensea.bpier.re/"
}, {
  name: "LootComponents.sol",
  description: "Utility contract to easily interact with Loot properties",
  url: "https://etherscan.io/address/0x3eb43b1545a360d1D065CB7539339363dFD445F3#code"
}, {
  name: "Loot Bibliotheca (for Adventurers)",
  description: "Graphing community projects for adventurers to explore",
  url: "https://loot-bibliotheca-client.vercel.app/"
}, {
  name: "Loot info",
  description: "View what derivatives have been claimed by a Loot Bag",
  url: "https://loot-info-client.herokuapp.com/projects/loot"
}, {
  name: "Encyclopedia (for Adventurers)",
  description: "Visual Guide to Loot Derivatives",
  url: "https://accesspegasus.notion.site/An-Encyclopedia-for-Adventurers-6f0c0e04fe154fed9a2ad2482bd41cc3"
}]; // Loot guilds

var guildsList = [{
  name: "The Ancients",
  description: "For owners of Ancient Loot",
  url: "https://ancients.vercel.app/"
}, {
  name: "CastleDAO",
  description: "Castles for Adventurers",
  url: "https://ethereum.castledao.com/"
}, {
  name: "CrownDAO",
  description: "For owners of Crowns",
  url: "https://tinyurl.com/crowndao"
}, {
  name: "Divine Lodge",
  description: "For owners of Divine Loot",
  url: "https://tinyurl.com/divinelodge"
}, {
  name: "Divine Roles",
  description: "For owners of Divine Robes",
  url: "https://divineroles.vercel.app/"
}, {
  name: "Dragon Guild",
  description: "For owners of Dragon loot",
  url: "https://tinyurl.com/lootdragonguild"
}, {
  name: "Katana Garden",
  description: "For owners of Katanas",
  url: "https://katana.garden"
}, {
  name: "Loot Libraries",
  description: "For tome, grimoire, and chronicle owners",
  url: "https://discord.gg/afpGXb89"
}, {
  name: "Mythics",
  description: "For owners of Mythic items",
  url: "https://discord.gg/ma62m5MM"
}]; // Loot markets

var marketsList = [{
  name: "Ancients.Market",
  description: "Market tracker for Ancient Helms",
  url: "https://www.ancients.market/"
}, {
  name: "Bookclub.Market",
  description: "Market tracker for Books",
  url: "https://www.bookclub.market/"
}, {
  name: "Crowns-Market.Vercel.App",
  description: "Market tracker for Crowns",
  url: "https://crowns-market.vercel.app/"
}, {
  name: "Detection.Market",
  description: "Market tracker for Book of Detection",
  url: "http://detection.market/"
}, {
  name: "Dragons.Market",
  description: "Market tracker for Dragon/Dragonskin items",
  url: "http://dragons.market/"
}, {
  name: "FloorBags.Market",
  description: "Market tracker for any item",
  url: "http://floorbags.market/"
}, {
  name: "Hoods.Market",
  description: "Market tracker for Divine Hoods",
  url: "https://hoods.market/"
}, {
  name: "Robes.Market",
  description: "Market tracker for Divine Robes",
  url: "https://robes.market"
}, {
  name: "SacredNumbers.Market",
  description: "Market tracker for Sacred Numbers",
  url: "http://www.sacrednumbers.market/"
}, {
  name: "Weeb.Market",
  description: "Market tracker for Katanas",
  url: "https://weeb.market"
}]; // Loot resources

var derivativesList = [{
  name: "Ability Score",
  description: "RPC style level 1 ability scores",
  url: "https://etherscan.io/address/0x42a87e04f87a038774fb39c0a61681e7e859937b#code"
}, {
  name: "Abodes",
  description: "Randomized adventurer dwellings",
  url: "https://twitter.com/LootAbodes/status/1433031932904935439?s=20"
}, {
  name: "Abominations (for Necromancers)",
  description: "Randomly generated on-chain monstrosities",
  url: "https://www.abomnft.com/"
}, {
  name: "Abstract Loot",
  description: "First collection on the Loot's project metadata. Generative and animated.",
  url: "https://opensea.io/collection/abstract-loot"
}, {
  name: "Adventure Gold",
  description: "Loot DAO governance and gold token",
  url: "https://etherscan.io/address/0x32353a6c91143bfd6c7d363b546e62a9a2489a20#writeContract"
}, {
  name: "Adventure Gems (for loot)",
  description: "Rare and powerful on-chain gems 💎 that give special powers",
  url: "https://etherscan.io/address/0xebb3e4c387951059f89963a7c4539ee724a9de65#writeContract"
}, {
  name: "Adventurers (for Loot)",
  description: "Adventurers with distinct but flexible aspects for inspiring stories",
  url: "https://opensea.io/collection/adventurersproject"
}, {
  name: "Art (for Loot)",
  description: "NFT Art collection inspired by the Loot project",
  url: "https://opensea.io/collection/suprematism-regenesis"
}, {
  name: "Astrology",
  description: "Randomized generated astrological symbols stored on chain",
  url: "https://opensea.io/collection/astrolonft"
}, {
  name: "Banquets",
  description: "Randomized adventurer meals",
  url: "https://etherscan.io/address/0x615a610649e656485d9baf0ebe525496d7b78e24"
}, {
  name: "⚔️ Battle! (for Loot)",
  description: "Battle! for Loot is a new 🦊 PvE game for the Loot Metaverse.",
  url: "https://loot-craft.com/battle"
}, {
  name: "Cangjie(倉頡)",
  description: "The first Chinese characters Loot project with Yinyang, Wuxing and Zhouyi ☯",
  url: "https://cangjie.art"
}, {
  name: "Character",
  description: "Based on the rules of the Original (Little Brown Books) D&D",
  url: "https://character-nft.vercel.app/"
}, {
  name: "Color Loot",
  description: "Color Loot provides Loot rarity data on chain",
  url: "https://github.com/colorloot/colorloot"
}, {
  name: "Companions",
  description: "Friendly companions to join your adventure",
  url: "https://etherscan.io/address/0x3461d89c7dd0119c6411850eb69a8a0a5531dae4#readContract"
}, {
  name: "Craft Materials",
  description: "Loot Craft is a brand new mechanism of resources 💎 and craft ⛏",
  url: "https://loot-craft.com/"
}, {
  name: "Cryptoodles Loot Bag",
  description: "10,000 free claimable Loot Bags for SciFi based projects.",
  url: "https://cryptoodles.com"
}, {
  name: "Deck of Many Things",
  description: "A Loot inspired 22 card Deck of Many Things",
  url: "https://etherscan.io/address/0xb515bE4b1A1EF51b26bf268E96DB8FfFcE6b0Ff4#readContract"
}, {
  name: "Dice (for Loot)",
  description: "Dice is randomized weighted dice generated and stored on chain",
  url: "https://diceforloot.com"
}, {
  name: "Divine Stats",
  description: "Every adventurer needs some stats",
  url: "https://etherscan.io/address/0xf5dF2C0201Fd06fc5A387cCcBD70a1093AcB1455#writeContract"
}, {
  name: "Doggos (for $DOG Owners)",
  description: "Companions adoptable by owners of The Doge NFT ($DOG)",
  url: "https://etherscan.io/address/0x76e3dea18e33e61de15a7d17d9ea23dc6118e10f#writeContract"
}, {
  name: "Dungeons (for Adventures)",
  description: "On-chain generative Rogue style Dungeons for Loot",
  url: "https://twitter.com/dungeon_project"
}, {
  name: "Emoji Loot",
  description: "Emojis for your lifestyle.",
  url: "https://emloot.xyz"
}, {
  name: "Encounters",
  description: "Randomly generated encounters for your Characters and Loot",
  url: "https://www.adventurerencounters.com/"
}, {
  name: "Floot & Familiars (for Adventurers)",
  description: "Collective to buy and fractionalize floot Loots",
  url: "https://loot-talk.com/t/floot-collective-to-buy-and-fractionalize-floor-loots/1507"
}, {
  name: "Foes (against Adventurers)",
  description: "Enemies of the Adventurers",
  url: "https://etherscan.io/address/0xB8AF61Bf2C0D8D4F65ebeCb4f46124AbDD462699#writeContract"
}, {
  name: "FOOD Supplies",
  description: "Supplies for hungry and weary adventurers",
  url: "https://etherscan.io/address/0xb79d2717d14741266e1c23ff67dcb936e792113b#readContract"
}, {
  name: "Genesis Project",
  description: "A game to resurrect the 2,540 \"Genesis Adventurers\" hiding in the Loot contract",
  url: "https://genesisproject.xyz"
}, {
  name: "Holy War Loots",
  description: "The Holy War",
  url: "https://twitter.com/HolyWarLoots/status/1433293231840653312"
}, {
  name: "Hymns (for Adventurers)",
  description: "Procedurally composed Hymns for past, present and future adventures",
  url: "https://hymns.app/"
}, {
  name: "Loot+",
  description: "Expansion loot package with 200+ new items",
  url: "https://opensea.io/collection/lootplus"
}, {
  name: "Loot Army",
  description: "Randomized adventurer armies",
  url: "https://etherscan.io/address/0xed92dbe9df63728f5e92a2b8f2bc617082ee760b"
}, {
  name: "Loot Avatars",
  description: "The Avatars on chain for Loot community",
  url: "https://twitter.com/lootavatars"
}, {
  name: "Loot Characters",
  description: "Characters for your bags",
  url: "https://etherscan.io/address/0x7403ac30de7309a0bf019cda8eec034a5507cbb3#writeContract"
}, {
  name: "Loot Class",
  description: "D&D-styled classes for bags",
  url: "https://etherscan.io/address/0xccab950f5b192603a94a26c4fa00c8d2d392b98d#writeContract"
}, {
  name: "Loot Codex",
  description: "Lushly illustrated art based on Loot gear",
  url: "https://opensea.io/collection/the-loot-codex"
}, {
  name: "Loot Companions",
  description: "Companions for your Loot Adventures.",
  url: "https://companionsproject.io"
}, {
  name: "Loot Conditions",
  description: "Conditions that affect Ability Score and Character attributes",
  url: "https://opensea.io/collection/lootconditions"
}, {
  name: "Loot for Ape",
  description: "One of the experimental projects for the Ape world.",
  url: "https://www.lootloot.io"
}, {
  name: "Loot (for Cyberpunks)",
  description: "Cyberpunk alternate Loot universe",
  url: "https://www.lootmetaverse.club/"
}, {
  name: "Loot (for Sex)",
  description: "Sex themed loot for adventurers, punks, art etc",
  url: "https://opensea.io/collection/lootforsex"
}, {
  name: "Loot (for LifeRestart)",
  description: "结合Loot Project和 人生重开模拟器 的一套Play2Earn的游戏",
  url: "https://opensea.io/collection/liferestart"
}, {
  name: "Loot (Time)",
  description: "Time units for use in Metaverse",
  url: "https://opensea.io/collection/loot-time"
}, {
  name: "Loot Descriptions",
  description: "AI-based role-playing descriptions",
  url: "https://opensea.io/collection/lootdescriptions"
}, {
  name: "Loot Dicc",
  description: "Every adventurer needs a Dicc!",
  url: "https://etherscan.io/address/0xfecc1e1449496c0cddfb1a075e0ef74c50538c1a"
}, {
  name: "Loot Dungeon",
  description: "D&D-inspired game. Fight monsters using your Loot to earn rewards.",
  url: "https://lootdungeon.app"
}, {
  name: "Loot Land",
  description: "Loot Land are parts of the world in Loot metaverse",
  url: "https://opensea.io/collection/landproject"
}, {
  name: "Loot Lore",
  description: "Jobs, Race, Religion, and Realms",
  url: "https://etherscan.io/address/0x32E58C6F1FF983924F385cE6aadF0595577beda1#writeContract"
}, {
  name: "Loot Of Ether",
  description: "Random visual gear generated with Loot items list.",
  url: "https://twitter.com/lootofether"
}, {
  name: "LootRock",
  description: "LootRock is the perfect collision of Loot and EtherRock.",
  url: "https://opensea.io/collection/ethlootrock"
}, {
  name: "LootRock (for Adventurers)",
  description: "Inspired from EtherRock. Only 100 in existence.",
  url: "https://opensea.io/collection/lootrock-for-adventurers"
}, {
  name: "Loot Personalities v0.1",
  description: "Provide a backstory for your adventurer",
  url: "https://etherscan.io/address/0x3b1bb53b1a42ff61b7399fc196469a742cd3e98d#code"
}, {
  name: "Maps",
  description: "Journey maps and location names for your Loot Adventures.",
  url: "https://mapsproject.xyz"
}, {
  name: "Marz",
  description: "MARZ PLOTS are a minimalist spatial framework for the Loot universe",
  url: "https://marz.farm"
}, {
  name: "MekaLoot",
  description: "MekaLoot (for Meka Drivers of Loot ecosystem)",
  url: "https://etherscan.io/address/0x1c653f203369ac9e67ba01fcf3ab5a509b6349d1"
}, {
  name: "MergeClues",
  description: "Searches for clues in the metaverse, and builds an unknown prosperity.",
  url: "https://mclues.io.ooo/"
}, {
  name: "Monsters",
  description: "Slay unique Monsters with your Loot",
  url: "https://monstersforadventurers.com"
}, {
  name: "Monster Maps",
  description: "Monsters and their locations on generative maps.",
  url: "https://twitter.com/monstermap"
}, {
  name: "Mounts",
  description: "Randomized mounts for adventurers",
  url: "https://etherscan.io/address/0x4e8234d076caeb90604a7e5b6a584ee4eb18490a#writeContract"
}, {
  name: "MUDVERSE",
  description: "MUD the metaverse together with all Loot projects",
  url: "https://mudverse.org"
}, {
  name: "Name",
  description: "Names for adventurers that can be changed by spending Adventure Gold",
  url: "https://etherscan.io/address/0xb9310af43f4763003f42661f6fc098428469adab"
}, {
  name: "NPCs (for Adventures)",
  description: "Randomized characters generated on chain for use in adventures",
  url: "https://etherscan.io/address/0x5a1e941e5a1c5e631ebdcc4303e83159169d6e0d#writeContract"
}, {
  name: "OpenPalette",
  description: "A randomized color palette generated on the ethereum blockchain.",
  url: "https://www.openpalette.io/"
}, {
  name: "Perks (for Adventurers)",
  description: "Perks and Trait bags for your Loot characters",
  url: "https://etherscan.io/address/0x6b5f9713041f085af0f808e1445d8e6d38c51480#writeContract"
}, {
  name: "Pets",
  description: "Randomized pet bags",
  url: "https://etherscan.io/address/0x70F11Bc4d6C07C821b20bbE1872c35aB57F0a112#writeContract"
}, {
  name: "Planets with Loot",
  description: "Randomized Planets generated and stored on-chain",
  url: "https://lootplanets.net/"
}, {
  name: "Playlists",
  description: "Randomized Top 20 hits from 2010s to 1960s",
  url: "https://playlists-for-adventurers.carrd.co/"
}, {
  name: "Poorly Drawn Loot",
  description: "Experimental, poorly drawn bags",
  url: "https://opensea.io/activity/loot-poorly-drawn"
}, {
  name: "Potions",
  description: "Consumable items with effects",
  url: "https://opensea.io/collection/potionsforloot"
}, {
  name: "Quests",
  description: "Randomized quest packs for bags",
  url: "https://etherscan.io/address/0x4de9d18Fd8390c12465bA3C6cc8032992fD7655d"
}, {
  name: "Quests with Loot",
  description: "Randomized, on-chain solvable Quests for owners of Loot. By Tideweigh.",
  url: "https://opensea.io/collection/quests-with-loot"
}, {
  name: "Realms",
  description: "Realm Wonders forked from @UnchartedAtlas",
  url: "https://etherscan.io/address/0x7afe30cb3e53dba6801aa0ea647a0ecea7cbe18d#writeContract"
}, {
  name: "Runes",
  description: "Mysterious runes randomly generated and carved on chain. Gift from ancient world!",
  url: "https://runesmystery.github.io/"
}, {
  name: "sexy Loot - sLoots",
  description: "sLoots are on-chain harlots and strumpets, for Adventurers' Pleasure",
  url: "https://sexyloot.co/"
}, {
  name: "SpaceLoot",
  description: "Starship-themed Loot on Terra",
  url: "https://spaceloot.xyz/"
}, {
  name: "Spell & Talent",
  description: "Spell & Talent is randomly generated skills for adventurers.",
  url: "https://spellandtalent.noshit.dev/"
}, {
  name: "Spells for Looters",
  description: "Spells and Spellbooks for Loot Adventurers.",
  url: "https://opensea.io/collection/spells-for-looters"
}, {
  name: "Spells (For Wizards and other Adventurers)",
  description: "Spells (For Wizards and other Adventurers)",
  url: "https://etherscan.io/address/0x38e942948cea825992f105e0ec4a2ee9138afae4"
}, {
  name: "Summons",
  description: "Summons to battle between good and evil",
  url: "https://twitter.com/HolyWarLoots/status/1432984936747716609"
}, {
  name: "Super Loot",
  description: "The superset of the Loot with more parts, more gears and emojis.",
  url: "https://twitter.com/SuperLootNFT"
}, {
  name: "Team for Loot",
  description: "Team of Adventurers to get rarity loot",
  url: "https://etherscan.io/address/0xb0ce923d42ae2fc9572a1c69bce86a2451f4c667#writeContract"
}, {
  name: "Terraloot",
  description: "Terraform Mars with technology and science themed gear.",
  url: "https://terraloot.dev/"
}, {
  name: "The Traveling Musician",
  description: "Travel tunes for loot holders",
  url: "https://etherscan.io/address/0xF7AC82FedA08d0f3E071847250521c1297E1aF9c#writeContract"
}, {
  name: "Treasure",
  description: "Decentralized, composable money for the metaverse",
  url: "https://opensea.io/collection/treasure-for-loot"
}, {
  name: "Tunes",
  description: "Unique 8bit songs for every Loot holder",
  url: "https://www.loottunes.fun/"
}, {
  name: "Upside Down Loot",
  description: "The first anti-metaverse built on Ethereum",
  url: "https://upsidedownloot.com/"
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzb3VyY2VzLjk4Njg0OThhYmJiMDAyZTFhYzI0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTyxJQUFNQSxhQUF1QyxHQUFHLENBQ3JEO0FBQ0VDLEVBQUFBLElBQUksRUFBRSx3QkFEUjtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsMERBRmY7QUFHRUMsRUFBQUEsR0FBRyxFQUFFO0FBSFAsQ0FEcUQsRUFNckQ7QUFDRUYsRUFBQUEsSUFBSSxFQUFFLG1CQURSO0FBRUVDLEVBQUFBLFdBQVcsRUFBRSxzRkFGZjtBQUdFQyxFQUFBQSxHQUFHLEVBQUU7QUFIUCxDQU5xRCxFQVdyRDtBQUNFRixFQUFBQSxJQUFJLEVBQUUsdUJBRFI7QUFFRUMsRUFBQUEsV0FBVyxFQUFFLDZGQUZmO0FBR0VDLEVBQUFBLEdBQUcsRUFBRTtBQUhQLENBWHFELENBQWhELEVBa0JQOztBQUNPLElBQU1DLFlBQXNDLEdBQUcsQ0FDcEQ7QUFDRUgsRUFBQUEsSUFBSSxFQUFFLGFBRFI7QUFFRUMsRUFBQUEsV0FBVyxFQUFFLG9EQUZmO0FBR0VDLEVBQUFBLEdBQUcsRUFBRTtBQUhQLENBRG9ELEVBTXBEO0FBQ0VGLEVBQUFBLElBQUksRUFBRSxXQURSO0FBRUVDLEVBQUFBLFdBQVcsRUFBRSxxRkFGZjtBQUdFQyxFQUFBQSxHQUFHLEVBQUU7QUFIUCxDQU5vRCxFQVdwRDtBQUNFRixFQUFBQSxJQUFJLEVBQUUsZUFEUjtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsb0RBRmY7QUFHRUMsRUFBQUEsR0FBRyxFQUFFO0FBSFAsQ0FYb0QsRUFnQnBEO0FBQ0VGLEVBQUFBLElBQUksRUFBRSxVQURSO0FBRUVDLEVBQUFBLFdBQVcsRUFBRSxpREFGZjtBQUdFQyxFQUFBQSxHQUFHLEVBQUU7QUFIUCxDQWhCb0QsRUFxQnBEO0FBQ0VGLEVBQUFBLElBQUksRUFBRSxTQURSO0FBRUVDLEVBQUFBLFdBQVcsRUFBRSw2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QyxFQUFBQSxHQUFHLEVBQUU7QUFIUCxDQXRadUQsRUEyWnZEO0FBQ0VGLEVBQUFBLElBQUksRUFBRSx3QkFEUjtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsK0JBRmY7QUFHRUMsRUFBQUEsR0FBRyxFQUFFO0FBSFAsQ0EzWnVELEVBZ2F2RDtBQUNFRixFQUFBQSxJQUFJLEVBQUUsVUFEUjtBQUVFQyxFQUFBQSxXQUFXLEVBQUUsbURBRmY7QUFHRUMsRUFBQUEsR0FBRyxFQUFFO0FBSFAsQ0FoYXVELEVBcWF2RDtBQUNFRixFQUFBQSxJQUFJLEVBQUUsT0FEUjtBQUVFQyxFQUFBQSxXQUFXLEVBQUUseUNBRmY7QUFHRUMsRUFBQUEsR0FBRyxFQUFFO0FBSFAsQ0FyYXVELEVBMGF2RDtBQUNFRixFQUFBQSxJQUFJLEVBQUUsa0JBRFI7QUFFRUMsRUFBQUEsV0FBVyxFQUFFLDRDQUZmO0FBR0VDLEVBQUFBLEdBQUcsRUFBRTtBQUhQLENBMWF1RCxDQUFsRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9saXN0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMb290IGNvbW11bml0aWVzXG5leHBvcnQgY29uc3QgY29tbXVuaXR5TGlzdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0gW1xuICB7XG4gICAgbmFtZTogXCJMb290IENvbW11bml0eSBEaXNjb3JkXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9yIGFsbCB0aGluZ3MgTG9vdCBhbmQgZGVyaXZhdGl2ZXMgKG5vdGU6IGhpZ2ggdHJhZmZpYylcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9kaXNjb3JkLmdnL05YRW50VFNIZ3lcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTG9vdCBUYWxrIChGb3J1bSlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIHBsYWNlIGZvciBzdHJ1Y3R1cmVkIGRpc2N1c3Npb24gb2YgYWxsIHRoaW5ncyBMb290LCBmb3IgYnVpbGRlcnMgYW5kIHRoZSBjb21tdW5pdHlcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9sb290LXRhbGsuY29tXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxvb3QgQnVpbGRlcnMgRGlzY29yZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZvY3VzZWQgb24gZGV2ZWxvcGVycywgYXJ0aXN0cywgYW5kIHdyaXRlcnMgd2l0aCBtaW5pbWFsIGRlcml2YXRpdmUsIHRva2VuLCBhbmQgbWFya2V0IGNoYXRcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9kaXNjb3JkLmdnL0J0ZWZzODNBUlRcIixcbiAgfSxcbl07XG5cbi8vIExvb3QgcmVzb3VyY2VzXG5leHBvcnQgY29uc3QgcmVzb3VyY2VMaXN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+W10gPSBbXG4gIHtcbiAgICBuYW1lOiBcIkxvb3QgUmFyaXR5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9vdCBhdHRyaWJ1dGVzIGFuZCByYXJpdGllcyBzaGVldCBieSBAQXVzdGluR3JlZW5cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMUFsMFlpLXRNN0tfMDVwQ0tqa1F0U0pqd2JWMmpNZmFjMWlfb0M0ajJFWUkvZWRpdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkaG9mLWxvb3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbGwgYmFncywgaXRlbSBvY2N1cnJlbmNlcywgYmFnIHJhcml0eSwgYW5kIGltYWdlcyBieSBAYW5pc2gtYWduaWhvdHJpIGFuZCBAa3Rhc2Jhc1wiLFxuICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vQW5pc2gtQWduaWhvdHJpL2Rob2YtbG9vdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMb290IHN1YmdyYXBoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTG9vdCBiYWcsIG93bmVyLCBhbmQgdHJhbnNmZXIgc3ViZ3JhcGggYnkgQHNoYWhydXpcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly90aGVncmFwaC5jb20vbGVnYWN5LWV4cGxvcmVyL3N1YmdyYXBoL3NoYWhydXovbG9vdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsb290LXNka1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlR5cGVTY3JpcHQgd3JhcHBlciB0byBsb290IHN1YmdyYXBoIGJ5IEBzaGFocnV6XCIsXG4gICAgdXJsOiBcImh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2xvb3Qtc2RrXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxvb3QuanNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGphdmFzY3JpcHQgbGlicmFyeSB0aGF0IGFsbG93IHlvdSB0byBpbnRlcmFjdCB3aXRoIGxvb3QgYW5kIG1vcmUgbG9vdCBjb250cmFjdHMgYnkgQDB4ODRBXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS8weDg0QS9sb290LmpzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIjB4aW52ZW50b3J5LmFwcFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvb3QgYmFnIGFuZCBpdGVtIHJhcml0eSBleHBsb3JlciBieSBAc2NvdGF0b1wiLFxuICAgIHVybDogXCJodHRwczovLzB4aW52ZW50b3J5LmFwcC9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUm9iZXMuTWFya2V0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRmxvb3IgdHJhY2tlciBmb3IgYmFncyBjb250YWluaW5nIERpdmluZSBSb2JlcyBieSBAd29ybSM2ODg4XCIsXG4gICAgdXJsOiBcImh0dHBzOi8vcm9iZXMubWFya2V0L1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQaXhlbCBDaGFyYWN0ZXIgR2VuZXJhdG9yXCIsXG4gICAgZGVzY3JpcHRpb246IFwiR2VuZXJhdGVzIHBpeGVsIGNoYXJhY3RlcnMgZnJvbSBsb290IGJhZ3NcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly93d3cubG9vdGNoYXJhY3Rlci5jb20vXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxvb3Qgc291bmRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTb3VuZHMgZm9yIGxvb3QgYXR0cmlidXRlcyBieSBAZ2Vlb2dpXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vd3d3Lmxvb3Rzb3VuZC5jb20vXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxvb3QtcmFyaXR5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmFyaXR5IGNvbG9ycyBmb3IgTG9vdCAoVHlwZVNjcmlwdCAvIEpTIGxpYnJhcnkpIGJ5IEBicGllcnJlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9icGllcnJlL2xvb3QtcmFyaXR5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxvb3QtcmFyaXR5LWJvb2ttYXJrbGV0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm9va21hcmtsZXQgdG8gYWRkIHJhcml0eSBjb2xvcnMgdG8gT3BlblNlYSBieSBAYnBpZXJyZVwiLFxuICAgIHVybDogXCJodHRwczovL2xvb3QtcmFyaXR5LWZvci1vcGVuc2VhLmJwaWVyLnJlL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMb290Q29tcG9uZW50cy5zb2xcIixcbiAgICBkZXNjcmlwdGlvbjogXCJVdGlsaXR5IGNvbnRyYWN0IHRvIGVhc2lseSBpbnRlcmFjdCB3aXRoIExvb3QgcHJvcGVydGllc1wiLFxuICAgIHVybDogXCJodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLzB4M2ViNDNiMTU0NWEzNjBkMUQwNjVDQjc1MzkzMzkzNjNkRkQ0NDVGMyNjb2RlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxvb3QgQmlibGlvdGhlY2EgKGZvciBBZHZlbnR1cmVycylcIixcbiAgICBkZXNjcmlwdGlvbjogXCJHcmFwaGluZyBjb21tdW5pdHkgcHJvamVjdHMgZm9yIGFkdmVudHVyZXJzIHRvIGV4cGxvcmVcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9sb290LWJpYmxpb3RoZWNhLWNsaWVudC52ZXJjZWwuYXBwL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMb290IGluZm9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJWaWV3IHdoYXQgZGVyaXZhdGl2ZXMgaGF2ZSBiZWVuIGNsYWltZWQgYnkgYSBMb290IEJhZ1wiLFxuICAgIHVybDogXCJodHRwczovL2xvb3QtaW5mby1jbGllbnQuaGVyb2t1YXBwLmNvbS9wcm9qZWN0cy9sb290XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkVuY3ljbG9wZWRpYSAoZm9yIEFkdmVudHVyZXJzKVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpc3VhbCBHdWlkZSB0byBMb290IERlcml2YXRpdmVzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vYWNjZXNzcGVnYXN1cy5ub3Rpb24uc2l0ZS9Bbi1FbmN5Y2xvcGVkaWEtZm9yLUFkdmVudHVyZXJzLTZmMGMwZTA0ZmUxNTRmZWQ5YTJhZDI0ODJiZDQxY2MzXCIsXG4gIH0sXG5dO1xuXG4vLyBMb290IGd1aWxkc1xuZXhwb3J0IGNvbnN0IGd1aWxkc0xpc3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9IFtcbiAge1xuICAgIG5hbWU6IFwiVGhlIEFuY2llbnRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9yIG93bmVycyBvZiBBbmNpZW50IExvb3RcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9hbmNpZW50cy52ZXJjZWwuYXBwL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDYXN0bGVEQU9cIixcbiAgICBkZXNjcmlwdGlvbjogXCJDYXN0bGVzIGZvciBBZHZlbnR1cmVyc1wiLFxuICAgIHVybDogXCJodHRwczovL2V0aGVyZXVtLmNhc3RsZWRhby5jb20vXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNyb3duREFPXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9yIG93bmVycyBvZiBDcm93bnNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly90aW55dXJsLmNvbS9jcm93bmRhb1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEaXZpbmUgTG9kZ2VcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGb3Igb3duZXJzIG9mIERpdmluZSBMb290XCIsXG4gICAgdXJsOiBcImh0dHBzOi8vdGlueXVybC5jb20vZGl2aW5lbG9kZ2VcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRGl2aW5lIFJvbGVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9yIG93bmVycyBvZiBEaXZpbmUgUm9iZXNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9kaXZpbmVyb2xlcy52ZXJjZWwuYXBwL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEcmFnb24gR3VpbGRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJGb3Igb3duZXJzIG9mIERyYWdvbiBsb290XCIsXG4gICAgdXJsOiBcImh0dHBzOi8vdGlueXVybC5jb20vbG9vdGRyYWdvbmd1aWxkXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkthdGFuYSBHYXJkZW5cIixcbiAgICBkZXNjcmlwdGlvbjogXCJGb3Igb3duZXJzIG9mIEthdGFuYXNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9rYXRhbmEuZ2FyZGVuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxvb3QgTGlicmFyaWVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRm9yIHRvbWUsIGdyaW1vaXJlLCBhbmQgY2hyb25pY2xlIG93bmVyc1wiLFxuICAgIHVybDogXCJodHRwczovL2Rpc2NvcmQuZ2cvYWZwR1hiODlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTXl0aGljc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZvciBvd25lcnMgb2YgTXl0aGljIGl0ZW1zXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZGlzY29yZC5nZy9tYTYybTVNTVwiLFxuICB9LFxuXTtcblxuLy8gTG9vdCBtYXJrZXRzXG5leHBvcnQgY29uc3QgbWFya2V0c0xpc3Q6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5bXSA9IFtcbiAge1xuICAgIG5hbWU6IFwiQW5jaWVudHMuTWFya2V0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFya2V0IHRyYWNrZXIgZm9yIEFuY2llbnQgSGVsbXNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly93d3cuYW5jaWVudHMubWFya2V0L1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCb29rY2x1Yi5NYXJrZXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYXJrZXQgdHJhY2tlciBmb3IgQm9va3NcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly93d3cuYm9va2NsdWIubWFya2V0L1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDcm93bnMtTWFya2V0LlZlcmNlbC5BcHBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYXJrZXQgdHJhY2tlciBmb3IgQ3Jvd25zXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY3Jvd25zLW1hcmtldC52ZXJjZWwuYXBwL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEZXRlY3Rpb24uTWFya2V0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFya2V0IHRyYWNrZXIgZm9yIEJvb2sgb2YgRGV0ZWN0aW9uXCIsXG4gICAgdXJsOiBcImh0dHA6Ly9kZXRlY3Rpb24ubWFya2V0L1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEcmFnb25zLk1hcmtldFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hcmtldCB0cmFja2VyIGZvciBEcmFnb24vRHJhZ29uc2tpbiBpdGVtc1wiLFxuICAgIHVybDogXCJodHRwOi8vZHJhZ29ucy5tYXJrZXQvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkZsb29yQmFncy5NYXJrZXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYXJrZXQgdHJhY2tlciBmb3IgYW55IGl0ZW1cIixcbiAgICB1cmw6IFwiaHR0cDovL2Zsb29yYmFncy5tYXJrZXQvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkhvb2RzLk1hcmtldFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hcmtldCB0cmFja2VyIGZvciBEaXZpbmUgSG9vZHNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9ob29kcy5tYXJrZXQvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJvYmVzLk1hcmtldFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1hcmtldCB0cmFja2VyIGZvciBEaXZpbmUgUm9iZXNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9yb2Jlcy5tYXJrZXRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU2FjcmVkTnVtYmVycy5NYXJrZXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYXJrZXQgdHJhY2tlciBmb3IgU2FjcmVkIE51bWJlcnNcIixcbiAgICB1cmw6IFwiaHR0cDovL3d3dy5zYWNyZWRudW1iZXJzLm1hcmtldC9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiV2VlYi5NYXJrZXRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNYXJrZXQgdHJhY2tlciBmb3IgS2F0YW5hc1wiLFxuICAgIHVybDogXCJodHRwczovL3dlZWIubWFya2V0XCIsXG4gIH0sXG5dO1xuXG4vLyBMb290IHJlc291cmNlc1xuZXhwb3J0IGNvbnN0IGRlcml2YXRpdmVzTGlzdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPltdID0gW1xuICB7XG4gICAgbmFtZTogXCJBYmlsaXR5IFNjb3JlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUlBDIHN0eWxlIGxldmVsIDEgYWJpbGl0eSBzY29yZXNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9ldGhlcnNjYW4uaW8vYWRkcmVzcy8weDQyYTg3ZTA0Zjg3YTAzODc3NGZiMzljMGE2MTY4MWU3ZTg1OTkzN2IjY29kZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBYm9kZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSYW5kb21pemVkIGFkdmVudHVyZXIgZHdlbGxpbmdzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vdHdpdHRlci5jb20vTG9vdEFib2Rlcy9zdGF0dXMvMTQzMzAzMTkzMjkwNDkzNTQzOT9zPTIwXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFib21pbmF0aW9ucyAoZm9yIE5lY3JvbWFuY2VycylcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSYW5kb21seSBnZW5lcmF0ZWQgb24tY2hhaW4gbW9uc3Ryb3NpdGllc1wiLFxuICAgIHVybDogXCJodHRwczovL3d3dy5hYm9tbmZ0LmNvbS9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWJzdHJhY3QgTG9vdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkZpcnN0IGNvbGxlY3Rpb24gb24gdGhlIExvb3QncyBwcm9qZWN0IG1ldGFkYXRhLiBHZW5lcmF0aXZlIGFuZCBhbmltYXRlZC5cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9vcGVuc2VhLmlvL2NvbGxlY3Rpb24vYWJzdHJhY3QtbG9vdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBZHZlbnR1cmUgR29sZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvb3QgREFPIGdvdmVybmFuY2UgYW5kIGdvbGQgdG9rZW5cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9ldGhlcnNjYW4uaW8vYWRkcmVzcy8weDMyMzUzYTZjOTExNDNiZmQ2YzdkMzYzYjU0NmU2MmE5YTI0ODlhMjAjd3JpdGVDb250cmFjdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBZHZlbnR1cmUgR2VtcyAoZm9yIGxvb3QpXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmFyZSBhbmQgcG93ZXJmdWwgb24tY2hhaW4gZ2VtcyDwn5KOIHRoYXQgZ2l2ZSBzcGVjaWFsIHBvd2Vyc1wiLFxuICAgIHVybDogXCJodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLzB4ZWJiM2U0YzM4Nzk1MTA1OWY4OTk2M2E3YzQ1MzllZTcyNGE5ZGU2NSN3cml0ZUNvbnRyYWN0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFkdmVudHVyZXJzIChmb3IgTG9vdClcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBZHZlbnR1cmVycyB3aXRoIGRpc3RpbmN0IGJ1dCBmbGV4aWJsZSBhc3BlY3RzIGZvciBpbnNwaXJpbmcgc3Rvcmllc1wiLFxuICAgIHVybDogXCJodHRwczovL29wZW5zZWEuaW8vY29sbGVjdGlvbi9hZHZlbnR1cmVyc3Byb2plY3RcIixcbiAgfSxcbiAgIHtcbiAgICBuYW1lOiBcIkFydCAoZm9yIExvb3QpXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTkZUIEFydCBjb2xsZWN0aW9uIGluc3BpcmVkIGJ5IHRoZSBMb290IHByb2plY3RcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9vcGVuc2VhLmlvL2NvbGxlY3Rpb24vc3VwcmVtYXRpc20tcmVnZW5lc2lzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFzdHJvbG9neVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJhbmRvbWl6ZWQgZ2VuZXJhdGVkIGFzdHJvbG9naWNhbCBzeW1ib2xzIHN0b3JlZCBvbiBjaGFpblwiLFxuICAgIHVybDogXCJodHRwczovL29wZW5zZWEuaW8vY29sbGVjdGlvbi9hc3Ryb2xvbmZ0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhbnF1ZXRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmFuZG9taXplZCBhZHZlbnR1cmVyIG1lYWxzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZXRoZXJzY2FuLmlvL2FkZHJlc3MvMHg2MTVhNjEwNjQ5ZTY1NjQ4NWQ5YmFmMGViZTUyNTQ5NmQ3Yjc4ZTI0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuKalO+4jyBCYXR0bGUhIChmb3IgTG9vdClcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYXR0bGUhIGZvciBMb290IGlzIGEgbmV3IPCfpoogUHZFIGdhbWUgZm9yIHRoZSBMb290IE1ldGF2ZXJzZS5cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9sb290LWNyYWZ0LmNvbS9iYXR0bGVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ2FuZ2ppZSjlgInpoKEpXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIGZpcnN0IENoaW5lc2UgY2hhcmFjdGVycyBMb290IHByb2plY3Qgd2l0aCBZaW55YW5nLCBXdXhpbmcgYW5kIFpob3V5aSDimK9cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9jYW5namllLmFydFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDaGFyYWN0ZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCYXNlZCBvbiB0aGUgcnVsZXMgb2YgdGhlIE9yaWdpbmFsIChMaXR0bGUgQnJvd24gQm9va3MpIEQmRFwiLFxuICAgIHVybDogXCJodHRwczovL2NoYXJhY3Rlci1uZnQudmVyY2VsLmFwcC9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ29sb3IgTG9vdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbG9yIExvb3QgcHJvdmlkZXMgTG9vdCByYXJpdHkgZGF0YSBvbiBjaGFpblwiLFxuICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vY29sb3Jsb290L2NvbG9ybG9vdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb21wYW5pb25zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRnJpZW5kbHkgY29tcGFuaW9ucyB0byBqb2luIHlvdXIgYWR2ZW50dXJlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZXRoZXJzY2FuLmlvL2FkZHJlc3MvMHgzNDYxZDg5YzdkZDAxMTljNjQxMTg1MGViNjlhOGEwYTU1MzFkYWU0I3JlYWRDb250cmFjdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDcmFmdCBNYXRlcmlhbHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb290IENyYWZ0IGlzIGEgYnJhbmQgbmV3IG1lY2hhbmlzbSBvZiByZXNvdXJjZXMg8J+SjiBhbmQgY3JhZnQg4puPXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vbG9vdC1jcmFmdC5jb20vXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNyeXB0b29kbGVzIExvb3QgQmFnXCIsXG4gICAgZGVzY3JpcHRpb246IFwiMTAsMDAwIGZyZWUgY2xhaW1hYmxlIExvb3QgQmFncyBmb3IgU2NpRmkgYmFzZWQgcHJvamVjdHMuXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vY3J5cHRvb2RsZXMuY29tXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkRlY2sgb2YgTWFueSBUaGluZ3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIExvb3QgaW5zcGlyZWQgMjIgY2FyZCBEZWNrIG9mIE1hbnkgVGhpbmdzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZXRoZXJzY2FuLmlvL2FkZHJlc3MvMHhiNTE1YkU0YjFBMUVGNTFiMjZiZjI2OEU5NkRCOEZmRmNFNmIwRmY0I3JlYWRDb250cmFjdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEaWNlIChmb3IgTG9vdClcIixcbiAgICBkZXNjcmlwdGlvbjogXCJEaWNlIGlzIHJhbmRvbWl6ZWQgd2VpZ2h0ZWQgZGljZSBnZW5lcmF0ZWQgYW5kIHN0b3JlZCBvbiBjaGFpblwiLFxuICAgIHVybDogXCJodHRwczovL2RpY2Vmb3Jsb290LmNvbVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEaXZpbmUgU3RhdHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFdmVyeSBhZHZlbnR1cmVyIG5lZWRzIHNvbWUgc3RhdHNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9ldGhlcnNjYW4uaW8vYWRkcmVzcy8weGY1ZEYyQzAyMDFGZDA2ZmM1QTM4N2NDY0JENzBhMTA5M0FjQjE0NTUjd3JpdGVDb250cmFjdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEb2dnb3MgKGZvciAkRE9HIE93bmVycylcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb21wYW5pb25zIGFkb3B0YWJsZSBieSBvd25lcnMgb2YgVGhlIERvZ2UgTkZUICgkRE9HKVwiLFxuICAgIHVybDogXCJodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLzB4NzZlM2RlYTE4ZTMzZTYxZGUxNWE3ZDE3ZDllYTIzZGM2MTE4ZTEwZiN3cml0ZUNvbnRyYWN0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkR1bmdlb25zIChmb3IgQWR2ZW50dXJlcylcIixcbiAgICBkZXNjcmlwdGlvbjogXCJPbi1jaGFpbiBnZW5lcmF0aXZlIFJvZ3VlIHN0eWxlIER1bmdlb25zIGZvciBMb290XCIsXG4gICAgdXJsOiBcImh0dHBzOi8vdHdpdHRlci5jb20vZHVuZ2Vvbl9wcm9qZWN0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkVtb2ppIExvb3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFbW9qaXMgZm9yIHlvdXIgbGlmZXN0eWxlLlwiLFxuICAgIHVybDogXCJodHRwczovL2VtbG9vdC54eXpcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRW5jb3VudGVyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJhbmRvbWx5IGdlbmVyYXRlZCBlbmNvdW50ZXJzIGZvciB5b3VyIENoYXJhY3RlcnMgYW5kIExvb3RcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly93d3cuYWR2ZW50dXJlcmVuY291bnRlcnMuY29tL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJGbG9vdCAmIEZhbWlsaWFycyAoZm9yIEFkdmVudHVyZXJzKVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbGxlY3RpdmUgdG8gYnV5IGFuZCBmcmFjdGlvbmFsaXplIGZsb290IExvb3RzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vbG9vdC10YWxrLmNvbS90L2Zsb290LWNvbGxlY3RpdmUtdG8tYnV5LWFuZC1mcmFjdGlvbmFsaXplLWZsb29yLWxvb3RzLzE1MDdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRm9lcyAoYWdhaW5zdCBBZHZlbnR1cmVycylcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFbmVtaWVzIG9mIHRoZSBBZHZlbnR1cmVyc1wiLFxuICAgIHVybDogXCJodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLzB4QjhBRjYxQmYyQzBEOEQ0RjY1ZWJlQ2I0ZjQ2MTI0QWJERDQ2MjY5OSN3cml0ZUNvbnRyYWN0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkZPT0QgU3VwcGxpZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdXBwbGllcyBmb3IgaHVuZ3J5IGFuZCB3ZWFyeSBhZHZlbnR1cmVyc1wiLFxuICAgIHVybDogXCJodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLzB4Yjc5ZDI3MTdkMTQ3NDEyNjZlMWMyM2ZmNjdkY2I5MzZlNzkyMTEzYiNyZWFkQ29udHJhY3RcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR2VuZXNpcyBQcm9qZWN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBnYW1lIHRvIHJlc3VycmVjdCB0aGUgMiw1NDAgXFxcIkdlbmVzaXMgQWR2ZW50dXJlcnNcXFwiIGhpZGluZyBpbiB0aGUgTG9vdCBjb250cmFjdFwiLFxuICAgIHVybDogXCJodHRwczovL2dlbmVzaXNwcm9qZWN0Lnh5elwiLFxuICB9LCAgXG4gIHtcbiAgICBuYW1lOiBcIkhvbHkgV2FyIExvb3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIEhvbHkgV2FyXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vdHdpdHRlci5jb20vSG9seVdhckxvb3RzL3N0YXR1cy8xNDMzMjkzMjMxODQwNjUzMzEyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkh5bW5zIChmb3IgQWR2ZW50dXJlcnMpXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvY2VkdXJhbGx5IGNvbXBvc2VkIEh5bW5zIGZvciBwYXN0LCBwcmVzZW50IGFuZCBmdXR1cmUgYWR2ZW50dXJlc1wiLFxuICAgIHVybDogXCJodHRwczovL2h5bW5zLmFwcC9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTG9vdCtcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFeHBhbnNpb24gbG9vdCBwYWNrYWdlIHdpdGggMjAwKyBuZXcgaXRlbXNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9vcGVuc2VhLmlvL2NvbGxlY3Rpb24vbG9vdHBsdXNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTG9vdCBBcm15XCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmFuZG9taXplZCBhZHZlbnR1cmVyIGFybWllc1wiLFxuICAgIHVybDogXCJodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLzB4ZWQ5MmRiZTlkZjYzNzI4ZjVlOTJhMmI4ZjJiYzYxNzA4MmVlNzYwYlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMb290IEF2YXRhcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgQXZhdGFycyBvbiBjaGFpbiBmb3IgTG9vdCBjb21tdW5pdHlcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9sb290YXZhdGFyc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMb290IENoYXJhY3RlcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaGFyYWN0ZXJzIGZvciB5b3VyIGJhZ3NcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9ldGhlcnNjYW4uaW8vYWRkcmVzcy8weDc0MDNhYzMwZGU3MzA5YTBiZjAxOWNkYThlZWMwMzRhNTUwN2NiYjMjd3JpdGVDb250cmFjdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMb290IENsYXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRCZELXN0eWxlZCBjbGFzc2VzIGZvciBiYWdzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZXRoZXJzY2FuLmlvL2FkZHJlc3MvMHhjY2FiOTUwZjViMTkyNjAzYTk0YTI2YzRmYTAwYzhkMmQzOTJiOThkI3dyaXRlQ29udHJhY3RcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTG9vdCBDb2RleFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkx1c2hseSBpbGx1c3RyYXRlZCBhcnQgYmFzZWQgb24gTG9vdCBnZWFyXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vb3BlbnNlYS5pby9jb2xsZWN0aW9uL3RoZS1sb290LWNvZGV4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxvb3QgQ29tcGFuaW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbXBhbmlvbnMgZm9yIHlvdXIgTG9vdCBBZHZlbnR1cmVzLlwiLFxuICAgIHVybDogXCJodHRwczovL2NvbXBhbmlvbnNwcm9qZWN0LmlvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxvb3QgQ29uZGl0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbmRpdGlvbnMgdGhhdCBhZmZlY3QgQWJpbGl0eSBTY29yZSBhbmQgQ2hhcmFjdGVyIGF0dHJpYnV0ZXNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9vcGVuc2VhLmlvL2NvbGxlY3Rpb24vbG9vdGNvbmRpdGlvbnNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTG9vdCBmb3IgQXBlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiT25lIG9mIHRoZSBleHBlcmltZW50YWwgcHJvamVjdHMgZm9yIHRoZSBBcGUgd29ybGQuXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vd3d3Lmxvb3Rsb290LmlvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxvb3QgKGZvciBDeWJlcnB1bmtzKVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkN5YmVycHVuayBhbHRlcm5hdGUgTG9vdCB1bml2ZXJzZVwiLFxuICAgIHVybDogXCJodHRwczovL3d3dy5sb290bWV0YXZlcnNlLmNsdWIvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxvb3QgKGZvciBTZXgpXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2V4IHRoZW1lZCBsb290IGZvciBhZHZlbnR1cmVycywgcHVua3MsIGFydCBldGNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9vcGVuc2VhLmlvL2NvbGxlY3Rpb24vbG9vdGZvcnNleFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMb290IChmb3IgTGlmZVJlc3RhcnQpXCIsXG4gICAgZGVzY3JpcHRpb246IFwi57uT5ZCITG9vdCBQcm9qZWN05ZKMIOS6uueUn+mHjeW8gOaooeaLn+WZqCDnmoTkuIDlpZdQbGF5MkVhcm7nmoTmuLjmiI9cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9vcGVuc2VhLmlvL2NvbGxlY3Rpb24vbGlmZXJlc3RhcnRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTG9vdCAoVGltZSlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaW1lIHVuaXRzIGZvciB1c2UgaW4gTWV0YXZlcnNlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vb3BlbnNlYS5pby9jb2xsZWN0aW9uL2xvb3QtdGltZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMb290IERlc2NyaXB0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFJLWJhc2VkIHJvbGUtcGxheWluZyBkZXNjcmlwdGlvbnNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9vcGVuc2VhLmlvL2NvbGxlY3Rpb24vbG9vdGRlc2NyaXB0aW9uc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMb290IERpY2NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJFdmVyeSBhZHZlbnR1cmVyIG5lZWRzIGEgRGljYyFcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9ldGhlcnNjYW4uaW8vYWRkcmVzcy8weGZlY2MxZTE0NDk0OTZjMGNkZGZiMWEwNzVlMGVmNzRjNTA1MzhjMWFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTG9vdCBEdW5nZW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRCZELWluc3BpcmVkIGdhbWUuIEZpZ2h0IG1vbnN0ZXJzIHVzaW5nIHlvdXIgTG9vdCB0byBlYXJuIHJld2FyZHMuXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vbG9vdGR1bmdlb24uYXBwXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxvb3QgTGFuZFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkxvb3QgTGFuZCBhcmUgcGFydHMgb2YgdGhlIHdvcmxkIGluIExvb3QgbWV0YXZlcnNlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vb3BlbnNlYS5pby9jb2xsZWN0aW9uL2xhbmRwcm9qZWN0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxvb3QgTG9yZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkpvYnMsIFJhY2UsIFJlbGlnaW9uLCBhbmQgUmVhbG1zXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZXRoZXJzY2FuLmlvL2FkZHJlc3MvMHgzMkU1OEM2RjFGRjk4MzkyNEYzODVjRTZhYWRGMDU5NTU3N2JlZGExI3dyaXRlQ29udHJhY3RcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTG9vdCBPZiBFdGhlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJhbmRvbSB2aXN1YWwgZ2VhciBnZW5lcmF0ZWQgd2l0aCBMb290IGl0ZW1zIGxpc3QuXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vdHdpdHRlci5jb20vbG9vdG9mZXRoZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTG9vdFJvY2tcIixcbiAgICBkZXNjcmlwdGlvbjogXCJMb290Um9jayBpcyB0aGUgcGVyZmVjdCBjb2xsaXNpb24gb2YgTG9vdCBhbmQgRXRoZXJSb2NrLlwiLFxuICAgIHVybDogXCJodHRwczovL29wZW5zZWEuaW8vY29sbGVjdGlvbi9ldGhsb290cm9ja1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMb290Um9jayAoZm9yIEFkdmVudHVyZXJzKVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkluc3BpcmVkIGZyb20gRXRoZXJSb2NrLiBPbmx5IDEwMCBpbiBleGlzdGVuY2UuXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vb3BlbnNlYS5pby9jb2xsZWN0aW9uL2xvb3Ryb2NrLWZvci1hZHZlbnR1cmVyc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMb290IFBlcnNvbmFsaXRpZXMgdjAuMVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByb3ZpZGUgYSBiYWNrc3RvcnkgZm9yIHlvdXIgYWR2ZW50dXJlclwiLFxuICAgIHVybDogXCJodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLzB4M2IxYmI1M2IxYTQyZmY2MWI3Mzk5ZmMxOTY0NjlhNzQyY2QzZTk4ZCNjb2RlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1hcHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJKb3VybmV5IG1hcHMgYW5kIGxvY2F0aW9uIG5hbWVzIGZvciB5b3VyIExvb3QgQWR2ZW50dXJlcy5cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9tYXBzcHJvamVjdC54eXpcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWFyelwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1BUlogUExPVFMgYXJlIGEgbWluaW1hbGlzdCBzcGF0aWFsIGZyYW1ld29yayBmb3IgdGhlIExvb3QgdW5pdmVyc2VcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9tYXJ6LmZhcm1cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWVrYUxvb3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJNZWthTG9vdCAoZm9yIE1la2EgRHJpdmVycyBvZiBMb290IGVjb3N5c3RlbSlcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9ldGhlcnNjYW4uaW8vYWRkcmVzcy8weDFjNjUzZjIwMzM2OWFjOWU2N2JhMDFmY2YzYWI1YTUwOWI2MzQ5ZDFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTWVyZ2VDbHVlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNlYXJjaGVzIGZvciBjbHVlcyBpbiB0aGUgbWV0YXZlcnNlLCBhbmQgYnVpbGRzIGFuIHVua25vd24gcHJvc3Blcml0eS5cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9tY2x1ZXMuaW8ub29vL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNb25zdGVyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNsYXkgdW5pcXVlIE1vbnN0ZXJzIHdpdGggeW91ciBMb290XCIsXG4gICAgdXJsOiBcImh0dHBzOi8vbW9uc3RlcnNmb3JhZHZlbnR1cmVycy5jb21cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTW9uc3RlciBNYXBzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTW9uc3RlcnMgYW5kIHRoZWlyIGxvY2F0aW9ucyBvbiBnZW5lcmF0aXZlIG1hcHMuXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vdHdpdHRlci5jb20vbW9uc3Rlcm1hcFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNb3VudHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSYW5kb21pemVkIG1vdW50cyBmb3IgYWR2ZW50dXJlcnNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9ldGhlcnNjYW4uaW8vYWRkcmVzcy8weDRlODIzNGQwNzZjYWViOTA2MDRhN2U1YjZhNTg0ZWU0ZWIxODQ5MGEjd3JpdGVDb250cmFjdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNVURWRVJTRVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1VRCB0aGUgbWV0YXZlcnNlIHRvZ2V0aGVyIHdpdGggYWxsIExvb3QgcHJvamVjdHNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9tdWR2ZXJzZS5vcmdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk5hbWVzIGZvciBhZHZlbnR1cmVycyB0aGF0IGNhbiBiZSBjaGFuZ2VkIGJ5IHNwZW5kaW5nIEFkdmVudHVyZSBHb2xkXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZXRoZXJzY2FuLmlvL2FkZHJlc3MvMHhiOTMxMGFmNDNmNDc2MzAwM2Y0MjY2MWY2ZmMwOTg0Mjg0NjlhZGFiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk5QQ3MgKGZvciBBZHZlbnR1cmVzKVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJhbmRvbWl6ZWQgY2hhcmFjdGVycyBnZW5lcmF0ZWQgb24gY2hhaW4gZm9yIHVzZSBpbiBhZHZlbnR1cmVzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZXRoZXJzY2FuLmlvL2FkZHJlc3MvMHg1YTFlOTQxZTVhMWM1ZTYzMWViZGNjNDMwM2U4MzE1OTE2OWQ2ZTBkI3dyaXRlQ29udHJhY3RcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiT3BlblBhbGV0dGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIHJhbmRvbWl6ZWQgY29sb3IgcGFsZXR0ZSBnZW5lcmF0ZWQgb24gdGhlIGV0aGVyZXVtIGJsb2NrY2hhaW4uXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vd3d3Lm9wZW5wYWxldHRlLmlvL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQZXJrcyAoZm9yIEFkdmVudHVyZXJzKVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBlcmtzIGFuZCBUcmFpdCBiYWdzIGZvciB5b3VyIExvb3QgY2hhcmFjdGVyc1wiLFxuICAgIHVybDogXCJodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLzB4NmI1Zjk3MTMwNDFmMDg1YWYwZjgwOGUxNDQ1ZDhlNmQzOGM1MTQ4MCN3cml0ZUNvbnRyYWN0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlBldHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSYW5kb21pemVkIHBldCBiYWdzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vZXRoZXJzY2FuLmlvL2FkZHJlc3MvMHg3MEYxMUJjNGQ2QzA3QzgyMWIyMGJiRTE4NzJjMzVhQjU3RjBhMTEyI3dyaXRlQ29udHJhY3RcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUGxhbmV0cyB3aXRoIExvb3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSYW5kb21pemVkIFBsYW5ldHMgZ2VuZXJhdGVkIGFuZCBzdG9yZWQgb24tY2hhaW5cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9sb290cGxhbmV0cy5uZXQvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlBsYXlsaXN0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJhbmRvbWl6ZWQgVG9wIDIwIGhpdHMgZnJvbSAyMDEwcyB0byAxOTYwc1wiLFxuICAgIHVybDogXCJodHRwczovL3BsYXlsaXN0cy1mb3ItYWR2ZW50dXJlcnMuY2FycmQuY28vXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlBvb3JseSBEcmF3biBMb290XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRXhwZXJpbWVudGFsLCBwb29ybHkgZHJhd24gYmFnc1wiLFxuICAgIHVybDogXCJodHRwczovL29wZW5zZWEuaW8vYWN0aXZpdHkvbG9vdC1wb29ybHktZHJhd25cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUG90aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNvbnN1bWFibGUgaXRlbXMgd2l0aCBlZmZlY3RzXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vb3BlbnNlYS5pby9jb2xsZWN0aW9uL3BvdGlvbnNmb3Jsb290XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlF1ZXN0c1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJhbmRvbWl6ZWQgcXVlc3QgcGFja3MgZm9yIGJhZ3NcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9ldGhlcnNjYW4uaW8vYWRkcmVzcy8weDRkZTlkMThGZDgzOTBjMTI0NjViQTNDNmNjODAzMjk5MmZENzY1NWRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUXVlc3RzIHdpdGggTG9vdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJhbmRvbWl6ZWQsIG9uLWNoYWluIHNvbHZhYmxlIFF1ZXN0cyBmb3Igb3duZXJzIG9mIExvb3QuIEJ5IFRpZGV3ZWlnaC5cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9vcGVuc2VhLmlvL2NvbGxlY3Rpb24vcXVlc3RzLXdpdGgtbG9vdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSZWFsbXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJSZWFsbSBXb25kZXJzIGZvcmtlZCBmcm9tIEBVbmNoYXJ0ZWRBdGxhc1wiLFxuICAgIHVybDogXCJodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLzB4N2FmZTMwY2IzZTUzZGJhNjgwMWFhMGVhNjQ3YTBlY2VhN2NiZTE4ZCN3cml0ZUNvbnRyYWN0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJ1bmVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTXlzdGVyaW91cyBydW5lcyByYW5kb21seSBnZW5lcmF0ZWQgYW5kIGNhcnZlZCBvbiBjaGFpbi4gR2lmdCBmcm9tIGFuY2llbnQgd29ybGQhXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vcnVuZXNteXN0ZXJ5LmdpdGh1Yi5pby9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwic2V4eSBMb290IC0gc0xvb3RzXCIsXG4gICAgZGVzY3JpcHRpb246IFwic0xvb3RzIGFyZSBvbi1jaGFpbiBoYXJsb3RzIGFuZCBzdHJ1bXBldHMsIGZvciBBZHZlbnR1cmVycycgUGxlYXN1cmVcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9zZXh5bG9vdC5jby9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU3BhY2VMb290XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3RhcnNoaXAtdGhlbWVkIExvb3Qgb24gVGVycmFcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9zcGFjZWxvb3QueHl6L1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTcGVsbCAmIFRhbGVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNwZWxsICYgVGFsZW50IGlzIHJhbmRvbWx5IGdlbmVyYXRlZCBza2lsbHMgZm9yIGFkdmVudHVyZXJzLlwiLFxuICAgIHVybDogXCJodHRwczovL3NwZWxsYW5kdGFsZW50Lm5vc2hpdC5kZXYvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNwZWxscyBmb3IgTG9vdGVyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNwZWxscyBhbmQgU3BlbGxib29rcyBmb3IgTG9vdCBBZHZlbnR1cmVycy5cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9vcGVuc2VhLmlvL2NvbGxlY3Rpb24vc3BlbGxzLWZvci1sb290ZXJzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNwZWxscyAoRm9yIFdpemFyZHMgYW5kIG90aGVyIEFkdmVudHVyZXJzKVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNwZWxscyAoRm9yIFdpemFyZHMgYW5kIG90aGVyIEFkdmVudHVyZXJzKVwiLFxuICAgIHVybDogXCJodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLzB4MzhlOTQyOTQ4Y2VhODI1OTkyZjEwNWUwZWM0YTJlZTkxMzhhZmFlNFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTdW1tb25zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3VtbW9ucyB0byBiYXR0bGUgYmV0d2VlbiBnb29kIGFuZCBldmlsXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vdHdpdHRlci5jb20vSG9seVdhckxvb3RzL3N0YXR1cy8xNDMyOTg0OTM2NzQ3NzE2NjA5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlN1cGVyIExvb3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgc3VwZXJzZXQgb2YgdGhlIExvb3Qgd2l0aCBtb3JlIHBhcnRzLCBtb3JlIGdlYXJzIGFuZCBlbW9qaXMuXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vdHdpdHRlci5jb20vU3VwZXJMb290TkZUXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRlYW0gZm9yIExvb3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUZWFtIG9mIEFkdmVudHVyZXJzIHRvIGdldCByYXJpdHkgbG9vdFwiLFxuICAgIHVybDogXCJodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLzB4YjBjZTkyM2Q0MmFlMmZjOTU3MmExYzY5YmNlODZhMjQ1MWY0YzY2NyN3cml0ZUNvbnRyYWN0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRlcnJhbG9vdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRlcnJhZm9ybSBNYXJzIHdpdGggdGVjaG5vbG9neSBhbmQgc2NpZW5jZSB0aGVtZWQgZ2Vhci5cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly90ZXJyYWxvb3QuZGV2L1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUaGUgVHJhdmVsaW5nIE11c2ljaWFuXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVHJhdmVsIHR1bmVzIGZvciBsb290IGhvbGRlcnNcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9ldGhlcnNjYW4uaW8vYWRkcmVzcy8weEY3QUM4MkZlZEEwOGQwZjNFMDcxODQ3MjUwNTIxYzEyOTdFMWFGOWMjd3JpdGVDb250cmFjdFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUcmVhc3VyZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlY2VudHJhbGl6ZWQsIGNvbXBvc2FibGUgbW9uZXkgZm9yIHRoZSBtZXRhdmVyc2VcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9vcGVuc2VhLmlvL2NvbGxlY3Rpb24vdHJlYXN1cmUtZm9yLWxvb3RcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVHVuZXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJVbmlxdWUgOGJpdCBzb25ncyBmb3IgZXZlcnkgTG9vdCBob2xkZXJcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly93d3cubG9vdHR1bmVzLmZ1bi9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVXBzaWRlIERvd24gTG9vdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBmaXJzdCBhbnRpLW1ldGF2ZXJzZSBidWlsdCBvbiBFdGhlcmV1bVwiLFxuICAgIHVybDogXCJodHRwczovL3Vwc2lkZWRvd25sb290LmNvbS9cIixcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiY29tbXVuaXR5TGlzdCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInVybCIsInJlc291cmNlTGlzdCIsImd1aWxkc0xpc3QiLCJtYXJrZXRzTGlzdCIsImRlcml2YXRpdmVzTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=