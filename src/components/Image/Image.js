import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import imgs from '~/assets/imgs';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, fallBack: customFallback = imgs.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            src={fallback || src}
            className={classNames(styles.wrapper, className)}
            ref={ref}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
};

export default Image;
