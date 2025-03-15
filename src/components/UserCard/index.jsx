const UserCard = ({ name, age, isVerified }) => {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
            }}
        >
            <h3>{name}</h3>
            <p>Tuổi: {age}</p>
            <p>Trạng thái: {isVerified ? "Đã xác minh" : "Chưa xác minh"}</p>
        </div>
    );
};

export default UserCard;
