import { useAsyncInitialize } from "./useAsyncInitialize";
import {TonClient} from 'ton';
import {getHttpEndpoint} from '@orbs-network/ton-access';

export function useTonClient(){
    return useAsyncInitialize(
        async () =>
            new TonClient({
                endpoint: await getHttpEndpoint({network:"testnet"})
            })
    );
}