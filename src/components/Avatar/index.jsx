import PropTypes from 'prop-types';

const Avatar = ({ src, alt, size = 50, isRounded }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={size}
            height={size}
            style={{
                borderRadius: isRounded ? "50%" : "0",
                objectFit: "cover",
            }}
        />
    );
};
Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    size: PropTypes.number,
    isRounded: PropTypes.bool,
};

export default Avatar;
