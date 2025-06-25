/**
 * Request testnet NIM from the faucet
 * @param {Nimiq.Client} client - The Nimiq client instance.
 * @param {Nimiq.Address} address - The address to send funds to
 * @returns {Promise<boolean>} - Success status
 */
export async function requestFromFaucet(client, address) {
  const faucetUrl = 'https://faucet.pos.nimiq-testnet.com/tapit'

  try {
    console.log('💧 Requesting funds from faucet...')

    const response = await fetch(faucetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `address=${address.toUserFriendlyAddress()}`,
    })

    if (!response.ok) {
      console.log('❌ Faucet request failed:', response.status)
      return false
    }

    console.log('✅ Faucet request successful!')

    console.log('⏳ Waiting for funds to arrive...')
    await new Promise(resolve => setTimeout(resolve, 3_000))

    const balance = await client.getBalance(address)
    console.log(`💰 Balance: ${balance / 1e5} NIM`)
    return true
  }
  catch (error) {
    console.error('❌ Error requesting from faucet:', error.message)
    return false
  }
}

/**
 * Requests NIM from the testnet faucet.
 * @param {Nimiq.Client} client - The Nimiq client instance.
 * @param {string} address - The address to fund.
 * @returns {Promise<void>}
 */
