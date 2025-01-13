   pragma solidity 0.5.1;

contract MusicNFTMarketplace {
    address public owner;
    uint public nextTokenId;

    mapping(uint => address) public tokenOwners;
    mapping(uint => uint) public tokenPrices;
    mapping(uint => string) public tokenURIs;
    mapping(address => uint) public stakedNFTs;

    event MusicNFTCreated(uint tokenId, address owner, uint price, string tokenURI);
    event MusicNFTPriceUpdated(uint tokenId, uint price);
    event MusicNFTBought(uint tokenId, address newOwner, uint price);
    event MusicNFTStaked(uint tokenId, address staker);
    event MusicNFTUnstaked(uint tokenId, address staker);
    
    constructor() public {
        owner = msg.sender;
        nextTokenId = 1; // Start token IDs from 1
    }

    // Create a new Music NFT
    function createMusicNFT(string memory tokenURI, uint price) public returns (uint) {
        require(price > 0, "Price must be greater than zero");

        uint tokenId = nextTokenId;
        nextTokenId++;

        tokenOwners[tokenId] = msg.sender;
        tokenPrices[tokenId] = price;
        tokenURIs[tokenId] = tokenURI;

        emit MusicNFTCreated(tokenId, msg.sender, price, tokenURI);
        return tokenId;
    }

    // Update the price of a Music NFT
    function updatePrice(uint tokenId, uint newPrice) public {
        require(tokenOwners[tokenId] == msg.sender, "You are not the owner");
        require(newPrice > 0, "Price must be greater than zero");

        tokenPrices[tokenId] = newPrice;

        emit MusicNFTPriceUpdated(tokenId, newPrice);
    }

    // Buy a Music NFT
    function buyMusicNFT(uint tokenId) public payable {
        address seller = tokenOwners[tokenId];
        uint price = tokenPrices[tokenId];

        require(seller != address(0), "NFT does not exist");
        require(msg.value >= price, "Insufficient funds to purchase");
        require(seller != msg.sender, "Cannot buy your own NFT");

        // Transfer ownership of the NFT
        tokenOwners[tokenId] = msg.sender;
        tokenPrices[tokenId] = 0; // Mark as sold

        // Transfer funds to the seller
        address(uint160(seller)).transfer(price);

        emit MusicNFTBought(tokenId, msg.sender, price);
    }

    // Stake a Music NFT
    function stakeMusicNFT(uint tokenId) public {
        require(tokenOwners[tokenId] == msg.sender, "You are not the owner of this NFT");

        // Transfer the NFT to the contract for staking
        tokenOwners[tokenId] = address(this);
        stakedNFTs[msg.sender] = tokenId;

        emit MusicNFTStaked(tokenId, msg.sender);
    }

    // Unstake a Music NFT
    function unstakeMusicNFT(uint tokenId) public {
        require(stakedNFTs[msg.sender] == tokenId, "This NFT is not staked by you");

        // Transfer the NFT back to the owner
        tokenOwners[tokenId] = msg.sender;
        stakedNFTs[msg.sender] = 0;

        emit MusicNFTUnstaked(tokenId, msg.sender);
    }

    // Get details of a Music NFT
    function getMusicNFTDetails(uint tokenId) public view returns (address, uint, string memory) {
        return (tokenOwners[tokenId], tokenPrices[tokenId], tokenURIs[tokenId]);
    }
}


