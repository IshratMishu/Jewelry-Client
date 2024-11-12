import { GiChessQueen } from "react-icons/gi";

const Logo = () => {
    return (
        <div className="flex items-center gap-1">
            <div>
                <GiChessQueen className="text-5xl text-[--secondary-color]" />
            </div>
            <div>
                <p className="text-2xl">MOICE</p>
                <p className="text-xs">J E W E L R Y</p>
            </div>
        </div>
    );
};

export default Logo;