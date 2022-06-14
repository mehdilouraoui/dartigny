/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import { useLayoutEffect } from 'react';
// @ts-ignore

export const Visual: React.FC<{ url: string; top: string; left: string }> = ({
    url,
    top,
    left,
}) => (
    <div className="visual" style={{ top: `${top}vh`, left: `${left}vw` }}>
        <img src={`/${url}.png`} alt={url} />
    </div>
);

const Home: NextPage = () => {
    useLayoutEffect(() => {
        var delay = 1; //Delay In Ticks
        var amount = 60; //How Many Times It Generates A Number Before Moving On To The Next
        var numLength = 3;

        var amountNum = 0;
        var frameNum = 0;
        var numPosition = 0;

        var numbers = document.getElementsByTagName('small');

        function tick() {
            frameNum++;
            if (frameNum > delay) {
                amountNum++;
                frameNum = 0;
                for (let i = numPosition; i < numLength; i++) {
                    // @ts-ignore
                    numbers[i].innerHTML = Math.floor(Math.random() * 10);
                }
            }
            if (amountNum > amount) {
                numPosition++;
                amountNum = 0;
            }
            if (numPosition < numLength) {
                requestAnimationFrame(tick);
            } else {
                numPosition = 0;
            }
        }

        tick();
    }, []);
    const style = {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <>
            <h1 className="visit" style={style}>
                Visitez ce site sur mobile pour participer au jeu !
            </h1>
            <div className="container">
                <div id="logo">
                    <img src="/logo.png" alt="logo" />
                </div>
                <div className="counter">
                    <small></small>
                    <small></small>
                    <small></small>
                    <div className="bulle">
                        <img src="/bulle.png" alt="" />
                    </div>
                    <h2>
                        Rentrez le code sur le cadenas du coffret mystère et
                        découvrez si vous êtes le gagnant de notre lot !
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Home;
