import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";

function App() {
  const {
    contract_address,
    counter_value,
    recent_sender,
    owner_address,
    contract_balance,
    sendIncrement,
  } = useMainContract();

  const { connected } = useTonConnect();
  return (
    <div>
      <div>
        <TonConnectButton />
      </div>
      <div>
        <div className="Card">
          <b>Our Contract Address</b>
          <div className="Hint">{contract_address?.slice(0, 30) + "..."}</div>
          <b>Our Contract Balance</b>
          <div className="Hint">{contract_balance}</div>
        </div>
        <div className="Card">
          <b>Counter Value</b>
          <div>{counter_value ?? "loading..."}</div>
        </div>
        {connected && (
          <a
            onClick={() => {
              sendIncrement();
            }}
          >
            Increment by 5
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
