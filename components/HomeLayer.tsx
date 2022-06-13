import discord from '../assets/discord.png';
import Link from 'next/link';
import Image from 'next/image';
export const HomeLayer = ({ }) => {
    let text1 = "It is by restricting the flow of ideas, that the minds of people can be directed toward a particular purpose and remain oblivious to any opposing views. If ideas are removed from the public square, then a particular idea (good or bad) is left unchallenged. It is from the written word, that the fertile minds of the people, people that hunger for the truth, are watered. These cultivated minds become strong challengers, who are equipped of mind and tongue to oppose any rigid ideology."
    let text2 = "Some leaders fear these challengers as they are the bearer of truths that undermine their ideologies, and threaten their control over the vox populi (public sentiment). To stop this free flow of information and marketplace of ideas is to keep the governors of the day free of opposition, and therefore pave the path to tyranny. The burning and censorship of the written word is not a prediction, it is a recount of historical events, it is still happening today, it is the reason we have built Alexandria."
    let text3 = "Join the community building the world's first immutable library"
    return (
        <div>

            <h1 className="title">Project Alexandria</h1>
            <h2 className="motto">veritas per libertarem</h2>
            <div className="description-space">
                <p className="description">{text1}</p>
            </div>
            <div className="description-space">
                <p className="description">{text2}</p>
            </div>
            <div className="description-space">
                <h1 className="socials">{text3}</h1>
            </div>
            <div className="discord-logo">
                <Link href="#">
                    <Image
                        src={discord}
                        alt="discord logo"

                    />
                </Link>
            </div>
        </div>
    );
};