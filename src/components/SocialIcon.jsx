export default function SocialIcon({href, children}) {
    return (
        <a
            href={href}
            className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-[#FFBD00] hover:text-black transition-all"
            target="_blank"
        >
            {children}
        </a>
    );
}