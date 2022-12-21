import self from "../img/me.jpg"
import mock1 from "../img/scdsc.png"
import mock2 from "../img/writer2.png"
import mock3 from "../img/programer.png"
import mock4 from "../img/fix.png"
import mock5 from "../img/football.png"
import mock6 from "../img/mock4.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Pwit",
    lastName: "Phantura",
    initials: "Welcome", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Content Creator ⚽" ,
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🎼 ',
            text: 'Coldplay & Eminem'
        },
        {
            emoji: '🌎',
            text: "I'm come from thailand"
        },
        {
            emoji: "💼",
            text: "Writer on Shoes.Options"
        },
        {
            emoji: "📧",
            text: "ppstudio2000@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/pwit.phantura/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/p_pwit/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello everyone my name is Pwit . i work as a writer and technician at Shoes.Options. I am very fond of football. It's more than a sport for me. And I also want to convey different views of football for readers to follow.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'content creator', 'writer', 'bootstrap', 'goalkeeper', 'css', 'adobe photoshop'],
            exposedTo: ['nodejs', 'python', 'content creater']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'football',
            emoji: '⚽'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'travel',
            emoji: '🎑'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Athlete",
            title: "Athlete",

            // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock5
        },
        {
            title: "Writer",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Programmer",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Technician",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        
    ]
}