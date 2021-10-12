import { useWallet, WalletStatus } from '@terra-money/wallet-provider';
import { ConnectType } from '@terra-dev/use-wallet';
import React from 'react';

function ConnectWallet() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    connect,
    install,
    disconnect,
  } = useWallet();

  return (
    <span>
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <>
          {availableInstallTypes.map((connectType) => (
            <button
              key={'install-' + connectType}
              onClick={() => install(connectType)}
            >
              Install {connectType}
            </button>
          ))}
          <button
            key={'connect-' + ConnectType.CHROME_EXTENSION}
            onClick={() => connect(ConnectType.CHROME_EXTENSION)}
          >
            Connect {ConnectType.CHROME_EXTENSION}
          </button>
        </>
      )}
      {status === WalletStatus.WALLET_CONNECTED && (
        <button onClick={() => disconnect()}>Disconnect {network.name}</button>
      )}
    </span>
  );
}

export default ConnectWallet;
