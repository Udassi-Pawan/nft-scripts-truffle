const spacebear = artifacts.require("Spacebear");
const truffleAssert = require("truffle-assertions");

contract("Spacebear", (acc) => {
  it("should credit an nft to spec acc", async () => {
    const spacebearInstance = await spacebear.deployed();
    await spacebearInstance.safeMint(acc[1], "spacebear_1.json");
    assert.equal(
      await spacebearInstance.ownerOf(0),
      acc[1],
      "owner does not match"
    );
  });
});
