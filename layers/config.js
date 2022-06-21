"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));

const buildDir = path.join(basePath, "/build");
const layersDir = path.join(basePath, "/layers");

const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "ipfs://NewUriToReplace";

const outputJPEG = false; // if false, the generator outputs png's

// if you use an empty/transparent file, set the name here.
const emptyLayerName = "NONE";

//IF you need a provenance hash, turn this on
const hashImages = true;

const layerConfigurations = [
  {
    growEditionSizeTo: 35,
    // namePrefix: "Monkey", Use to add a name to Metadata `name:`
    layersOrder: [
      { name: "BACKGROUND" },
      {
        name: "DAISY",
        // options: {
        //   bypassDNA: true,
        // },
      },
      { name: "SKIN" },
      { name: "TATTOOS" },
      { name: "MOUTH" },
      { name: "BRAS" },
      { name: "CLOTHES" },
      { name: "EYES" },
      { name: "HAIR" },
      { name: "ACCESSOR" },
      { name: "HAT" },
      { name: "GLASSES" },
      { name: "LIGHTNING" }
    ],
  },
  // {
  //   growEditionSizeTo: 10,
  //   namePrefix: "Lion",
  //   resetNameIndex: true, // this will start the Lion count at #1 instead of #6
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Hats" },
  //     { name: "Male Hair" },
  //   ],
  // },
];

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 */
const incompatible = {
  
  //Daisy Rules
  "Daisyy": ["Blue Aura", "Green Aura", "Pink Aura", "Yellow Snake", "Green Snake", "Grey-Floaty", "Blue-Long", "Golden-Long", "Black-Long", "Pink-Braids", "Wavey-Tan", "Blonde-Ponytail", "Black-Windswept", "Blonde-Bangs", "Quinn-Hair", "Pink-SpaceBuns", "DuoTone-Spacebuns", "Red-Fro", "Yellow-Spacebuns", "Blue-Floaty", "Purple-Floaty", "Orange-Floaty", "Blonde-Floaty" ],
  "Green Powersuit": ["Fedora", "Blonde-Ponytail", "Blonde Bangs", "Yellow-Spacebuns", "Blue-Floaty", "Blonde-Floaty", "Grey-Floaty", "Purple-Floaty", "Orange-Floaty", "Blue-Long", "Golden-Long", "Black-Long", "Pink-Spacebuns", "DuoTone-Spacebuns" ], 
  "Pink Powersuit": ["Fedora", "Blonde-Ponytail", "Blonde Bangs", "Yellow-Spacebuns", "Blue-Floaty", "Blonde-Floaty", "Grey-Floaty", "Purple-Floaty", "Orange-Floaty", "Blue-Long", "Golden-Long", "Black-Long", "Pink-Spacebuns", "DuoTone-Spacebuns" ], 
  "Blue Powersuit": ["Fedora", "Blonde Ponytail", "Blonde Bangs", "Yellow-Spacebuns", "Blue-Floaty", "Blonde-Floaty", "Grey-Floaty", "Purple-Floaty", "Orange-Floaty", "Blue-Long", "Golden-Long", "Black-Long", "Pink-Spacebuns", "DuoTone-Spacebuns" ], 
  "Gray Powersuit": ["Fedora", "Blonde Ponytail", "Blonde Bangs", "Yellow-Spacebuns", "Blue-Floaty", "Blonde-Floaty", "Grey-Floaty", "Purple-Floaty", "Orange-Floaty", "Blue-Long", "Golden-Long", "Black-Long", "Pink-Spacebuns", "DuoTone-Spacebuns" ]

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
 // Helmet: "Space Helmet",
  "Short-Blue": "Short Blue",
  "Purple-Floaty": "Purple Floaty",
  "Short-Lime-Green": "Short Lime Green",
  "Desert-Bob": "Desert Bob",
  "Short-Green": "Short Green"
};

const debugLogs = true;

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const extraAttributes = () => [
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
];

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

/**
 * Set to true to always use the root folder as trait_tybe
 * Set to false to use weighted parent folders as trait_type
 * Default is true.
 */
const useRootTraitType = true;

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
