import { TimelineMax as Timeline, Power1 } from 'gsap';

const getDefaultTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const character = node.querySelector('.character');
    //   const contentInner = node.querySelector('.content--inner');

    timeline
        .from(character, 1.5, { duration: 2, display: 'none', y: 200, delay }) 
        .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    // .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
    // .from(contentInner, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });

    return timeline;
}

const getHomeTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const name = node.querySelector('h6');
    const character = node.querySelector('.character');

    timeline
        .from(character, 1.5, { duration: 1, display: 'none', y: 200, delay })
        // .from(fox, 0.1, { display: 'none', autoAlpha: 0, delay })
        .staggerFrom(name, 0.375, { autoAlpha: 0, x: 50, ease: Power1.easeOut }, 0.125);

    return timeline;
}

export const play = (pathname, node, appears) => {
    const delay = appears ? 0 : 0.5;
    let timeline

    if (pathname === '/')
        timeline = getHomeTimeline(node, delay);
    else
        timeline = getDefaultTimeline(node, delay);

    window
        .loadPromise
        // .then(() => requestAnimationFrame(() => timeline.play()))
        .then(() => timeline.play())
}

export const exit = (node) => {
    const timeline = new Timeline({ paused: true });

    timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
    timeline.play();
}
