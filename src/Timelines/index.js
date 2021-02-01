import { TimelineMax as Timeline, Power1 } from 'gsap';

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

const getHomeTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const name = node.querySelector('h4');
    const character = node.querySelector('.characterEntrance');

    timeline
        .from(character, { duration: 0.8, autoAlpha: 0, x: 50, ease: Power1.easeOut }, '+=1')
        .staggerFrom(name, 0.2, { autoAlpha: 0, x: 50, ease: Power1.easeOut }, 0.125);

    return timeline;
}

export const play = (pathname, node, appears) => {
    const delay = appears ? 0 : 0.5;
    let timeline


    window
        .loadPromise
        .then(() => {
            if (pathname === '/') timeline = getHomeTimeline(node, delay);
            else timeline = getDefaultTimeline(node, delay);

            timeline.play()
        })
}

export const exit = (node) => {
    const timeline = new Timeline({ paused: true });

    timeline.to(node, { duration: 0.15, autoAlpha: 0, ease: Power1.easeOut });
    timeline.play();
}
