import { GiChessQueen } from "react-icons/gi";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to='/'>
                <div className="flex items-center gap-1">
                    <div>
                        <GiChessQueen className="text-5xl text-[--secondary-color]" />
                    </div>
                    <div>
                        <p className="md:text-2xl text-xl">MOICE</p>
                        <p className="text-xs">J E W E L R Y</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Logo;