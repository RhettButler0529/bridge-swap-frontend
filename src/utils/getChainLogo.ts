import chainName from "config/constants/chainName";

export default function getChainLogo(chainId: number): JSX.Element{
    return chainName[chainId].logo
}