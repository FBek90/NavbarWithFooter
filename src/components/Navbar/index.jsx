import 'antd/dist/antd.css'
import { navItems } from '../../utils/navbar'
import {
  MenuItem,
  Item,
  SubItem,
  Container,
  Icon,
  Button,
  MenuItemGroup,
} from './style'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Container>
      <Link to='/'>
        <Container.Brand>
          <Icon.Logo />
          Houzing
        </Container.Brand>
      </Link>
      <Container.Navbar>
        <MenuItem mode='horizontal'>
          {navItems.map(({ title, child, id }) => {
            return (
              <SubItem title={title}>
                <MenuItemGroup>
                  {child.map(({ path, title }) => {
                    return (
                      <Item>
                        <Link key={id} to={path}></Link>
                        {title}
                      </Item>
                    )
                  })}
                </MenuItemGroup>
              </SubItem>
            )
          })}
          <Item>
            <Link to='/contact'> </Link>
            CONTACT
          </Item>
        </MenuItem>
      </Container.Navbar>
      <Container.LogIn>
        <Container.Icon>
          <Icon.Phone /> +99890-7778899
        </Container.Icon>
        <Container.Icon>
          <Icon.User /> Login/Register
        </Container.Icon>
        <Button>
          <Icon.Plus />
          Create Listing
        </Button>
      </Container.LogIn>
    </Container>
  )
}
