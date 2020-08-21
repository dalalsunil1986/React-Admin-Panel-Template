import React from 'react'
import Menu from "../menu/Menu"
import SideBar from "../sidebar/SideBar"
import Footer from "../footer/Footer"

const Base = ({ showSidebar = true, showMenu = true, showFooter = true, children }) => {
    return (
        <div>
            {
                showSidebar && (
                    <SideBar />
                )
            }

            {
                showMenu && (
                    showSidebar ? <div style={{
                        marginLeft: 200
                    }}>
                        <Menu />
                    </div> : <Menu />
                )
            }

            {
                // children
                showSidebar ? <div style={{
                    marginLeft: 230
                }}>
                    {children}
                </div> : <div>
                    {children}
                </div>
            }

            {
                showFooter && (
                    showSidebar ? <div style={{
                        marginLeft: 230
                    }}>
                        <Footer />
                    </div> : <Footer />
                )
            }
        </div>
    )
}

export default Base
