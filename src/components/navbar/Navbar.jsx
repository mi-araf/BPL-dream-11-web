import React from 'react';
import dollarImg from "../../../asset/dollar_1.png";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm max-w-10/12 mx-auto">
                <div className="flex-1">
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                    <img src="../../../asset/logo.png" alt="" className='h-12' />
                </div>
                <div className="flex-none">
                    <button className="flex justify-between items-center gap-2 font-semibold text-[16px]">
                        <span>0</span> Coins<img src={dollarImg} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;