import React, {useContext} from 'react';

const styles = {
    loader: {
        display: 'flex',
        justifyContent: 'center',
        margin: '5rem'
    }
};

export default () => <div style={styles.loader}>
    <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>


