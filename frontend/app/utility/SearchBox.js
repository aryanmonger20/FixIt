import React from 'react';
import {TextField, IconButton} from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search';
const SearchBox = ({isOpen, onClick}) => {
    const baseStyles = {
        open: {
            width: 300,
        },
        closed: {
            width: 0,
        },
        smallIcon: {
            width: 30,
            height: 30
        },
        icon: {
            width: 40,
            height: 40,
            padding: 5,
            top: 10
        },
        frame: {
            border: 'solid 1px black',
            borderRadius: 5
        }
    };
const textStyle = isOpen ? baseStyles.open : baseStyles.closed;
const divStyle = Object.assign({}, textStyle, baseStyles.frame);
    divStyle.width += baseStyles.icon.width + 5;
return (
        <div style={divStyle}>
            <IconButton iconStyle={baseStyles.smallIcon} style={baseStyles.icon} onClick={() => onClick()}>
                <SearchIcon />
            </IconButton>
            <TextField name='search' style={textStyle}/>
        </div>
    );
};
export  default SearchBox;