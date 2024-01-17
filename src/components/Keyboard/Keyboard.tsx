import React from "react";
import './KeyboardStyle.css';

export const Keyboard: React.FC<{ onEscapeClick: () => void }> = ({ onEscapeClick }) => {
    return (
        <svg className="keyboard" xmlns="http://www.w3.org/2000/svg" viewBox="-10 -20 900 300">
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
                <g id="Layer_1-2" fill="grey">
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="0" y="165" width="43" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M4.37,165.2h34.9a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H4.38A3.88,3.88,0,0,1,.5,196.21V169.08A3.87,3.87,0,0,1,4.37,165.2Z"/>
                        <path className="cls-1"
                              d="M9.22,170h25.2a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H9.22a3.88,3.88,0,0,1-3.88-3.88V173.92A3.88,3.88,0,0,1,9.22,170Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="45" y="202" width="43" height="35" fill="transparent" />
                        <rect className="cls-1" x="45.09" y="202.02" width="42.65" height="34.88" rx="3.88"/>
                        <path className="cls-1"
                              d="M53.81,206.86H79a3.88,3.88,0,0,1,3.88,3.88v17.44A3.88,3.88,0,0,1,79,232.05H53.81a3.87,3.87,0,0,1-3.87-3.87V210.74A3.88,3.88,0,0,1,53.81,206.86Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="90" y="202" width="43" height="35" fill="transparent" />
                        <rect className="cls-1" x="89.67" y="202.02" width="42.65" height="34.88" rx="3.88"/>
                        <path className="cls-1"
                              d="M98.39,206.86h25.2a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H98.4a3.88,3.88,0,0,1-3.88-3.88V210.74A3.88,3.88,0,0,1,98.39,206.86Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="375" y="202" width="43" height="35" fill="transparent" />
                        <rect className="cls-1" x="374.64" y="202.02" width="42.65" height="34.88" rx="3.88"/>
                        <path className="cls-1"
                              d="M383.36,206.86h25.2a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88h-25.2a3.88,3.88,0,0,1-3.88-3.88V210.74A3.87,3.87,0,0,1,383.36,206.86Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="420" y="202" width="43" height="35" fill="transparent" />
                        <rect className="cls-1" x="419.22" y="202.02" width="42.65" height="34.88" rx="3.88"/>
                        <path className="cls-1"
                              d="M427.95,206.86h25.2a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88h-25.2a3.87,3.87,0,0,1-3.87-3.87V210.74A3.88,3.88,0,0,1,427.95,206.86Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="463" y="202" width="43" height="35" fill="transparent" />
                        <rect className="cls-1" x="463.81" y="202.02" width="42.65" height="34.88" rx="3.88"/>
                        <path className="cls-1"
                              d="M472.53,206.86h25.2a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88h-25.2a3.87,3.87,0,0,1-3.87-3.87V210.74A3.88,3.88,0,0,1,472.53,206.86Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="507" y="202" width="43" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M517.12,206.86h25.2a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88h-25.2a3.88,3.88,0,0,1-3.88-3.88V210.74A3.88,3.88,0,0,1,517.12,206.86Z"/>
                        <rect className="cls-1" x="508.4" y="202.02" width="42.65" height="34.88" rx="3.88"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="82" y="165" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M90.64,170h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H90.64a3.87,3.87,0,0,1-3.87-3.87V173.93A3.88,3.88,0,0,1,90.64,170Z"/>
                        <path className="cls-1"
                              d="M85.79,165.2h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H85.79a3.88,3.88,0,0,1-3.88-3.88V169.08A3.88,3.88,0,0,1,85.79,165.2Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="118" y="165" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M127.47,170h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H127.47a3.88,3.88,0,0,1-3.88-3.88V173.92A3.87,3.87,0,0,1,127.47,170Z"/>
                        <path className="cls-1"
                              d="M122.63,165.2h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H122.63a3.88,3.88,0,0,1-3.88-3.88V169.08A3.88,3.88,0,0,1,122.63,165.2Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="155" y="165" width="35" height="35" fill="transparent" />
                        <rect className="cls-1" x="160.43" y="170.05" width="25.2" height="25.19" rx="3.88"/>
                        <path className="cls-1"
                              d="M159.46,165.2H186.6a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H159.46a3.88,3.88,0,0,1-3.88-3.88V169.08A3.88,3.88,0,0,1,159.46,165.2Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="193" y="165" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M196.29,165.2h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H196.29a3.88,3.88,0,0,1-3.88-3.88V169.08A3.88,3.88,0,0,1,196.29,165.2Z"/>
                        <path className="cls-1"
                              d="M201.14,170h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H201.14a3.88,3.88,0,0,1-3.88-3.88V173.93A3.88,3.88,0,0,1,201.14,170Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="229" y="165" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M238,170h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H238a3.88,3.88,0,0,1-3.88-3.88V173.92A3.88,3.88,0,0,1,238,170Z"/>
                        <path className="cls-1"
                              d="M233.12,165.2h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H233.12a3.88,3.88,0,0,1-3.88-3.88V169.08A3.87,3.87,0,0,1,233.12,165.2Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="266" y="165" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M274.8,170h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H274.8a3.88,3.88,0,0,1-3.88-3.88V173.93A3.88,3.88,0,0,1,274.8,170Z"/>
                        <path className="cls-1"
                              d="M270,165.2H297.1a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H270a3.88,3.88,0,0,1-3.88-3.88V169.08A3.87,3.87,0,0,1,270,165.2Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="303" y="165" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M311.63,170h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H311.63a3.88,3.88,0,0,1-3.88-3.88V173.92A3.88,3.88,0,0,1,311.63,170Z"/>
                        <path className="cls-1"
                              d="M306.79,165.2h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H306.79a3.88,3.88,0,0,1-3.88-3.88V169.08A3.87,3.87,0,0,1,306.79,165.2Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="339" y="165" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M348.46,170h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H348.47a3.88,3.88,0,0,1-3.88-3.88V173.92A3.88,3.88,0,0,1,348.46,170Z"/>
                        <path className="cls-1"
                              d="M343.62,165.2h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H343.62a3.88,3.88,0,0,1-3.88-3.88V169.08A3.87,3.87,0,0,1,343.62,165.2Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="376" y="165" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M385.3,170h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H385.3a3.88,3.88,0,0,1-3.88-3.88V173.93A3.88,3.88,0,0,1,385.3,170Z"/>
                        <path className="cls-1"
                              d="M380.45,165.2h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H380.45a3.88,3.88,0,0,1-3.88-3.88V169.08A3.87,3.87,0,0,1,380.45,165.2Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="414" y="165" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M422.13,170h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H422.13a3.87,3.87,0,0,1-3.87-3.87V173.93A3.88,3.88,0,0,1,422.13,170Z"/>
                        <path className="cls-1"
                              d="M417.28,165.2h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H417.28a3.88,3.88,0,0,1-3.88-3.88V169.08A3.88,3.88,0,0,1,417.28,165.2Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="450" y="165" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M459,170h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H459a3.87,3.87,0,0,1-3.87-3.87V173.93A3.88,3.88,0,0,1,459,170Z"/>
                        <path className="cls-1"
                              d="M454.11,165.2h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H454.12a3.88,3.88,0,0,1-3.88-3.88V169.08A3.87,3.87,0,0,1,454.11,165.2Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="64" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M73.19,133.23H90.64a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H73.19a3.87,3.87,0,0,1-3.87-3.87V137.11A3.88,3.88,0,0,1,73.19,133.23Z"/>
                        <path className="cls-1"
                              d="M68.35,128.39H95.49a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H68.35a3.88,3.88,0,0,1-3.88-3.88V132.26A3.88,3.88,0,0,1,68.35,128.39Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="100" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M110,133.23h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H110a3.88,3.88,0,0,1-3.88-3.88V137.11A3.87,3.87,0,0,1,110,133.23Z"/>
                        <path className="cls-1"
                              d="M105.18,128.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H105.18a3.88,3.88,0,0,1-3.88-3.88V132.26A3.88,3.88,0,0,1,105.18,128.39Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="138" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M146.86,133.23h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.87,3.87,0,0,1-3.87,3.87H146.86a3.88,3.88,0,0,1-3.88-3.88V137.11A3.88,3.88,0,0,1,146.86,133.23Z"/>
                        <path className="cls-1"
                              d="M142,128.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H142a3.88,3.88,0,0,1-3.88-3.88V132.26A3.88,3.88,0,0,1,142,128.39Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="175" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M178.84,128.39H206a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H178.84a3.88,3.88,0,0,1-3.88-3.88V132.26A3.88,3.88,0,0,1,178.84,128.39Z"/>
                        <path className="cls-1"
                              d="M183.69,133.23h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H183.69a3.88,3.88,0,0,1-3.88-3.88V137.11A3.88,3.88,0,0,1,183.69,133.23Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="212" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M220.52,133.23H238a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H220.52a3.88,3.88,0,0,1-3.88-3.88V137.11A3.88,3.88,0,0,1,220.52,133.23Z"/>
                        <path className="cls-1"
                              d="M215.67,128.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H215.68a3.88,3.88,0,0,1-3.88-3.88V132.26A3.87,3.87,0,0,1,215.67,128.39Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="248" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M257.36,133.23H274.8a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H257.35a3.88,3.88,0,0,1-3.88-3.88V137.11A3.88,3.88,0,0,1,257.36,133.23Z"/>
                        <path className="cls-1"
                              d="M252.51,128.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.12a3.88,3.88,0,0,1-3.88,3.88H252.51a3.88,3.88,0,0,1-3.88-3.88V132.26A3.87,3.87,0,0,1,252.51,128.39Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="285" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M294.19,133.23h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H294.19a3.88,3.88,0,0,1-3.88-3.88V137.11A3.88,3.88,0,0,1,294.19,133.23Z"/>
                        <path className="cls-1"
                              d="M289.34,128.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H289.34a3.88,3.88,0,0,1-3.88-3.88V132.26A3.87,3.87,0,0,1,289.34,128.39Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="322" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M331,133.23h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H331a3.88,3.88,0,0,1-3.88-3.88V137.11A3.88,3.88,0,0,1,331,133.23Z"/>
                        <path className="cls-1"
                              d="M326.17,128.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H326.17a3.88,3.88,0,0,1-3.88-3.88V132.26A3.87,3.87,0,0,1,326.17,128.39Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="359" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M367.85,133.23H385.3a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H367.85a3.88,3.88,0,0,1-3.88-3.88V137.11A3.88,3.88,0,0,1,367.85,133.23Z"/>
                        <path className="cls-1"
                              d="M363,128.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H363a3.88,3.88,0,0,1-3.88-3.88V132.26A3.87,3.87,0,0,1,363,128.39Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="396" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M404.68,133.23h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H404.68a3.87,3.87,0,0,1-3.87-3.87V137.11A3.88,3.88,0,0,1,404.68,133.23Z"/>
                        <path className="cls-1"
                              d="M399.84,128.39H427a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H399.84a3.88,3.88,0,0,1-3.88-3.88V132.27A3.88,3.88,0,0,1,399.84,128.39Z"/>
                    </g>
                    <g className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="433" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M441.51,133.23H459a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H441.52a3.88,3.88,0,0,1-3.88-3.88V137.11A3.87,3.87,0,0,1,441.51,133.23Z"/>
                        <path className="cls-1"
                              d="M436.67,128.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H436.67a3.88,3.88,0,0,1-3.88-3.88V132.26A3.87,3.87,0,0,1,436.67,128.39Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="469" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M478.35,133.23h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H478.35a3.88,3.88,0,0,1-3.88-3.88V137.11A3.88,3.88,0,0,1,478.35,133.23Z"/>
                        <path className="cls-1"
                              d="M473.5,128.39h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H473.5a3.88,3.88,0,0,1-3.88-3.88V132.26A3.88,3.88,0,0,1,473.5,128.39Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="55" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M63.5,96.42H80.95a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H63.5a3.87,3.87,0,0,1-3.87-3.87V100.29A3.88,3.88,0,0,1,63.5,96.42Z"/>
                        <path className="cls-1"
                              d="M58.65,91.57H85.8a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H58.66a3.88,3.88,0,0,1-3.88-3.88V95.45A3.88,3.88,0,0,1,58.65,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="92" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M100.33,96.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H100.33a3.88,3.88,0,0,1-3.88-3.88V100.29A3.87,3.87,0,0,1,100.33,96.42Z"/>
                        <path className="cls-1"
                              d="M95.49,91.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H95.49a3.88,3.88,0,0,1-3.88-3.88V95.45A3.88,3.88,0,0,1,95.49,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="129" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M137.17,96.42h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.87,3.87,0,0,1-3.87,3.87H137.17a3.88,3.88,0,0,1-3.88-3.88V100.29A3.88,3.88,0,0,1,137.17,96.42Z"/>
                        <path className="cls-1"
                              d="M132.32,91.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H132.32a3.88,3.88,0,0,1-3.88-3.88V95.45A3.88,3.88,0,0,1,132.32,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="165" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M169.15,91.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.87,3.87,0,0,1-3.87,3.87H169.15a3.88,3.88,0,0,1-3.88-3.88V95.45A3.88,3.88,0,0,1,169.15,91.57Z"/>
                        <path className="cls-1"
                              d="M174,96.42h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H174a3.88,3.88,0,0,1-3.88-3.88V100.29A3.88,3.88,0,0,1,174,96.42Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="202" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M210.83,96.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H210.83a3.88,3.88,0,0,1-3.88-3.88V100.29A3.88,3.88,0,0,1,210.83,96.42Z"/>
                        <path className="cls-1"
                              d="M206,91.57h27.14A3.88,3.88,0,0,1,237,95.45v27.13a3.88,3.88,0,0,1-3.88,3.88H206a3.88,3.88,0,0,1-3.88-3.88V95.45A3.87,3.87,0,0,1,206,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="239" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M247.66,96.42h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.87,3.87,0,0,1-3.87,3.87H247.66a3.88,3.88,0,0,1-3.88-3.88V100.29A3.88,3.88,0,0,1,247.66,96.42Z"/>
                        <path className="cls-1"
                              d="M242.81,91.57H270a3.88,3.88,0,0,1,3.88,3.88v27.12a3.88,3.88,0,0,1-3.88,3.88H242.82a3.88,3.88,0,0,1-3.88-3.88V95.45A3.87,3.87,0,0,1,242.81,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="276" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M284.49,96.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H284.49a3.88,3.88,0,0,1-3.88-3.88V100.29A3.88,3.88,0,0,1,284.49,96.42Z"/>
                        <path className="cls-1"
                              d="M279.65,91.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H279.65a3.88,3.88,0,0,1-3.88-3.88V95.45A3.87,3.87,0,0,1,279.65,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="312" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M321.33,96.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H321.33a3.88,3.88,0,0,1-3.88-3.88V100.29A3.88,3.88,0,0,1,321.33,96.42Z"/>
                        <path className="cls-1"
                              d="M316.48,91.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H316.48a3.88,3.88,0,0,1-3.88-3.88V95.45A3.87,3.87,0,0,1,316.48,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="350" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M358.16,96.42h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H358.16a3.88,3.88,0,0,1-3.88-3.88V100.29A3.88,3.88,0,0,1,358.16,96.42Z"/>
                        <path className="cls-1"
                              d="M353.31,91.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H353.31a3.88,3.88,0,0,1-3.88-3.88V95.45A3.87,3.87,0,0,1,353.31,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="386" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M395,96.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H395a3.87,3.87,0,0,1-3.87-3.87V100.29A3.88,3.88,0,0,1,395,96.42Z"/>
                        <path className="cls-1"
                              d="M390.14,91.57h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H390.14a3.88,3.88,0,0,1-3.88-3.88V95.45A3.88,3.88,0,0,1,390.14,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="424" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M431.82,96.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H431.82a3.88,3.88,0,0,1-3.88-3.88V100.29A3.87,3.87,0,0,1,431.82,96.42Z"/>
                        <path className="cls-1"
                              d="M427,91.57h27.14A3.88,3.88,0,0,1,458,95.45v27.13a3.88,3.88,0,0,1-3.88,3.88H427a3.88,3.88,0,0,1-3.88-3.88V95.45A3.87,3.87,0,0,1,427,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="460" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M468.65,96.42H486.1a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H468.66a3.88,3.88,0,0,1-3.88-3.88V100.29A3.88,3.88,0,0,1,468.65,96.42Z"/>
                        <path className="cls-1"
                              d="M463.81,91.57H491a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H463.81a3.88,3.88,0,0,1-3.88-3.88V95.45A3.88,3.88,0,0,1,463.81,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="45" y="165" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M49,165.2H76.1A3.88,3.88,0,0,1,80,169.08v27.13a3.88,3.88,0,0,1-3.88,3.88H49a3.88,3.88,0,0,1-3.88-3.88V169.08A3.87,3.87,0,0,1,49,165.2Z"/>
                        <path className="cls-1"
                              d="M53.81,170H71.26a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H53.81a3.88,3.88,0,0,1-3.88-3.88V173.92A3.88,3.88,0,0,1,53.81,170Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="480" y="54" width="70" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M483.19,54.76h64A3.88,3.88,0,0,1,551,58.63V85.76a3.87,3.87,0,0,1-3.87,3.87h-64a3.88,3.88,0,0,1-3.88-3.88V58.63A3.88,3.88,0,0,1,483.19,54.76Z"/>
                        <rect className="cls-1" x="484.16" y="59.6" width="62.03" height="25.19" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="442" y="54" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M446.36,54.76H473.5a3.87,3.87,0,0,1,3.87,3.87V85.76a3.88,3.88,0,0,1-3.88,3.88H446.36a3.87,3.87,0,0,1-3.87-3.87V58.63A3.88,3.88,0,0,1,446.36,54.76Z"/>
                        <rect className="cls-1" x="447.33" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="405" y="54" width="35" height="35" fill="transparent" />
                        <rect className="cls-1" x="410.5" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                        <path className="cls-1"
                              d="M409.53,54.76h27.14a3.88,3.88,0,0,1,3.88,3.88V85.76a3.87,3.87,0,0,1-3.87,3.87H409.53a3.88,3.88,0,0,1-3.88-3.88V58.63A3.87,3.87,0,0,1,409.53,54.76Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="368" y="54" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M372.7,54.76h27.14a3.87,3.87,0,0,1,3.87,3.87V85.76a3.88,3.88,0,0,1-3.88,3.88H372.7a3.87,3.87,0,0,1-3.87-3.87V58.63A3.88,3.88,0,0,1,372.7,54.76Z"/>
                        <rect className="cls-1" x="373.67" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="332" y="54" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M335.86,54.76H363a3.88,3.88,0,0,1,3.88,3.88V85.76A3.87,3.87,0,0,1,363,89.63H335.87A3.88,3.88,0,0,1,332,85.76V58.63A3.87,3.87,0,0,1,335.86,54.76Z"/>
                        <rect className="cls-1" x="336.84" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="295" y="54" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M299,54.76h27.14a3.88,3.88,0,0,1,3.88,3.88V85.76a3.87,3.87,0,0,1-3.87,3.87H299a3.88,3.88,0,0,1-3.88-3.88V58.63A3.87,3.87,0,0,1,299,54.76Z"/>
                        <rect className="cls-1" x="300" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="258" y="54" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M262.2,54.76h27.14a3.88,3.88,0,0,1,3.88,3.88V85.76a3.87,3.87,0,0,1-3.87,3.87H262.2a3.88,3.88,0,0,1-3.88-3.88V58.63A3.87,3.87,0,0,1,262.2,54.76Z"/>
                        <rect className="cls-1" x="263.17" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="221" y="54" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M225.37,54.76h27.14a3.88,3.88,0,0,1,3.88,3.88V85.76a3.87,3.87,0,0,1-3.87,3.87H225.37a3.88,3.88,0,0,1-3.88-3.88V58.63A3.87,3.87,0,0,1,225.37,54.76Z"/>
                        <rect className="cls-1" x="226.34" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="184" y="54" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M188.54,54.76h27.14a3.88,3.88,0,0,1,3.88,3.88V85.76a3.87,3.87,0,0,1-3.87,3.87H188.54a3.88,3.88,0,0,1-3.88-3.88V58.63A3.87,3.87,0,0,1,188.54,54.76Z"/>
                        <rect className="cls-1" x="189.51" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="487" y="165" width="65" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M490.95,165.2h56.22a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H490.95a3.87,3.87,0,0,1-3.87-3.87V169.08A3.88,3.88,0,0,1,490.95,165.2Z"/>
                        <path className="cls-1"
                              d="M495.79,170h46.53a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H495.79a3.88,3.88,0,0,1-3.88-3.88V173.92A3.88,3.88,0,0,1,495.79,170Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="0" y="128" width="63" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M4.37,128.39H58.66a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H4.38A3.88,3.88,0,0,1,.5,159.39V132.26a3.87,3.87,0,0,1,3.87-3.87Z"/>
                        <path className="cls-1"
                              d="M9.22,133.23H53.81a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H9.22a3.88,3.88,0,0,1-3.88-3.88V137.11A3.88,3.88,0,0,1,9.22,133.23Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="0" y="202" width="43" height="35" fill="transparent" />
                        <rect className="cls-1" x="0.5" y="202.02" width="42.65" height="34.88" rx="3.88"/>
                        <path className="cls-1"
                              d="M9.22,206.86h25.2a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H9.22a3.87,3.87,0,0,1-3.87-3.87V210.74A3.88,3.88,0,0,1,9.22,206.86Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="147" y="54" width="35" height="35" fill="transparent" />
                        <rect className="cls-1" x="152.67" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                        <path className="cls-1"
                              d="M151.7,54.76h27.14a3.88,3.88,0,0,1,3.88,3.88V85.76a3.87,3.87,0,0,1-3.87,3.87H151.71a3.88,3.88,0,0,1-3.88-3.88V58.63A3.87,3.87,0,0,1,151.7,54.76Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="111" y="54" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M114.87,54.76H142a3.88,3.88,0,0,1,3.88,3.88V85.76A3.87,3.87,0,0,1,142,89.63H114.87A3.88,3.88,0,0,1,111,85.76V58.63A3.87,3.87,0,0,1,114.87,54.76Z"/>
                        <rect className="cls-1" x="115.84" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="74" y="54" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M78,54.76h27.14a3.88,3.88,0,0,1,3.88,3.88V85.76a3.87,3.87,0,0,1-3.87,3.87H78a3.88,3.88,0,0,1-3.88-3.88V58.63A3.87,3.87,0,0,1,78,54.76Z"/>
                        <rect className="cls-1" x="79.01" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="37" y="54" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M41.21,54.76H68.35a3.88,3.88,0,0,1,3.88,3.88V85.76a3.87,3.87,0,0,1-3.87,3.87H41.21a3.88,3.88,0,0,1-3.88-3.88V58.63A3.87,3.87,0,0,1,41.21,54.76Z"/>
                        <rect className="cls-1" x="42.18" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="0" y="54" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M4.38,54.76H31.52a3.87,3.87,0,0,1,3.87,3.87V85.76a3.87,3.87,0,0,1-3.87,3.87H4.37A3.87,3.87,0,0,1,.5,85.76V58.63A3.88,3.88,0,0,1,4.38,54.76Z"/>
                        <rect className="cls-1" x="5.35" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="644" y="54" width="35" height="35" fill="transparent" />
                        <rect className="cls-1" x="648.94" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                        <path className="cls-1"
                              d="M648,54.76h27.14A3.87,3.87,0,0,1,679,58.63V85.76a3.88,3.88,0,0,1-3.88,3.88H648a3.88,3.88,0,0,1-3.88-3.88V58.63A3.88,3.88,0,0,1,648,54.76Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="607" y="54" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M611.13,54.76h27.14a3.88,3.88,0,0,1,3.88,3.88V85.76a3.87,3.87,0,0,1-3.87,3.87H611.14a3.88,3.88,0,0,1-3.88-3.88V58.63A3.87,3.87,0,0,1,611.13,54.76Z"/>
                        <rect className="cls-1" x="612.11" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="644" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M652.81,96.42h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H652.82a3.88,3.88,0,0,1-3.88-3.88V100.29A3.87,3.87,0,0,1,652.81,96.42Z"/>
                        <path className="cls-1"
                              d="M648,91.57h27.14A3.88,3.88,0,0,1,679,95.45v27.12a3.88,3.88,0,0,1-3.88,3.88H648a3.88,3.88,0,0,1-3.88-3.88V95.45A3.87,3.87,0,0,1,648,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="607" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M616,96.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H616a3.87,3.87,0,0,1-3.87-3.87V100.29A3.87,3.87,0,0,1,616,96.42Z"/>
                        <path className="cls-1"
                              d="M611.13,91.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H611.14a3.88,3.88,0,0,1-3.88-3.88V95.45A3.87,3.87,0,0,1,611.13,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="570" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M579.15,96.42H596.6a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H579.15a3.88,3.88,0,0,1-3.88-3.88V100.29A3.87,3.87,0,0,1,579.15,96.42Z"/>
                        <path className="cls-1"
                              d="M574.3,91.57h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H574.3a3.88,3.88,0,0,1-3.88-3.88V95.45A3.88,3.88,0,0,1,574.3,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="809" y="54" width="35" height="35" fill="transparent" />
                        <rect className="cls-1" x="813.71" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                        <path className="cls-1"
                              d="M812.74,54.76h27.14a3.88,3.88,0,0,1,3.88,3.88V85.76a3.87,3.87,0,0,1-3.87,3.87H812.74a3.88,3.88,0,0,1-3.88-3.88V58.63A3.88,3.88,0,0,1,812.74,54.76Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="809" y="91" width="35" height="72" fill="transparent" />
                        <path className="cls-1"
                              d="M812.74,91.57h27.14a3.88,3.88,0,0,1,3.88,3.88v63.94a3.88,3.88,0,0,1-3.88,3.88H812.74a3.87,3.87,0,0,1-3.87-3.87V95.45A3.88,3.88,0,0,1,812.74,91.57Z"/>
                        <path className="cls-1"
                              d="M817.59,96.42H835a3.87,3.87,0,0,1,3.87,3.87v54.25a3.88,3.88,0,0,1-3.88,3.88H817.59a3.88,3.88,0,0,1-3.88-3.88V100.29A3.88,3.88,0,0,1,817.59,96.42Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="772" y="202" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M780.76,206.86h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H780.76a3.87,3.87,0,0,1-3.87-3.87V210.74A3.88,3.88,0,0,1,780.76,206.86Z"/>
                        <rect className="cls-1" x="772.04" y="202.02" width="34.89" height="34.88" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="698" y="202" width="72" height="35" fill="transparent" />
                        <rect className="cls-1" x="703.22" y="206.86" width="62.03" height="25.19" rx="3.88"/>
                        <rect className="cls-1" x="698.37" y="202.02" width="71.73" height="34.88" rx="3.88"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="772" y="165" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M780.76,170h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H780.76a3.88,3.88,0,0,1-3.88-3.88V173.92A3.88,3.88,0,0,1,780.76,170Z"/>
                        <path className="cls-1"
                              d="M775.91,165.2h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H775.91a3.88,3.88,0,0,1-3.88-3.88V169.08A3.88,3.88,0,0,1,775.91,165.2Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="735" y="165" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M743.93,170h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.87,3.87,0,0,1-3.87,3.87H743.93a3.88,3.88,0,0,1-3.88-3.88V173.92A3.88,3.88,0,0,1,743.93,170Z"/>
                        <path className="cls-1"
                              d="M739.08,165.2h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H739.08a3.88,3.88,0,0,1-3.88-3.88V169.08A3.88,3.88,0,0,1,739.08,165.2Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="698" y="165" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M707.09,170h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H707.09a3.88,3.88,0,0,1-3.88-3.88V173.93A3.88,3.88,0,0,1,707.09,170Z"/>
                        <path className="cls-1"
                              d="M702.25,165.2h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H702.25a3.88,3.88,0,0,1-3.88-3.88V169.08A3.87,3.87,0,0,1,702.25,165.2Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="698" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M707.09,133.23h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H707.09a3.88,3.88,0,0,1-3.88-3.88V137.11A3.88,3.88,0,0,1,707.09,133.23Z"/>
                        <path className="cls-1"
                              d="M702.25,128.39h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H702.25a3.88,3.88,0,0,1-3.88-3.88V132.26A3.88,3.88,0,0,1,702.25,128.39Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="735" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M743.93,133.23h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H743.93a3.88,3.88,0,0,1-3.88-3.88V137.11A3.88,3.88,0,0,1,743.93,133.23Z"/>
                        <path className="cls-1"
                              d="M739.08,128.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H739.08a3.87,3.87,0,0,1-3.87-3.87V132.26A3.88,3.88,0,0,1,739.08,128.39Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="772" y="128" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M780.76,133.23h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.87,3.87,0,0,1-3.87,3.87H780.76a3.88,3.88,0,0,1-3.88-3.88V137.11A3.88,3.88,0,0,1,780.76,133.23Z"/>
                        <path className="cls-1"
                              d="M775.91,128.39h27.14a3.88,3.88,0,0,1,3.88,3.88v27.12a3.88,3.88,0,0,1-3.88,3.88H775.91a3.88,3.88,0,0,1-3.88-3.88V132.26A3.87,3.87,0,0,1,775.91,128.39Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="772" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M780.76,96.42h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.87,3.87,0,0,1-3.87,3.87H780.76a3.88,3.88,0,0,1-3.88-3.88V100.29A3.88,3.88,0,0,1,780.76,96.42Z"/>
                        <path className="cls-1"
                              d="M775.91,91.57h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H775.91a3.88,3.88,0,0,1-3.88-3.88V95.45A3.87,3.87,0,0,1,775.91,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="698" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M707.09,96.42h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.87,3.87,0,0,1-3.87,3.87H707.09a3.88,3.88,0,0,1-3.88-3.88V100.29A3.88,3.88,0,0,1,707.09,96.42Z"/>
                        <path className="cls-1"
                              d="M702.25,91.57h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H702.25a3.88,3.88,0,0,1-3.88-3.88V95.45A3.88,3.88,0,0,1,702.25,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="735" y="91" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M743.93,96.42h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H743.92a3.87,3.87,0,0,1-3.87-3.87V100.29A3.88,3.88,0,0,1,743.93,96.42Z"/>
                        <path className="cls-1"
                              d="M739.08,91.57h27.14a3.87,3.87,0,0,1,3.87,3.87v27.13a3.88,3.88,0,0,1-3.88,3.88H739.08a3.88,3.88,0,0,1-3.88-3.88V95.45A3.88,3.88,0,0,1,739.08,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="735" y="54" width="35" height="35" fill="transparent" />
                        <rect className="cls-1" x="740.05" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                        <path className="cls-1"
                              d="M739.08,54.76h27.14a3.88,3.88,0,0,1,3.88,3.88V85.76a3.87,3.87,0,0,1-3.87,3.87H739.08a3.88,3.88,0,0,1-3.88-3.88V58.63A3.87,3.87,0,0,1,739.08,54.76Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="772" y="54" width="35" height="35" fill="transparent" />
                        <rect className="cls-1" x="776.88" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                        <path className="cls-1"
                              d="M775.91,54.76h27.14a3.88,3.88,0,0,1,3.88,3.88V85.76a3.87,3.87,0,0,1-3.87,3.87H775.91A3.88,3.88,0,0,1,772,85.76V58.63A3.87,3.87,0,0,1,775.91,54.76Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="698" y="54" width="35" height="35" fill="transparent" />
                        <rect className="cls-1" x="703.22" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                        <path className="cls-1"
                              d="M702.25,54.76h27.14a3.88,3.88,0,0,1,3.88,3.88V85.76a3.87,3.87,0,0,1-3.87,3.87H702.25a3.88,3.88,0,0,1-3.88-3.88V58.63A3.87,3.87,0,0,1,702.25,54.76Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="0" y="91" width="52" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M9.22,96.42h34.9A3.87,3.87,0,0,1,48,100.29v17.44a3.88,3.88,0,0,1-3.88,3.88H9.22a3.88,3.88,0,0,1-3.88-3.88V100.29A3.87,3.87,0,0,1,9.22,96.42Z"/>
                        <path className="cls-1"
                              d="M4.37,91.57H49a3.88,3.88,0,0,1,3.88,3.88v27.13A3.88,3.88,0,0,1,49,126.45H4.38A3.88,3.88,0,0,1,.5,122.57V95.45A3.87,3.87,0,0,1,4.37,91.57Z"/>
                    </g>
                    <g className="g-key">
                        <rect id="hitbox-key-escape" className="hitbox" x="570" y="54" width="35" height="35" fill="transparent" />
                        <rect className="cls-1" x="575.27" y="59.6" width="25.2" height="25.19" rx="3.88"/>
                        <path className="cls-1"
                              d="M574.3,54.76h27.14a3.88,3.88,0,0,1,3.88,3.88V85.76a3.87,3.87,0,0,1-3.87,3.87H574.3a3.88,3.88,0,0,1-3.88-3.88V58.63A3.88,3.88,0,0,1,574.3,54.76Z"/>
                    </g>
                    <g className='key-cursor'>
                        <rect id="hitbox-key-escape" className="hitbox" x="135" y="202" width="238" height="35" fill="transparent" />
                        <rect id="rect-key-space" className="cls-1 key" x="134.26" y="202.02" width="238.44" height="34.88" rx="3.88"/>
                        <path id="path-key-space" className="cls-1 key"
                              d="M143,206.86H364a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H143a3.88,3.88,0,0,1-3.88-3.88V210.74A3.87,3.87,0,0,1,143,206.86Z"/>
                        <text className="cls-2" transform="translate(234.09 215.73)">spacebar</text>
                    </g>
                    <g id="ArrowLeft" className='key-cursor'>
                        <rect id="hitbox-key-escape" className="hitbox" x="570" y="202" width="35" height="35" fill="transparent" />
                        <rect id="rect-key-arrowleft" className="cls-1 key" x="570.43" y="202.02" width="34.89" height="34.88" rx="3.88"/>
                        <path id="path-key-arrowleft" className="cls-1 key"
                              d="M579.15,206.86H596.6a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H579.15a3.87,3.87,0,0,1-3.87-3.87V210.74A3.88,3.88,0,0,1,579.15,206.86Z"/>
                        <text className="cls-2" transform="translate(585.28 215.73)">&lt;</text>
                    </g>
                    <g id="Enter" className='key-cursor'>
                        <rect id="hitbox-key-escape" className="hitbox" x="495" y="90" width="55" height="35" fill="transparent" />
                        <rect id="hitbox-key-escape" className="hitbox" x="505" y="125" width="45" height="38" fill="transparent" />
                        <path id="rect-key-enter" className="cls-1 key"
                              d="M551,159.39V95.45a3.72,3.72,0,0,0-3.87-3.88H500.64a3.73,3.73,0,0,0-3.88,3.88v27.13a3.73,3.73,0,0,0,3.88,3.87h1.94a3.73,3.73,0,0,1,3.88,3.88v29.06a3.72,3.72,0,0,0,3.87,3.88h36.84A3.72,3.72,0,0,0,551,159.39Z"/>
                        <path id="path-key-enter" className="cls-1 key"
                              d="M542.32,96.42H505.49a3.72,3.72,0,0,0-3.88,3.87v17.44a3.73,3.73,0,0,0,3.88,3.88h1.94a3.71,3.71,0,0,1,3.87,3.87v29.07a3.72,3.72,0,0,0,3.88,3.87h27.14a3.72,3.72,0,0,0,3.88-3.87V100.29A3.72,3.72,0,0,0,542.32,96.42Z"/>
                        <text className="cls-2" transform="translate(514.21 105.3)">enter</text>
                    </g>
                    <g onClick={onEscapeClick} className='key-cursor'>
                        <rect id="hitbox-key-escape" className="hitbox" x="0" y="0" width="35" height="35" fill="transparent" />
                        <path id="rect-key-escape" className="cls-1 key"
                              d="M4.37.5H31.52a3.88,3.88,0,0,1,3.88,3.88V31.5a3.87,3.87,0,0,1-3.87,3.87H4.38A3.88,3.88,0,0,1,.5,31.5V4.37A3.87,3.87,0,0,1,4.37.5Z"/>
                        <path id="path-key-escape" className="cls-1 key"
                              d="M9.22,5.34H26.67a3.88,3.88,0,0,1,3.88,3.88V26.66a3.88,3.88,0,0,1-3.88,3.88H9.22a3.87,3.87,0,0,1-3.87-3.87V9.22A3.88,3.88,0,0,1,9.22,5.34Z"/>
                        <text className="cls-2" transform="translate(11.34 14.22)">esc</text>
                    </g>
                    <g id="NumPadEnter" className='key-cursor'>
                        <rect id="hitbox-key-escape" className="hitbox" x="810" y="165" width="35" height="72" fill="transparent" />
                        <path id="path-key-numpadenter" className="cls-1 key"
                              d="M817.59,170H835a3.87,3.87,0,0,1,3.87,3.87v54.25a3.88,3.88,0,0,1-3.88,3.88H817.59a3.87,3.87,0,0,1-3.87-3.87V173.93A3.88,3.88,0,0,1,817.59,170Z"/>
                        <rect id="rect-key-numpadenter" className="cls-1 key" x="808.87" y="165.2" width="34.89" height="71.7" rx="3.88"/>
                        <text className="cls-2" transform="translate(815.82 202.82)">enter</text>
                    </g>
                    <g id="ArrowRight" className='key-cursor'>
                        <rect id="hitbox-key-escape" className="hitbox" x="645" y="202" width="35" height="35" fill="transparent" />
                        <rect id="rect-key-arrowright" className="cls-1 key" x="644.09" y="202.02" width="34.89" height="34.88" rx="3.88"/>
                        <path id="path-key-arrowright" className="cls-1 key"
                              d="M652.82,206.86h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H652.81a3.87,3.87,0,0,1-3.87-3.87V210.74A3.88,3.88,0,0,1,652.82,206.86Z"/>
                        <text className="cls-2" transform="matrix(-1, 0, 0, 1, 663.44, 215.73)">&lt;</text>
                    </g>
                    <g id="ArrowUp" className='key-cursor'>
                        <rect id="hitbox-key-escape" className="hitbox" x="608" y="165" width="35" height="35" fill="transparent" />
                        <path id="rect-key-arrowup" className="cls-1 key"
                              d="M616,170h17.45a3.88,3.88,0,0,1,3.88,3.88v17.44a3.88,3.88,0,0,1-3.88,3.88H616a3.87,3.87,0,0,1-3.87-3.87V173.93A3.88,3.88,0,0,1,616,170Z"/>
                        <path id="path-key-arrowup" className="cls-1 key"
                              d="M611.14,165.2h27.14a3.88,3.88,0,0,1,3.88,3.88v27.13a3.88,3.88,0,0,1-3.88,3.88H611.13a3.87,3.87,0,0,1-3.87-3.87V169.08A3.88,3.88,0,0,1,611.14,165.2Z"/>
                        <text className="cls-2" transform="matrix(0, 1, 1, 0, 626.65, 175.04)">&lt;</text>
                    </g>
                    <g id="ArrowDown" className='key-cursor'>
                        <rect id="hitbox-key-escape" className="hitbox" x="608" y="202" width="35" height="35" fill="transparent" />
                        <path id="rect-key-arrowdown" className="cls-1 key"
                              d="M616,206.86h17.45a3.87,3.87,0,0,1,3.87,3.87v17.44a3.88,3.88,0,0,1-3.88,3.88H616a3.88,3.88,0,0,1-3.88-3.88V210.74A3.88,3.88,0,0,1,616,206.86Z"/>
                        <rect id="path-key-arrowdown" className="cls-1 key" x="607.26" y="202.02" width="34.89" height="34.88" rx="3.88"/>
                        <text className="cls-2" transform="translate(626.48 215.73) rotate(-90)">&lt;</text>
                    </g>
                    <g id="F1" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="75" y="0" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M80,.5h27.14A3.88,3.88,0,0,1,111,4.38V31.5a3.87,3.87,0,0,1-3.87,3.87H80A3.88,3.88,0,0,1,76.1,31.5V4.37A3.87,3.87,0,0,1,80,.5Z"/>
                        <path className="cls-1"
                              d="M84.83,5.34h17.45a3.87,3.87,0,0,1,3.87,3.87V26.66a3.88,3.88,0,0,1-3.88,3.88H84.82a3.88,3.88,0,0,1-3.88-3.88V9.22A3.88,3.88,0,0,1,84.83,5.34Z"/>
                    </g>
                    <g id="F2" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="113" y="0" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M121.66,5.34h17.45A3.88,3.88,0,0,1,143,9.22V26.66a3.88,3.88,0,0,1-3.88,3.88H121.66a3.87,3.87,0,0,1-3.87-3.87V9.22A3.88,3.88,0,0,1,121.66,5.34Z"/>
                        <path className="cls-1"
                              d="M116.81.5H144a3.88,3.88,0,0,1,3.88,3.88V31.5A3.87,3.87,0,0,1,144,35.38H116.81a3.88,3.88,0,0,1-3.88-3.88V4.37A3.87,3.87,0,0,1,116.81.5Z"/>
                    </g>
                    <g id="F3" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="149" y="0" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M153.64.5h27.14a3.88,3.88,0,0,1,3.88,3.88V31.5a3.88,3.88,0,0,1-3.88,3.88H153.64a3.87,3.87,0,0,1-3.87-3.87V4.37A3.87,3.87,0,0,1,153.64.5Z"/>
                        <path className="cls-1"
                              d="M158.49,5.34h17.45a3.88,3.88,0,0,1,3.88,3.88V26.66a3.88,3.88,0,0,1-3.88,3.88H158.49a3.87,3.87,0,0,1-3.87-3.87V9.22A3.88,3.88,0,0,1,158.49,5.34Z"/>
                    </g>
                    <g id="F4" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="186" y="0" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M190.47.5h27.14a3.88,3.88,0,0,1,3.88,3.88V31.5a3.88,3.88,0,0,1-3.88,3.88H190.48a3.88,3.88,0,0,1-3.88-3.88V4.37A3.87,3.87,0,0,1,190.47.5Z"/>
                        <path className="cls-1"
                              d="M195.32,5.34h17.45a3.88,3.88,0,0,1,3.88,3.88V26.66a3.88,3.88,0,0,1-3.88,3.88H195.32a3.87,3.87,0,0,1-3.87-3.87V9.22A3.88,3.88,0,0,1,195.32,5.34Z"/>
                    </g>
                    <g id="F5" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="241" y="0" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M249.6,5.34H267a3.87,3.87,0,0,1,3.87,3.87V26.66A3.88,3.88,0,0,1,267,30.53H249.6a3.88,3.88,0,0,1-3.88-3.88V9.22A3.88,3.88,0,0,1,249.6,5.34Z"/>
                        <path className="cls-1"
                              d="M244.75.5h27.14a3.88,3.88,0,0,1,3.88,3.88V31.5a3.87,3.87,0,0,1-3.87,3.87H244.75a3.88,3.88,0,0,1-3.88-3.88V4.38A3.88,3.88,0,0,1,244.75.5Z"/>
                    </g>
                    <g id="F6" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="277" y="0" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M281.58.5h27.14a3.88,3.88,0,0,1,3.88,3.88V31.5a3.87,3.87,0,0,1-3.87,3.87H281.58a3.87,3.87,0,0,1-3.87-3.87V4.37A3.87,3.87,0,0,1,281.58.5Z"/>
                        <path className="cls-1"
                              d="M286.43,5.34h17.45a3.88,3.88,0,0,1,3.88,3.88V26.66a3.88,3.88,0,0,1-3.88,3.88H286.43a3.87,3.87,0,0,1-3.87-3.87V9.22A3.88,3.88,0,0,1,286.43,5.34Z"/>
                    </g>
                    <g id="F7" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="314" y="0" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M323.27,5.34h17.45a3.88,3.88,0,0,1,3.88,3.88V26.66a3.88,3.88,0,0,1-3.88,3.88H323.26a3.87,3.87,0,0,1-3.87-3.87V9.22A3.88,3.88,0,0,1,323.27,5.34Z"/>
                        <path className="cls-1"
                              d="M318.42.5h27.14a3.88,3.88,0,0,1,3.88,3.88V31.5a3.87,3.87,0,0,1-3.87,3.87H318.42a3.88,3.88,0,0,1-3.88-3.88V4.37A3.87,3.87,0,0,1,318.42.5Z"/>
                    </g>
                    <g id="F8" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="350" y="0" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M360.1,5.34h17.45a3.88,3.88,0,0,1,3.88,3.88V26.66a3.88,3.88,0,0,1-3.88,3.88H360.1a3.87,3.87,0,0,1-3.87-3.87V9.22A3.88,3.88,0,0,1,360.1,5.34Z"/>
                        <path className="cls-1"
                              d="M355.25.5h27.14a3.88,3.88,0,0,1,3.88,3.88V31.5a3.87,3.87,0,0,1-3.87,3.87H355.25a3.88,3.88,0,0,1-3.88-3.88V4.37A3.87,3.87,0,0,1,355.25.5Z"/>
                    </g>
                    <g id="F9" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="405" y="0" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M414.38,5.34h17.45a3.87,3.87,0,0,1,3.87,3.87V26.66a3.88,3.88,0,0,1-3.88,3.88H414.37a3.88,3.88,0,0,1-3.88-3.88V9.22A3.88,3.88,0,0,1,414.38,5.34Z"/>
                        <path className="cls-1"
                              d="M409.53.5h27.14a3.88,3.88,0,0,1,3.88,3.88V31.5a3.87,3.87,0,0,1-3.87,3.87H409.53a3.88,3.88,0,0,1-3.88-3.88V4.37A3.87,3.87,0,0,1,409.53.5Z"/>
                    </g>
                    <g id="F10" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="442" y="0" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M446.36.5H473.5a3.88,3.88,0,0,1,3.88,3.88V31.5a3.87,3.87,0,0,1-3.87,3.87H446.36a3.88,3.88,0,0,1-3.88-3.88V4.37A3.87,3.87,0,0,1,446.36.5Z"/>
                        <rect className="cls-1" x="447.33" y="5.34" width="25.2" height="25.19" rx="3.88"/>
                    </g>
                    <g id="F11" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="479" y="0" width="35" height="35" fill="transparent" />
                        <rect className="cls-1" x="484.16" y="5.34" width="25.2" height="25.19" rx="3.88"/>
                        <path className="cls-1"
                              d="M483.19.5h27.14a3.88,3.88,0,0,1,3.88,3.88V31.5a3.87,3.87,0,0,1-3.87,3.87H483.19a3.88,3.88,0,0,1-3.88-3.88V4.37A3.87,3.87,0,0,1,483.19.5Z"/>
                    </g>
                    <g id="F12" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="516" y="0" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M524.87,5.34h17.45a3.88,3.88,0,0,1,3.88,3.88V26.66a3.88,3.88,0,0,1-3.88,3.88H524.87A3.87,3.87,0,0,1,521,26.66V9.22A3.88,3.88,0,0,1,524.87,5.34Z"/>
                        <path className="cls-1"
                              d="M520,.5h27.14A3.88,3.88,0,0,1,551,4.38V31.5a3.87,3.87,0,0,1-3.87,3.87H520a3.88,3.88,0,0,1-3.88-3.88V4.37A3.87,3.87,0,0,1,520,.5Z"/>
                    </g>
                    <g id="PrtScSysRq" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="570" y="0" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M574.3.5h27.14a3.88,3.88,0,0,1,3.88,3.88V31.5a3.87,3.87,0,0,1-3.87,3.87H574.3a3.88,3.88,0,0,1-3.88-3.88V4.37A3.87,3.87,0,0,1,574.3.5Z"/>
                        <path className="cls-1"
                              d="M579.15,5.34H596.6a3.88,3.88,0,0,1,3.88,3.88V26.66a3.87,3.87,0,0,1-3.87,3.87H579.15a3.88,3.88,0,0,1-3.88-3.88V9.22A3.88,3.88,0,0,1,579.15,5.34Z"/>
                    </g>
                    <g id="ScrLk" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="608" y="0" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M611.13.5h27.14a3.88,3.88,0,0,1,3.88,3.88V31.5a3.87,3.87,0,0,1-3.87,3.87H611.14a3.88,3.88,0,0,1-3.88-3.88V4.37A3.87,3.87,0,0,1,611.13.5Z"/>
                        <path className="cls-1"
                              d="M616,5.34h17.45a3.88,3.88,0,0,1,3.88,3.88V26.66a3.87,3.87,0,0,1-3.87,3.87H616a3.88,3.88,0,0,1-3.88-3.88V9.22A3.88,3.88,0,0,1,616,5.34Z"/>
                    </g>
                    <g id="PauseBreak" className='g-key'>
                        <rect id="hitbox-key-escape" className="hitbox" x="645" y="0" width="35" height="35" fill="transparent" />
                        <path className="cls-1"
                              d="M652.82,5.34h17.45a3.88,3.88,0,0,1,3.88,3.88V26.66a3.88,3.88,0,0,1-3.88,3.88H652.81a3.87,3.87,0,0,1-3.87-3.87V9.22A3.88,3.88,0,0,1,652.82,5.34Z"/>
                        <path className="cls-1"
                              d="M648,.5h27.14A3.87,3.87,0,0,1,679,4.37V31.5a3.88,3.88,0,0,1-3.88,3.88H648a3.87,3.87,0,0,1-3.87-3.87V4.38A3.88,3.88,0,0,1,648,.5Z"/>
                    </g>
                </g>
            </g>
        </svg>
    );
}