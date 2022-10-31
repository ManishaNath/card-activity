import { GradientButtonWithIcon } from '../button/gradient/GradientButtonWithIcon';
import { WalletConnectContext } from '../../context';
import keyIcon from './../../assets/icons/key-icon.svg';
import { useContext } from 'react';

export const Widgets = () => {
    const { account, activateProvider } = useContext(WalletConnectContext);

    const activate = async () => {
        await activateProvider();
    };

    return (
        <div className="w-full h-full bg-black-700 rounded-[30px] inset-shadow relative">
            <div
                className={`w-full h-full flex flex-col items-center px-4 ${
                    account ? '' : 'blur-sm'
                }`}
            >
                <div className="flex justify-between">
                    <div>PROVIDE LIQUIDITY</div>
                    <div>SWAP $LAKE</div>
                    <div>BUY $LAKE</div>
                </div>
            </div>
            {!account && (
                <div className="absolute top-[50%] left-[41%]">
                    <GradientButtonWithIcon
                        size="medium"
                        disabled={false}
                        text="CONNECT WALLET"
                        onClick={activate}
                    >
                        <img src={keyIcon} alt="key"></img>
                    </GradientButtonWithIcon>
                </div>
            )}
        </div>
    );
};
