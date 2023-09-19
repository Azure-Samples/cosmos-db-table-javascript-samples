// <imports>
import { TableClient } from '@azure/data-tables'
// </imports>

// <client>
const connectionString = 'DefaultEndpointsProtocol=http;AccountName=localhost;AccountKey=C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==;TableEndpoint=http://localhost:8902/;'

const client = TableClient.fromConnectionString(
  connectionString,
  'cosmicworksproducts'
)
// </client>

// <resources>
await client.createTable()
// </resources>

// <upsert>
const item = {
  partitionKey: '68719518371',
  rowKey: 'Surfboards',
  name: 'Kiama classic surfboard'
}

await client.upsertEntity(
  item,
  'Replace'
)
// </upsert>

process.exit()
