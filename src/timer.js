import { useEffect, useState } from "react";

export function Timer(props) {
    const [whiteTimeLeft, setWhiteTimeLeft] = useState(new Date());
    const [blackTimeLeft, setBlackTimeLeft] = useState(props.time);

    useEffect(() => {
        setInterval(
            whiteTimer(), 1000
        )
        setInterval(
            blackTimer(), 1000
        )
    }, [])

    function whiteTimer() {
        if (props.whiteTurn) {
            setWhiteTimeLeft(new Date());
        }
    }

    function blackTimer() {
        if (!props.whiteTurn) {
            setBlackTimeLeft(blackTimeLeft - 1)
        }
    }
    return (
        <div>
            White has {whiteTimeLeft.toLocaleTimeString()} time left. Black has {blackTimeLeft}.
        </div>
    )
}