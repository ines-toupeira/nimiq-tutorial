import { KeyPair, PrivateKey } from '@nimiq/core'
import { setupConsensus } from './consensus.js'
// import { requestFromFaucet } from './faucet.js'

console.log('🚀 Starting Nimiq client...')

async function main() {
  try {
    // Setup consensus (from previous lessons)
    const client = await setupConsensus()

    const headBlock = await client.getHeadBlock()
    console.log('📊 Current block height:', headBlock.height)
    const networkId = await client.getNetworkId()
    console.log('🌐 Network ID:', networkId)

    // Generate a new wallet

    // ⚠️ Uncomment this when the faucet is working again
    // Get funds from faucet (from previous lessons)
    // await requestFromFaucet(client, address)

    // ⚠️ At the moment we cannot use the faucet, so we need to use a private key that has funds
    const privateKey = PrivateKey.fromHex('204aec9a093c8eb99d5136f9aa0910dd131934287035d03c7b9d5b2a6db042e3')

    // const privateKey = PrivateKey.generate()
    const keyPair = KeyPair.derive(privateKey)
    const address = keyPair.toAddress()

    console.log('🎉 Wallet created!')
    console.log('📍 Address:', address.toUserFriendlyAddress())

    // TODO: Read the current balance of our account

    // TODO: Get transaction history to find the sender of the first transaction (faucet)

    // TODO: Find the most recent transaction that is not from us (faucet transaction)

    // TODO: Calculate amounts for each transaction (half each)

    // TODO: Create a basic transaction sending half of the funds back to the faucet sender

    // TODO: Sign the basic transaction

    // TODO: Send the basic transaction

    // TODO: Create an extended transaction with data sending the other half back

    // TODO: Sign the extended transaction

    // TODO: Send the extended transaction

    // TODO: Display summary
  }
  catch (error) {
    console.error('❌ Error:', error.message)
  }
}

main()
