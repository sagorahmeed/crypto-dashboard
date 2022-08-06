import { Button } from "components/UI/Button"

const DashHeader = ({title,btnText}) => {
    return (
        <div>
            <div className="mt-8 sm:flex justify-between items-center">
                <h1 className=" font-manrope font-extrabold">
                {title}
                </h1>
                <div>
                    <Button variant='purple' className={'capitalize'}>{btnText}</Button>
                </div>
            </div>
        </div>
    )
}

export default DashHeader