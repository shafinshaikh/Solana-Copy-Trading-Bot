const solanaWeb3 = require('@solana/web3.js');

async function monitorWallet(walletAddress) {
    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');
    
    let subscriptionId = connection.onAccountChange(
        new solanaWeb3.PublicKey(walletAddress),
        async (accountInfo) => {
            console.log("Balance Changed:", accountInfo.lamports, "lamports");
            // Here you would analyze the transaction and decide what action to simulate
            // For a real copy trade bot, this is where you would trigger trade execution based on your criteria
        },
        'confirmed'
    );

    console.log(`Monitoring wallet: ${walletAddress}. Subscription ID: ${subscriptionId}`);
}

// Replace this with the wallet address you want to monitor
const walletAddress = 'HgcczgxSNqBLEkCKuqbzg4o9PZPn52XiiucPwS2RPBHY';
monitorWallet(walletAddress);
