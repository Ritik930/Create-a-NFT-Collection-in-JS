/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create a variable to hold the number of NFTs
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _skincolor, _haircolor, _shoestype) {
    const NFT = {
        Name: _name,
        Skincolor: _skincolor,
        Haircolor: _haircolor,
        Shoestype: _shoestype
    };
    NFTs.push(NFT);
    console.log(`Minted NFT: ${_name}`);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nCustomer_ID \t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].Name);
        console.log("Skincolor: \t" + NFTs[i].Skincolor);
        console.log("Haircolor: \t" + NFTs[i].Haircolor);
        console.log("Shoestype: \t" + NFTs[i].Shoestype);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number NFTs:" + NFTs.length);
}

// Minting some NFTs
mintNFT("Ritik", "Fair", "Black", "Loafer");
mintNFT("Aman", "Medium", "Brown", "Sneakers");
mintNFT("Ankit", "Medium", "White", "Boots");
mintNFT("Rohan", "Light", "White", "Ballet Flat");
mintNFT("Saurya", "Dark", "Black", "Slide");

// Calling the functions
listNFTs();
getTotalSupply();
