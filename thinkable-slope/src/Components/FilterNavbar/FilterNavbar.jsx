
import styles from "./FilterNavbar.module.css"
import { ChevronDownIcon } from "@chakra-ui/icons"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Image
  } from '@chakra-ui/react'

const FilterNavbar = ({Sidebar}) => {
    return (
        <>
            <div className={styles.FilterNavbar_main_div}>
                <div className={styles.Filter_Buttn_div}>
                    <button onClick={Sidebar}><ChevronDownIcon />Show filter</button>
                </div>
                <div className={styles.Sort_Button_div}>
                    <p>(144 items)</p>

                    <Menu className={styles.menu}>
                        <MenuButton borderRadius='50px' className={styles.Sort_Button} as={Button} rightIcon={<ChevronDownIcon />}>
                            Sort By
                        </MenuButton>
                        <MenuList style={{width:"20px"}}>
                            <MenuItem minH='48px'>                                
                                <span>Featured</span>
                            </MenuItem>
                            <MenuItem minH='40px'>                                
                                <span>Best Sellers</span>
                            </MenuItem>
                            <MenuItem minH='40px'>                                
                                <span>New Arrivals</span>
                            </MenuItem>
                            <MenuItem minH='40px'>                                
                                <span>Price High to Low</span>
                            </MenuItem>
                            <MenuItem minH='40px'>                                
                                <span>Price High to Low</span>
                            </MenuItem>
                        </MenuList>
                    </Menu>



                    
                </div>
            </div>
        </>
    )
}

export default FilterNavbar