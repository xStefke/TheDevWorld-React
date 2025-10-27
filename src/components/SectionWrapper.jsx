export default function SectionWrapper({heading, children, id}) {
    return (
        <section className="p-[3.5rem]" id={id}>
            <h2 className="font-bebas text-[48px] lg:text-[64px] text-white text-center mb-12 ">{heading}</h2>
            {children}
        </section>
    );
}