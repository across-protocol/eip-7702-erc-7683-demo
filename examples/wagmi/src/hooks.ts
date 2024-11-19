import { useMutation } from '@tanstack/react-query'
import type { Address, EIP1193Provider, Hex } from 'viem'
import {
  type Connector,
  ConnectorNotFoundError,
  useAccount,
  useDisconnect as useDisconnect_wagmi,
} from 'wagmi'

export function useCreateAccount() {
  return useMutation({
    mutationFn: async ({
      connector,
      label,
    }: { connector: Connector; label?: string | undefined }) => {
      const provider = (await connector.getProvider()) as EIP1193Provider
      return provider.request<{
        Method: 'experimental_createAccount'
        Parameters?: [{ label?: string | undefined }]
        ReturnType: never
      }>({
        method: 'experimental_createAccount',
        params: [{ label }],
      })
    },
  })
}

export function useGrantSession() {
  const { connector } = useAccount()
  return useMutation({
    mutationFn: async () => {
      if (!connector) throw new ConnectorNotFoundError()
      const provider = (await connector.getProvider()) as EIP1193Provider
      return provider.request<{
        Method: 'experimental_grantSession'
        Parameters:
          | [
              {
                address?: Address | undefined
                expiry?: number | undefined
              },
            ]
          | []
        ReturnType: {
          expiry: number
          id: Hex
        }
      }>({
        method: 'experimental_grantSession',
        params: [],
      })
    },
  })
}

export function useDisconnect() {
  const { connector } = useAccount()
  const { disconnectAsync } = useDisconnect_wagmi()
  return useMutation({
    mutationFn: async () => {
      if (!connector) throw new ConnectorNotFoundError()
      await disconnectAsync()
      const provider = (await connector.getProvider()) as EIP1193Provider
      return provider.request<{
        Method: 'experimental_disconnect'
        Parameters?: undefined
        ReturnType: never
      }>({
        method: 'experimental_disconnect',
      })
    },
  })
}
