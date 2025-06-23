import { Client, ClientConfiguration } from '@nimiq/core'

async function main() {
  console.log('🚀 Starting Nimiq Web Client Tutorial')

  // Create a configuration builder
  const config = new ClientConfiguration()

  // We can also use `MainAlbatross` for mainnet
  config.network('TestAlbatross')

  // We must explicitly set the seed nodes for testnet
  config.seedNodes([
    '/dns4/seed1.pos.nimiq-testnet.com/tcp/8443/wss',
    '/dns4/seed2.pos.nimiq-testnet.com/tcp/8443/wss',
    '/dns4/seed3.pos.nimiq-testnet.com/tcp/8443/wss',
    '/dns4/seed4.pos.nimiq-testnet.com/tcp/8443/wss',
  ])

  // Print minimal messages
  config.logLevel('error')

  // Super fast sync mode
  config.syncMode('pico')

  // Instantiate and launch the client
  console.log('📡 Creating client and connecting to network...')
  const client = await Client.create(config.build())

  // Wait for consensus to be established
  console.log('⏳ Waiting for consensus to be established...')
  await client.waitForConsensusEstablished()

  console.log('✅ Consensus established!')
}

main().catch(console.error)
