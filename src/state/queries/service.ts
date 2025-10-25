import {BskyAgent} from '@atproto/api'
import {useQuery} from '@tanstack/react-query'

const RQKEY_ROOT = 'service'
export const RQKEY = (serviceUrl: string) => [RQKEY_ROOT, serviceUrl]

export function useServiceQuery(serviceUrl: string) {
  return useQuery({
    queryKey: RQKEY(serviceUrl),
    queryFn: async () => {
      const agent = new BskyAgent({service: serviceUrl})

      // Northsky labeler
      agent.appLabelers = ['did:plc:p2cxrw3ank4dzs55mpm6ohq4']

      // goodbye bluesky
      try {
        await agent.com.atproto.actor.putPreferences({
          preferences: [
            {
              $type: 'app.bsky.actor.defs#labelerPrefs',
              labelers: [
                {
                  did: 'did:plc:p2cxrw3ank4dzs55mpm6ohq4',
                },
              ],
            },
          ],
        })
      } catch (err) {
        console.warn('Failed to update labeler preferences:', err)
      }

      const res = await agent.com.atproto.server.describeServer()
      return res.data
    },
    enabled: isValidUrl(serviceUrl),
  })
}
