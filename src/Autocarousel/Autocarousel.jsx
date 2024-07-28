import React from 'react'
import './Autocarousel.css'

function Autocarousel() {
    return (
        <div className="w-full animate-fade-in mt-24 flex flex-col items-center">
            <h3 className="text-3xl font-semibold text-center text-gray-900 drop-shadow-md mb-10">Nike Swift Signatures</h3>
            {/* Poster 1 */}
            <div className="w-full md:w-3/3 p-4 flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-2xl">
                        <img src="https://ik.imagekit.io/rxdxtxpigt/Revamp%20Internship%20Contest/Sample%20Product%20Posters/poster1.jpg?updatedAt=1722172825333" alt="shoes" className="w-auto h-auto max-w-full max-h-full object-contain" />
                    </div>

                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center">
                    <ul className="word-rotate-y text-center">
                        <li>
                            <span>"Unleash the Beast with Nike Sneaker"</span>
                        </li>
                        <li>
                            <span>"Athlete-approved running shoes."</span>
                        </li>
                        <li>
                            <span>"Nike Sneaker - New Standard Style."</span>
                        </li>
                        <li>
                            <span>"Casual, stylish everyday wear."</span>
                        </li>
                        <li>
                            <span>"Redefine the Steps - New Era of Style."</span>
                        </li>
                        <li>
                            <span>"Versatile, weatherproof boots."</span>
                        </li>
                        <li>
                            <span>"Unlock Your Potential with Nike Sneaker"</span>
                        </li>
                        <li>
                            <span>"Athlete-approved running shoes."</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Poster 2 */}
            <div className="w-full md:w-3/3 p-4 flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-2xl">
                        <img src="https://ik.imagekit.io/rxdxtxpigt/Revamp%20Internship%20Contest/Sample%20Product%20Posters/poster2.png?updatedAt=1722172868927" alt="shoes" className="w-auto h-auto max-w-full max-h-full object-contain" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center">
                    <ul className="word-rotate-y text-center">
                        <li>
                            <span>"Own the Style with Nike."
                            </span>
                        </li>
                        <li>
                            <span>"Stride with Nike Pride."
                            </span>
                        </li>
                        <li>
                            <span>"Elevate Your Game with Nike."
                            </span>
                        </li>
                        <li>
                            <span>"Redefine the Steps - New Era of Style."
                            </span>
                        </li>
                        <li>
                            <span>"Own the Style with Nike."</span>
                        </li>
                        <li>
                            <span>"Elevate Every Step."
                            </span>
                        </li>
                        <li>
                            <span>"New Definition with Nike."
                            </span>
                        </li>
                        <li>
                            <span>"Push Boundaries with Nike."
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Poster 3 */}
            <div className="w-full md:w-3/3 p-4 flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-2xl">
                        <img src="https://ik.imagekit.io/rxdxtxpigt/Revamp%20Internship%20Contest/Sample%20Product%20Posters/poster3.jpg?updatedAt=1722172891430" alt="shoes" className="w-auto h-auto max-w-full max-h-full object-contain" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center">
                    <ul className="word-rotate-y text-center">
                        <li>
                            <span>"Unleash the Beast with Nike."
                            </span>
                        </li>
                        <li>
                            <span>"Nike: Where Comfort Meets Style."
                            </span>
                        </li>
                        <li>
                            <span>"Break Limits, Set Trends."
                            </span>
                        </li>
                        <li>
                            <span>"Designed for the Bold."
                            </span>
                        </li>
                        <li>
                            <span>"Athletic Excellence Redefined."
                            </span>
                        </li>
                        <li>
                            <span>"Versatile, weatherproof boots."</span>
                        </li>
                        <li>
                            <span>"Nike: Forge Your Path."
                            </span>
                        </li>
                        <li>
                            <span>"Fast and Sharp with Nike."





                            </span>
                        </li>
                    </ul>
                </div>
            </div>



        </div>



    )
}

export default Autocarousel