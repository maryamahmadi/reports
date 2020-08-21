import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
    return(
        <div style={{backgroundColor: '#124191', width: '100%', height: '60px'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '15px 20px 0 20px'}}>
                <div style={{fontSize: '18px', fontWeight: '700', paddingTop: '5px'}}>
                    <Link style={{color: 'white', textDecoration: 'none'}} to='/'>
                        Friday Reports
                    </Link>
                </div>
                <div style={{fontSize: '18px', fontWeight: '700', paddingTop: '5px'}}>
                    <Link style={{color: 'white', textDecoration: 'none'}} to='/boss'>
                        Boss View
                    </Link>
                </div>
            </div>    
        </div>
    )
}
export default Header