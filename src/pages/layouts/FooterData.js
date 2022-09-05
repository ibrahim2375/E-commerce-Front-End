import React from 'react'
//json data
import footer_data from '../../json/footerData.json'
//animation framer motion
import { motion } from 'framer-motion'
function FooterData() {
    return (
        <div className="container d-flex  justify-content-start justify-content-lg-center align-items-start flex-wrap py-5" style={{ gap: '60px' }}>
            <div className="listDataSection">
                <h3>Contact</h3>
                <ul>
                    {footer_data.contact.map(contact =>
                    (<motion.li key={contact.id}
                        whileHover={{ scale: 1.2, originX: 0, cursor: 'pointer' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >{contact.title}</motion.li>))}
                </ul>
            </div>
            <div className="listDataSection">
                <h3>About</h3>
                <ul>
                    {footer_data.about.map(about =>
                    (<motion.li key={about.id}
                        whileHover={{ scale: 1.2, originX: 0, cursor: 'pointer' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >{about.title}</motion.li>))}
                </ul>
            </div>
            <div className="listDataSection">
                <h3>My Account</h3>
                <ul>
                    {footer_data['my-account'].map(account =>
                    (<motion.li key={account.id}
                        whileHover={{ scale: 1.2, originX: 0, cursor: 'pointer' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >{account.title}</motion.li>))}
                </ul>
            </div>
            <div className="listDataSection">
                <h3>Download Our App</h3>
                <ul>
                    {footer_data['download-our-app'].map(download =>
                    (<motion.li key={download.id}
                        whileHover={{ scale: 1.2, originX: 0, cursor: 'pointer' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >{download.title}</motion.li>))}
                </ul>
            </div>
        </div>
    )
}

export default FooterData