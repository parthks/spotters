import { WebIrys } from "@irys/sdk";

const getWebIrys = async () => {
  // Ethers5 provider
  await window.ethereum.enable();
  const provider = new providers.Web3Provider(window.ethereum);

  const network = "mainnet";
  const token = "ethereum";
  // Devnet RPC URLs change often, use a recent one from https://chainlist.org
  const rpcUrl = "";

  // Create a wallet object
  const wallet = { rpcUrl: rpcUrl, name: "ethersv5", provider: provider };
  // Use the wallet object
  const webIrys = new WebIrys({ network, token, wallet });
  await webIrys.ready();

  return webIrys;
};

const uploadData = async () => {
  const webIrys = await getWebIrys();
  const dataToUpload = "GM world.";
  try {
    const receipt = await webIrys.upload(dataToUpload);
    console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
  } catch (e) {
    console.log("Error uploading data ", e);
  }
};
