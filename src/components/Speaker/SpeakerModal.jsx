export default function SpeakerModal({isOpen, onClose, speaker}) {
    if (!isOpen || !speaker) return null;

    return (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 ">
            <div
                className="bg-[#0B0016] text-white p-6 rounded-2xl max-w-sm w-[90%] relative text-center animate-fadeIn ">

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-2xl hover:text-[#FFBD00]"
                >
                    &times;
                </button>

                {/* Speaker content */}
                <img
                    src={speaker.img}
                    alt={speaker.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />

                <h2 className="text-[#FFBD00] text-2xl mb-1">{speaker.name}</h2>
                <p className="text-[#91887E] mb-3">{speaker.role.en}</p>
                <p className="text-sm text-gray-300 px-2">{speaker.bio.en}</p>


            </div>
        </div>
    );
}
