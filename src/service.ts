import * as solanaWeb3 from "@solana/web3.js"
// This contain same fetching the data from jsonrcp server this code
// is same as web3 lib connection.getBalance(address)
const url = `https://api.devnet.solana.com`
async function getBalanceUsingJSONRPC(address: string): Promise<number> {
    console.log(url, address);
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "jsonrpc": "2.0",
            "id": 1,
            "method": "getBalance",
            "params": [
                address
            ]
        })
    }).then(response => response.json())
    .then(json => {
        if (json.error) {
            throw json.error
        }
        console.log(json)
        return json['result']['value'] as string;
    })
    .catch(error => {
        return error
    })
}

//using web3 lib to fetch data
async function getBalanceUsingWeb3(address:solanaWeb3.PublicKey):Promise<number>{
    const connection = new solanaWeb3.Connection(url)
    console.log(connection)
    return connection.getBalance(address)
}

export { getBalanceUsingJSONRPC, getBalanceUsingWeb3 }

