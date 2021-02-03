import { TimelineMax as Timeline, Power1, Power4, Power2 } from 'gsap';
// import { SplitText } from "gsap/SplitText";


const getDefaultTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    // const character = node.querySelector('.characterEntrance');
    const title = node.querySelector('h5');
    const email = node.querySelector('.email')

    timeline
        .from(email, 0.8, { autoAlpha: 0, x: 50, ease: Power1.easeOut }, '+=1')
        .staggerFrom(title, 0.8, { autoAlpha: 0, x: 50, ease: Power1.easeOut }, 0.125);

    return timeline;
}

const getContactTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    // const character = node.querySelector('.characterEntrance');
    const title = node.querySelector('h6');
    const pinwheel = node.querySelector('.pinwheel')

    timeline
        .from(pinwheel, { duration: 3, y: 800, ease: Power1.easeOut })
        .staggerFrom(title, 1, { autoAlpha: 0, x: 50, ease: Power2.easeOut }, 0.125);

    return timeline;
}

const getProjectTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const title = node.querySelector('h6');
    // var splitText = new SplitText(".projectParagraph", {type: 'words, lines, chars'})
    // const paragraph = node.querySelector('.projectParagraph')
    // lines = splitText.lines

    timeline
        // .staggerFrom(lines, 0.5, { opacity: 0, x:0, ease: Power4.easeOut }, 0.7)
        .staggerFrom(title, 1, { autoAlpha: 0, x: 50, ease: Power2.easeOut }, 0.125);

    return timeline;
}

const getHomeTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const name = node.querySelector('h5');
    // const character = node.querySelector('.characterEntrance');
    // console.log(character)

    timeline
        // .from(character, { duration: 0.5, autoAlpha: 0, x: 50, ease: Power1.easeOut })
        .from(name, { duration: 1, autoAlpha: 0, x: 5000, ease: Power2.easeOut }, 0.125);

    return timeline;
}

export const play = (pathname, node, appears) => {
    const delay = appears ? 0 : 0.5;
    let timeline


    window
        .loadPromise
        .then(() => {
            if (pathname === '/') timeline = getHomeTimeline(node, delay);
            else if (pathname === '/project') timeline = getProjectTimeline(node, delay)
            else if (pathname === '/contact') timeline = getContactTimeline(node, delay)
            else timeline = getDefaultTimeline(node, delay);

            timeline.play()
        })
}

const getDefaultExit = (node) => {
    const timeline = new Timeline({ paused: true });

    timeline.to(node, { duration: 5, y: '-100%', autoAlpha: 0, ease: Power1.easeOut });

    return timeline;
}

const getContactExit = (node) => {
    const timeline = new Timeline({ paused: true });
    const title = node.querySelector('h6');
    const pinwheel = node.querySelector('.pinwheel')

    timeline
        .to(pinwheel, { duration: 3, y: 800, ease: Power1.easeOut })
        .to(title, { duration: 1, autoAlpha: 0, x: 50, ease: Power2.easeOut });

    return timeline;
}

export const exit = (pathname, node) => {
    let timeline

    // if (pathname === '/') timeline = getHomeTimeline(node, delay);
    if (pathname === '/contact') timeline = getContactExit(node)
    else timeline = getDefaultExit(node);

    timeline.play();
}
