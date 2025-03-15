const Avatar = ({ src, alt, size, isRounded }) => {
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

export default Avatar;
