import {Wallet, Client} from 'xrpl';
const XRPL_NODE = 'wss://xrplcluster.com/'

const GetAccountInfo = (xrp_address) =>
{
  return {
    "command": "account_info",
    "account": xrp_address,
    "ledger_index": "current",
    "queue": false
  }
}

const GetLatestSequence = async (xrp_address) =>
{   const client = new Client(XRPL_NODE)
    try{
        let response: any;
        await client.connect();
        let accountInfo = await client.request(GetAccountInfo(xrp_address));
        await client.disconnect();
        response = accountInfo.result
        return response.account_data.Sequence;
    } catch(err)
    {
        if(client.isConnected() === true) {await client.disconnect();}
        return 0;
    }
}

const signTransactions = async (json, seed) => {
    try {
        let transactions = JSON.parse(json);
        let signedPayloads = [];

        const wallet = Wallet.fromSeed(
            seed
        );
        let accountSequence = await GetLatestSequence(wallet.address);

        for(let i = 0; i < transactions.length; i++)
        {
            transactions[i].Sequence = accountSequence;
            transactions[i].Fee = "15";
            let cst_signed = wallet.sign(transactions[i]);
            signedPayloads.push(cst_signed);
            accountSequence = accountSequence + 1;
        }

        return JSON.stringify(signedPayloads);

    } catch (error) {
      console.log(error)
    }
  }

  export const signer = {
    signTransactions
  };