import HeaderComponent from "../components/header/Header"
import React from 'react';
import VirtualSearch from '../components/virtual/Virtual';
import VirtualFilter from "../components/virtualFilter/VirtualFilter";
const MarketPlace = () => {
    return (<>
        <div style={{
            background: 'rgba(165, 162, 153, 0.1)',
        }}>
            <div>
                <HeaderComponent />
                <div className="contant">
                    <div>
                        <VirtualSearch />
                    </div>
                    <div>
                        <VirtualFilter />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default MarketPlace;