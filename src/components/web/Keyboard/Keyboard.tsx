import React from "react";
import './KeyboardStyle.css';

export const Keyboard: React.FC<{
    onEscapeClick: () => void
}> = ({onEscapeClick}) => {
    return (
        <>
            <svg className="keyboard" xmlns="http://www.w3.org/2000/svg" viewBox="-10 -20 900 400">
                <defs>
                    <filter id="neon-effect" x="-100%" y="-100%" width="300%" height="300%">
                        <feFlood result="flood" floodColor="red" floodOpacity="1"></feFlood>
                        <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
                        <feMorphology in="mask" result="dilated" operator="dilate" radius="2"></feMorphology>
                        <feGaussianBlur in="dilated" result="blurred" stdDeviation="5"></feGaussianBlur>
                        <feMerge>
                            <feMergeNode in="blurred"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                    <filter id="neon-effect-other-buttons" x="-100%" y="-100%" width="300%" height="300%">
                        <feFlood result="flood" floodColor="blue" floodOpacity="10"></feFlood>
                        <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
                        <feMorphology in="mask" result="dilated" operator="dilate" radius="2"></feMorphology>
                        <feGaussianBlur in="dilated" result="blurred" stdDeviation="5"></feGaussianBlur>
                        <feMerge>
                            <feMergeNode in="blurred"></feMergeNode>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                    </filter>
                </defs>
                <g id="Layer_2">
                    <g id="Keyboard" fill="grey">
                        <g id="leftshift" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="35" y="220" width="43" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M39.26,220.39h34.9A3.88,3.88,0,0,1,78,224.27v27.13a3.88,3.88,0,0,1-3.88,3.88H39.27a3.88,3.88,0,0,1-3.88-3.88V224.26a3.87,3.87,0,0,1,3.87-3.87Z"/>
                            <path className="cls-1"
                                  d="M44.11,225.23h25.2a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H44.11a3.88,3.88,0,0,1-3.88-3.88V229.11A3.88,3.88,0,0,1,44.11,225.23Z"/>
                        </g>
                        <g id="winkey" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="80" y="257" width="43" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="79.97" y="257.21" width="42.65" height="34.88" rx="3.88"/>
                            <path className="cls-1"
                                  d="M88.7,262h25.2a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H88.7a3.87,3.87,0,0,1-3.87-3.87V265.93A3.88,3.88,0,0,1,88.7,262Z"/>
                        </g>
                        <g id="leftalt" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="125" y="257" width="43" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="124.56" y="257.21" width="42.65" height="34.88" rx="3.88"/>
                            <path className="cls-1"
                                  d="M133.28,262h25.2a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87h-25.2a3.88,3.88,0,0,1-3.88-3.88V265.92A3.88,3.88,0,0,1,133.28,262Z"/>
                        </g>
                        <g id="rightalt" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="410" y="257" width="43" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="409.53" y="257.21" width="42.65" height="34.88" rx="3.88"/>
                            <path className="cls-1"
                                  d="M418.25,262h25.2a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88h-25.2a3.88,3.88,0,0,1-3.88-3.88V265.92A3.87,3.87,0,0,1,418.25,262Z"/>
                        </g>
                        <g id="fn" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="455" y="257" width="43" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="454.11" y="257.21" width="42.65" height="34.88" rx="3.88"/>
                            <path className="cls-1"
                                  d="M462.84,262H488a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88h-25.2a3.87,3.87,0,0,1-3.87-3.87V265.93A3.88,3.88,0,0,1,462.84,262Z"/>
                        </g>
                        <g id="context" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="498" y="257" width="43" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="498.7" y="257.21" width="42.65" height="34.88" rx="3.88"/>
                            <path className="cls-1"
                                  d="M507.42,262h25.2a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88h-25.2a3.87,3.87,0,0,1-3.87-3.87V265.93A3.88,3.88,0,0,1,507.42,262Z"/>
                        </g>
                        <g id="rightcontrol" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="542" y="257" width="43" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M552,262h25.2a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H552a3.88,3.88,0,0,1-3.88-3.88V265.93A3.88,3.88,0,0,1,552,262Z"/>
                            <rect className="cls-1" x="543.28" y="257.21" width="42.65" height="34.88" rx="3.88"/>
                        </g>
                        <g id="y" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="117" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M125.53,225.23H143a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H125.53a3.87,3.87,0,0,1-3.87-3.87V229.11A3.88,3.88,0,0,1,125.53,225.23Z"/>
                            <path className="cls-1"
                                  d="M120.68,220.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H120.68a3.88,3.88,0,0,1-3.88-3.88V224.26A3.88,3.88,0,0,1,120.68,220.39Z"/>
                        </g>
                        <g id="x" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="153" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M162.36,225.23h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H162.36a3.88,3.88,0,0,1-3.88-3.88V229.11A3.87,3.87,0,0,1,162.36,225.23Z"/>
                            <path className="cls-1"
                                  d="M157.51,220.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H157.52a3.88,3.88,0,0,1-3.88-3.88V224.26A3.88,3.88,0,0,1,157.51,220.39Z"/>
                        </g>
                        <g id="c" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="190" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M199.19,225.23h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H199.19a3.88,3.88,0,0,1-3.88-3.88V229.11A3.88,3.88,0,0,1,199.19,225.23Z"/>
                            <path className="cls-1"
                                  d="M194.35,220.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H194.35a3.88,3.88,0,0,1-3.88-3.88V224.26A3.88,3.88,0,0,1,194.35,220.39Z"/>
                        </g>
                        <g id="v" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="228" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M231.18,220.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H231.18a3.88,3.88,0,0,1-3.88-3.88V224.26A3.88,3.88,0,0,1,231.18,220.39Z"/>
                            <path className="cls-1"
                                  d="M236,225.23h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H236a3.88,3.88,0,0,1-3.88-3.88V229.11A3.88,3.88,0,0,1,236,225.23Z"/>
                        </g>
                        <g id="b" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="264" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M272.86,225.23h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H272.86a3.88,3.88,0,0,1-3.88-3.88V229.11A3.88,3.88,0,0,1,272.86,225.23Z"/>
                            <path className="cls-1"
                                  d="M268,220.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H268a3.88,3.88,0,0,1-3.88-3.88V224.26A3.87,3.87,0,0,1,268,220.39Z"/>
                        </g>
                        <g id="n" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="301" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M309.69,225.23h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H309.69a3.88,3.88,0,0,1-3.88-3.88V229.11A3.88,3.88,0,0,1,309.69,225.23Z"/>
                            <path className="cls-1"
                                  d="M304.84,220.39H332a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H304.84a3.88,3.88,0,0,1-3.88-3.88V224.26A3.87,3.87,0,0,1,304.84,220.39Z"/>
                        </g>
                        <g id="key1" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="375" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M383.35,225.23H400.8a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H383.35a3.88,3.88,0,0,1-3.88-3.88V229.11A3.88,3.88,0,0,1,383.35,225.23Z"/>
                            <path className="cls-1"
                                  d="M378.51,220.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H378.51a3.88,3.88,0,0,1-3.88-3.88V224.26A3.87,3.87,0,0,1,378.51,220.39Z"/>
                        </g>
                        <g id="key2" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="412" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M420.19,225.23h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H420.19a3.88,3.88,0,0,1-3.88-3.88V229.11A3.88,3.88,0,0,1,420.19,225.23Z"/>
                            <path className="cls-1"
                                  d="M415.34,220.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H415.34a3.88,3.88,0,0,1-3.88-3.88V224.26A3.87,3.87,0,0,1,415.34,220.39Z"/>
                        </g>
                        <g id="key3" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="448" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M457,225.23h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H457a3.87,3.87,0,0,1-3.87-3.87V229.11A3.87,3.87,0,0,1,457,225.23Z"/>
                            <path className="cls-1"
                                  d="M452.17,220.39h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H452.17a3.88,3.88,0,0,1-3.88-3.88V224.27A3.88,3.88,0,0,1,452.17,220.39Z"/>
                        </g>
                        <g id="key4" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="485" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M493.85,225.23H511.3a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H493.85a3.87,3.87,0,0,1-3.87-3.87V229.11A3.88,3.88,0,0,1,493.85,225.23Z"/>
                            <path className="cls-1"
                                  d="M489,220.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H489a3.88,3.88,0,0,1-3.88-3.88V224.26A3.87,3.87,0,0,1,489,220.39Z"/>
                        </g>
                        <g id="a" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="99" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M108.08,188.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H108.08a3.87,3.87,0,0,1-3.87-3.87V192.29A3.88,3.88,0,0,1,108.08,188.42Z"/>
                            <path className="cls-1"
                                  d="M103.24,183.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H103.24a3.88,3.88,0,0,1-3.88-3.88V187.45A3.88,3.88,0,0,1,103.24,183.57Z"/>
                        </g>
                        <g id="s" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="136" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M144.91,188.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H144.92a3.88,3.88,0,0,1-3.88-3.88V192.29a3.87,3.87,0,0,1,3.87-3.87Z"/>
                            <path className="cls-1"
                                  d="M140.07,183.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H140.07a3.88,3.88,0,0,1-3.88-3.88V187.45A3.88,3.88,0,0,1,140.07,183.57Z"/>
                        </g>
                        <g id="d" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="173" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M181.75,188.42H199.2a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H181.75a3.88,3.88,0,0,1-3.88-3.88V192.29A3.88,3.88,0,0,1,181.75,188.42Z"/>
                            <path className="cls-1"
                                  d="M176.9,183.57H204a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H176.9a3.88,3.88,0,0,1-3.88-3.88V187.45A3.88,3.88,0,0,1,176.9,183.57Z"/>
                        </g>
                        <g id="f" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="210" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M213.73,183.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H213.73a3.88,3.88,0,0,1-3.88-3.88V187.45A3.88,3.88,0,0,1,213.73,183.57Z"/>
                            <path className="cls-1"
                                  d="M218.58,188.42H236a3.87,3.87,0,0,1,3.87,3.87v17.44a3.87,3.87,0,0,1-3.87,3.87H218.58a3.88,3.88,0,0,1-3.88-3.88V192.29A3.88,3.88,0,0,1,218.58,188.42Z"/>
                        </g>
                        <g id="g" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="247" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M255.41,188.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H255.41a3.88,3.88,0,0,1-3.88-3.88V192.29A3.88,3.88,0,0,1,255.41,188.42Z"/>
                            <path className="cls-1"
                                  d="M250.56,183.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H250.57a3.88,3.88,0,0,1-3.88-3.88V187.45A3.87,3.87,0,0,1,250.56,183.57Z"/>
                        </g>
                        <g id="h" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="284" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M292.24,188.42h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H292.24a3.88,3.88,0,0,1-3.88-3.88V192.29A3.88,3.88,0,0,1,292.24,188.42Z"/>
                            <path className="cls-1"
                                  d="M287.4,183.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H287.4a3.88,3.88,0,0,1-3.88-3.88V187.45A3.87,3.87,0,0,1,287.4,183.57Z"/>
                        </g>
                        <g id="j" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="321" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M329.07,188.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H329.08a3.88,3.88,0,0,1-3.88-3.88V192.29A3.88,3.88,0,0,1,329.07,188.42Z"/>
                            <path className="cls-1"
                                  d="M324.23,183.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H324.23a3.88,3.88,0,0,1-3.88-3.88V187.45A3.87,3.87,0,0,1,324.23,183.57Z"/>
                        </g>
                        <g id="k" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="358" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M365.91,188.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H365.91a3.88,3.88,0,0,1-3.88-3.88V192.29A3.88,3.88,0,0,1,365.91,188.42Z"/>
                            <path className="cls-1"
                                  d="M361.06,183.57H388.2a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H361.06a3.88,3.88,0,0,1-3.88-3.88V187.45A3.87,3.87,0,0,1,361.06,183.57Z"/>
                        </g>
                        <g id="l" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="395" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M402.74,188.42h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H402.74a3.88,3.88,0,0,1-3.88-3.88V192.29A3.88,3.88,0,0,1,402.74,188.42Z"/>
                            <path className="cls-1"
                                  d="M397.89,183.57H425a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H397.89a3.88,3.88,0,0,1-3.88-3.88V187.45A3.87,3.87,0,0,1,397.89,183.57Z"/>
                        </g>
                        <g id="ů" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="432" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M439.57,188.42H457a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H439.57a3.87,3.87,0,0,1-3.87-3.87V192.29A3.88,3.88,0,0,1,439.57,188.42Z"/>
                            <path className="cls-1"
                                  d="M434.73,183.57h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H434.73a3.88,3.88,0,0,1-3.88-3.88V187.45A3.88,3.88,0,0,1,434.73,183.57Z"/>
                        </g>
                        <g id="_" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="469" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M476.4,188.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H476.4a3.88,3.88,0,0,1-3.88-3.88V192.29A3.87,3.87,0,0,1,476.4,188.42Z"/>
                            <path className="cls-1"
                                  d="M471.56,183.57H498.7a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H471.56a3.88,3.88,0,0,1-3.88-3.88V187.45A3.87,3.87,0,0,1,471.56,183.57Z"/>
                        </g>
                        <g id="uvozovky" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="506" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M513.24,188.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H513.24a3.88,3.88,0,0,1-3.88-3.88V192.29A3.88,3.88,0,0,1,513.24,188.42Z"/>
                            <path className="cls-1"
                                  d="M508.39,183.57h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H508.39a3.88,3.88,0,0,1-3.88-3.88V187.45A3.88,3.88,0,0,1,508.39,183.57Z"/>
                        </g>
                        <g id="q" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="90" y="146" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M98.39,151.6h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H98.39a3.87,3.87,0,0,1-3.87-3.87V155.48A3.88,3.88,0,0,1,98.39,151.6Z"/>
                            <path className="cls-1"
                                  d="M93.54,146.76h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H93.54a3.88,3.88,0,0,1-3.88-3.88V150.63A3.88,3.88,0,0,1,93.54,146.76Z"/>
                        </g>
                        <g id="w" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="127" y="146" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M135.22,151.6h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H135.22a3.88,3.88,0,0,1-3.88-3.88V155.48A3.87,3.87,0,0,1,135.22,151.6Z"/>
                            <path className="cls-1"
                                  d="M130.38,146.76h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H130.38a3.88,3.88,0,0,1-3.88-3.88V150.63A3.88,3.88,0,0,1,130.38,146.76Z"/>
                        </g>
                        <g id="e" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="164" y="146" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M172.05,151.6H189.5a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H172.05a3.88,3.88,0,0,1-3.88-3.88V155.48A3.88,3.88,0,0,1,172.05,151.6Z"/>
                            <path className="cls-1"
                                  d="M167.21,146.76h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H167.21a3.88,3.88,0,0,1-3.88-3.88V150.63A3.88,3.88,0,0,1,167.21,146.76Z"/>
                        </g>
                        <g id="r" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="200" y="146" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M204,146.76h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H204a3.88,3.88,0,0,1-3.88-3.88V150.63A3.88,3.88,0,0,1,204,146.76Z"/>
                            <path className="cls-1"
                                  d="M208.89,151.6h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H208.89a3.88,3.88,0,0,1-3.88-3.88V155.48A3.88,3.88,0,0,1,208.89,151.6Z"/>
                        </g>
                        <g id="t" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="237" y="146" width="35" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="241.84" y="151.6" width="25.2" height="25.19" rx="3.88"/>
                            <path className="cls-1"
                                  d="M240.87,146.76H268a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H240.87a3.88,3.88,0,0,1-3.88-3.88V150.63A3.87,3.87,0,0,1,240.87,146.76Z"/>
                        </g>
                        <g id="z" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="274" y="146" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M282.55,151.6H300a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H282.55a3.88,3.88,0,0,1-3.88-3.88V155.48A3.88,3.88,0,0,1,282.55,151.6Z"/>
                            <path className="cls-1"
                                  d="M277.7,146.76h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H277.71a3.88,3.88,0,0,1-3.88-3.88V150.63A3.87,3.87,0,0,1,277.7,146.76Z"/>
                        </g>
                        <g id="u" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="311" y="146" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M319.38,151.6h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H319.38a3.88,3.88,0,0,1-3.88-3.88V155.48A3.88,3.88,0,0,1,319.38,151.6Z"/>
                            <path className="cls-1"
                                  d="M314.53,146.76h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H314.54a3.88,3.88,0,0,1-3.88-3.88V150.63A3.87,3.87,0,0,1,314.53,146.76Z"/>
                        </g>
                        <g id="i" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="348" y="146" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M356.21,151.6h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H356.22a3.88,3.88,0,0,1-3.88-3.88V155.48A3.88,3.88,0,0,1,356.21,151.6Z"/>
                            <path className="cls-1"
                                  d="M351.37,146.76h27.14a3.88,3.88,0,0,1,3.88,3.88v27.12a3.88,3.88,0,0,1-3.88,3.88H351.37a3.88,3.88,0,0,1-3.88-3.88V150.63A3.87,3.87,0,0,1,351.37,146.76Z"/>
                        </g>
                        <g id="o" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="385" y="146" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M393,151.6H410.5a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H393a3.88,3.88,0,0,1-3.88-3.88V155.48A3.88,3.88,0,0,1,393,151.6Z"/>
                            <path className="cls-1"
                                  d="M388.2,146.76h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H388.2a3.88,3.88,0,0,1-3.88-3.88V150.63A3.87,3.87,0,0,1,388.2,146.76Z"/>
                        </g>
                        <g id="p" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="421" y="146" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M429.88,151.6h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H429.88a3.87,3.87,0,0,1-3.87-3.87V155.48A3.87,3.87,0,0,1,429.88,151.6Z"/>
                            <path className="cls-1"
                                  d="M425,146.76h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H425a3.88,3.88,0,0,1-3.88-3.88V150.63A3.88,3.88,0,0,1,425,146.76Z"/>
                        </g>
                        <g id="ú" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="458" y="146" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M466.71,151.6h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H466.71a3.88,3.88,0,0,1-3.88-3.88V155.48A3.87,3.87,0,0,1,466.71,151.6Z"/>
                            <path className="cls-1"
                                  d="M461.86,146.76H489a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H461.87a3.88,3.88,0,0,1-3.88-3.88V150.63A3.87,3.87,0,0,1,461.86,146.76Z"/>
                        </g>
                        <g id="_2" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="495" y="146" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M503.54,151.6H521a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H503.54a3.88,3.88,0,0,1-3.88-3.88V155.48A3.88,3.88,0,0,1,503.54,151.6Z"/>
                            <path className="cls-1"
                                  d="M498.7,146.76h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H498.7a3.88,3.88,0,0,1-3.88-3.88V150.63A3.88,3.88,0,0,1,498.7,146.76Z"/>
                        </g>
                        <g id="key5" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="80" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M83.85,220.39H111a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H83.85A3.88,3.88,0,0,1,80,251.39V224.26A3.87,3.87,0,0,1,83.85,220.39Z"/>
                            <path className="cls-1"
                                  d="M88.7,225.23h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H88.7a3.88,3.88,0,0,1-3.88-3.88V229.11A3.88,3.88,0,0,1,88.7,225.23Z"/>
                        </g>
                        <g id="backspace" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="515" y="110" width="70" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M518.08,109.94h64a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87h-64a3.88,3.88,0,0,1-3.88-3.88V113.82A3.87,3.87,0,0,1,518.08,109.94Z"/>
                            <rect className="cls-1" x="519.05" y="114.78" width="62.03" height="25.19" rx="3.88"/>
                        </g>
                        <g id="_3" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="478" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M481.25,109.94h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H481.25a3.87,3.87,0,0,1-3.87-3.87V113.82A3.88,3.88,0,0,1,481.25,109.94Z"/>
                            <rect className="cls-1" x="482.22" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                        </g>
                        <g id="_4" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="441" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="445.39" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                            <path className="cls-1"
                                  d="M444.42,109.94h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H444.42a3.88,3.88,0,0,1-3.88-3.88V113.82A3.87,3.87,0,0,1,444.42,109.94Z"/>
                        </g>
                        <g id="é0" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="404" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M407.59,109.94h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H407.58a3.87,3.87,0,0,1-3.87-3.87V113.82A3.88,3.88,0,0,1,407.59,109.94Z"/>
                            <rect className="cls-1" x="408.56" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                        </g>
                        <g id="í9" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="367" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M370.75,109.94h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H370.75a3.88,3.88,0,0,1-3.88-3.88V113.82A3.87,3.87,0,0,1,370.75,109.94Z"/>
                            <rect className="cls-1" x="371.72" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                        </g>
                        <g id="á8" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="330" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M333.92,109.94h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.87,3.87,0,0,1-3.87,3.87H333.92a3.88,3.88,0,0,1-3.88-3.88V113.82A3.87,3.87,0,0,1,333.92,109.94Z"/>
                            <rect className="cls-1" x="334.89" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                        </g>
                        <g id="ý7" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="293" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M297.09,109.94h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H297.09a3.88,3.88,0,0,1-3.88-3.88V113.82A3.87,3.87,0,0,1,297.09,109.94Z"/>
                            <rect className="cls-1" x="298.06" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                        </g>
                        <g id="ž6" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="256" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M260.26,109.94H287.4a3.87,3.87,0,0,1,3.87,3.87v27.13a3.87,3.87,0,0,1-3.87,3.87H260.26a3.88,3.88,0,0,1-3.88-3.88V113.82A3.87,3.87,0,0,1,260.26,109.94Z"/>
                            <rect className="cls-1" x="261.23" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                        </g>
                        <g id="ř5" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="219" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M223.43,109.94h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H223.43a3.88,3.88,0,0,1-3.88-3.88V113.82A3.88,3.88,0,0,1,223.43,109.94Z"/>
                            <rect className="cls-1" x="224.4" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                        </g>
                        <g id="rightshift" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="522" y="220" width="64" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M525.84,220.39h56.22a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H525.84a3.87,3.87,0,0,1-3.87-3.87V224.27A3.88,3.88,0,0,1,525.84,220.39Z"/>
                            <path className="cls-1"
                                  d="M530.68,225.23h46.53a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H530.68a3.88,3.88,0,0,1-3.88-3.88V229.11A3.88,3.88,0,0,1,530.68,225.23Z"/>
                        </g>
                        <g id="caps" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="35" y="183" width="63" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M39.26,183.57H93.55a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H39.27a3.88,3.88,0,0,1-3.88-3.88V187.45A3.87,3.87,0,0,1,39.26,183.57Z"/>
                            <path className="cls-1"
                                  d="M44.11,188.42H88.7a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H44.11a3.88,3.88,0,0,1-3.88-3.88V192.29A3.88,3.88,0,0,1,44.11,188.42Z"/>
                        </g>
                        <g id="ctrl" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="35" y="257" width="43" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="35.39" y="257.21" width="42.65" height="34.88" rx="3.88"/>
                            <path className="cls-1"
                                  d="M44.11,262h25.2a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H44.11a3.87,3.87,0,0,1-3.87-3.87V265.93A3.88,3.88,0,0,1,44.11,262Z"/>
                        </g>
                        <g id="č4" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="182" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="187.56" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                            <path className="cls-1"
                                  d="M186.59,109.94h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H186.59a3.88,3.88,0,0,1-3.88-3.88V113.82A3.87,3.87,0,0,1,186.59,109.94Z"/>
                        </g>
                        <g id="š3" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="145" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M149.76,109.94H176.9a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H149.76a3.88,3.88,0,0,1-3.88-3.88V113.82A3.87,3.87,0,0,1,149.76,109.94Z"/>
                            <rect className="cls-1" x="150.73" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                        </g>
                        <g id="ě2" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="108" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M112.93,109.94h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H112.93a3.88,3.88,0,0,1-3.88-3.88V113.82A3.87,3.87,0,0,1,112.93,109.94Z"/>
                            <rect className="cls-1" x="113.9" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                        </g>
                        <g id="_1" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="72" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M76.1,109.94h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H76.1a3.88,3.88,0,0,1-3.88-3.88V113.82A3.87,3.87,0,0,1,76.1,109.94Z"/>
                            <rect className="cls-1" x="77.07" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                        </g>
                        <g id="_5" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="35" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M39.27,109.94H66.41a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H39.26a3.87,3.87,0,0,1-3.87-3.87V113.82A3.88,3.88,0,0,1,39.27,109.94Z"/>
                            <rect className="cls-1" x="40.24" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                        </g>
                        <g id="pageup" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="679" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="683.83" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                            <path className="cls-1"
                                  d="M682.86,109.94H710a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H682.86a3.87,3.87,0,0,1-3.87-3.87V113.82A3.88,3.88,0,0,1,682.86,109.94Z"/>
                        </g>
                        <g id="home" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="642" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M646,109.94h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H646a3.88,3.88,0,0,1-3.88-3.88V113.82A3.87,3.87,0,0,1,646,109.94Z"/>
                            <rect className="cls-1" x="647" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                        </g>
                        <g id="pagedown" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="679" y="147" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M687.7,151.6h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H687.7a3.88,3.88,0,0,1-3.88-3.88V155.48a3.87,3.87,0,0,1,3.87-3.87Z"/>
                            <path className="cls-1"
                                  d="M682.86,146.76H710a3.88,3.88,0,0,1,3.88,3.88v27.12a3.88,3.88,0,0,1-3.88,3.88H682.86a3.88,3.88,0,0,1-3.88-3.88V150.63A3.87,3.87,0,0,1,682.86,146.76Z"/>
                        </g>
                        <g id="end" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="642" y="147" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M650.87,151.6h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H650.87a3.87,3.87,0,0,1-3.87-3.87V155.48A3.88,3.88,0,0,1,650.87,151.6Z"/>
                            <path className="cls-1"
                                  d="M646,146.76h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H646a3.88,3.88,0,0,1-3.88-3.88V150.63A3.87,3.87,0,0,1,646,146.76Z"/>
                        </g>
                        <g id="del" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="605" y="147" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M614,151.6h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H614a3.88,3.88,0,0,1-3.88-3.88V155.48A3.87,3.87,0,0,1,614,151.6Z"/>
                            <path className="cls-1"
                                  d="M609.19,146.76h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H609.19a3.88,3.88,0,0,1-3.88-3.88V150.63A3.88,3.88,0,0,1,609.19,146.76Z"/>
                        </g>
                        <g id="_-" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="843" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="848.6" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                            <path className="cls-1"
                                  d="M847.63,109.94h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H847.63a3.87,3.87,0,0,1-3.87-3.87V113.82A3.87,3.87,0,0,1,847.63,109.94Z"/>
                        </g>
                        <g id="_6" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="843" y="147" width="35" height="72"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M847.63,146.76h27.14a3.88,3.88,0,0,1,3.88,3.88v63.94a3.88,3.88,0,0,1-3.88,3.88H847.63a3.87,3.87,0,0,1-3.87-3.87V150.63A3.88,3.88,0,0,1,847.63,146.76Z"/>
                            <path className="cls-1"
                                  d="M852.48,151.6h17.45a3.87,3.87,0,0,1,3.87,3.87v54.25a3.88,3.88,0,0,1-3.88,3.88H852.48a3.88,3.88,0,0,1-3.88-3.88V155.48A3.88,3.88,0,0,1,852.48,151.6Z"/>
                        </g>
                        <g id="_7" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="806" y="257" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M815.65,262H833.1a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H815.65a3.87,3.87,0,0,1-3.87-3.87V265.93A3.88,3.88,0,0,1,815.65,262Z"/>
                            <rect className="cls-1" x="806.92" y="257.21" width="34.89" height="34.88" rx="3.88"/>
                        </g>
                        <g id="_0" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="734" y="257" width="71" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M742,262h54.28a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H742a3.88,3.88,0,0,1-3.88-3.88V265.92A3.87,3.87,0,0,1,742,262Z"/>
                            <rect className="cls-1" x="733.26" y="257.21" width="71.73" height="34.88" rx="3.88"/>
                        </g>
                        <g id="_3-2" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="806" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M815.65,225.23h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H815.65a3.88,3.88,0,0,1-3.88-3.88V229.11A3.88,3.88,0,0,1,815.65,225.23Z"/>
                            <path className="cls-1"
                                  d="M810.8,220.39h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H810.8a3.88,3.88,0,0,1-3.88-3.88V224.27A3.88,3.88,0,0,1,810.8,220.39Z"/>
                        </g>
                        <g id="_2-2" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="770" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M778.81,225.23h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H778.82a3.88,3.88,0,0,1-3.88-3.88V229.11A3.88,3.88,0,0,1,778.81,225.23Z"/>
                            <path className="cls-1"
                                  d="M774,220.39h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H774a3.88,3.88,0,0,1-3.88-3.88V224.27A3.88,3.88,0,0,1,774,220.39Z"/>
                        </g>
                        <g id="_1-2" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="733" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="738.11" y="225.23" width="25.2" height="25.19" rx="3.88"/>
                            <path className="cls-1"
                                  d="M737.13,220.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H737.14a3.88,3.88,0,0,1-3.88-3.88V224.26A3.87,3.87,0,0,1,737.13,220.39Z"/>
                        </g>
                        <g id="_4-2" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="733" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M742,188.42h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H742a3.88,3.88,0,0,1-3.88-3.88V192.29A3.88,3.88,0,0,1,742,188.42Z"/>
                            <path className="cls-1"
                                  d="M737.14,183.57h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H737.14a3.88,3.88,0,0,1-3.88-3.88V187.45a3.88,3.88,0,0,1,3.88-3.88Z"/>
                        </g>
                        <g id="_5-2" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="770" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M778.82,188.42h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H778.81a3.88,3.88,0,0,1-3.88-3.88V192.29A3.88,3.88,0,0,1,778.82,188.42Z"/>
                            <path className="cls-1"
                                  d="M774,183.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H774a3.87,3.87,0,0,1-3.87-3.87V187.45A3.88,3.88,0,0,1,774,183.57Z"/>
                        </g>
                        <g id="_6-2" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="806" y="183" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M815.65,188.42H833.1a3.87,3.87,0,0,1,3.87,3.87v17.44a3.87,3.87,0,0,1-3.87,3.87H815.65a3.88,3.88,0,0,1-3.88-3.88V192.29A3.88,3.88,0,0,1,815.65,188.42Z"/>
                            <path className="cls-1"
                                  d="M810.8,183.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H810.8a3.88,3.88,0,0,1-3.88-3.88V187.45A3.87,3.87,0,0,1,810.8,183.57Z"/>
                        </g>
                        <g id="_9" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="806" y="147" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M815.65,151.6H833.1a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H815.65a3.88,3.88,0,0,1-3.88-3.88V155.48A3.88,3.88,0,0,1,815.65,151.6Z"/>
                            <path className="cls-1"
                                  d="M810.8,146.76h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H810.8a3.88,3.88,0,0,1-3.88-3.88V150.63A3.87,3.87,0,0,1,810.8,146.76Z"/>
                        </g>
                        <g id="_7-2" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="733" y="147" width="35" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="738.11" y="151.6" width="25.2" height="25.19" rx="3.88"/>
                            <path className="cls-1"
                                  d="M737.14,146.76h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H737.14a3.88,3.88,0,0,1-3.88-3.88V150.63a3.88,3.88,0,0,1,3.88-3.88Z"/>
                        </g>
                        <g id="_8" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="770" y="147" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M778.82,151.6h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H778.81a3.87,3.87,0,0,1-3.87-3.87V155.48A3.88,3.88,0,0,1,778.82,151.6Z"/>
                            <path className="cls-1"
                                  d="M774,146.76h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H774a3.88,3.88,0,0,1-3.88-3.88V150.63A3.88,3.88,0,0,1,774,146.76Z"/>
                        </g>
                        <g id="_8-2" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="770" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="774.94" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                            <path className="cls-1"
                                  d="M774,109.94h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H774a3.88,3.88,0,0,1-3.88-3.88V113.82A3.87,3.87,0,0,1,774,109.94Z"/>
                        </g>
                        <g id="_9-2" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="806" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="811.77" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                            <path className="cls-1"
                                  d="M810.8,109.94h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H810.8a3.88,3.88,0,0,1-3.88-3.88V113.82A3.87,3.87,0,0,1,810.8,109.94Z"/>
                        </g>
                        <g id="numlk" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="733" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="738.11" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                            <path className="cls-1"
                                  d="M737.13,109.94h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H737.14a3.88,3.88,0,0,1-3.88-3.88V113.82A3.87,3.87,0,0,1,737.13,109.94Z"/>
                        </g>
                        <g id="tab" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="35" y="147" width="52" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M44.11,151.6H79a3.88,3.88,0,0,1,3.88,3.88v17.44A3.88,3.88,0,0,1,79,176.79H44.11a3.88,3.88,0,0,1-3.88-3.88V155.48A3.87,3.87,0,0,1,44.11,151.6Z"/>
                            <path className="cls-1"
                                  d="M39.26,146.76H83.85a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H39.26a3.88,3.88,0,0,1-3.88-3.88V150.63A3.87,3.87,0,0,1,39.26,146.76Z"/>
                        </g>
                        <g id="ins" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="605" y="110" width="35" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="610.16" y="114.78" width="25.2" height="25.19" rx="3.88"/>
                            <path className="cls-1"
                                  d="M609.19,109.94h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H609.19a3.87,3.87,0,0,1-3.87-3.87V113.82A3.88,3.88,0,0,1,609.19,109.94Z"/>
                        </g>
                        <g id="Spacebar" className='key-cursor'>
                            <rect id="hitbox-key-escape" className="hitbox" x="169" y="257" width="239" height="35"
                                  fill="transparent"/>
                            <rect id="rect-key-space" className="cls-1 key" x="169.15" y="257.21" width="238.44"
                                  height="34.88" rx="3.88"/>
                            <path id="path-key-space" className="cls-1 key"
                                  d="M177.87,262h221a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88h-221a3.88,3.88,0,0,1-3.88-3.88V265.92A3.87,3.87,0,0,1,177.87,262Z"/>
                            <text className="cls-2" transform="translate(268.98 270.91)">spacebar</text>
                        </g>
                        <g id="ArrowLeft" className='key-cursor'>
                            <rect id="hitbox-key-escape" className="hitbox" x="605" y="257" width="35" height="35"
                                  fill="transparent"/>
                            <rect id="rect-key-arrowleft" className="cls-1 key" x="605.32" y="257.21" width="34.89"
                                  height="34.88" rx="3.88"/>
                            <path id="path-key-arrowleft" className="cls-1 key"
                                  d="M614,262h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H614a3.87,3.87,0,0,1-3.87-3.87V265.93A3.88,3.88,0,0,1,614,262Z"/>
                            <text className="cls-2" transform="translate(620.17 270.91)">&lt;</text>
                        </g>
                        <g id="Enter" className='key-cursor'>
                            <rect id="hitbox-key-escape" className="hitbox" x="532" y="146" width="55" height="35"
                                  fill="transparent"/>
                            <rect id="hitbox-key-escape" className="hitbox" x="542" y="181" width="45" height="37"
                                  fill="transparent"/>
                            <path id="rect-key-enter" className="cls-1 key"
                                  d="M585.93,214.58v-64a3.71,3.71,0,0,0-3.88-3.87H535.53a3.72,3.72,0,0,0-3.88,3.87v27.13a3.72,3.72,0,0,0,3.88,3.87h1.94a3.72,3.72,0,0,1,3.87,3.88v29.07a3.72,3.72,0,0,0,3.88,3.87h36.83A3.71,3.71,0,0,0,585.93,214.58Z"/>
                            <path id="path-key-enter" className="cls-1 key"
                                  d="M577.21,151.6H540.38a3.72,3.72,0,0,0-3.88,3.88v17.44a3.71,3.71,0,0,0,3.88,3.87h1.93a3.72,3.72,0,0,1,3.88,3.88v29.06a3.73,3.73,0,0,0,3.88,3.88h27.14a3.73,3.73,0,0,0,3.88-3.88V155.48A3.73,3.73,0,0,0,577.21,151.6Z"/>
                            <text className="cls-2" transform="translate(549.1 160.48)">enter</text>
                        </g>
                        <g id="Escape" className='key-cursor' onClick={onEscapeClick}>
                            <rect id="hitbox-key-escape" className="hitbox" x="35" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path id="rect-key-escape" className="cls-1 key"
                                  d="M39.26,55.68H66.41a3.88,3.88,0,0,1,3.88,3.88V86.69a3.87,3.87,0,0,1-3.87,3.87H39.27a3.88,3.88,0,0,1-3.88-3.88V59.56A3.87,3.87,0,0,1,39.26,55.68Z"/>
                            <path id="path-key-escape" className="cls-1 key"
                                  d="M44.11,60.53H61.56a3.88,3.88,0,0,1,3.88,3.88V81.84a3.88,3.88,0,0,1-3.88,3.88H44.11a3.87,3.87,0,0,1-3.87-3.87V64.41A3.88,3.88,0,0,1,44.11,60.53Z"/>
                            <text className="cls-2" transform="translate(46.23 69.41)">esc</text>
                        </g>
                        <g id="NumPadEnter" className='key-cursor'>
                            <rect id="hitbox-key-escape" className="hitbox" x="843" y="220" width="35" height="72"
                                  fill="transparent"/>
                            <path id="path-key-numpadenter" className="cls-1 key"
                                  d="M852.48,225.23h17.45a3.87,3.87,0,0,1,3.87,3.87v54.25a3.88,3.88,0,0,1-3.88,3.88H852.48a3.87,3.87,0,0,1-3.87-3.87V229.11A3.88,3.88,0,0,1,852.48,225.23Z"/>
                            <rect id="rect-key-numpadenter" className="cls-1 key" x="843.76" y="220.39" width="34.89"
                                  height="71.7" rx="3.88"/>
                            <text className="cls-2" transform="translate(850.71 258)">enter</text>
                        </g>
                        <g id="ArrowRight" className='key-cursor'>
                            <rect id="hitbox-key-escape" className="hitbox" x="679" y="257" width="35" height="35"
                                  fill="transparent"/>
                            <rect id="rect-key-arrowright" className="cls-1 key" x="678.98" y="257.21" width="34.89"
                                  height="34.88" rx="3.88"/>
                            <path id="rect-key-arrowright" className="cls-1 key"
                                  d="M687.7,262h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H687.7a3.87,3.87,0,0,1-3.87-3.87V265.93A3.88,3.88,0,0,1,687.7,262Z"/>
                            <text className="cls-2" transform="matrix(-1, 0, 0, 1, 698.33, 270.91)">&lt;</text>
                        </g>
                        <g id="ArrowUp" className='key-cursor'>
                            <rect id="hitbox-key-escape" className="hitbox" x="642" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <path id="rect-key-arrowup" className="cls-1 key"
                                  d="M650.87,225.23h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H650.87a3.87,3.87,0,0,1-3.87-3.87V229.11A3.88,3.88,0,0,1,650.87,225.23Z"/>
                            <path id="path-key-arrowup" className="cls-1 key"
                                  d="M646,220.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H646a3.87,3.87,0,0,1-3.87-3.87V224.27A3.88,3.88,0,0,1,646,220.39Z"/>
                            <text className="cls-2" transform="matrix(0, 1, 1, 0, 661.54, 230.22)">&lt;</text>
                        </g>
                        <g id="ArrowDown" className='key-cursor'>
                            <rect id="hitbox-key-escape" className="hitbox" x="642" y="257" width="35" height="35"
                                  fill="transparent"/>
                            <path id="rect-key-arrowdown" className="cls-1 key"
                                  d="M650.87,262h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.87,3.87,0,0,1-3.87,3.87H650.87a3.88,3.88,0,0,1-3.88-3.88V265.93A3.88,3.88,0,0,1,650.87,262Z"/>
                            <rect id="rect-key-arrowdown" className="cls-1 key" x="642.15" y="257.21" width="34.89"
                                  height="34.88" rx="3.88"/>
                            <text className="cls-2" transform="translate(661.37 270.91) rotate(-90)">&lt;</text>
                        </g>
                        <g id="F1" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="111" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M114.87,55.68H142a3.88,3.88,0,0,1,3.88,3.88V86.69A3.87,3.87,0,0,1,142,90.56H114.87A3.88,3.88,0,0,1,111,86.69V59.56A3.87,3.87,0,0,1,114.87,55.68Z"/>
                            <path className="cls-1"
                                  d="M119.71,60.53h17.45A3.87,3.87,0,0,1,141,64.4V81.84a3.88,3.88,0,0,1-3.88,3.88H119.71a3.88,3.88,0,0,1-3.88-3.88V64.4A3.88,3.88,0,0,1,119.71,60.53Z"/>
                        </g>
                        <g id="F2" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="148" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M156.55,60.53H174a3.88,3.88,0,0,1,3.88,3.88V81.84A3.88,3.88,0,0,1,174,85.72H156.54a3.87,3.87,0,0,1-3.87-3.87V64.41A3.88,3.88,0,0,1,156.55,60.53Z"/>
                            <path className="cls-1"
                                  d="M151.7,55.68h27.14a3.87,3.87,0,0,1,3.87,3.87V86.69a3.88,3.88,0,0,1-3.88,3.88H151.7a3.88,3.88,0,0,1-3.88-3.88V59.56A3.87,3.87,0,0,1,151.7,55.68Z"/>
                        </g>
                        <g id="F3" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="185" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M188.53,55.68h27.14a3.88,3.88,0,0,1,3.88,3.88V86.69a3.87,3.87,0,0,1-3.87,3.87H188.53a3.88,3.88,0,0,1-3.88-3.88V59.56A3.87,3.87,0,0,1,188.53,55.68Z"/>
                            <path className="cls-1"
                                  d="M193.38,60.53h17.45a3.88,3.88,0,0,1,3.88,3.88V81.84a3.88,3.88,0,0,1-3.88,3.88H193.38a3.87,3.87,0,0,1-3.87-3.87V64.41A3.88,3.88,0,0,1,193.38,60.53Z"/>
                        </g>
                        <g id="F4" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="222" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M225.36,55.68H252.5a3.88,3.88,0,0,1,3.88,3.88V86.69a3.87,3.87,0,0,1-3.87,3.87H225.36a3.88,3.88,0,0,1-3.88-3.88V59.56A3.88,3.88,0,0,1,225.36,55.68Z"/>
                            <path className="cls-1"
                                  d="M230.21,60.53h17.45a3.88,3.88,0,0,1,3.88,3.88V81.84a3.88,3.88,0,0,1-3.88,3.88H230.21a3.87,3.87,0,0,1-3.87-3.87V64.4A3.87,3.87,0,0,1,230.21,60.53Z"/>
                        </g>
                        <g id="F5" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="275" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M284.49,60.53h17.45a3.87,3.87,0,0,1,3.87,3.87V81.84a3.88,3.88,0,0,1-3.88,3.88H284.49a3.88,3.88,0,0,1-3.88-3.88V64.41A3.88,3.88,0,0,1,284.49,60.53Z"/>
                            <path className="cls-1"
                                  d="M279.64,55.68h27.14a3.88,3.88,0,0,1,3.88,3.88V86.69a3.87,3.87,0,0,1-3.87,3.87H279.64a3.88,3.88,0,0,1-3.88-3.88V59.56A3.87,3.87,0,0,1,279.64,55.68Z"/>
                        </g>
                        <g id="F6" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="312" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M316.47,55.68h27.14a3.88,3.88,0,0,1,3.88,3.88V86.69a3.87,3.87,0,0,1-3.87,3.87H316.48a3.88,3.88,0,0,1-3.88-3.88V59.56A3.87,3.87,0,0,1,316.47,55.68Z"/>
                            <path className="cls-1"
                                  d="M321.32,60.53h17.45a3.88,3.88,0,0,1,3.88,3.88V81.84a3.88,3.88,0,0,1-3.88,3.88H321.32a3.87,3.87,0,0,1-3.87-3.87V64.41A3.88,3.88,0,0,1,321.32,60.53Z"/>
                        </g>
                        <g id="F7" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="349" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M358.15,60.53H375.6a3.88,3.88,0,0,1,3.88,3.88V81.84a3.88,3.88,0,0,1-3.88,3.88H358.15a3.87,3.87,0,0,1-3.87-3.87V64.41A3.88,3.88,0,0,1,358.15,60.53Z"/>
                            <path className="cls-1"
                                  d="M353.31,55.68h27.14a3.88,3.88,0,0,1,3.88,3.88V86.69a3.87,3.87,0,0,1-3.87,3.87H353.31a3.88,3.88,0,0,1-3.88-3.88V59.56A3.87,3.87,0,0,1,353.31,55.68Z"/>
                        </g>
                        <g id="F8" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="386" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M395,60.53h17.45a3.88,3.88,0,0,1,3.88,3.88V81.84a3.88,3.88,0,0,1-3.88,3.88H395a3.87,3.87,0,0,1-3.87-3.87V64.41A3.88,3.88,0,0,1,395,60.53Z"/>
                            <path className="cls-1"
                                  d="M390.14,55.68h27.14a3.87,3.87,0,0,1,3.87,3.87V86.69a3.88,3.88,0,0,1-3.88,3.88H390.14a3.88,3.88,0,0,1-3.88-3.88V59.56A3.87,3.87,0,0,1,390.14,55.68Z"/>
                        </g>
                        <g id="F9" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="440" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <rect className="cls-1" x="445.39" y="60.53" width="25.2" height="25.19" rx="3.88"/>
                            <path className="cls-1"
                                  d="M444.42,55.68h27.14a3.88,3.88,0,0,1,3.88,3.88V86.69a3.87,3.87,0,0,1-3.87,3.87H444.42a3.88,3.88,0,0,1-3.88-3.88V59.56A3.88,3.88,0,0,1,444.42,55.68Z"/>
                        </g>
                        <g id="F10" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="477" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M481.25,55.68h27.14a3.88,3.88,0,0,1,3.88,3.88V86.69a3.87,3.87,0,0,1-3.87,3.87H481.25a3.87,3.87,0,0,1-3.87-3.87V59.56A3.87,3.87,0,0,1,481.25,55.68Z"/>
                            <path className="cls-1"
                                  d="M486.1,60.53h17.45a3.88,3.88,0,0,1,3.88,3.88V81.84a3.88,3.88,0,0,1-3.88,3.88H486.09a3.87,3.87,0,0,1-3.87-3.87V64.41A3.88,3.88,0,0,1,486.1,60.53Z"/>
                        </g>
                        <g id="F11" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="514" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M522.93,60.53h17.45a3.88,3.88,0,0,1,3.88,3.88V81.84a3.88,3.88,0,0,1-3.88,3.88H522.93a3.87,3.87,0,0,1-3.87-3.87V64.41A3.88,3.88,0,0,1,522.93,60.53Z"/>
                            <path className="cls-1"
                                  d="M518.08,55.68h27.14a3.88,3.88,0,0,1,3.88,3.88V86.69a3.87,3.87,0,0,1-3.87,3.87H518.08a3.88,3.88,0,0,1-3.88-3.88V59.56A3.87,3.87,0,0,1,518.08,55.68Z"/>
                        </g>
                        <g id="F12" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="551" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M559.76,60.53h17.45a3.88,3.88,0,0,1,3.88,3.88V81.84a3.88,3.88,0,0,1-3.88,3.88H559.76a3.87,3.87,0,0,1-3.87-3.87V64.41A3.88,3.88,0,0,1,559.76,60.53Z"/>
                            <path className="cls-1"
                                  d="M554.91,55.68h27.14a3.88,3.88,0,0,1,3.88,3.88V86.69a3.87,3.87,0,0,1-3.87,3.87H554.92A3.88,3.88,0,0,1,551,86.69V59.56A3.87,3.87,0,0,1,554.91,55.68Z"/>
                        </g>
                        <g id="PrtScSysRq" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="605" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M609.19,55.68h27.14a3.88,3.88,0,0,1,3.88,3.88V86.69a3.87,3.87,0,0,1-3.87,3.87H609.19a3.88,3.88,0,0,1-3.88-3.88V59.56A3.87,3.87,0,0,1,609.19,55.68Z"/>
                            <path className="cls-1"
                                  d="M614,60.53h17.45a3.88,3.88,0,0,1,3.88,3.88V81.84a3.87,3.87,0,0,1-3.87,3.87H614a3.88,3.88,0,0,1-3.88-3.88V64.4A3.88,3.88,0,0,1,614,60.53Z"/>
                        </g>
                        <g id="ScrLk" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="642" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M646,55.68h27.14A3.88,3.88,0,0,1,677,59.56V86.69a3.87,3.87,0,0,1-3.87,3.87H646a3.87,3.87,0,0,1-3.87-3.87V59.56A3.87,3.87,0,0,1,646,55.68Z"/>
                            <path className="cls-1"
                                  d="M650.87,60.53h17.45a3.88,3.88,0,0,1,3.88,3.88V81.84a3.87,3.87,0,0,1-3.87,3.87H650.87A3.88,3.88,0,0,1,647,81.84V64.4A3.88,3.88,0,0,1,650.87,60.53Z"/>
                        </g>
                        <g id="PauseBreak" className='g-key'>
                            <rect id="hitbox-key-escape" className="hitbox" x="679" y="56" width="35" height="35"
                                  fill="transparent"/>
                            <path className="cls-1"
                                  d="M687.7,60.53h17.45A3.88,3.88,0,0,1,709,64.4V81.84a3.88,3.88,0,0,1-3.88,3.88H687.7a3.87,3.87,0,0,1-3.87-3.87V64.41A3.88,3.88,0,0,1,687.7,60.53Z"/>
                            <path className="cls-1"
                                  d="M682.86,55.68H710a3.87,3.87,0,0,1,3.87,3.87V86.69A3.88,3.88,0,0,1,710,90.56H682.86A3.87,3.87,0,0,1,679,86.69V59.56A3.88,3.88,0,0,1,682.86,55.68Z"/>
                        </g>
                        <g id="M" className='key-cursor'>
                            <rect id="hitbox-key-escape" className="hitbox" x="338" y="220" width="35" height="35"
                                  fill="transparent"/>
                            <g id="m-2">
                                <path id="rect-key-keym" className="cls-1 key"
                                      d="M346.52,225.23H364a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H346.52a3.88,3.88,0,0,1-3.88-3.88V229.11A3.88,3.88,0,0,1,346.52,225.23Z"/>
                                <path id="path-key-keym" className="cls-1 key"
                                      d="M341.67,220.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.12a3.88,3.88,0,0,1-3.88,3.88H341.68a3.88,3.88,0,0,1-3.88-3.88V224.26A3.87,3.87,0,0,1,341.67,220.39Z"/>
                            </g>
                            <text className="cls-3" transform="translate(352.34 236.13)">M</text>
                        </g>
                        <g id="SelectionKeysHint" className="hint">
                            <circle className="cls-4" cx="563.43" cy="181.63" r="4.12" fill="white"/>
                            <polyline className="cls-1 key" points="472.53 349.45 563.43 349.45 563.43 181.63"/>
                            <circle className="cls-4" cx="284.25" cy="278.76" r="4.12" fill="white"/>
                            <polyline className="cls-1 key" points="284.25 278.76 284.25 349.45 342.65 349.45"/>
                            <text className="cls-5" transform="translate(357.3 352.04)">Selection keys</text>
                            <circle className="cls-4" cx="861.2" cy="270.91" r="4.12" fill="white"/>
                            <polyline className="cls-1 key" points="861.2 270.92 861.2 349.45 563.43 349.45"/>
                        </g>
                        <g id="OpenCloseKeysHintMenu" className="hint">
                            <circle className="cls-4" cx="52.59" cy="77.24" r="4.12" fill="white"/>
                            <polyline className="cls-1 key" points="52.59 77.24 89.67 77.24 89.67 21.92"/>
                            <text className="cls-5" transform="translate(15 9.55)">Open/Close hint menu</text>
                        </g>
                        <g id="OpenCloseWebsiteMap" className="hint">
                            <circle className="cls-4" cx="355.25" cy="241.95" r="4.12" fill="white"/>
                            <line className="cls-1 key" x1="355.25" y1="241.95" x2="355.25" y2="332.27"/>
                            <text className="cls-5" transform="translate(276.58 345.26)">Open/Close website map</text>
                        </g>
                        <g id="NavigationKeys" className="hint">
                            <circle id="Point" className="cls-4" cx="659.37" cy="277.21" r="4.12" fill="white"/>
                            <line className="cls-1 key" x1="659.37" y1="277.21" x2="659.37" y2="337.45"/>
                            <text id="Text" className="cls-5" transform="translate(606.06 351.02)">Navigation keys
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        </>
    );
}