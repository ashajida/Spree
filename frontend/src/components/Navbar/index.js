import {
    Header, 
    Nav, 
    Links, 
    NavLink, 
    NavBtn, 
    Logo, 
    LogoWrapper,
    NavContainer, 
    Icon,
    Quantity,
    NavItemsWrapper,
    ContentWrapper
 } from './NavbarElements';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdShoppingCart } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";

const Navbar = function() {

    const [ click, setClick ] = useState(true);

    const handleClick = function() {
        setClick(!click);
    }

    const handleClickMobileBtn = function() {
        if(click === false) {
            setClick(!click);
        }
    }

    let cartQuantity= useSelector(state => state.cart.count);

    return(
        <Header>
             <NavContainer click>
                 <ContentWrapper>
                <Nav>
                    <LogoWrapper>
                        <NavItemsWrapper>
                            <NavBtn onClick={handleClick}>
                                { click ? <FiMenu /> : <FiX />}
                            </NavBtn>
                            <NavLink to="/" onClick={handleClickMobileBtn} logo>
                                <Logo>
                                    <GiShoppingBag />Spree
                                </Logo>
                            </NavLink>
                        </NavItemsWrapper>
                        <NavItemsWrapper mobile>
                            <NavLink  onClick={handleClickMobileBtn} to="/cart" mobile><Icon>< MdShoppingCart /><Quantity>{cartQuantity}</Quantity></Icon></NavLink >
                        </NavItemsWrapper>
                    </LogoWrapper>
                    <Links clickEvent={click}>
                        <NavLink onClick={handleClick} to="/">Home</NavLink >
                        <NavLink  onClick={handleClick} to="/shop">Shop</NavLink >
                        <NavLink  onClick={handleClick} to="/shop">Sale</NavLink >
                        <NavLink  onClick={handleClick} to="/cart"><Icon>< MdShoppingCart /><Quantity>{cartQuantity}</Quantity></Icon></NavLink >
                    </Links>
                </Nav>
            </ContentWrapper>
            </NavContainer>
        </Header>
    );
}

export default Navbar;