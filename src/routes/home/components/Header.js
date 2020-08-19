import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

function Header () {
    const CustomButton = withStyles({
        root: {
          color: 'white'
        }
    })(Button)
    const onLoginClick = (e) => {
        e.preventDefault();
        console.log('login clicked')
    }
    return(
        <div style={{backgroundColor: '#124191', width: '100%', height: '60px'}}>
            <div style={{display: 'flex', flexDirection: 'row', color: 'white', justifyContent: 'space-between', padding: '15px 20px 0 20px'}}>
                <div style={{fontSize: '18px', fontWeight: '700', paddingTop: '5px'}}>
                    Friday Reports
                </div>
                <div>
                    <CustomButton root={{color: 'white'}} disableRipple onClick={onLoginClick}>The BOSS?</CustomButton>
                </div>
            </div>    
        </div>
    )
}
export default Header