import HeartFillIcon from "remixicon-react/HeartFillIcon";

export default function AboutElement() {
    return (
        <section className="px-6 lg:px-48 pt-12" id="about">
            <h2 className="text-left text-3xl font-semibold font-lexend text-pink-600">About Me</h2>
            <div className="mt-4">
                <p className="text-sm lg:text-lg text-justify leading-relaxed text-gray-600 font-inter">Hello, I'm Tomy Wibowo</p>
                <p className="mt-3 text-sm lg:text-lg text-justify leading-relaxed text-gray-600 font-inter">
                    I am a Fullstack Web & Android Developer with 4+ years of experience in the professional industry. I am currently 21 years old from
                    Purbalingga, Indonesia.
                </p>
                <p className="mt-3 text-sm lg:text-lg text-justify leading-relaxed text-gray-600 font-inter">
                    The reason I like technology, especially in the field of programming, is that with programming I can make my ideas come true. Apart from
                    that, I also like solving problems and I feel challenged by that.
                </p>
                <p className="mt-3 text-sm lg:text-lg text-justify leading-relaxed text-gray-600 font-inter">
                    Apart from programming, I also like reading books and writing. Because reading can increase my knowledge regarding things outside of
                    programming, lately I like writing a diary because by writing a diary I can immortalize moments and I can also carry out daily evaluations.
                </p>
                <p className="mt-3 text-sm lg:text-lg text-justify leading-relaxed text-gray-600 font-inter">
                    Currently I am also active as an external teacher for extracurriculars programming at SMK Negeri 1 Rembang and SMP Negeri 1 Karangmoncol.
                </p>
                <p className="mt-3 text-sm lg:text-lg text-justify leading-relaxed text-gray-600 font-inter flex items-center gap-x-1">
                    I Love Linux{" "}
                    <span>
                        <HeartFillIcon className="text-pink-600" />
                    </span>
                </p>
            </div>
        </section>
    );
}
