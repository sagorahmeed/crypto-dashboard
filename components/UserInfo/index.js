import Image from "next/image"

const UserInfo = ({userName,userDesc,userImage}) => {
    return (
        <div>
            <div className="py-16 text-center">
                <div className="flex justify-center">
                    <Image
                        src={userImage}
                        width="60"
                        height="60"
                        objectFit="cover"
                        className="rounded-xl mx-auto"
                    />
                </div>
                <h4 className="text-light-gray mt-3">{userName}</h4>
                <p className="text-gray text-[12px] mt-1">{userDesc}</p>
            </div>
        </div>
    )
}

export default UserInfo