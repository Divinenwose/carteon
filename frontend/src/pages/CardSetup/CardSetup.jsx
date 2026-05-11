import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";

const CardSetup = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const quantity = location.state?.quantity || Number(localStorage.getItem("quantity"));
    const cardType = location.state?.cardType || "Gold";
    const reference = location.state?.reference;

    const [completedCards, setCompletedCards] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem(`completedCards_${reference}`)) || [];
        setCompletedCards(saved);
    }, [reference]);

    useEffect(() => {
        localStorage.setItem(`completedCards_${reference}`, JSON.stringify(completedCards));
    }, [completedCards, reference]);

    const handleSetupClick = (cardIndex) => {
        navigate("/profiledetails", {
            state: { cardIndex, reference }
        });
    };

    return (
        <section >
            <div className="flex justify-center px-4 my-30">
                <div className="w-full max-w-[700px]">

                    <h2 className="text-[24px] font-semibold text-left mb-2">
                        Set Up Your Cards
                    </h2>

                    <p className="text-gray-500 text-sm mb-4 text-left">
                        Configure a digital profile for each of your Carteon cards.
                    </p>

                    {/* PROGRESS */}
                    <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{completedCards.length} of {quantity} completed</span>
                    </div>

                    <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
                        <div
                            className="h-2 bg-[#0F1419] rounded-full transition-all"
                            style={{
                                width: `${(completedCards.length / quantity) * 100}%`
                            }}
                        />
                    </div>

                    {/* CARDS */}
                    <div className="flex flex-col gap-4">
                        {[...Array(quantity)].map((_, index) => {
                            const isCompleted = completedCards.includes(index);

                            return (
                                <div
                                    key={index}
                                    className="flex items-center justify-between bg-[#F5F5F5] p-4 rounded-lg"
                                >
                                    <div>
                                        <p className="font-medium">
                                            Card {index + 1} — {cardType}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {isCompleted ? "Completed" : "Not set up"}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => handleSetupClick(index)}
                                        disabled={isCompleted}
                                        className={`px-4 py-2 cursor-pointer rounded-md text-sm ${isCompleted
                                                ? "bg-green-500 text-white"
                                                : "bg-[#0F1419] text-white"
                                            }`}
                                    >
                                        {isCompleted ? "Completed" : "Set Up Profile"}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    );
};

export default CardSetup;