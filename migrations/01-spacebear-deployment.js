// import Spacebear from "../build/Spacebear.json" assert { type: "json" };
const Spacebear = artifacts.require("Spacebear");
module.exports = (deployer) => {
  deployer.deploy(Spacebear);
};
