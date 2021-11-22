const options = {
    type: {
        primary: 'primary',
        secondary: 'secondary',
        success: 'success',
        warning: 'warning',
        danger: 'danger',
        info: 'info',
        default: 'default'
    },
    style: {
        fill: 'fill',
        outline: 'outline',
        link: 'link',
        text: 'text',
    },
    shape: {
        oval: 'oval',
        round: 'round',
        square: 'square',
        rounded: 'rounded',
        rightAngle: 'right-angle'
    },
    size: {
        small: 'small',
        mid: 'mid',
        normal: 'normal',
        big: 'big',
        large: 'large',
        extraLarge: 'extra-large'
    },
    hover: {
        lift: 'lift',
        flat: 'flat'
    },
    length: {
        wide: 'wide',
        full: 'full',
        normal: 'normal',
        fat: 'fat',
        superFat: 'super-fat'
    },
    nativeTyp:{
        submit: 'submit',
        reset: 'reset',
        button: 'button'
    }
}

export default options;
// type: [primary], secondary, success, warning, danger, info, default
// style: [fill], outline, link, text
// shape: oval, round, square, rounded, [right-angle]
// size: small, mid, [normal], big, large, extra-large
// hover: lift, [flat]
// length: wide, narrow, [normal], fat, supper-fat
// active: [true], false