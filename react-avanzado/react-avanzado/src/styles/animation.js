import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
from {
  filter: blur(5px);
  opacity: 0;
}

to {
  filter: blur(0);
  opacity: 1;
}
`

const appearFromTopKeyFrames = (from, to) => {
  return keyframes`
    from {
      top: ${from};
    }

    to {
      top: ${to};
    }
  `
}

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${time} ${fadeInKeyframes} ${type};`

export const appearFromTop = ({
  time = '1s',
  easing = 'cubic-bezier(.18,.89,.32,1.28)',
  from,
  to
} = {}) => css`
  animation: ${time} ${appearFromTopKeyFrames(from, to)} ${easing}, ${time} ${fadeInKeyframes} ease;
`
