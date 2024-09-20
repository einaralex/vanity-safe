export interface NetworkConfigEntry {
  masterCopyAddress: string
  proxyFactoryAddress: string
  fallbackHandlerAddress: string
}

export interface NetworksConfig {
  [id: string]: NetworkConfigEntry
}

export const defaultNetworks: NetworksConfig = {
  // xdai
  100: {
    masterCopyAddress: '0x3E5c63644E683549055b9Be8653de26E0B4CD36E',
    proxyFactoryAddress: '0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2',
    fallbackHandlerAddress: '0xf48f2B2d2a534e402487b3ee7C18c33Aec0Fe5e4'
  }
}
