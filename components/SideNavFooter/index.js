
const SideNavFooter = ({ footerHeading, footerInfo, footeCredit, footerDes }) => {
    return (
        <div className="flex items-end  h-[55vh]">
            <div className="ml-4">
                <h5 className="text-light-gray">{footerHeading}</h5>
                <h5 className="text-white mt-3">
                    {footerInfo} <span className="text-light-gray text-[12px]">{footeCredit}</span>
                </h5>
                <p className="text-light-gray mt-5 text-[12px]">{footerDes}</p>
            </div>
        </div>
    )
}

export default SideNavFooter