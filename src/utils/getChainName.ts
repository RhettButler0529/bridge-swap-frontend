import chainName from "config/constants/chainName";


export default function getChainName(chainId: number): string{
    return chainName[chainId].name
}