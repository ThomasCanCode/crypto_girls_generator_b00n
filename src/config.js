"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);

const buildDir = path.join(basePath, "/build");
const layersDir = path.join(basePath, "/layers");
 
const description =
  "A collection of 10,000 Crypto Girl Collectable NFT’s minted on the Ethereum Blockchain. EVERY unique Crypto Girl element is hand drawn and randomly generated from a combination of over 200 individual traits to represent cryptocurrencies and NFT technologies.";
const baseUri = "ipfs://QmTsPww3zGb8LQPZHBtBJpwJ3xqjr4j7BbKfjnYqhACytT";

const outputJPEG = false; // if false, the generator outputs png's

// if you use an empty/transparent file, set the name here.
const emptyLayerName = "NONE";

//IF you need a provenance hash, turn this on
const hashImages = true;

const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    namePrefix: "Crypto Girl Collectable",
    //   resetNameIndex: true, // this will start the Lion count at #1 instead of #6
    layersOrder: [
      { name: "WARRIOR" },
    ],
  },
  {
    growEditionSizeTo: 218,
    namePrefix: "Crypto Girl Collectable", 
    //Use to add a name to Metadata `name:`
    layersOrder: [
      { name: "BACKGROUND" },
      { name: "DAISY"},
      { name: "SKIN" },
      { name: "TATTOOS" },
      { name: "MOUTH" },
      { name: "BRAS" },
      { name: "CLOTHES" },
      { name: "ACCESSORIES" },
      { name: "EYES" },
      { name: "HAT" },
      { name: "HAIR" },

      { name: "JEWELRY" },
      { name: "HEADPEICE" },
      { name: "GLASSES" },
      { name: "LIGHTNING" }
    ],
  },
  {
    growEditionSizeTo: 30,
    namePrefix: "Crypto Girl Collectable", 
    //Use to add a name to Metadata `name:`
    layersOrder: [
      { name: "BACKGROUND" },
      { name: "DAISY"},
      { name: "SKIN" },
      { name: "TATTOOS" },
      { name: "MOUTH" },
      { name: "BRAS" },
      { name: "CLOTHES" },
      { name: "ACCESSORIES" },
      { name: "EYES" },   
      { name: "HAT" },
      { name: "HAIR" },
      { name: "JEWELRY" },
      { name: "HEADPEICE" },
      { name: "GLASSES" },
      { name: "LIGHTNING" }
    ],
  },

];
/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 */
const incompatible = {
  
  //Daisy Rules use "real attribute file name"
  "Sadboy#100": ["BlueBedazzled#45Aura", "Bloom2#50", "Bloom#50", "BlueBloom#77", "Cameo#100", "Collar#88",
    "Crystal#120", "crystalShower#33", "CuteCreeper#100", "DegenMode#10", "Droplets#30", "Firework#33", "HappyCollar#110", "dsfadsfoom"
    , "HappyHopes#120", "Infinity#100", "Jaded#110", "LaceCollar#67", "Lover#120", "PetiteBow#99", "Queenie#22"
    , "Serotonin#66", "SimpleBlossom#120", "Snakey#5", "SunriseandSet#99", "Trio#100.png", "Windows#40", "Wings#35"],
    
  "ChakraBlue#10": ["BlueBedazzled#45Aura", "Bloom2#50", "Bloom#50", "BlueBloom#77", "Cameo#100", "Collar#88",
    "Crystal#120", "crystalShower#33", "CuteCreeper#100", "DegenMode#10", "Droplets#30", "Firework#33", "HappyCollar#110", "dsfadsfoom"
    , "HappyHopes#120", "Infinity#100", "Jaded#110", "LaceCollar#67", "Lover#120", "PetiteBow#99", "Queenie#22"
    , "Serotonin#66", "SimpleBlossom#120", "Snakey#5", "SunriseandSet#99", "Trio#100.png", "Windows#40", "Wings#35"],

    
  "ChakraGreen#5": ["BlueBedazzled#45Aura", "Bloom2#50", "Bloom#50", "BlueBloom#77", "Cameo#100", "Collar#88",
    "Crystal#120", "crystalShower#33", "CuteCreeper#100", "DegenMode#10", "Droplets#30", "Firework#33", "HappyCollar#110", "dsfadsfoom"
    , "HappyHopes#120", "Infinity#100", "Jaded#110", "LaceCollar#67", "Lover#120", "PetiteBow#99", "Queenie#22"
    , "Serotonin#66", "SimpleBlossom#120", "Snakey#5", "SunriseandSet#99", "Trio#100.png", "Windows#40", "Wings#35"],

    
  "HarlequinHalter#10": ["BlueBedazzled#45Aura", "Bloom2#50", "Bloom#50", "BlueBloom#77", "Cameo#100", "Collar#88",
    "Crystal#120", "crystalShower#33", "CuteCreeper#100", "DegenMode#10", "Droplets#30", "Firework#33", "HappyCollar#110", "dsfadsfoom"
    , "HappyHopes#120", "Infinity#100", "Jaded#110", "LaceCollar#67", "Lover#120", "PetiteBow#99", "Queenie#22"
    , "Serotonin#66", "SimpleBlossom#120", "Snakey#5", "SunriseandSet#99", "Trio#100.png", "Windows#40", "Wings#35"],

    
  "StardustGreen#150": ["BlueBedazzled#45Aura", "Bloom2#50", "Bloom#50", "BlueBloom#77", "Cameo#100", "Collar#88",
    "Crystal#120", "crystalShower#33", "CuteCreeper#100", "DegenMode#10", "Droplets#30", "Firework#33", "HappyCollar#110", "dsfadsfoom"
    , "HappyHopes#120", "Infinity#100", "Jaded#110", "LaceCollar#67", "Lover#120", "PetiteBow#99", "Queenie#22"
    , "Serotonin#66", "SimpleBlossom#120", "Snakey#5", "SunriseandSet#99", "Trio#100.png", "Windows#40", "Wings#35"],

    
  "Peachy#110": ["BlueBedazzled#45Aura", "Bloom2#50", "Bloom#50", "BlueBloom#77", "Cameo#100", "Collar#88",
    "Crystal#120", "crystalShower#33", "CuteCreeper#100", "DegenMode#10", "Droplets#30", "Firework#33", "HappyCollar#110", "dsfadsfoom"
    , "HappyHopes#120", "Infinity#100", "Jaded#110", "LaceCollar#67", "Lover#120", "PetiteBow#99", "Queenie#22"
    , "Serotonin#66", "SimpleBlossom#120", "Snakey#5", "SunriseandSet#99", "Trio#100.png", "Windows#40", "Wings#35"],

    
  "Powdery#110": ["BlueBedazzled#45Aura", "Bloom2#50", "Bloom#50", "BlueBloom#77", "Cameo#100", "Collar#88",
    "Crystal#120", "crystalShower#33", "CuteCreeper#100", "DegenMode#10", "Droplets#30", "Firework#33", "HappyCollar#110", "dsfadsfoom"
    , "HappyHopes#120", "Infinity#100", "Jaded#110", "LaceCollar#67", "Lover#120", "PetiteBow#99", "Queenie#22"
    , "Serotonin#66", "SimpleBlossom#120", "Snakey#5", "SunriseandSet#99", "Trio#100.png", "Windows#40", "Wings#35"],

    
  "GoldenGown#70": ["BlueBedazzled#45Aura", "Bloom2#50", "Bloom#50", "BlueBloom#77", "Cameo#100", "Collar#88",
    "Crystal#120", "crystalShower#33", "CuteCreeper#100", "DegenMode#10", "Droplets#30", "Firework#33", "HappyCollar#110", "dsfadsfoom"
    , "HappyHopes#120", "Infinity#100", "Jaded#110", "LaceCollar#67", "Lover#120", "PetiteBow#99", "Queenie#22"
    , "Serotonin#66", "SimpleBlossom#120", "Snakey#5", "SunriseandSet#99", "Trio#100.png", "Windows#40", "Wings#35"],

    
  "FunPineapple#25": ["BlueBedazzled#45Aura", "Bloom2#50", "Bloom#50", "BlueBloom#77", "Cameo#100", "Collar#88",
    "Crystal#120", "crystalShower#33", "CuteCreeper#100", "DegenMode#10", "Droplets#30", "Firework#33", "HappyCollar#110", "dsfadsfoom"
    , "HappyHopes#120", "Infinity#100", "Jaded#110", "LaceCollar#67", "Lover#120", "PetiteBow#99", "Queenie#22"
    , "Serotonin#66", "SimpleBlossom#120", "Snakey#5", "SunriseandSet#99", "Trio#100.png", "Windows#40", "Wings#35"],

    
  "ButtonupBlue#130": ["BlueBedazzled#45Aura", "Bloom2#50", "Bloom#50", "BlueBloom#77", "Cameo#100", "Collar#88",
    "Crystal#120", "crystalShower#33", "CuteCreeper#100", "DegenMode#10", "Droplets#30", "Firework#33", "HappyCollar#110", "dsfadsfoom"
    , "HappyHopes#120", "Infinity#100", "Jaded#110", "LaceCollar#67", "Lover#120", "PetiteBow#99", "Queenie#22"
    , "Serotonin#66", "SimpleBlossom#120", "Snakey#5", "SunriseandSet#99", "Trio#100.png", "Windows#40", "Wings#35"],


    
  "Button30": ["Snakey5", "SunriseandSe9", "Trio0.png", "Windows#40", "Wings#35"],


	
  //  
  // directory incompatible with directory example
}
;

``
/**
 * Require combinations of files when constructing DNA, this bypasses the
 * randomization and weights.
 *
 * The layer order matters here, the key (left side) is an item within
 * the layer that comes first in the stack.
 * the items in the array are "required" items that should be pulled from folders
 * further in the stack
 */
const forcedCombinations = {
  // floral: ["MetallicShades", "Golden Sakura"],
};

const shuffleLayerConfigurations = false;

/**
 * In the event that a filename cannot be the trait value name, for example when
 * multiple items should have the same value, specify
 * clean-filename: trait-value override pairs. Wrap filenames with spaces in quotes.
 */
const traitValueOverrides = {
  "Short-Blue": "Short Blue",
  "NON-Daisy": "None",
  "No-Ear": "None",
  "No-Tat": "None"
};

const debugLogs = true;

const format = {
  width: 4000,
  height: 4000,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

// const extraAttributes = () => [
// Optionally, if you need to overwrite one of your layers attributes.
// You can include the same name as the layer, here, and it will overwrite
//
// {
// trait_type: "Bottom lid",
//   value: ` Bottom lid # ${Math.random() * 100}`,
// },
// {
//   display_type: "boost_number",
//   trait_type: "Aqua Power",
//   value: Math.random() * 100,
// },
// {
//   display_type: "boost_number",
//   trait_type: "Health",
//   value: Math.random() * 100,
// },
// {
//   display_type: "boost_number",
//   trait_type: "Mana",
//   value: Math.floor(Math.random() * 100),
// },
// ];

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

/**
 * Set to true to always use the root folder as trait_tybe
 * Set to false to use weighted parent folders as trait_type
 * Default is true.
 */
const useRootTraitType = false;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  buildDir,
  layersDir,
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  incompatible,
  forcedCombinations,
  traitValueOverrides,
  outputJPEG,
  emptyLayerName,
  useRootTraitType,
  hashImages,
};
