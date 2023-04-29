async function getBalanceUsingJSONRPC(address: string): Promise<number> {
    const url = `https://api.devnet.solana.com`
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
export default getBalanceUsingJSONRPC